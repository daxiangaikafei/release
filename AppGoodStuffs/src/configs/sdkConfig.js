/**
 * wx sdk config here
 */
var WeChatConfig = {
    appId: 'wx5b704a5f3467b604',
    secret: 'ae05a470863ff5bdac0c379d8c18220d',
    api: {
        loginRequset: 'snsapi_userinfo'
    },
    apiURL: {
        login: 'http://192.168.132.43/api/item/user/login?code=%s'
        // login:'https://api.weixin.qq.com/sns/oauth2/access_token?appid=%s&secret=%s&code=%s&grant_type=authorization_code'
    },
    info: {
        noInstalled: '请先去应用商店下载微信',
        loginSuccess: '微信登录成功',
        loginError: '微信登录异常,请稍候再试',
        systemError: '系统异常',
        versionError: '微信版本异常,请重新安装!',
        registerError: '微信注册失败!',
        'code-2': '您取消了微信的授权登录',
        'code-40029': '无效的Code！'
    },
    time: {
        duration: 1000
    }
}

/**
 * taobao sdk config here
 */
var TaoBaoConfig = {
    pid: 'mm_124056678_0_0',
    forceH5: false,
    info: {
        isLoginError: '淘宝登录SDK校验异常',
        LoginError: '淘宝登录SDK异常',
        getUserError: '淘宝登录SDK获取用户信息异常',
        registerError: '淘宝SDK注册失败!',
        initError: '淘宝SDK初始化失败!',
        ShowError:'淘宝SDK页面跳转异常',
        'code-3002': '用户退出了淘宝',
        // 'code-40029':'无效的Code！'
    },
    time: {
        duration: 1000
    }
}

/**
 * export modules 
 */
module.exports = {
    WeChatConfig,
    TaoBaoConfig
};