import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, StyleSheet, Image } from 'react-native';

class BuildingScreen extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image 
          source={require('../img/developing.png')}
          style={{}}
        />
        <Text style={{marginTop:20}}>板块正在开发中...</Text>
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

export default connect(select)(BuildingScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});