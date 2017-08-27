import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, StyleSheet, Image, Button, AlertIOS, Dimensions, StatusBar, Platform, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import CommonStatusBar from '../widget/CommonStatusBar';

import api from '../api/index';

const { width, height } = Dimensions.get("window");

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const { navigate } = this.props.navigation;
  //   <View style={styles.status}>
  //   <StatusBar translucent backgroundColor="#FB354E" barStyle="default"/>
  // </View>
    return (
      <View style={styles.container}>
        <CommonStatusBar statusStyle={{barStyle:'dark-content',backgroundColor:'#fff'}} {...this.props.navigation} />
        <Image 
          source={require('../img/icon.png')}
          style={{width: 50, height: 50}}
        />
        <View style={styles.title}>
          <View style={styles.mainTitle}>
            <Text style={styles.mainTitleStart}>全球精品</Text> 
            <Text style={styles.mainTitleCenter}>|</Text>
            <Text style={styles.mainTitleEnd}>智能导购</Text>
          </View>
          <Text style={styles.subTitle}>我有好物您身边的导购专家</Text>
        </View>
        <TouchableOpacity  style={styles.searchBarWrapper} onPress={() => navigate('Search')}>
          <View style={styles.searchBar}  >
            <View style={styles.searchBarStart}>
              <Image 
                source={require('../img/taobao.png')}
                style={{width:20,height:20,marginLeft:10}} />
              <Icons
                name={'caret-down'}
                size={10}
                style={{ color: '#000', marginLeft:10 }}
              />
              <Text style={styles.searchBarPlaceholder}>请输入您要购买的商品</Text>
            </View>
            <View style={styles.searchBarEnd}>
              <Text style={styles.searchBarBtnTxt}>搜索</Text>
            </View>
          </View>
        </TouchableOpacity>
        
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

export default connect(select)(HomeScreen);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    // height: height,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    backgroundColor: '#fff', 
    height: STATUSBAR_HEIGHT,   
  },
  title: {
    top: 10,
  },
  mainTitle: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitleStart: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mainTitleCenter: {
    textAlign: 'center',  
    fontWeight : '100',
    marginHorizontal: 10,  
  },
  mainTitleEnd: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    top: 10,
    fontSize : 12,
    textAlign: 'center',
    fontWeight: '100',
  },
  searchBarWrapper: {
    width: '100%'
  },
  searchBar: {
    marginHorizontal: 20,
    marginVertical: 50,
    flexDirection:"row",
  },
  searchBarStart: {
    flex:4,    
    borderTopWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#9B9192',
    borderStyle: 'solid',
    height: 40,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBarPlaceholder: {
    color: '#9B9192',
    marginLeft: 10
  },
  searchBarEnd: {
    // flex:1,
    width: 68,
    backgroundColor: '#FB354E',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',  
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  searchBarBtnTxt: {
    color: '#fff', 
  }
});