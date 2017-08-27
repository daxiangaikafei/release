import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, StyleSheet, Image, Button, AlertIOS, Dimensions, StatusBar, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Svg from "react-native-svg";
import { StockLine } from 'react-native-pathjs-charts';

import api from '../api/index';

const { width, height } = Dimensions.get("window");
const platforms = [
  {img:require('../img/taobao.png'),url:'taobao.com'},
  {img:require('../img/jd.png'),url:'jd.com'},
  {img:require('../img/tmall.png'),url:'tmall.com'}
];
const platformsKeyMap = {
  '淘宝': 0,
  '京东': 1,
  '天猫': 2,
}
class DetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      product:{},
      isTrendCoverShow: false,
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.getProduct(params.id)
  }

  render() {
    // <StatusBar translucent={false} backgroundColor="rgba(255, 255, 255, .5)" barStyle="default"/>
    const { navigate } = this.props.navigation;
    const { product } = this.state;
    const platform = platforms[product.productPlatform?platformsKeyMap[product.productPlatform]:0];
    
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image 
            source={{uri:product.productImg}}
            style={{width: '100%', flex: 1, resizeMode:'cover'}}
          />
        </View>
          <View style={styles.itemInfo}>
            <Text numberOfLines={2} style={styles.itemTitle}>{product.productTitle}</Text>
            <View style={styles.itemPlatform}>
              <Image 
              source={platform.img}
              style={{width:10,height:10,marginRight:5}} />
              <Text style={{fontSize:10,color:'#A19899'}}>{platform.url}</Text>
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.price}>￥{product.productPrice}.</Text>
              <Text style={styles.priceFloat}>{product.productPriceFloat}</Text>            
            </View>           
            <Text style={styles.itemSold}>销量:{product.productSales}   评论:2358</Text>
            <View style={styles.itemSale}>
              <Text style={styles.itemSaleTxt}>优惠:</Text>
              {product.productCouponPrice && product.productCouponPrice > 0 && <Text style={styles.couponTxt}>券{product.productCouponPrice}元</Text>}
              <Text style={styles.baoyouTxt}>包邮</Text>
              {product.returnPoints && product.returnPoints >= 0 && <Text style={styles.priceRebateTxt}>返积分{product.returnPoints}</Text>}
            </View>
            <View style={styles.itemRecommend}>
              <Text style={styles.recTitle}>推荐理由:</Text>
              <Text numberOfLines={2} style={styles.recContent}>{product.productPromoReason}</Text>
            </View>
            <View style={styles.tip}>
              <Text style={styles.tipTitle}>提示:</Text>
              <View style={styles.tipContent}>
                <Text style={styles.tipTxt}>1、关注“我有好物”微信公众号</Text>
                <Text style={styles.tipTxt}>2、返积分进度咨询服务</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.trend} onPress={()=>{this.setState({isTrendCoverShow:true})}}>
              <View style={styles.trendStart}>
                <Image 
                source={require('../img/trend-up.png')}
                style={{width:20,height:20}} />
              </View>
              <View style={styles.trendEnd}>            
                <Text style={styles.trendTxt}>价格走势</Text>
              </View>
            </TouchableOpacity>
          </View>
        <TouchableOpacity  style={styles.blockBtn} onPress={()=>{}}>
            <Text style={styles.blockBtnTxt}>领券购买</Text>
        </TouchableOpacity>
        {
          this.state.isTrendCoverShow && (
            <TouchableWithoutFeedback onPress={()=>{this.setState({isTrendCoverShow:false})}}>
              <View style={styles.trendCover}>
                <TouchableWithoutFeedback onPress={()=>{return}}>
                  <View style={styles.trendContent}>
                    <Text style={styles.trendUnit}>单位(元)</Text>
                    <Text style={styles.lastestPrice}>582元</Text>
                  {
                    this.renderChart()
                  }
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.trendDismissBtn}>
                  <Text style={styles.trendDismissBtnTxt}>朕知道了</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>)
        }
      </View>
      
    );
  };
  
  renderChart() {
    let data = [
      [{
        "x": 0,
        "y": 277
      }, {
        "x": 1,
        "y": 384
      }, {
        "x": 2,
        "y": 471
      }, {
        "x": 3,
        "y": 334
      }, {
        "x": 4,
        "y": 582
      }],
      
    ]
    let options = {
      width: width-60,
      height: height*0.25,
      color: '#27AAEB',
      margin: {
        top: 20,
        left: 40,
        bottom: 20,
        right: 20
      },
      animate: {
        type: 'delayed',
        duration: 300
      },
      axisX: {
        showAxis: false,
        showLines: true,
        showLabels: true,
        showTicks: false,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [
          {value:'06/01'},
          {value:'06/02'},
          {value:'06/03'},
          {value:'06/04'},
          {value:'06/05'},
          {value:'06/06'},
        ],
        // labelFunction: ((v) => {
        //   return `06/0${v+1}`
        // }),
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: false,
          fill: '#90909B'
        }
      },
      axisY: {
        showAxis: false,
        showLines: true,
        showLabels: true,
        showTicks: false,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: false,
          fill: '#90909B'
        }
      }
    }
        // <VictoryChart>
    //     <VictoryStack>
    //       <VictoryArea
          
    //         style={{ 
    //           data: {
    //             fill: "#87D5FD", stroke: "#87D5FD",strokeWidth: 2, fillOpacity: 0.5
    //           },
    //           labels: {
    //             fill: '#F5204C',
    //             fontSize: 12,
    //           }
    //         }}
    //         symbol='star'
    //         data={[
    //           {x: "06/01", y: 100}, {x: "06/02", y: 153}, {x: "06/03", y: 237,}, {x: "06/04", y: 208, symbol:'star',size:6,fill:'#87D5FD',label: "208元"}, {x: "06/05", y: 351}
    //         ]}
    //         // animate={{duration: 1000}}
    //       />
    //     </VictoryStack>
    //   </VictoryChart>
    return (
      <StockLine data={data} options={options} xKey='x' yKey='y' />
    )
  }

  getProduct(id) {
    if(id && id.length) {
      this.requestList(id)
    }
  };
  async requestList(id) {
    const { page } = this.state;
    this.setState({ loading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    try {
      let response = await fetch(`${api.detail}/${id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   page,
        //   size: 10,
        // })
      })
      let json = await response.json()
      let product = json.result;
        let prices = (product.productPrice+'').split('.')
        product.productPrice = prices[0]
        product.productPriceFloat = !prices[1] ? '00' : prices[1].length < 2 ? prices[1]+'0' : prices[1]
        //don't commit
        // if (!product.returnPoints | product.returnPoints <0) {
        //   product.returnPoints = 200
        // }
      this.setState({
        product,
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

export default connect(select)(DetailScreen);
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
  },
  img: {
    width,
    height: width*0.6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  itemInfo: {
    width,
    flexDirection:'column',
    paddingVertical: 10,
  },
  itemPlatform: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  itemTitle: {
    fontSize : 12,
    height : 30,
    fontWeight : '200',
    color : '#000000',
    textAlign: 'left',
    paddingHorizontal: 15,    
    // marginRight: 10,
  },
  itemPrice: {
    flexDirection:'row', 
    alignItems: 'flex-end',    
    justifyContent: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  priceTitile: {
    fontSize: 12,
    color: '#717171',
  },
  price: {
    fontSize: 16,
    height: 16,    
    color: '#F5204C',
    fontWeight : '600',  
  },
  priceFloat: {
    fontSize: 12,
    height: 12,    
    color: '#F5204C',
    fontWeight : '600',  
  },
  itemSale: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'flex-start',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#F1F1F6',
    paddingHorizontal: 15,
    marginVertical: 10,    
  },
  itemSaleTxt: {
    color: '#90909B',      
    fontSize: 10,
    marginRight: 25,    
  },
  couponTxt: {
    fontSize: 10,
    color: '#FB3091',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FB3091',
    borderRadius: 3,
    paddingHorizontal: 3,
    marginRight: 10,
  },
  baoyouTxt: {
    fontSize: 10,
    color: '#FB3091',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FB3091',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 1,
    marginRight: 10,
  },
  priceRebateTxt: {
    fontSize: 10,
    color: '#fd472b',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fd472b',
    borderRadius: 3,
    paddingHorizontal: 3,
  },
  itemSold: {
    fontSize: 10,
    marginTop: 6,  
    color: '#90909B',      
    paddingHorizontal: 15,
  },
  itemRecommend: {
    flexDirection:'row',
    paddingHorizontal: 15,   
    paddingBottom: 10,
    borderColor: '#F1F1F6',
    borderBottomWidth: 5,
  },
  recTitle: {
    fontSize: 10,    
    color: '#90909B',   
    marginRight: 5, 
  },
  recContent: {
    fontSize: 10,
    color: '#fd472b',  
    flex: 1,  
  },
  tip: {
    padding: 10,
    backgroundColor: '#FFF4DB',
    flexDirection:'row',
  },
  tipTitle: {
    color: '#BE7B35',
    fontSize: 12,
    marginRight: 5
  },
  tipContent: {
    flexDirection:'column',
  },
  tipTxt: {
    color: '#BE7B35',   
    fontSize: 12,    
  },
  trend: {
    position: 'absolute',
    top: 60,
    right: 15,
    width: 56,
    height: 30,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  trendStart: {
    flex:1.1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#27AAEB',
    borderStyle: 'solid',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendEnd: {
    flex:1,
    backgroundColor: '#27AAEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trendTxt: {
    fontSize: 10,
    color: '#fff',
  },
  blockBtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 46,
    backgroundColor: '#F5204C',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockBtnTxt: {
    color: '#fff',
    fontSize: 14,
  },
  trendCover: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)', 
    flexDirection:"column",  
    justifyContent: 'flex-end',
    
  },
  trendContent: {
    backgroundColor: '#fff',
    height: height*0.38,
    flexDirection:"row",      
		justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
    paddingTop: 10,
  },
  chart: {
    width: 300,
		height: 200,
	},
  trendDismissBtn: {
    height: 46,
    backgroundColor: '#F5204C',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendDismissBtnTxt: {
    color: '#fff',
    fontSize: 14,
  },
  trendUnit: {
    color: '#90909B',
    fontSize: 10,
    position: 'absolute',
    top: 15,
    left: 10
  },
  lastestPrice: {
    color: '#F5204C',
    fontSize: 10,
    position: 'absolute',
    top: 15,
    right: 10
  },
});