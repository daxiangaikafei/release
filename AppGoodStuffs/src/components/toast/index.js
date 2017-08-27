import Toast from 'react-native-root-toast';

/**
 * msg : toast information
 * duration : toast show time
 * positions: toast show position
 * shadow   : show shaow [blooen]
 */
export default  function(options){

    Toast.show(options.msg, {
        backgroundColor:options.backgroundColor||'#000',
        duration: options.duration || Toast.durations.SHORT , // toast显示时长
        position: options.positions || Toast.positions.BOTTOM, // toast位置
        shadow: true, // toast是否出现阴影
        animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
        hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
        delay: 0, // toast显示的延时g
        onShow: options.onShow,
        onShown: options.onShown,
        onHide: options.onHide,
        onHidden: options.onHidden,
    });
}