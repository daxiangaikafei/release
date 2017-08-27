

// 'use strict';
// import React from 'react';
// import {
//   Image,
//   Button,
//   Platform,
//   View,
//   TouchableOpacity
// } from 'react-native';
// import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import LineIcons from 'react-native-vector-icons/SimpleLineIcons';

// //page
// import ChatScreen from '../views/ChatScreen';
// import SettingScreen from '../views/SettingScreen';
// import HomeScreen from '../views/HomeScreen';
// import SearchScreen from '../views/SearchScreen';
// import DetailScreen from '../views/DetailScreen';
// import TimeLimitScreen from '../views/TimeLimitScreen';
// import CouponScreen from '../views/CouponScreen';
// import MyScreen from '../views/MyScreen';
// import OrderScreen from '../views/OrderScreen';
// import ConvertScreen from '../views/ConvertScreen';
// import ConvertDetailScreen from '../views/ConvertDetailScreen';
// import BuildingScreen from '../views/BuildingScreen';
// // import FavScreen from '../views/FavScreen';
// import InfiniteScrollScreen from '../views/InfiniteScrollScreen';
// import WelcomeScreen from '../views/Welcome/';

// // Widget 
// import ImageHeader from '../widget/ImageHeader';


// const defaultHeader = (navigation, color, props) => {
//   color = color ? color : '#000'
//   return {
//     headerTitleStyle: { color, fontWeight: '200' },
//     headerStyle: { backgroundColor: '#fff' },
//     headerTintColor: color,
//     headerLeft: (<TouchableOpacity
//       onPress={() => navigation.goBack()}>
//       <View style={{ marginLeft: 10 }} >
//         <LineIcons name={'arrow-left'} size={18} style={{ color }} />
//       </View>
//     </TouchableOpacity>),
//     ...props
//   }
// }
// const screenConfig = {
//   HomeConfig: {
//     screen: HomeScreen,
//     path: '/',
//     navigationOptions: {
//       header: null
//     },
//     // mode: Platform.OS === 'ios'
//     // ? 'modal'
//     // : 'card',
//   },
//   SearchConfig: {
//     screen: SearchScreen,
//     path: '/search/',
//     navigationOptions: {
//       header: null
//     },
//   },
//   DetailConfig: {
//     screen: DetailScreen,
//     path: '/detail/:id',
//     navigationOptions: ({ navigation }) => ({
//       title: '商品详情',
//       ...defaultHeader(navigation),
//     }),
//   },
//   OrderConfig: {
//     screen: OrderScreen,
//     path: '/order/',
//     navigationOptions: ({ navigation }) => ({
//       title: '我的订单',
//       ...defaultHeader(navigation),
//     }),
//   },
//   BuildingConfig: {
//     screen: BuildingScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: navigation.state.params.title,
//       ...defaultHeader(navigation),
//     })
//   },
//   ConvertConfig: {
//     screen: ConvertScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: '积分兑换',
//       ...defaultHeader(navigation),
//     })
//   },
//   ConvertDetailConfig: {
//     screen: ConvertDetailScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: '积分明细',
//       ...defaultHeader(navigation, '#fff', {
//         headerStyle: {
//           backgroundColor: '#259DFC',
//           shadowOpacity: 0,
//           elevation: 0,
//         },
//       }),
//     })
//   },
//   WelcomeConfig: {
//     screen: WelcomeScreen,
//     path: '/welcome',
//     navigationOptions: {
//       header: null
//     },
//   }
// }

// const SettingTab = StackNavigator({
//   Setting: {
//     screen: SettingScreen,
//     navigationOptions: ({ navigation }) => ({ title: `Setting` })
//   },
//   Chat: {
//     screen: ChatScreen
//   }
// });

// const TimeLimitStack = StackNavigator({
//   TimeLimit: {
//     screen: TimeLimitScreen,
//     path: '/timeLimit',
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: <Image source={require('../img/time-limit-title.png')} />,
//       headerTitleStyle: { color: '#fff' },
//       headerStyle: { backgroundColor: '#fff' },
//       headerLeft: (<TouchableOpacity
//         onPress={() => navigation.navigate('Home')}>
//         <View style={{ marginLeft: 10 }} >
//           <LineIcons name={'arrow-left'} size={18} style={{ color: '#000' }} />
//         </View>
//       </TouchableOpacity>)
//     }),
//   },
// }, {
//     initialRouteName: 'TimeLimit',
//   });

// const CouponStack = StackNavigator({
//   Coupon: {
//     screen: CouponScreen,
//     path: '/coupon',
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: <Image source={require('../img/coupon-title.png')} />,
//       headerTitleStyle: { color: '#fff' },
//       headerStyle: { backgroundColor: '#F5204C' },
//       header: (props) => <ImageHeader {...props} />
//     }),
//   },
// }, {
//     initialRouteName: 'Coupon',
//   });

