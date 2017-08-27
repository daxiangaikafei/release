import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, StyleSheet, Image, Dimensions, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Header } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
class CommonStatusBar extends Component {
  constructor() {
    super();
    this.state = {
  };
}
  componentDidMount() {
  }
  // componentWillFocus(nextProps, nextState) {
  //   const { statusStyle, state } = this.props;
  //   debugger
  //   if(state.routeName == 'HomeTab') {
  //     statusStyle.barStyle='dark-content'
  //   }  
  // }
  
  render() {
    const { statusStyle, state } = this.props;    
    return (
      <View style={statusStyle.height}>
        <StatusBar translucent {...statusStyle} />
      </View>
    )
  }
};
CommonStatusBar.defaultProps = {
  statusStyle: {
    barStyle: 'default',
    backgroundColor: '#fff',
    height: STATUSBAR_HEIGHT,
  }
  
}
export default CommonStatusBar;

const styles = StyleSheet.create({

})