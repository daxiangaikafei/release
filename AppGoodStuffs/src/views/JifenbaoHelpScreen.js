import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

class JifenbaoHelpScreen extends Component {
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
        <ScrollView>
          <Image 
            source={require('../img/jifenbao-help.png')}
            style={{}}
          />
        </ScrollView>
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

export default connect(select)(JifenbaoHelpScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});