import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  AlertIOS,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight, 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { List, ListItem } from 'react-native-elements'
import ModalWidget from '../widget/ModalWidget';

import api from '../api/index';

const { width, height } = Dimensions.get("window");

class MyScreen extends Component {
  constructor() {
    super();
    this.state = {
      loginModalVisible: false,
      payBindModalVisible: false,
      isPayBind: true,
      account: '',
      accountConfirm: '',
      accountFocus: false,
      accountConfirmFocus: false,
      errMsg: '',
      canCommit: false,
    };
  }

  componentDidMount() {
    if(this.props.isLoggedIn) {
      this.setState({loginModalVisible:true});
    }
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
  _getMyList() {
    const { navigate } = this.props.navigation;
    return [
      {
        title: '已兑换集分宝',
        icon: null,
        rightTitle: '了解集分宝',
        press: ()=>{navigate('JifenbaoHelp')},
      },
      {
        title: '我的订单',
        icon: require('../img/order.png'),
        rightTitle: null,
        press: ()=>{navigate('Order')},    
      },
      {
        title: '浏览足迹',
        icon: require('../img/browse.png'),
        rightTitle: '查看全部',  
        press: ()=>{navigate('Building',{title:'浏览足迹'})},  
      },
      {
        title: '好物合伙人',
        icon: require('../img/partner.png'),
        rightTitle: '一群伙伴，一个事业',   
        press: ()=>{navigate('Building',{title:'好物合伙人'})}, 
      },
      {
        title: '会员特权',
        icon: require('../img/vip.png'),
        rightTitle: '查看',    
        press: ()=>{navigate('Building',{title:'会员特权'})},
      },
    ]
  }

  // events
  _pointBtnOnPress = btn => {
    const { navigate } = this.props.navigation;    
    if(!this.state.isPayBind) {
      this._setPayBindModalVisible(true);
    } else {
      btn == 1 ? navigate('ConvertDetail') : navigate('Convert');
    }
  }
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
      AlertIOS.alert('绑定成功');
      this._setPayBindModalVisible(false);
    } else {
      this.setState({
        errMsg,
        canCommit
      })
    }
    
  }

  render() {
    const { navigate } = this.props.navigation;
    const { accountFocus, accountConfirmFocus, errMsg } = this.state;
  //   <View style={styles.status}>
  //   <StatusBar translucent backgroundColor="#FB354E" barStyle="default"/>
  // </View>
    return (
      <View style={styles.container}>
        
      <Image 
        source={require('../img/my-bg.png')}
        resizeMode={Image.resizeMode.cover}          
        style={{...StyleSheet.absoluteFillObject, width:null,height: width * 0.4,resizeMode:'cover'}}
      />
        <View style={styles.userInfo}>
          <View style={styles.userInfoTop}>
            <Image 
              source={{uri:'https://dn-mhke0kuv.qbox.me/5a2bbb2376409f7dff1c.png?imageView2/1/w/100/h/100/q/85/interlace/1'}}
              style={styles.avatar}
            />
            <View style={styles.userName}>
              <Text style={styles.userNameTxt}>Fini</Text>
              <Text style={styles.userIdTxt}>ID:1234567890</Text>
            </View>
        
          </View>
          <View style={styles.userInfoBottom}>
            <View style={styles.userInfoBottomStart}>
              <Text style={styles.pointTxt}>可兑换积分150,0000</Text>
            </View>
            <View style={styles.userInfoBottomEnd}>
              <TouchableOpacity style={styles.detailBtn} onPress={()=>{this._pointBtnOnPress(1)}}>
                <Text style={styles.detailBtnTxt}>积分明细</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.convertBtn} onPress={()=>{this._pointBtnOnPress(2)}}>
                <Text style={styles.convertBtnTxt}>立即兑换</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <List containerStyle={{marginTop: 0,width: '100%',borderTopWidth: 0,}} >
        {
          this._getMyList().map((item, i) => (
            <ListItem
              avatar={item.icon}
              key={i}
              title={item.title}
              rightTitle={item.rightTitle}
              rightIcon={<LineIcons  name={'arrow-right'} size={14} style={{color:'#898787',alignSelf:'center'}}/>}
              onPress={()=>{item.press()}}
              containerStyle={{borderBottomColor:'#F1F0F5',height:50,paddingTop:0,paddingBottom:0,flexDirection:'row',alignItems:'center'}}              
              avatarOverlayContainerStyle={{backgroundColor:'#fff'}}
              avatarStyle={{width:30,height:30}}
              titleStyle={{fontSize:14}}
              rightTitleStyle={{fontSize:12, color:i==3?'#FB354E':'#898787'}}
              wrapperStyle={{borderBottomColor:'#F1F0F5'}}
              chevronColor='#898787'
            />
          ))
        }
        </List>

        <ModalWidget 
          modalVisible={this.state.loginModalVisible} 
          onPressClose={()=>(this._setLoginModalVisible(false))}
          contentComponent={()=>(
            <View style={{width:'100%',flex: 1,flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
              <Text style={{marginTop:20}}>您好，请立即使用微信账号快捷登录</Text>
              <TouchableOpacity style={{backgroundColor:'#FB354E',width:'90%',height:40,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                <Text style={{color:'#fff',fontSize:12}}>立即登录</Text>
              </TouchableOpacity>
            </View>)}
          />

        <ModalWidget 
          modalVisible={this.state.payBindModalVisible} 
          onPressClose={()=>(this._setPayBindModalVisible(false))}
          contentComponent={()=>(
            <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
              <Image source={require('../img/alipay.png')} style={{width:60,height:60,}}/>
              <Text style={{marginTop:5}}>请先添加支付宝账号</Text>
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

      </View>
      
    );
  } 
};

function select(store) {
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
  }
};

export default connect(select)(MyScreen);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    // height: height,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  userInfo: {
    height: width * 0.4 - STATUSBAR_HEIGHT,
    backgroundColor: 'transparent',
    flexDirection:"column",
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  userInfoTop: {
    flexDirection:"row",
    alignItems: 'center',
    
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userName: {
  },
  userNameTxt: {
    color: '#fff',
  },
  userIdTxt: {
    color: '#fff',
    fontSize: 12,
  },
  userInfoBottom: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  userInfoBottomStart: {

  },
  pointTxt: {
    color: '#fff',
    fontSize: 12,
  },
  userInfoBottomEnd: {
    flexDirection:"row",
    alignItems: 'center',
    
  },
  detailBtn: {
    height: 24,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#ED7633',    
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#C9561B',
    marginRight: 8,
  },
  detailBtnTxt: {
    color: '#fff',
    fontSize: 12,    
  },
  convertBtn: {
    height: 24,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#ED5D1E',    
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  },
  convertBtnTxt: {
    color: '#fff',
    fontSize: 12,
  },
});