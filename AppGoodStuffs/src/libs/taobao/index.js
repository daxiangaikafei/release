import RNAlibcSdk from 'react-native-alibc-sdk';
import { TaoBaoConfig } from '../../configs/sdkConfig'
import Toast from '../../components/toast/';
import {
    Alert
} from 'react-native';
import util from 'util'

/**
 * register function
 */
var tbInit = function () {
    try {
        RNAlibcSdk.init(TaoBaoConfig.pid, TaoBaoConfig.forceH5, (err) => {
            if (err)
                Toast({
                    msg: TaoBaoConfig.info.initError + (e.name || e),
                    duration: TaoBaoConfig.time.duration
                })
        }
        );
    }
    catch (e) {
        Toast({
            msg: TaoBaoConfig.info.registerError + (e.name || e),
            duration: TaoBaoConfig.time.duration
        })
    }
}
module.exports.tbInit = tbInit;

/**
 * private function for taobao link 
 */
var _tbShow = function (link) {

    // var _url = {
    //     type: "url",
    //     payload: link
    // };
    var _url= {type: "detail", payload: "539152008480"};
    debugger;
    RNAlibcSdk.show(_url, (err, info) => {
        if (err) {
            debugger;
            if (TaoBaoConfig.info.hasOwnProperty('code-' + err.code))
                Toast({
                    msg: TaoBaoConfig.info['code-' + err.code],
                    duration: TaoBaoConfig.time.duration,
                })
            else
                Toast({
                    msg: err.msg || err,
                    duration: TaoBaoConfig.time.duration,
                })
        }

    });
}

/**
 * go taobao link with userinfo 
 * @param {*taobao link} link 
 */
var tbGoLinkWithUser = function (link) {
    debugger;
    RNAlibcSdk.isLogin((err, isLogin) => {
        if (!err) {
            debugger;
            if (!isLogin)
                RNAlibcSdk.login((err, userInfo) => {
                    debugger;
                    if (!err)
                        _tbShow(link)
                    else
                        Alert.alert(
                            '异常提示',
                            TaoBaoConfig.info.LoginError + err,
                            { cancelable: true }
                        )
                });
            else _tbShow(link)
        }
        else
            Alert.alert(
                '异常提示',
                TaoBaoConfig.info.isLoginError + err,
                { cancelable: true }
            )
    });
}
module.exports.tbGoLinkWithUser = tbGoLinkWithUser;

/**
 * go taobao link without userinfo
 * @param {*taotao link } link 
 */
var tbGoLinkWithoutUser = function (link) {
    _tbShow(link)
}
module.exports.tbGoLinkWithoutUser = tbGoLinkWithoutUser;


/**
 * Library taobao
 */
export default TaoBaoLibs = {
    tbInit,
    tbGoLinkWithUser,
    tbGoLinkWithoutUser
}