import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import NavigatorBar from 'react-native-navbar';
import DetailPage from './detail';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  handleNavigationRequest() {
    let { router } = this.props;
    router.toPageWithBN();
  }

  render() {
    // debugger;
    let { user } = this.props;
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          ...this.props,
          component: DetailPage,
          title: '我有好物',
          passProps: {
            myProp: '测试传递属性',
            count: this.props.count
          },
          rightButtonTitle: '登录',
          onRightButtonPress: () => this.handleNavigationRequest(),
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function select(store) {
  // debugger;
  return {
    isLoggedIn: store.userStore.isLoggedIn,
    user: store.userStore.user,
    count: store.userStore.count
  }
}

export default connect(select)(Main);
