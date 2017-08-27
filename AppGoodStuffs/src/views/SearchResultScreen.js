import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  Text, View,
  StyleSheet,
  Image,
  AlertIOS,
  ListView,
  Dimensions,
  StatusBar,
  Platform,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { List, Button, SearchBar } from 'react-native-elements'

import api from '../api/index';

const { width, height } = Dimensions.get("window");
const platforms = [
  require('../img/taobao.png'),
  require('../img/jd.png'),
  require('../img/tmall.png')
];
class SearchResultScreen extends Component {
  constructor() {
    super();
    this.state = {
      tabActive: 0,
      sort: 1,
      page: 1,
      data: [],      
      loading: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.refresh()
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const { tabActive, sort } = this.state;
    const platform = platforms[params.platformKey || 0]
    return (
      <List style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          // extraData={this.state}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          getItemLayout={(data, index) => (
            {length: 148, offset: 148 * index, index}
          )}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          refreshing={this.state.refreshing}
          onRefresh={this.refresh}
          renderItem={({item}) => 
            <View style={styles.item} id={item.id}>
              <View style={styles.itemImg}>
                <Image style={styles.img} source={{uri:item.productImg}}></Image>
              </View>
              <View style={styles.itemInfo}>
                <Text numberOfLines={2} style={styles.itemTitle}>{item.productTitle}</Text>
                <View style={styles.itemPlatform}>
                  <Image 
                  source={platform}
                  style={{width:10,height:10,marginRight:5}} />
                  <Text style={{fontSize:10,color:'#A19899'}}>taobbao.com</Text>
                </View>
                <View style={styles.itemPrice}>
                  <Text style={styles.price}>￥{item.productPrice}.</Text>
                  <Text style={styles.priceFloat}>{item.productPriceFloat}</Text>
                  <Image 
                  source={require('../img/trend.png')}
                  style={{width:12,height:12,marginLeft:5}} />
                </View>
                {item.returnPoints && item.returnPoints >= 0 && <View style={styles.priceRebate}><Text style={styles.priceRebateTxt}>返积分{item.returnPoints}</Text></View>}
                
                <Text style={styles.itemSold}>销量:2358   评论:2358</Text>
                <View style={styles.itemBtnGroup}>
                  <TouchableOpacity>
                    <View style={styles.itemBtn}>
                      <Text style={styles.itemBtnTxt}>导购服务</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={styles.itemBtn}>
                    <Text style={styles.itemBtnTxt}>立即购买</Text>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        />
      </List>

    );
  }
            
  handlePlatformSelectItemPress = key => {
    this.setState({
      isPlatformSelectShow: false,
      platformKey: key
    })
  }
  _searchBarOnChange = (searchTxt) => {
    this.setState({
      searchTxt
    },()=>{
      if(searchTxt.length>1) {
        this.getSearchTxtList(searchTxt);
      } else {
        this.setState({
          searchTxtList: [],
          isSearchTxtListShow: false
        })
      }
    });
  }
  _tabOnPress = tabIndex => {
    let sort = tabIndex == this.state.tabActive ?  Number(!this.state.sort) : 1;
    this.setState({
      tabActive: tabIndex,
      sort
    }, ()=>{this.refresh()})
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          backgroundColor: "#F1F1F6",
          // marginLeft: "14%"
        }}
      />
    );
  };
  
  renderHeader = () => {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const { tabActive, sort } = this.state;
    const platform = platforms[params.platformKey || 0]
    
    return (
      <View style={styles.header}>
        <View style={styles.status}>
          <StatusBar translucent backgroundColor="#FB354E" barStyle="light-content"/>
        </View>
          <View style={styles.top}>
            <TouchableWithoutFeedback 
              onPress={() => navigate('Home', params)}>
              <View style={styles.btnCancel} >
                <LineIcons  name={'arrow-left'} size={18} style={{color:'#fff'}}/>
              </View>
            </TouchableWithoutFeedback>
            <SearchBar 
              placeholder={params.searchTxt} 
              lightTheme 
              round 
              noIcon
              containerStyle={styles.searchBar}
              inputStyle={{ backgroundColor: '#fff', fontSize: 12, paddingLeft: 60, color:'#000'}}
              placeholderTextColor='#000'
            />
              <View style={styles.searchPlatform}>
                <Image 
                  source={platform}
                  style={{width:18,height:18,marginLeft:10}} />
                <Icons
                  name={!this.state.isPlatformSelectShow?'caret-down':'caret-up'}
                  size={10}
                  style={{ color: '#000', marginLeft:10 }}
                />
              </View>
            
          </View>
        
        <View style={styles.tab}>
          <TouchableOpacity onPress={()=>{this._tabOnPress(0)}}>
          <View style={styles.tabItem}>
            <Text style={tabActive == 0 ? styles.tabActiveTxt : styles.tabTxt}>综合</Text>
            <View style={styles.tabSort}>
              <Ionicons
                name={'ios-arrow-up'}
                size={14}
                style={{color:tabActive == 0 && sort == 0 ? '#FB354E' : '#D4D4D4'}}/>
              <Ionicons
                name={'ios-arrow-down'}
                size={14}
                style={{color:tabActive == 0 && sort == 1 ? '#FB354E' : '#D4D4D4', marginTop:-5}}/>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._tabOnPress(1)}}>
            <View style={styles.tabItem}>
            <Text style={tabActive == 1 ? styles.tabActiveTxt : styles.tabTxt}>价格</Text>
            <View style={styles.tabSort}>
              <Ionicons
                name={'ios-arrow-up'}
                size={14}
                style={{color:tabActive == 1 && sort == 0 ? '#FB354E' : '#D4D4D4'}}/>
              <Ionicons
                name={'ios-arrow-down'}
                size={14}
                style={{color:tabActive == 1 && sort == 1 ? '#FB354E' : '#D4D4D4', marginTop:-5}}/>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._tabOnPress(2)}}>
            <View style={styles.tabItem}>
            <Text style={tabActive == 2 ? styles.tabActiveTxt : styles.tabTxt}>销量</Text>
            <View style={styles.tabSort}>
              <Ionicons
                name={'ios-arrow-up'}
                size={14}
                style={{color:tabActive == 2 && sort == 0 ? '#FB354E' : '#D4D4D4'}}/>
              <Ionicons
                name={'ios-arrow-down'}
                size={14}
                style={{color:tabActive == 2 && sort == 1 ? '#FB354E' : '#D4D4D4', marginTop:-5}}/>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      </View>);
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: "#F1F1F6",
          // backgroundColor: '#fff',
        }}
      >
        <ActivityIndicator animating size="small" />
      </View>
    );
  };
  handleBtnPress = () => {
    
  };
  loadMore = () => {
    if(!this.onEndReachedCalledDuringMomentum && !this.state.loading) {
      this.onEndReachedCalledDuringMomentum = true;
      this.setState({
        page: this.state.page + 1,
      }, () => {
        this.requestList()
      })
    }   
  };

  refresh = () => {
    // this.setState({ refreshing: true })
    this.setState({ page: 1 }, () => {
      this.requestList()
    })
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
        let prices = (item.productPrice+'').split('.')
        item.productPrice = prices[0]
        item.productPriceFloat = !prices[1] ? '00' : prices[1].length < 2 ? prices[1]+'0' : prices[1]
        if (!item.returnPoints | item.returnPoints <0) {
          item.returnPoints = 200
        }
        return item
      })
      // console.warn('request',json.result.length)
      
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

