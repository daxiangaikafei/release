import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
// import SplashScreen from '@remobile/react-native-splashscreen';
import ForIndex from './ForIndex';

export default class Introduction extends Component {

    componentDidMount() {
        // SplashScreen.hide();
    }

    render() {
        return (
            <Swiper>
                <View style={styles.item}>
                    <Image
                        source={require('./img/page_0.png')}
                        style={{ width: '100%', flex: 1, resizeMode: 'cover' }}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        source={require('./img/page_1.png')}
                        style={{ width: '100%', flex: 1, resizeMode: 'cover' }}
                    />
                </View>
                <ForIndex {...this.props}/>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    }
});