// const TabNav = TabNavigator({
//   HomeTab: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: '首页',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Image
//           source={focused ? require('../img/home.png') : require('../img/home-outline.png')}
//           style={{ width: 22, height: 22 }}
//         />
//       )
//     }
//   },
//   TimeLimitTab: {
//     screen: TimeLimitStack,
//     navigationOptions: {
//       tabBarLabel: '限时抢',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Image
//           source={focused ? require('../img/time-limit.png') : require('../img/time-limit-outline.png')}
//           style={{ width: focused ? 34 : 22, height: focused ? 26 : 22 }}
//         />
//       ),

//     }
//   },
//   CouponTab: {
//     screen: CouponStack,
//     navigationOptions: {
//       tabBarLabel: '好券',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Image
//           source={focused ? require('../img/coupon.png') : require('../img/coupon-outline.png')}
//           style={{ width: 22, height: 18 }}
//         />
//       )
//     }
//   },
//   MyTab: {
//     screen: MyScreen,
//     navigationOptions: {
//       tabBarLabel: '我',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Image
//           source={focused ? require('../img/my.png') : require('../img/my-outline.png')}
//           style={{ width: 22, height: 22 }}
//         />
//       )
//     }
//   }
// }, {
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     // swipeEnabled: true,
//     animationEnabled: false,
//     lazy: true,
//     tabBarOptions: {
//       activeTintColor: '#F52354',
//       inactiveTintColor: '#C5BBBC',
//       style: {
//         backgroundColor: '#ffffff'
//       },
//       tabStyle: {
//         width: 20,
//       },
//       labelStyle: {
//         marginBottom: 5
//       }
//     },
//     initialRouteName: 'HomeTab',

//   })


'use strict';
import React from 'react';
import {
  Image,
  Button,
  Platform,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Pages
import HomeScreen from '../views/HomeScreen';
import SearchScreen from '../views/SearchScreen';
import DetailScreen from '../views/DetailScreen';
import TimeLimitScreen from '../views/TimeLimitScreen';
import CouponScreen from '../views/CouponScreen';
import MyScreen from '../views/MyScreen';
import OrderScreen from '../views/OrderScreen';
import ConvertScreen from '../views/ConvertScreen';
import ConvertDetailScreen from '../views/ConvertDetailScreen';
import BuildingScreen from '../views/BuildingScreen';
import JifenbaoHelpScreen from '../views/JifenbaoHelpScreen';
import InfiniteScrollScreen from '../views/InfiniteScrollScreen';
import WelcomeScreen from '../views/Welcome/';

// Widget 
import ImageHeader from '../widget/ImageHeader';

// Config
import sceneConfig from './sceneConfig'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

const defaultHeader = (navigation, color, props) => {
  color = color ? color : '#000'
  return {
    headerTitleStyle: { color, fontWeight: '200', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: '#fff',
      shadowOpacity: 0,
      elevation: 0,
      marginTop: STATUSBAR_HEIGHT
    },
    headerTintColor: color,
    headerLeft: (<TouchableOpacity
      onPress={() => navigation.goBack()}>
      <View style={{ marginLeft: 10 }} >
        <LineIcons name={'arrow-left'} size={18} style={{ color }} />
      </View>
    </TouchableOpacity>),
    headerRight: <View></View>,
    ...props
  }
}
// const customFloatFromRight = sceneConfig.customFloatFromRight;
const screenConfig = {
  HomeConfig: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: {
      header: null
    },
    // mode: Platform.OS === 'ios'
    // ? 'modal'
    // : 'card',
  },
  SearchConfig: {
    screen: SearchScreen,
    path: '/search/',
    navigationOptions: {
      header: null
    },
  },
  DetailConfig: {
    screen: DetailScreen,
    path: '/detail/:id',
    navigationOptions: ({ navigation }) => ({
      title: '商品详情',
      ...defaultHeader(navigation),
    }),
  },
  OrderConfig: {
    screen: OrderScreen,
    path: '/order/',
    navigationOptions: ({ navigation }) => ({
      title: '我的订单',
      ...defaultHeader(navigation),
    }),
  },
  BuildingConfig: {
    screen: BuildingScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      ...defaultHeader(navigation),
    })
  },
  ConvertConfig: {
    screen: ConvertScreen,
    navigationOptions: ({ navigation }) => ({
      title: '积分兑换',
      ...defaultHeader(navigation),
    })
  },
  ConvertDetailConfig: {
    screen: ConvertDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: '积分明细',
      ...defaultHeader(navigation, '#fff', {
        headerStyle: {
          backgroundColor: '#259DFC',
          shadowOpacity: 0,
          elevation: 0,
          marginTop: STATUSBAR_HEIGHT
        },
      }),
    })
  },
  JifenbaoHelpConfig: {
    screen: JifenbaoHelpScreen,
    navigationOptions: ({ navigation }) => ({
      title: '了解集分宝',
      ...defaultHeader(navigation),
    })
  },
  WelcomeConfig: {
    screen: WelcomeScreen,
    path: '/welcome',
    navigationOptions: {
      header: null
    },
  }
}

