import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, StyleSheet, Image, Dimensions, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Header } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';

const ImageHeader = props => (
  <View style={{ backgroundColor: '#fff' }}>
    <Image
      style={styles.img}
      source={require('../img/navigator-bg.png')}
      // resizeMode={Image.resizeMode.cover}
      // resizeMethod="resize"
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default ImageHeader;

const styles = StyleSheet.create({
  img: {
    ...StyleSheet.absoluteFillObject,
    width:null,height:null,
    resizeMode:'cover',
    
  }
})