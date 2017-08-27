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
import DatePicker from 'react-native-datepicker'
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
class ConvertDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      data: [],
      loading: false,
      refreshing: false,
      startDate: '',
      endDate: '',
      today: today()
    };
  }

  componentDidMount() {
  }
  // functions
  
  // enents
  _textInputOnFocus = name => {
    this.setState({
      [name+'Focus']:true,
    });
  }
  _textInputOnBlur = name => {
    this.setState({[name+'Focus']:false});
  }
  _queryBtnOnPress = () => {
    
  }

  render() {
    const { navigate } = this.props.navigation;
    
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
            ListEmptyComponent={this.renderEmpty}
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
                  <View style={{paddingVertical:5,paddingTop:10,paddingRight:10,flexDirection:"row",alignItems:'center',justifyContent:'space-between',borderBottomColor:'#F1F2F4',borderBottomWidth:StyleSheet.hairlineWidth}}>
                    <Text style={{color:'#949596',fontSize:12,}}>变动时间:{item.createTime}</Text>
                  </View>
                  <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',}}>
                    <View style={{flex:1,flexDirection:"column",alignItems:'stretch',justifyContent:'flex-start',}}>
                      <Text style={{paddingTop:10,fontSize:14,color:'#6B6065'}}>流水号:{item.sn}</Text>                    
                      <Text style={{paddingVertical:10,fontSize:14,color:'#6B6065'}}>当前可兑换积分:{item.balance}</Text>
                      <Text style={{paddingBottom:10,fontSize:12,color:'#949596',}}>变动原因:{item.memo}</Text>
                    </View>
                    <View style={{paddingHorizontal:10}}>
                    <Text style={{fontSize:12,color:item.point>0?'#28bc06':'#f62f42'}}>{item.point>0?'+':'-'}{item.point}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
        </List>
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
            source={require('../img/query-bg.png')}
            style={{...StyleSheet.absoluteFillObject,top:Platform.OS=='ios'?0:-STATUSBAR_HEIGHT, zIndex:0,width:null,height:Platform.OS=='ios'?110:150,}}
          />
          <View style={{backgroundColor: '#259DFC',height:55,flexDirection:"row",alignItems:'flex-end',justifyContent:'space-between',paddingHorizontal:15}}>
            <DatePicker
              style={{width: 120,marginBottom:5}}
              date={this.state.startDate}
              mode="date"
              placeholder="选择开始日期"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate={this.state.today}
              confirmBtnText="确认"
              cancelBtnText="取消"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderColor:'#fff',
                  borderWidth: 0,
                  borderBottomWidth:StyleSheet.hairlineWidth,
                },
                placeholderText: {
                  color: '#CAE7FD'
                },
                dateText: {
                  color: '#fff'
                },
              }}
              onDateChange={(date) => {this.setState({startDate: date})}}
            />
            <DatePicker
              style={{width: 120,marginBottom:5}}
              date={this.state.endDate}
              mode="date"
              placeholder="选择结束日期"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2020-06-01"
              confirmBtnText="确认"
              cancelBtnText="取消"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderColor:'#fff',
                  borderWidth: 0,
                  borderBottomWidth:StyleSheet.hairlineWidth,
                },
                placeholderText: {
                  color: '#CAE7FD'
                },
                dateText: {
                  color: '#fff'
                },
              }}
              onDateChange={(date) => {this.setState({endDate: date})}}
            />
          </View>
          
          <TouchableOpacity style={{marginTop:12,flexDirection:"row",alignItems:'center',justifyContent:'center',}} onPress={()=>{this._query()}}>
            <View style={{width:68,height:68,backgroundColor: '#259DFC',borderRadius:34,flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:14,color:'#fff'}}>查询</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {
          this.state.data.length>0 && <View style={{height:20,paddingHorizontal:10,flexDirection:'row',alignItems:'flex-end',justifyContent:'center',borderColor: '#F1F1F6',borderTopWidth: 5,}}>
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
  renderEmpty = () => {
    if (this.state.loading) return null;
    return (
      <View
        style={{
          height: height - 110 - STATUSBAR_HEIGHT,
          backgroundColor:'#fff',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Image source={require('../img/no-record.png')} style={{marginTop:height*0.1}} />
        <Text style={{color:'#A19899',fontSize:12,marginTop:20}}>无记录</Text>
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
  _query = () => {
    this.setState({ page: 1 }, () => {
      this.requestList()
    })
  };
  async requestList() {
    const { page, startDate, endDate } = this.state
    this.setState({ loading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    try {
      let response = await fetch(api.pointList, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token':'oqRrbwAGpnXVtrqWOoOh_9MrVbjc',
        },
        body: JSON.stringify({
          pageNo: page,
          startTime: startDate,
          endTime: endDate,
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
function today() {
  let date = new Date()
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

function select(store) {
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
  }
};

export default connect(select)(ConvertDetailScreen);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  top: {
    // backgroundColor: '#259DFC',
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: 160,
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
});