const TimeLimitStack = StackNavigator({
  TimeLimit: {
    screen: TimeLimitScreen,
    path: '/timeLimit',
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Image source={require('../img/time-limit-title.png')} style={{ alignSelf: 'center' }} />,
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: { backgroundColor: '#fff', marginTop: STATUSBAR_HEIGHT },
      headerLeft: (<TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <View style={{ marginLeft: 10 }} >
          <LineIcons name={'arrow-left'} size={18} style={{ color: '#000' }} />
        </View>
      </TouchableOpacity>),
      headerRight: <View></View>
    }),
  },
}, {
    initialRouteName: 'TimeLimit',
  });

const CouponStack = StackNavigator({
  Coupon: {
    screen: CouponScreen,
    path: '/coupon',
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Image source={require('../img/coupon-title.png')} style={{ alignSelf: 'center' }} />,
      headerTitleStyle: { color: '#fff' },
      headerStyle: { backgroundColor: '#F5204C', marginTop: STATUSBAR_HEIGHT },
      header: (props) => <ImageHeader {...props} />
    }),
  },
}, {
    initialRouteName: 'Coupon',
  });

const TabNav = TabNavigator({
  HomeTab: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={focused ? require('../img/home.png') : require('../img/home-outline.png')}
          style={{ width: 22, height: 22 }}
        />
      )
    }
  },
  TimeLimitTab: {
    screen: TimeLimitStack,
    navigationOptions: {
      tabBarLabel: '限时抢',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={focused ? require('../img/time-limit.png') : require('../img/time-limit-outline.png')}
          style={{ width: focused ? 34 : 22, height: focused ? 26 : 22 }}
        />
      ),

    }
  },
  CouponTab: {
    screen: CouponStack,
    navigationOptions: {
      tabBarLabel: '好券',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={focused ? require('../img/coupon.png') : require('../img/coupon-outline.png')}
          style={{ width: 22, height: 18 }}
        />
      )
    }
  },
  MyTab: {
    screen: MyScreen,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={focused ? require('../img/my.png') : require('../img/my-outline.png')}
          style={{ width: 22, height: 22 }}
        />
      )
    }
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // swipeEnabled: true,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#F52354',
      inactiveTintColor: '#C5BBBC',
      style: {
        backgroundColor: '#ffffff'
      },
      tabStyle: {
        width: 20,
      },
      labelStyle: {
        marginBottom: 5
      }
    },
    initialRouteName: 'HomeTab',

  })

// const Navigator = StackNavigator({
//   Home: {
//     screen: TabNav,
//     path: '/',
//     navigationOptions: {
//       header: null
//     },
//   },
//   Search: screenConfig.SearchConfig,
//   Detail: screenConfig.DetailConfig,
//   Order: screenConfig.OrderConfig,  
//   Convert: screenConfig.ConvertConfig,  
//   ConvertDetail: screenConfig.ConvertDetailConfig,  
//   Building: screenConfig.BuildingConfig,  
//   JifenbaoHelp: screenConfig.JifenbaoHelpConfig,  
// }, {
//   initialRouteName: 'Home',
// });

// module.exports = Navigator;







/************************* StackNavigator Config Start *************************/
const StackNavigatorConfig = {
  Home: {
    screen: TabNav,
    path: '/',
    navigationOptions: {
      header: null
    },
  },
  Search: screenConfig.SearchConfig,
  Detail: screenConfig.DetailConfig,
  Order: screenConfig.OrderConfig,
  Convert: screenConfig.ConvertConfig,
  ConvertDetail: screenConfig.ConvertDetailConfig,
  Building: screenConfig.BuildingConfig,
  JifenbaoHelp: screenConfig.JifenbaoHelpConfig,
  Welcome: screenConfig.WelcomeConfig
}

const Navigator = StackNavigator(StackNavigatorConfig, {
  initialRouteName: 'Home',
});

const WelcomeNavigator = StackNavigator(StackNavigatorConfig, {
  initialRouteName: 'Welcome',
});
/************************* StackNavigator Config End *************************/

// module.exports = Navigator;
module.exports = function (props) {
  // debugger;
  if (!props.isFirstLogin)
    return <Navigator screenProps={{ dispatch: props.dispatch }} />
  else
    return <WelcomeNavigator screenProps={{ dispatch: props.dispatch }} />
}

