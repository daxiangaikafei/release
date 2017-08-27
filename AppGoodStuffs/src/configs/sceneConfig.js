import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const baseConfig = Navigator.SceneConfigs.FloatFromRight;
const popGestureConfig = Object.assign({}, baseConfig.gestures.pop, {
    edgeHitWidth: width / 3
});


const fullPopGestureConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom.gestures.pop, {
    edgeHitWidth: width
});


export const customFloatFromRight = Object.assign({}, {}, {
    gestures: {
        pop: popGestureConfig
    }
});


export const customFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom, {
    gestures: {
        pop: fullPopGestureConfig
    }
});
