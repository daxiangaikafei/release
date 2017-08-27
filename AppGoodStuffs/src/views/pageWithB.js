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

class pageWithB extends Component {
//   _handleBackPress() {
//     this.props.navigator.pop();
//   }

//   _handleNextPress(nextRoute) {
//     this.props.navigator.push(nextRoute);
//   }

 constructor(props) {
    super(props);
    this.state = {
      username: 'sup1',
      password: '123456',
      btnFlag: true,
    };
  }

  render() {
    
    return(
      <TouchableHighlight>
        <Text style={{marginTop: 200, alignSelf: 'center'}}>
          See you on the other nav {this.props.myProp}!
        </Text>
      </TouchableHighlight>
    );
  }
}

function select(store) {
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
  }
}


export default connect(select)(pageWithB);