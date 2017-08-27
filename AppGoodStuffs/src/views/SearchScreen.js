import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  Text,
  View,
  StyleSheet,
  Image,
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
import { List, SearchBar } from 'react-native-elements'

import api from '../api/index';

const { width, height } = Dimensions.get("window");
const platforms = [
  {img:require('../img/taobao.png'),url:'taobao.com'},
  {img:require('../img/jd.png'),url:'jd.com'},
  {img:require('../img/tmall.png'),url:'tmall.com'}
];
const trends = {
  '0': require('../img/trend.png'),
  '1': require('../img/trend-up.png'),
  '2': require('../img/trend-down.png'),
}
class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      platformKey: 0,
      isPlatformSelectShow: false,
      searchTxt: '',
      searchTxtList: [],
      hotSearchList: [],
      historySearchList: [],
      isSearchTxtListShow: false,
      isSearchResult: false,
      isSearched: false,
      tabActive: 0,
      sort: 1,
      page: 1,
      data: [],      
      loading: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.search.focus();
    this._getHotSearchList();
    this._getHistorySearchList();
  }

  render() {
    return (
      <View style={styles.main}>
        {!this.state.isSearchResult ? this.renderSearch() : this.renderResult()}
        {this.renderPlatformSelect()} 
        {this.renderSearchTxtLst()}
      </View>
    )
  }
  
  //events
  _platformSelectItemOnPress = key => {
    this.setState({
      isPlatformSelectShow: false,
      platformKey: key
    }, ()=>{
      if(this.state.isSearchResult) {
        this._refresh();
      }
    })
  }
  _searchBarOnChange = searchTxt => {
    this.setState({
      searchTxt
    },()=>{
      if(searchTxt.length>0) {
        this._getSearchTxtList();
      } else {
        this.setState({
          searchTxtList: [],
          isSearchTxtListShow: false,
          isSearchResult: false,
          isSearched: false
        })
      }
    });
  }
  _searchBarOnFocus = () => {
    const { isSearchResult, searchTxt, isPlatformSelectShow } = this.state;
    // if(isSearchResult) {
    //   this.setState({
    //     isSearchTxtListShow: true,
    //     isSearchResult: false
    //   })
    //   this._getSearchTxtList();
    // } else 
    if(isPlatformSelectShow) {
      this.setState({isPlatformSelectShow:false})
    }
    if(searchTxt.length>0) {
      this.setState({
        isSearchTxtListShow: true,
      })
      this._getSearchTxtList();      
    } else {
      this.setState({
        isSearchResult: false
      })
    }
  }
  _searchBarOnBlur = () => {
    this.setState({
      isSearchTxtListShow: false,
    })
  }
  _searchListOnPress = searchTxt => {
    this.setState({
      // searchTxtList: [],
      isSearchTxtListShow: false,
      searchTxt
    }, ()=>{
      this._goSearch()
    })
  }

  _tabOnPress = tabIndex => {
    if(this.state.loading) return;
    let sort = tabIndex == this.state.tabActive ?  Number(!this.state.sort) : 1;
    this.setState({
      tabActive: tabIndex,
      sort,
      loading: true,
      data: []
    }, ()=>{this._refresh()})
  };
  _btnCancelOnPress = () => {
    const { navigate } = this.props.navigation;    
    const { isSearched, isSearchResult } = this.state;
    if((isSearchResult && !isSearched) || (isSearchResult && isSearched) || (!isSearchResult && !isSearched)) {
      this.props.navigation.goBack();
    } else if(!isSearchResult && isSearched) {
      this.setState({isSearchResult:true,isSearched:false})
    } else if(!isSearchResult && !isSearched) {
      // this.setState({isSearchResult:true,isSearched:true,isSearchTxtListShow:false})
    } else {
      this.setState({isSearchResult:false})
    }
  };
  _searchTagOnPress = (searchTxt) => {
    this.setState({
      searchTxt,
    }, ()=>{
      this._goSearch()
    })
  };
  //renders
  renderSearch = () => {
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <StatusBar translucent barStyle="light-content"/>
        </View>
        {this.renderTop()}          
        <View style={styles.content}>
          <View style={styles.hotSearch}>
            <View style={styles.hotSearchTop}>
              <LineIcons
                name={'fire'}
                size={16}
                style={{ color: '#BCAFB2', marginRight:5 }}/>
              <Text style={styles.hotSearchTopTxt}>热门搜索</Text>
            </View>
            <View style={styles.hotSearchList}>
            {
              this.state.hotSearchList.map((item,index) => {
                return (
                  <TouchableOpacity key={index} onPress={()=>this._searchTagOnPress(item)}>
                    <View style={styles.hotSearchItem}>
                      <Text style={styles.hotSearchItemTxt}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }            
            </View>
          </View>  
          <View style={styles.historySearch}>
          <View style={styles.historySearchTop}>
            <Ionicons
              name={'ios-time-outline'}
              size={16}
              style={{ color: '#BCAFB2', marginRight:5 }}/>
            <Text style={styles.historySearchTopTxt}>搜索历史</Text>
            {
              this.state.historySearchList.length>0 && (
                <TouchableOpacity style={{position: 'absolute', right:0}} onPress={()=>{this.setState({historySearchList:[]})}}>
                  <Ionicons
                    name={'ios-trash-outline'}
                    size={20}
                    style={{ color: '#BCAFB2',}}/>
                </TouchableOpacity>
              )
            }
          </View>
          <View style={styles.historySearchList}>
          {
            this.state.historySearchList.map((item,index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>this._searchTagOnPress(item)}>
                <View  style={styles.historySearchItem}>
                  <Text style={styles.historySearchItemTxt}>{item}</Text>
                </View>
              </TouchableOpacity>
              )
            })
          }
          </View>
        </View> 
        </View>
      </View>
    )
  };
  renderResult = () => {
    const platform = platforms[this.state.platformKey];
    const { navigate } = this.props.navigation;
    
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
          ListEmptyComponent={this.renderEmpty}
          getItemLayout={(data, index) => (
            {length: 148, offset: 148 * index, index}
          )}
          onEndReached={this._loadMore}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          refreshing={this.state.refreshing}
          onRefresh={this._refresh}
          renderItem={({item}) => 
            <View style={styles.item} id={item.id}>
              <View style={styles.itemImg}>
                <Image style={styles.img} source={{uri:item.productImg}}></Image>
              </View>
              <View style={styles.itemInfo}>
                <Text numberOfLines={2} style={styles.itemTitle}>{item.productTitle}</Text>
                <View style={styles.itemPlatform}>
                  <Image 
                  source={platform.img}
                  style={{width:10,height:10,marginRight:5}} />
                  <Text style={{fontSize:10,color:'#A19899'}}>{platform.url}</Text>
                </View>
                <View style={styles.itemPrice}>
                  <Text style={styles.price}>￥{item.productPrice}.</Text>
                  <Text style={styles.priceFloat}>{item.productPriceFloat}</Text>
                  <Image 
                  source={require('../img/trend.png')}
                  style={{width:12,height:12,marginLeft:5}} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginTop:6}} >
                  {item.productCouponPrice && item.productCouponPrice > 0 && <Text style={styles.couponTxt}>券{item.productCouponPrice}元</Text>}
                  {item.returnPoints && item.returnPoints >= 0 && <Text style={styles.priceRebateTxt}>返积分{item.returnPoints}</Text>}
                </View>
                
                <Text style={styles.itemSold}>销量:{item.productSales}   评论:2358</Text>
                <View style={styles.itemBtnGroup}>
                  <TouchableOpacity onPress={()=>{navigate('Detail',{id:item.id})}}>
                    <View style={styles.itemBtn}>
                      <Text style={styles.itemBtnTxt}>导购服务</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{}}>
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
    )
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
    const { tabActive, sort } = this.state;
    
    return (
      <View style={styles.header}>
        <View style={styles.status}>
          <StatusBar translucent backgroundColor="#FB354E" barStyle="light-content"/>
        </View>
        {this.renderTop()}  
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
      </View>
    );
  };
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
          height:'100%',
          width:'100%',
          backgroundColor:'#fff',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color:'#A19899',fontSize:12,marginTop:30}}>未找到与<Text style={{color:'#FB354E',fontSize:12}}>“{this.state.searchTxt}”</Text>相关的商品</Text>
        <Text style={{color:'#A19899',fontSize:12,marginTop:5}}>请尝试重新搜索</Text>
      </View>
    );
  };
  renderTop = () => {
    const platform = platforms[this.state.platformKey]
    return (
      <View style={styles.top}>
        <TouchableWithoutFeedback 
          onPress={this._btnCancelOnPress}>
          <View style={styles.btnCancel} >
            <LineIcons  name={'arrow-left'} size={18} style={{color:'#fff'}}/>
          </View>
        </TouchableWithoutFeedback>
        <SearchBar 
          placeholder="请输入搜索词" 
          lightTheme 
          round 
          noIcon
          containerStyle={styles.searchBar}
          inputStyle={{ backgroundColor: '#fff', fontSize: 12, paddingLeft: 60, color:'#000'}}
          placeholderTextColor='#BCAFB2'
          clearIcon={{ color: '#86939e', name: 'close',style:{borderRadius:10} }}
          value={this.state.searchTxt}
          onChangeText={this._searchBarOnChange}
          onFocus={this._searchBarOnFocus}
          onBlur={this._searchBarOnBlur}
          ref={search => this.search = search}
        />
        <TouchableWithoutFeedback onPress={()=>{
          const { isSearchResult } = this.state;
          // if(isSearchResult) {
          //   this.setState({
          //     isSearchResult: false
          //   })
          // }
          this.setState({isPlatformSelectShow:!this.state.isPlatformSelectShow});
          this.search.blur();
        }} >
          <View style={styles.searchPlatform}>
            <Image 
              source={platform.img}
              style={{width:18,height:18,marginLeft:10}} />
            <Icons
              name={!this.state.isPlatformSelectShow?'caret-down':'caret-up'}
              size={10}
              style={{ color: '#000', marginLeft:10, marginRight:6 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  };
  renderPlatformSelect = () => {
    return this.state.isPlatformSelectShow && (
      <TouchableWithoutFeedback onPress={()=>{this.setState({isPlatformSelectShow:false})}}>
      <View style={styles.platformSelect}>
        <View style={styles.triangleUp}></View>
        <View style={styles.platformSelectTop}>
          <TouchableOpacity onPress={()=>{this._platformSelectItemOnPress(0)}}>  
            <View style={styles.platformSelectItem}>
              <Image 
              source={require('../img/taobao.png')}
              style={{width:24,height:24}} />
              <Text style={styles.platformSelectItemTxt}>淘宝</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._platformSelectItemOnPress(1)}}>
            <View style={styles.platformSelectItem}>
              <Image 
              source={require('../img/jd.png')}
              style={{width:24,height:24}} />
              <Text style={styles.platformSelectItemTxt}>京东</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._platformSelectItemOnPress(2)}}>
            <View style={styles.platformSelectItem}>
              <Image 
              source={require('../img/tmall.png')}
              style={{width:24,height:24}} />
              <Text style={styles.platformSelectItemTxt}>天猫</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
  renderSearchTxtLst = () => {
    return this.state.isSearchTxtListShow && (
      <View style={styles.searchTxtList}>
      {
        this.state.searchTxtList.map((item,index)=>{
          return (
            <View style={styles.searchTxtItem} key={index}>
              <View style={styles.searchTxtItemStart}>
                <Text style={styles.searchTxt}>{this.state.searchTxt}</Text>
                <Text style={styles.searchTxtAddon}>{item.replace(new RegExp(`^${this.state.searchTxt}`,'i'),'')}</Text>
              </View>
              <TouchableOpacity onPress={()=>{this._searchListOnPress(item)}}>
                <Ionicons
                  name={'ios-arrow-round-up'}
                  size={26}
                  style={{ color: '#BCAFB2', marginRight: 15, transform: [{ rotate: '-45deg'}] }}/>
              </TouchableOpacity>
            </View>)
        })
      }
      </View>
    )
  }

  _getSearchTxtList() {
    const { searchTxt } = this.state;
    this.setState({
      searchTxtList: [
        `${searchTxt}夏装`,
        `${searchTxt}裙子`,
        `${searchTxt}夏季套装`,
        `${searchTxt}短袖`,
        `${searchTxt}生日礼物`,
      ],
      isSearchTxtListShow: true
    })
  };
  _getHotSearchList() {
    this.setState({
      hotSearchList: [
        '夏装',
        '裙子',
        '凉鞋',
        '短袖',
        'T恤',
        '防晒服',
        '滑板鞋',
      ],
    })
  };
  _getHistorySearchList() {
    this.setState({
      historySearchList: [
        'MacBook Pro',
        '外星人',
        '显示器',
        '数据线',
        'LED灯',
        '足球鞋',
        '机械键盘',
        '逻辑鼠标',
      ],
    })
  };
  //functions
  _goSearch() {
    const { platformKey, searchTxt } = this.state;
    // debugger
    // navigate('SearchResult', {
    //   platformKey,
    //   searchTxt
    // })
    this.setState({
      isSearchResult: true,
      isSearched: true
    },()=>{
      this._refresh()
    })
  }

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
    const { page, tabActive, sort, searchTxt } = this.state;
    const sortfields = [
      'product_coupon_etimestamp',
      'product_price_deduct_coupon',
      'product_sales'
    ]
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
          keyword: searchTxt,
          ad: sort?sort:'-1',
          sortfield: sortfields[tabActive],
        })
      })
      let json = await response.json()
      let list = json.result.map(item => {
        let prices = (item.productPrice+'').split('.')
        item.productPrice = prices[0]
        item.productPriceFloat = !prices[1] ? '00' : prices[1].length < 2 ? prices[1]+'0' : prices[1]
        //don't commit
        // if (!item.returnPoints | item.returnPoints <0) {
        //   item.returnPoints = 200
        // }
        return item
      })
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

