// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   Alert,
//   View
// } from 'react-native';
// import * as WeChat from 'react-native-wechat';
// import CodePush from "react-native-code-push";
// // 引入sdk
// import RNAlibcSdk from 'react-native-alibc-sdk';
// const PARAMS = {
//   pid: "mm_124056678_0_0",
//   forceH5: true,
//   detail: {type: "detail", payload: "539152008480"},
//   url: {
//         type: "url",
//         payload: "http://uland.taobao.com/coupon/edetail?activityId=13e9f56152bf43329f1940b7354c7bcf&pid=mm_33719122_5420449_75840102&itemId=543666118631&src=quanbaibai"
//   },
//   shop: {type: "shop", payload: "116614296"},
//   orders: {type: "orders",  payload: {orderType: 0, isAllOrder: true}},
//   addCard: {type: "addCard", payload: "539152008480"},
//   mycard: {type: "mycard"},
// };

// export default class AppGoodStuffs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { pressStatus: 1,ready :false ,aliUser:null};
//     RNAlibcSdk.init(PARAMS.pid, PARAMS.forceH5, (err) => {
//       if (!err)
//         console.log("init success")
//       else
//         console.log(err)
//       this.setState({ ready: true });
//     }
//   );

//   this._login = this._login.bind(this);
//   // this._islogin = this._islogin.bind(this);
//   // this._getUser = this._getUser.bind(this);
//   // this._goBack = this._goBack.bind(this);
//   // this._onTradeResult = this._onTradeResult.bind(this);
//   // this._onWebViewStateChange = this._onWebViewStateChange.bind(this);
//   }
//   _login() {
//     // 唤起手淘app进行授权登录， 获取用户个人信息。 
//     var self = this;
//     RNAlibcSdk.login((err, userInfo) => {
//         if (!err)
//           // console.log(userInfo)
//         self.setState({aliUser:JSON.stringify(userInfo)});
//         else
//           console.log(err)
//       }
//     );
//   }
//   componentDidMount() {
//     CodePush.sync({
//       installMode: CodePush.InstallMode.IMMEDIATE,
//       updateDialog: true
//     });

//     try {
//       WeChat.registerApp('wx5b704a5f3467b604');//从微信开放平台申请
      
//       console.log('注册成功～！')
//     }
//     catch (e) {
//       // Alert.alert(e);
//       console.log('注册失败～！')
//     }

//   }
//   onPressLearnMore() {

//     var self = this;
//     WeChat.sendAuthRequest("snsapi_userinfo").then((result)=>{

//       self.setState({pressStatus:JSON.stringify(result)});
//       // for(var a in obj) 
//       // result.toS
//       // this.setState({pressStatus:JSON.stringify(result)})
//       // console.log(result)
//     }).catch((e)=>{
//       self.setState({pressStatus:e.name});
//     })
//     // Alert.alert(1);
//     // this.setState({ pressStatus: false });
//     // try {
//     //   WeChat.sendAuthRequest("snsapi_userinfo");
//     // }
//     // catch (e) {
//     //   Alert.alert(e);
//     // }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu,{'\n'}
//           微信用户：{this.state.pressStatus},{'\n'}
//           淘宝用户：{this.state.aliUser},{'\n'}
//         </Text>
//         <TouchableHighlight onPress={this.onPressLearnMore.bind(this)}>
//                 <Text>微信授权登录</Text>
//             </TouchableHighlight>
//             <TouchableHighlight onPress={this._login.bind(this)}>
//                 <Text>淘宝授权登录</Text>
//             </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#000066'
//   },
//   welcomePress: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   button: {
//     borderColor: '#000066',
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   buttonPress: {
//     borderColor: '#000066',
//     backgroundColor: '#000066',
//     borderWidth: 1,
//     borderRadius: 10,
//   },
// });

// AppRegistry.registerComponent('AppGoodStuffs', () => AppGoodStuffs);

'use strict';

import { AppRegistry }  from 'react-native';
import setup            from './src/setup';

AppRegistry.registerComponent('AppGoodStuffs', () => setup);

