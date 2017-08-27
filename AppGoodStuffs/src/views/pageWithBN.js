// class pageWithBN extends Component {
//   _handleBackPress() {
//     this.props.navigator.pop();
//   }

//   _handleNextPress(nextRoute) {
//     this.props.navigator.push(nextRoute);
//   }

//   render() {
//     const nextRoute = {
//       component: MyView,
//       title: 'Bar That',
//       passProps: { myProp: 'bar' }
//     };
//     return(
//       <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
//         <Text style={{marginTop: 200, alignSelf: 'center'}}>
//           See you on the other nav {this.props.myProp}!
//         </Text>
//       </TouchableHighlight>
//     );
//   }
// }

// function select(store) {
//   return {
//     isLoggedIn: store.userStore.isLoggedIn,
//     user: store.userStore.user,
//   }
// }


// export default connect(select)(pageWithBN);



'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  Image,
  AlertIOS,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';

import ModalBox from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';


class MyView extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const nextRoute = {
      component: MyView,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    };
    return(
      <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
        <Text style={{marginTop: 200, alignSelf: 'center'}}>
          See you on the other nav {this.props.myProp}!
        </Text>
      </TouchableHighlight>
    );
  }
}

// class pageWithBN extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: 'sup1',
//       password: '123456',
//       btnFlag: true,
//     };
//   }
//   render() {
//     const nextRoute = {
//       component: MyView,
//       title: 'Bar That',
//       passProps: { myProp: 'bar' }
//     };
//     return (
//       <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
//         <Text style={{ marginTop: 200, alignSelf: 'center' }}>
//           See you on the other nav {this.props.myProp}!
//         </Text>
//       </TouchableHighlight>
//     );
//   }
// }



function select(store) {
  return {

  }
}


export default connect(select)(MyView);