export default connect(select)(SearchScreen);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  main: {
    // paddingTop: Platform.OS === 'ios' ? 20 : 0,    
    backgroundColor: '#fff',   
    flex: 1,
  },
  container: {
    // paddingTop: Platform.OS === 'ios' ? 20 : 0,
    // height: height,
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
  // searchBar: {
  //   flex: 7,
  //   backgroundColor: '#FB354E',
  //   borderTopWidth: 0,    
  //   borderBottomWidth: 0,    
  // },
  // searchPlatform: {
  //   flexDirection:"row",
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  //   position: 'absolute',
  //   left: 12,
  //   top: 14,
  //   backgroundColor: 'transparent',
  // },
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
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  btnCancel: {
    flex: 1,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancelTxt: {
    color: '#fff',
  },
  content: {
    flex:0,
    backgroundColor: '#fff',
    height:'100%'
  },
  hotSearch: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 2,
    borderBottomWidth: 10,
    borderBottomColor: '#F1F1F6',
  },
  hotSearchTop: {
    flexDirection:"row",    
    alignItems: 'center',
  },
  hotSearchTopTxt: {
    fontSize: 14,
  },
  hotSearchList: {
    marginTop: 10,
    flexDirection:"row",
    flexWrap:'wrap'
  },
  hotSearchItem: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginHorizontal: 6,
    marginBottom: 10,
    backgroundColor: '#F1F1F6',
    borderRadius: 15,
  },
  hotSearchItemTxt: {
    fontSize: 12,
  },
  historySearch: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 2,
  },
  historySearchTop: {
    flexDirection:"row",    
    alignItems: 'center',
  },
  historySearchTopTxt: {
    fontSize: 14,
  },
  historySearchList: {
    marginTop: 10,
    flexDirection:"row",
    flexWrap:'wrap'
  },
  historySearchItem: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginHorizontal: 6,
    marginBottom: 10,
    backgroundColor: '#F1F1F6',
    borderRadius: 15, 
  },
  historySearchItemTxt: {
    fontSize: 12,
  },
  platformSelect: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT+(Platform.OS==='ios'?46:56),
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  platformSelectTop: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20
  },
  platformSelectItem: {
    marginRight: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  platformSelectItemTxt: {
    fontSize: 12,
    marginTop: 5,
    color: '#9B9192',
  },
  triangleUp: {
    width: 0,
    height: 0,
    borderTopWidth: 0,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftWidth: 8,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    borderLeftColor: 'transparent',
    position: 'absolute',
    top: -8,
    left: 61
  },
  searchTxtList: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT+(Platform.OS==='ios'?46:56),
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column', 
    paddingLeft: 15,   
  },
  searchTxtItem: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F6',
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchTxtItemStart: {
    flexDirection: 'row',        
  },
  searchTxt: {
    color: '#BCAFB2',
    fontSize: 12,
  },
  searchTxtAddon: {
    fontSize: 12,
    
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
    // backgroundColor: '#F1F1F6',
    
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
    color: '#F5204C',
    fontWeight : '600',  
    // flex: 1,
    // flexDirection:"column",   
    // justifyContent: 'flex-end',
  },
  priceFloat: {
    fontSize: 12,
    height: 12,    
    color: '#F5204C',
    fontWeight : '600',  
    // flex: 1,
    // flexDirection:"column",   
    // justifyContent: 'flex-end',
  },
  priceRebateTxt: {
    fontSize: 10,
    color: '#fd472b',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fd472b',
    borderRadius: 3,
    paddingHorizontal: 3,
    marginRight: 5,    
  },
  couponTxt: {
    fontSize: 10,
    color: '#FB3091',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FB3091',
    borderRadius: 3,
    paddingHorizontal: 3,
    marginRight: 5,
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
    bottom: 20,  
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