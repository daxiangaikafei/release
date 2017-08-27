
//modules
import React, { Component } from 'react';
import CodePush from "react-native-code-push";
// import PropTypes                from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

//configs
import Navigator from './configs/navigator';

/**
 * the root entry
 */
class Root extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        CodePush.sync({
            installMode: CodePush.InstallMode.IMMEDIATE,
            updateDialog: true
        });
    }

    render() {
        return <Navigator  { ...this.props} onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);
            if (prevScreen !== currentScreen) {
                if (Platform.OS == 'ios') {
                    switch (currentScreen) {
                        case 'HomeTab':
                        case 'TimeLimit':
                        case 'Order':
                        case 'Convert':
                        case 'Building':
                        case 'JifenbaoHelp':
                            StatusBar.setBarStyle('dark-content', true);
                            break;
                        case 'Coupon':
                        case 'MyTab':
                        case 'ConvertDetail':
                        case 'Search':
                            StatusBar.setBarStyle('light-content', true);
                            break;
                        default:
                            StatusBar.setBarStyle('default', true);
                            break;
                    }
                } else {
                    switch (currentScreen) {
                        case 'HomeTab':
                        case 'TimeLimit':
                        case 'Order':
                        case 'Convert':
                        case 'Building':
                        case 'Detail':
                        case 'JifenbaoHelp':
                            StatusBar.setBarStyle('dark-content', true);
                            StatusBar.setBackgroundColor('#fff');
                            break;
                        case 'Coupon':
                        case 'Search':
                            StatusBar.setBarStyle('light-content', true);
                            StatusBar.setBackgroundColor('#FB354E');
                            break;
                        case 'MyTab':
                            StatusBar.setBarStyle('light-content', true);
                            StatusBar.setBackgroundColor('#F86965');
                            break;
                        case 'ConvertDetail':
                            StatusBar.setBarStyle('light-content', true);
                            StatusBar.setBackgroundColor('#259DFC');
                            break;
                        default:
                            StatusBar.setBarStyle('default', true);
                            break;
                    }
                }
            }
        }}
        />

    }
}

/**
 * props needed value require here
 */
// Root.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     // routInfo: PropTypes.object.isRequired,
// };

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

/**
 * state connect
 * @param {* storage in react-native} store 
 */
function mapStateToProps(store) {

    return {
        isFirstLogin: store.wlcmStore.isFirstLogin
    }
}

export default connect(mapStateToProps)(Root);
