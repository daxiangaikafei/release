import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  AlertIOS,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

import api from '../api/index';

const { width, height } = Dimensions.get("window");

class TimeLimitScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    this._refresh();
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image 
            source={require('../img/time-limit-banner.png')}
            style={{...StyleSheet.absoluteFillObject,width:null,height:null,resizeMode:'cover' }}
          />
        </View>
        <View style={styles.time}>
          <View style={styles.timeItem}>
            <Text style={styles.timeItemTxt}>昨日</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={this._timeActiveStyle('timeItemTxtStart')}>9:00</Text>
            <Text style={this._timeActiveStyle('timeItemTxtEnd')}>已经开始</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={styles.timeItemTxtStart}>13:00</Text>
            <Text style={styles.timeItemTxtEnd}>即将开始</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={styles.timeItemTxtStart}>19:00</Text>
            <Text style={styles.timeItemTxtEnd}>即将开始</Text>
          </View>
        </View>
        <ScrollView style={styles.couponList}>
        {
          this.state.loading && <View
            style={{
              paddingVertical: 10,
              borderTopWidth: 1,
              borderColor: "#F1F1F6",
            }}>
            <ActivityIndicator animating size="small" />
          </View>
        }
        {
          this.state.data.map((item,index)=>(
            <View style={styles.couponItem} key={index}>
              <View style={styles.couponItemTop}>
                <TouchableWithoutFeedback 
                  onPress={()=>{AlertIOS.alert(
                    '提示',
                    '领取成功')}}>
                  <View style={styles.couponItemStart}>
                    <Image source={require('../img/coupon-bg.png')}
                      style={StyleSheet.absoluteFill}
                    />
                    <Text style={styles.couponPrice}>{item.productCouponPrice}</Text>
                    <Text style={styles.couponTxt}>立即领取</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.couponItemCenter}>
                  <Text numberOfLines={2} style={styles.itemTitle}>{item.productTitle}</Text>
                  <View style={styles.itemPrice}>
                    <Text style={styles.priceTitile}>券后价:</Text>
                    <Text style={styles.price}>￥{item.productPriceDeductCoupon}.</Text>
                    <Text style={styles.priceFloat}>{item.productPriceFloat}</Text>
                  </View>
                  <Text style={styles.itemOldPrice}>原价:￥{item.productPrice}</Text>
                  {item.returnPoints && item.returnPoints >= 0 && <View style={styles.priceRebate}><Text style={styles.priceRebateTxt}>返积分{item.returnPoints}</Text></View>}
                </View>
                <View style={styles.couponItemEnd}>
                  <Image source={{uri:item.productImg}} style={StyleSheet.absoluteFill}/>
                </View>
              </View>
              <View style={styles.couponItemBottom}>
                <Text style={styles.recTitle}>推荐理由:</Text>
                <Text numberOfLines={1} style={styles.recContent}>{item.productPromoReason}</Text>
              </View>
            </View>
          ))
        }
        </ScrollView>
          
      </View>
      
    );
  } 
  _refresh = () => {
    this.requestList()
  };

  async requestList() {
    const { page } = this.state
    this.setState({ loading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    try {
      let response = await fetch(api.list, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page,
          size: 10,
        })
      })
      let json = await response.json()
      let list = json.result.map(item => {
        let prices = (item.productPriceDeductCoupon+'').split('.')
        item.productPriceDeductCoupon = prices[0]
        item.productPriceFloat = !prices[1] ? '00' : prices[1].length < 2 ? prices[1]+'0' : prices[1]
        //don't commit
        // if (!item.returnPoints | item.returnPoints <0) {
        //   item.returnPoints = 200
        // }
        return item
      })
      this.setState({
        data: page === 1 ? list : this.state.data.concat(list),
        loading: false,
        refreshing: false,
      })
    } catch (error) {
      console.error(error)
        this.setState({ loading: false, refreshing: false })
    }
  }

  _timeActiveStyle(styleName) {
    return {
      ...StyleSheet.flatten([styles[styleName]]),
      color: '#F5204C'
    }
  }
};

function select(store) {
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
  }
};

export default connect(select)(TimeLimitScreen);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'ios' ? 20 : 0,
    // height: height,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  status: {
    backgroundColor: '#fff', 
    height: STATUSBAR_HEIGHT,   
  },
  img: {
    width,
    height: width*0.4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  time: {
    height: 50,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timeItem: {
    width: '25%',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeItemTxt: {
    fontSize: 16,
    color: '#65656F',
  },
  timeItemTxtStart: {
    fontSize: 16,    
    color: '#65656F',
  },
  timeItemTxtEnd: {
    fontSize: 12,
    color: '#65656F',    
  },
  couponList: {
    width: '100%',
    backgroundColor: '#F2EBFC',
    padding: 10,
    paddingBottom: 30,
  },
  couponItem: {
    backgroundColor: '#fff',
    // height: 100,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingTop: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  couponItemTop: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponItemBottom: {
    width: '100%',
    height: 25,
    flexDirection:'row',
    alignItems: 'center',  
  },
  couponItemStart: {
    width: 87,
    height: 85,
    marginRight: 6,
    flexDirection:"column",    
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  couponItemCenter: {
    flex: 1,
    flexDirection:"column",    
  },
  couponItemEnd: {
    width: 60,
    height: 60
  },
  couponPrice:{
    backgroundColor: 'transparent',
    color: '#FEE94F',
    fontSize: 36,
    marginTop: 15
  },
  couponTxt:{
    backgroundColor: 'transparent',
    color: '#fff',
    height: 21
  },
  itemTitle: {
    fontSize : 12,
    height : 30,
    fontWeight : '200',
    color : '#000000',
    textAlign: 'left',
  },
  itemPrice: {
    flexDirection:'row', 
    alignItems: 'flex-end',    
    justifyContent: 'flex-start',
  },
  priceTitile: {
    fontSize: 14,
    color: '#F5204C',
  },
  price: {
    fontSize: 14,
    height: 16,    
    color: '#F5204C',
    fontWeight : '600',  
  },
  priceFloat: {
    fontSize: 12,
    height: 14,    
    color: '#F5204C',
    fontWeight : '600',  
  },
  priceRebate: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 3,
  },
  priceRebateTxt: {
    fontSize: 10,
    color: '#fd472b',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fd472b',
    borderRadius: 3,
    paddingHorizontal: 3,
  },
  itemOldPrice: {
    fontSize: 10,
    marginTop: 1,
    color: '#90909B',
  },
  recTitle: {
    fontSize: 10,    
    color: '#90909B',   
    marginRight: 5, 
  },
  recContent: {
    fontSize: 10,
    color: '#90909B',  
    flex: 1,  
  },
});