export default connect(select)(SearchResultScreen);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'ios' ? 20 : 0,
    // height: height,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  status: {
    backgroundColor: '#FB354E', 
    height: STATUSBAR_HEIGHT,   
  },
  top: {
    flexDirection:"row",
    // alignSelf: 'stretch',
    backgroundColor: '#FB354E',
  },
  searchBar: {
    flex: 10,
    backgroundColor: '#FB354E',
    borderTopWidth: 0,    
    borderBottomWidth: 0,    
  },
  searchPlatform: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 50,
    top: 14,
    backgroundColor: 'transparent',
  },
  btnCancel: {
    flex: 1,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  btnCancelTxt: {
    color: '#fff',
  },
  content: {
    flex:0,
    backgroundColor: '#fff',
    height:'100%'
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40,
    backgroundColor: '#fff',    
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F1F1F6',
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tabTxt: {
    fontSize: 12,
    color: '#A19899'
  },
  tabActiveTxt: {
    fontSize: 12,
    color: '#FB354E'
  },
  tabSort: {
    marginLeft: 5,
    height: 24
  },

  list: {
    backgroundColor: '#F1F1F6',
    
  },
  item: {
    flex: 1,
    // paddingLeft: 10,
    // paddingRight: 10,
    padding: 10,
    flexDirection:"row",
    alignItems: 'stretch',    
    justifyContent:"space-between",
    backgroundColor: '#fff',
    // marginBottom: 5,
  },
  itemImg: {
    flex: 0.45,
    flexDirection:"column",
    alignItems:"center",
    marginRight: 10,
    justifyContent: "center",
  },
  img: {
    width: 100,
    height:100,
  },
  rebateBtnWrap: {
    backgroundColor: '#37B5F0',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 3,
  },
  rebateBtn: {
    fontSize: 10,
    color: '#fff',
  },
  itemInfo: {
    flex: 1,
    flexDirection:'column',
  },
  itemPlatform: {
    flexDirection:'row',
    alignItems: 'center'
  },
  itemTitle: {
    fontSize : 12,
    height : 30,
    fontWeight : '200',
    color : '#000000',
    textAlign: 'left',
    // marginRight: 10,
  },
  itemPrice: {
    flexDirection:'row', 
    alignItems: 'flex-end',    
    justifyContent: 'flex-start',
    marginTop: 3
  },
  priceTitile: {
    fontSize: 12,
    color: '#717171',
  },
  price: {
    fontSize: 16,
    height: 16,    
    color: '#fd472b',
    fontWeight : '600',  
    // flex: 1,
    // flexDirection:"column",   
    // justifyContent: 'flex-end',
  },
  priceFloat: {
    fontSize: 12,
    height: 12,    
    color: '#fd472b',
    fontWeight : '600',  
    // flex: 1,
    // flexDirection:"column",   
    // justifyContent: 'flex-end',
  },
  priceRebate: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
  },
  priceRebateTxt: {
    fontSize: 10,
    color: '#fd472b',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fd472b',
    borderRadius: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  itemOldPrice: {
    fontSize: 10,
    marginTop: 8,
    color: '#90909B',
  },
  itemSold: {
    fontSize: 10,
    marginTop: 6,  
    color: '#90909B',      
  },
  itemRecommend: {
    flex: 1,
    flexDirection:'row',
    marginTop: 8,       
  },
  recTitle: {
    fontSize: 10,    
    color: '#fd472b',    
  },
  recContent: {
    fontSize: 10,
    color: '#90909B',  
    flex: 1,  
  },
  itemBtnGroup: {
    position: 'absolute',
    right: 0,
    top: 67,  
    // flex: 1,
    flexDirection:'row', 
    alignItems: 'center',    
  },
  itemBtn: {
    backgroundColor: '#fd472b',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft:5 ,
  },
  itemBtnTxt: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 3,
  }
});