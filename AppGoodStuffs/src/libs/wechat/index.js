import * as WeChat from 'react-native-wechat';
import { WeChatConfig } from '../../configs/sdkConfig'
import Toast from '../../components/toast/';
import {
    Alert
} from 'react-native';
import { userLogin } from '../../redux/actions/user';

/**
 * register function
 */
var wxInit = function () {
    try {

        WeChat.registerApp(WeChatConfig.appId);//从微信开放平台申请
    }
    catch (e) {
        Toast({
            msg: WeChatConfig.info.registerError + (e.name || e),
            duration: WeChatConfig.time.duration
        })
    }
}
module.exports.wxInit = wxInit;

/**
 * send login request from wx
 */
var wxLogin = function (target, cb) {

    WeChat.isWXAppInstalled()
        .then((installed) => {

            installed &&
                WeChat.sendAuthRequest(WeChatConfig.api.loginRequset)
                    .then((result) => {

                        // get code success 
                        if (result.errCode == 0) {

                            const userDispatch = target.props.screenProps.dispatch;
                            userDispatch(userLogin(result, target, cb));
                        }
                        else
                            Toast({
                                msg: WeChatConfig.info.loginError,
                                onHidden: cb(target, result)
                            })
                    })
                    .catch((e) => {

                        // error code show
                        if (WeChatConfig.info.hasOwnProperty('code-' + e.code))
                            Toast({
                                msg: WeChatConfig.info['code-' + e.code],
                                duration: WeChatConfig.time.duration,
                            })
                        else
                            Toast({
                                msg: e.name || WeChatConfig.info.systemError,
                                duration: WeChatConfig.time.duration,
                            })

                    })
            // for debug
            if (!installed) {
                const userDispatch = target.props.screenProps.dispatch;
                // debugger;
                userDispatch(userLogin({
                    code: 1122,
                }, target, cb));
            }

            // no install 
            // !installed &&
            //     Alert.alert(
            //         '提示',
            //         WeChatConfig.info.noInstalled,
            //         { cancelable: true }
            //     )
        })
        .catch((e) => {

            Toast({
                msg: WeChatConfig.info.versionError,
                duration: WeChatConfig.time.duration
            })

        })
}
module.exports.wxLogin = wxLogin;


/**
 * Library wechat
 */
export default WeChatLibs = {
    wxInit,
    wxLogin
}