import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  AlertIOS,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator   
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { List } from 'react-native-elements'

import api from '../api/index';

const { width, height } = Dimensions.get("window");
const tabs = [
  '待跟踪',
  '跟踪中',
  '待发放',
  '已发放',
  '无效',
  '全部',
];
const tips = {
  0: '订单提交后，非电商大促期，正常情况半小时之内，可以跟踪到哦',
  1: '订单已经跟踪到，收到商品后，商品没问题，确认收货就可以拿到奖励啦',
  2: '亲爱的, 这里的订单我们已经核实无误，进入发放流程，耐心等待哦',
  3: '亲爱的，积分已经成功发放，可以随时兑换集分宝哦',
  4: '订单未跟踪到，到微信公众号联系客服，人工审核!',
  5: '亲爱的，积分已经成功发放，可以随时兑换集分宝哦'
};
const orderText = {
  0: '待跟踪',
  1: '跟踪中',
  2: '待发放',
  3: '已发放',
  4: '无效'
};
const orderStatusColors = {
  0: '#28bc06',
  1: '#28bc06',
  2: '#28bc06',
  3: '#28bc06',
  4: '#f62f42'
};
class OrderScreen extends Component {
  
  constructor() {
    super();
    this.state = {
      tabActive: 0,
      page: 1,
      data: [],      
      loading: false,
      refreshing: false,
    };
  }

  componentDidMount() {
  }

  _tabOnPress = tabIndex => {
    this.setState({
      tabActive: tabIndex,
      data: []
    }, ()=>{this._refresh()})
  };

  render() {
    const { navigate } = this.props.navigation;
    const { tabActive } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
        {
          tabs.map((item, index) => (
            <TouchableHighlight 
              style={{...StyleSheet.flatten(styles.tabsItem),borderBottomColor:tabActive==index?'#FB354E':'#fff'}} 
              key={index} 
              onPress={()=>{this._tabOnPress(index)}}
              underlayColor='#fff'
              activeOpacity={0.8}
            >
              <Text style={{color:tabActive==index?'#FB354E':'#000',fontSize:12}}>{item}</Text>
           </TouchableHighlight>
          ))
        }
        </View>
        <View style={{height:30,backgroundColor:'#FCE39C',paddingHorizontal:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
          <Text numberOfLines={2} style={{fontSize:10,}}>提示:{tips[this.state.tabActive]}</Text>
        </View>
        <List style={{backgroundColor:'#F4F5F7',flexDirection:"column",alignItems:'stretch' ,justifyContent: 'flex-start',}}>
          <FlatList
            style={{}}
            data={this.state.data}
            // extraData={this.state}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            ListEmptyComponent={this.renderEmpty}
            getItemLayout={(data, index) => (
              {length: 60, offset: 60 * index, index}
            )}
            onEndReached={this._loadMore}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
            refreshing={this.state.refreshing}
            // onRefresh={this._refresh}
            // renderItem={this.renderItem}
            renderItem={({item}) => {
              switch (item.status) {
                case 0:
                case 4:
                  return (
                    <View style={{paddingLeft:10,backgroundColor:'#fff'}} id={item.id}>
                      <View style={{paddingVertical:5,borderBottomColor:'#F1F2F4',borderBottomWidth:StyleSheet.hairlineWidth}}>
                        <Text style={{color:'#949596',fontSize:12,}}>提交时间:{item.createTime}</Text>
                      </View>
                      <Text style={{paddingVertical:10,fontSize:14,}}>订单号:{item.orderSn}</Text>
                    </View>
                  )
                  break;
                case 1:
                case 2:
                case 3:
                  return (
                    <View style={{paddingLeft:10,backgroundColor:'#fff'}} id={item.id}>
                      <View style={{paddingVertical:5,paddingRight:10,borderBottomColor:'#F1F2F4',borderBottomWidth:StyleSheet.hairlineWidth,flexDirection:"row",alignItems:'center',justifyContent:'space-between',}}>
                        <Text style={{color:'#949596',fontSize:12,}}>提交时间:{item.createTime}</Text>
                        {this.state.tabActive==5&&<Text style={{color:orderStatusColors[item.status],fontSize:12,}}>{orderText[item.status]}</Text>}
                      </View>
                      <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',}}>
                        <View style={{flex:1,flexDirection:"column",alignItems:'stretch',justifyContent:'flex-start',}}>
                          <Text numberOfLines={1} style={{paddingTop:10,fontSize:14,}}>{item.productName}</Text>
                          <Text style={{paddingVertical:10,fontSize:12,color:'#6B6065'}}>订单号:{item.orderSn}</Text>
                          <Text style={{paddingBottom:10,fontSize:12,color:'#949596',}}>支付金额:￥{item.payAmount}</Text>
                        </View>
                        <View style={{paddingHorizontal:10}}>
                        <Text style={{fontSize:12,color:'#6B6065'}}>返积分:{item.point}</Text>
                        </View>
                      </View>
                    </View>
                  )
                  break;
              }
              
            }}
            />
        </List>
      </View>
      
    );
  } 
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          backgroundColor: "#F4F5F7",
          // marginLeft: "14%"
        }}
      />
    );
  };
  renderHeader = () => {
    return (
      <View style={{height:30,backgroundColor:'#FCE39C',paddingHorizontal:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Text numberOfLines={2} style={{fontSize:10,}}>提示:{tips[this.state.tabActive]}</Text>
      </View>
    )
  }    
  
  renderItem = item => {
    return (
      <View style={{height:40}} id={item.id}>
        <Text>{item.productTitle}</Text>
      </View>
    )
  }    
  
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 10,
          borderTopWidth: 1,
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
        <Image source={require('../img/no-order.png')} style={{marginTop:height*0.1}} />
        <Text style={{color:'#A19899',fontSize:12,marginTop:20}}>您还没有相关订单，快去<Text style={{color:'#FB354E',fontSize:12}}>首页</Text>逛逛吧</Text>
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
    // this.setState({ refreshing: true })
    this.setState({ page: 1 }, () => {
      this.requestList()
    })
  };

  async requestList() {
    const { page, tabActive } = this.state
    this.setState({ loading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    try {
      let response = await fetch(api.orderList, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token':'oqRrbwAGpnXVtrqWOoOh_9MrVbjc',
        },
        body: JSON.stringify({
          pageNo: page,
          status: tabActive==5?-1:tabActive,
          size: 10,
        })
      })
      let json = await response.json()
      let list = json.result.list;
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

export default connect(select)(OrderScreen);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F5F7',
    flex: 1,
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  tabs: {
    backgroundColor:'#fff',
    width: '100%',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabsItem: {
    flex: 1,
    height: 40,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  list: {

  }
});