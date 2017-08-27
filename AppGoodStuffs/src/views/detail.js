
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import NavigatorBar from 'react-native-navbar';
import pageWithB from '../views/pageWithB';
import { addCount } from '../redux/actions/user';


class MyView extends Component {
  constructor(props) {
    debugger;
    super(props);
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
    return (
      <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
        <Text style={{ marginTop: 200, alignSelf: 'center' }}>
          See you on the other nav {this.props.myProp}!
        </Text>
      </TouchableHighlight>
    );
  }
}



class Next extends Component {

  constructor(props) {
    super(props);
  }

  _handleNextPress() {
    const nextRoute = {
      component: MyView,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    };

    debugger;
    const { dispatch } = this.props;
    dispatch(addCount());


    this.props.navigator.push(nextRoute);
  }

  render() {
    return (
      <View style={{ marginTop: 0, alignSelf: 'center' }}>
        <TouchableHighlight onPress={() => this._handleNextPress()}>
          <Text style={{ marginTop: 200, alignSelf: 'center' }}>
            See you on the other nav {this.props.myProp}!
        </Text>
        </TouchableHighlight>
        <Text style={{ marginTop: 10, alignSelf: 'center' }}>
          计数器的值为：{this.props.count}
        </Text>
      </View>
    );
  }
}

function select(store) {
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
    count: store.userStore.count
  }
}


export default connect(select)(Next);
