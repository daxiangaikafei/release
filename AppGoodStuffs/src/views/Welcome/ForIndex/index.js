import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import * as WeChat from 'react-native-wechat';

import WeChatLibs from '../../../libs/wechat/'
import { logged } from '../../../redux/actions/welcome';


export default class ForIndex extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * register wx
     */
    componentDidMount() {

        WeChatLibs.wxInit()
    }

    /**
     * send wx request
     */
    goLogin() {

        WeChatLibs.wxLogin(this, this._goLoginCallBack);
    }

    /**
     * wx callback
     * @param {* this} self 
     * @param {* wx return value} result 
     */
    _goLoginCallBack(self, result) {

        self.goIndex();
    }

    /**
     * route to index page
     */
    goIndex() {

        const { dispatch } = this.props.screenProps;
        dispatch(logged());

        const { navigate } = this.props.navigation;
        navigate('Home')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.topIcon}>
                    <Image
                        source={require('../../../img/icon.png')}
                        style={{ resizeMode: 'cover' }}
                    />
                </View>
                <View style={styles.topTitle}>
                    <Text style={styles.topTitleText}>全球精品 | 智能导购</Text>
                </View>
                <View style={styles.topDesc}>
                    <Text style={styles.topDescText}>我有好物您身边的导购专家</Text>
                </View>
                <View style={styles.middleImage}>
                    <Image style={styles.middleImageShow}
                        source={require('../img/goods.png')}
                    />
                </View>
                <TouchableOpacity
                    style={styles.wxLogin}
                    onPress={this.goLogin.bind(this)}
                >
                    <View style={styles.wxLoginView}>
                        <Image
                            style={styles.wxLoginImage}
                            source={require('../../../img/wechat.png')}
                        />
                        <Text style={styles.wxLoginText}>微信快捷登录</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.goIndex}
                    onPress={this.goIndex.bind(this)}
                >
                    <View style={styles.goIndexView}>
                        <Text style={styles.goIndexText}>去体验</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    topIcon: {
        // marginTop: 94
    },
    topTitle: {
        marginTop: 15
    },
    topTitleText: {
        fontSize: 15,
        color: '#342427',
        fontFamily: 'PingFangSC-Medium'
    },
    topDesc: {
        marginTop: 13,
    },
    topDescText: {
        fontSize: 13,
        color: '#4f4345',
        fontFamily: 'PingFangSC-Light'
    },
    middleImage: {
        marginTop: 35
    },
    middleImageShow: {
        height: 200,
        resizeMode: Image.resizeMode.contain
    },
    wxLogin: {
        marginTop: 30,
        backgroundColor: '#f81948',
        width: 340,
        height: 50,
        borderRadius: 6,
        shadowColor: '#f81948',
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 7,
        shadowOpacity: 0.8,
    },
    wxLoginView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    wxLoginText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'PingFangSC-Medium',
        marginLeft: 10
    },
    goIndex: {
        borderWidth: 0.5,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: '#f81948',
        borderStyle: 'solid',
        width: 100,
        marginTop: 20,
        height: 35,
        borderRadius: 50,
    },
    goIndexView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    goIndexText: {
        color: '#f81948',
        fontSize: 15,
        fontFamily: 'PingFangSC-Medium'
    }

});