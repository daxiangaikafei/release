import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  AlertIOS,
  TextInput,
  FlatList,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  ActivityIndicator   
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import CommonStatusBar from '../widget/CommonStatusBar';
import { List } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalWidget from '../widget/ModalWidget';

import api from '../api/index';

const { width, height } = Dimensions.get("window");
const statusText = {
  0: '待兑换',
  1: '兑换失败',
  2: '成功',
};
const statusColors = {
  0: '#28bc06',
  1: '#f62f42',
  2: '#000'
};
class ConvertScreen extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      data: [],
      loading: false,
      refreshing: false,
      payBindModalVisible: false,
      account: '',
      accountConfirm: '',
      accountFocus: false,
      accountConfirmFocus: false,
      errMsg: '',
      canCommit: false,
      convertModalVisible: false,      
      convertPoint: '',
      convertPointFocus: false,
      convertErrMsg: '',
      canConvertCommit: false,
    
    };
  }

  componentDidMount() {
    // this._refresh();
  }
  // functions
  _setLoginModalVisible = visible => {
    this.setState({loginModalVisible: visible});
  }
  _setPayBindModalVisible = visible => {
    this.setState({payBindModalVisible: visible});
    !visible && this.setState({
      account: '',
      accountConfirm: '',
      errMsg: '',
      accountFocus: false,
      accountConfirmFocus: false,
    })
  }
  _setConvertModalVisible = visible => {
    this.setState({convertModalVisible: visible});
    !visible && this.setState({
      convertPoint: '',
      convertErrMsg: '',
      convertPointFocus: false,
    })
  }
  // enents
  _textInputOnFocus = name => {
    this.setState({
      [name+'Focus']:true,
      errMsg: ''
    });
  }
  _textInputOnBlur = name => {
    this.setState({[name+'Focus']:false});
  }
  _commitOnPress = () => {
    const { account, accountConfirm } = this.state;
    let errMsg = '',
        canCommit = false;
    if (account == '') {
      errMsg = '请输入支付宝账号';
    } else if (accountConfirm == '') {
      errMsg = '请再次输入支付宝账号';
    } else if (accountConfirm != account) {
      errMsg = '两次账号输入不一致';
    } else {
      canCommit = true;
    }

    if (canCommit) {
      this._setPayBindModalVisible(false);
    } else {
      this.setState({
        errMsg,
        canCommit
      })
    }
  }
  _convertCommitOnPress = () => {
    const { convertPoint } = this.state;
    let convertErrMsg = '',
        canConvertCommit = false;
    if (convertPoint == '') {
      convertErrMsg = '请输兑换积分额度';
    } else if (!/^\d+$/ig.test(convertPoint)) {
      convertErrMsg = '请输入正确的积分额度';
    } else if (convertPoint % 100 != 0) {
      convertErrMsg = '请输入100的整数倍';
    } else {
      canConvertCommit = true;
    }

    if (canConvertCommit) {
      this._setConvertModalVisible(false);
    } else {
      this.setState({
        convertErrMsg,
        canConvertCommit
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { 
      accountFocus, accountConfirmFocus, errMsg,
      convertPointFocus, convertErrMsg,
     } = this.state;
    
    return (
      <View style={styles.container}>
        
        <List style={{backgroundColor:'#fff',flexDirection:"column",alignItems:'stretch',justifyContent:'flex-start',}}>
          <FlatList
            data={this.state.data}
            // extraData={this.state}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            // ListEmptyComponent={this.renderEmpty}
            // initialNumToRender={10}
            getItemLayout={(data, index) => (
              {length: 86, offset: 86 * index, index}
            )}
            onEndReached={this._loadMore}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
            // refreshing={this.state.refreshing}
            // onRefresh={this._refresh}
            // renderItem={this.renderItem}
            renderItem={({item,index}) => (
                <View style={{paddingLeft:10,backgroundColor:'#fff'}} id={item.id}>
                  <View style={{paddingBottom:2,paddingTop:10,paddingRight:10,flexDirection:"row",alignItems:'center',justifyContent:'space-between',}}>
                    <Text style={{color:'#6B6065',fontSize:12,}}>兑换单号:{item.orderSn}</Text>
                    <Text style={{color:statusColors[1],fontSize:12,}}>{statusText[1]}</Text>
                  </View>
                  <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',}}>
                    <View style={{flex:1,flexDirection:"column",alignItems:'stretch',justifyContent:'flex-start',}}>
                      <Text style={{paddingVertical:10,fontSize:12,color:'#949596'}}>兑换账号:{item.orderSn}</Text>
                      <Text style={{paddingBottom:10,fontSize:12,color:'#949596',}}>{item.createTime}</Text>
                    </View>
                    <View style={{paddingHorizontal:10}}>
                    <Text style={{fontSize:12,color:'#6B6065'}}>兑换:{item.point}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
        </List>

        <ModalWidget 
          modalVisible={this.state.payBindModalVisible} 
          onPressClose={()=>(this._setPayBindModalVisible(false))}
          contentComponent={()=>(
            <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
              <Image source={require('../img/alipay.png')} style={{width:60,height:60,}}/>
              <Text style={{marginTop:5}}>修改支付宝账号</Text>
              <Text numberOfLines={2} style={{marginTop:5,fontSize:12,color:'#989696'}}>只有添加完账号之后才能兑换积分，建议直接打开支付宝，直接复制账号哦</Text>
              <View style={{width:'100%',paddingVertical:10}}>
                <TextInput 
                  style={{height:40,borderColor:accountFocus?'#27AAEB':'#BEBFC3',fontSize:14,borderWidth:StyleSheet.hairlineWidth,borderRadius:5,paddingHorizontal:10}}
                  onChangeText={(account) => this.setState({account})}
                  value={this.state.account}
                  placeholder="请输入支付宝账号"
                  onFocus={()=>{this._textInputOnFocus('account')}}
                  onBlur={()=>{this._textInputOnBlur('account')}}
                />
                <TextInput 
                  style={{height: 40, borderColor:accountConfirmFocus?'#27AAEB':'#BEBFC3',fontSize:14,borderWidth:StyleSheet.hairlineWidth,borderRadius:5,paddingHorizontal:10,marginTop:10}}
                  onChangeText={(accountConfirm) => this.setState({accountConfirm})}
                  value={this.state.accountConfirm}
                  placeholder="再次输入支付宝账号"   
                  onFocus={()=>{this._textInputOnFocus('accountConfirm')}}
                  onBlur={()=>{this._textInputOnBlur('accountConfirm')}}               
                />
              </View>
              {
                errMsg && (<View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Ionicons
                      name={'ios-alert-outline'}
                      size={14}
                      style={{color:'#FB354E', marginRight:5}}
                    />
                    <Text style={{color:'#FB354E',fontSize:12}}>{errMsg}</Text>
                  </View>)
              }
              <View style={{marginTop:10,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity 
                  style={{backgroundColor:'#fff',width:'42%',height:40,borderRadius:5,borderColor:'#FB354E',borderWidth:StyleSheet.hairlineWidth,flexDirection:'row',alignItems:'center',justifyContent:'center',}}
                  onPress={()=>(this._setPayBindModalVisible(false))}
                >
                  <Text style={{color:'#FB354E',fontSize:12}}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={{backgroundColor:'#FB354E',width:'42%',height:40,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'center',}}
                  onPress={()=>{this._commitOnPress()}}
                >
                  <Text style={{color:'#fff',fontSize:12}}>确定</Text>
                </TouchableOpacity>
              </View>
              
            </View>)}
          />

        <ModalWidget 
          modalVisible={this.state.convertModalVisible} 
          onPressClose={()=>(this._setConvertModalVisible(false))}
          contentComponent={()=>(
            <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
              <Image source={require('../img/jifenbao.png')} style={{width:60,height:60,borderRadius:30}}/>
              <Text style={{marginTop:5}}>兑换集分宝</Text>
              <Text numberOfLines={2} style={{marginTop:5,fontSize:12,color:'#989696'}}>100积分=100集分宝，积分只能兑换100的整数倍</Text>
              <View style={{width:'100%',paddingVertical:10}}>
                <TextInput 
                  style={{height:40,borderColor:convertPointFocus?'#27AAEB':'#BEBFC3',fontSize:14,borderWidth:StyleSheet.hairlineWidth,borderRadius:5,paddingHorizontal:10}}
                  onChangeText={(convertPoint) => this.setState({convertPoint})}
                  value={this.state.convertPoint}
                  placeholder="请输入兑换积分"
                  convertPoint='numeric'
                  onFocus={()=>{this._textInputOnFocus('convertPoint')}}
                  onBlur={()=>{this._textInputOnBlur('convertPoint')}}
                />
              </View>
              {
                convertErrMsg && (<View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Ionicons
                      name={'ios-alert-outline'}
                      size={14}
                      style={{color:'#FB354E', marginRight:5}}
                    />
                    <Text style={{color:'#FB354E',fontSize:12}}>{convertErrMsg}</Text>
                  </View>)
              }
              <View style={{marginTop:10,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity 
                  style={{backgroundColor:'#fff',width:'42%',height:40,borderRadius:5,borderColor:'#FB354E',borderWidth:StyleSheet.hairlineWidth,flexDirection:'row',alignItems:'center',justifyContent:'center',}}
                  onPress={()=>(this._setConvertModalVisible(false))}
                >
                  <Text style={{color:'#FB354E',fontSize:12}}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={{backgroundColor:'#FB354E',width:'42%',height:40,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'center',}}
                  onPress={()=>{this._convertCommitOnPress()}}
                >
                  <Text style={{color:'#fff',fontSize:12}}>确定</Text>
                </TouchableOpacity>
              </View>
              
            </View>)}
          />
      </View>
      
    );
  } 
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#F4F5F7",
          // marginLeft: "14%"
        }}
      />
    );
  };
  
  renderItem = item => {
    return (
      <View style={{height:40}} id={item.id}>
        <Text>{item.productTitle}</Text>
      </View>
    )
  }    
  
  renderHeader = () => {
    return (
      <View>
        <View style={styles.top}>
          <Image 
            source={require('../img/point-bg.png')}
            style={{position:'absolute',top:15}}
          />
          <Image 
            source={require('../img/convert-bg.png')}
            style={{...StyleSheet.absoluteFillObject,top:93,width:null}}
          />
          <View style={{flexDirection:"column",alignItems:'center',justifyContent:'flex-start',backgroundColor:'transparent',marginTop:35}}>
            <Text style={{color:'#fff',}}>积分</Text>
            <Text style={{color:'#fff',fontSize:20,marginTop:5,fontWeight:'600'}}>15500</Text>
          </View>
          <TouchableOpacity style={{marginTop:45,backgroundColor:'transparent'}} onPress={()=>{this._setConvertModalVisible(true)}}>
          <Text style={styles.convertBtnTxt}>兑换</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.changeAccount}>
          <Text style={{color:'#686F77',fontSize:12}}>支付宝账号:12341234@qbao.com</Text>
          <TouchableOpacity onPress={()=>{this._setPayBindModalVisible(true)}}>
            <Text style={styles.changeBtnTxt}>修改</Text>          
          </TouchableOpacity>
        </View>
        {
          this.state.data.length>0 && <View style={{height:20,paddingHorizontal:10,flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
            <View style={{borderColor:'#F4F5F7',position:'absolute',left:10,right:10,top:15, borderTopWidth:StyleSheet.hairlineWidth,}}></View>
            <Text style={{fontSize:10,backgroundColor:'#fff',color:'#B6BEC2',paddingHorizontal:10}}>兑换明细</Text>
          </View>
        }

      </View>
    )

  }
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 10,
          // borderTopWidth: 1,
          borderColor: "#F1F1F6",
        }}>
        <ActivityIndicator animating size="small" />
      </View>
    );
  };
  _loadMore = () => {
    if(!this.onEndReachedCalledDuringMomentum && !this.state.loading) {
      this.onEndReachedCalledDuringMomentum = true;
      this.setState({
        page: this.state.page + 1,
      }, () => {
        this.requestList()
      })
    }   
  };
  _refresh = () => {
    this.setState({ page: 1 }, () => {
      this.requestList()
    })
  };
  async requestList() {
    const { page, tabActive } = this.state
    this.setState({ loading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    try {
      let response = await fetch(api.convertList, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token':'oqRrbwAGpnXVtrqWOoOh_9MrVbjc',
        },
        body: JSON.stringify({
          pageNo: page,
          size: 10,
        })
      })
      let json = await response.json()
      let list = json.result;
      // console.warn('request',json.result.length)
      // list = []
      this.setState({
        // data: list,
        data: page === 1 ? list : this.state.data.concat(list),
        // data: page === 1 ? list : [...this.state.data, ...list],
        loading: false,
        refreshing: false,
      })
    } catch (error) {
      console.error(error)
        this.setState({ loading: false, refreshing: false })
    }
  }
};

function select(store) {
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
  }
};

export default connect(select)(ConvertScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  top: {
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 165,
  },
  convertBtnTxt: {
    fontSize: 14,
    color: '#fd472b',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fd472b',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  changeAccount: {
    height:40,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    borderColor:'#F4F5F7',
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderTopWidth:StyleSheet.hairlineWidth,
  },
  changeBtnTxt: {
    fontSize: 12,
    color: '#686F77',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#686F77',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});