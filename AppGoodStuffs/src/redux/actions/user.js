'use strict';

import util from 'util'
import * as TYPES from './types';
import { Alert } from 'react-native';
import { WeChatConfig } from '../../configs/sdkConfig'
import Toast from '../../components/toast/';
import { fetchHanderAction } from '../../libs/common/fetch'

// logdoing
export function userLogin(opt, target, cb) {

	return fetchHanderAction()({
		url: util.format(WeChatConfig.apiURL.login, opt.code),
		method: 'GET'
	}, function (response) {

		// login error toast
		if (WeChatConfig.info.hasOwnProperty('code' + response.code)) {
			Toast({
				msg: WeChatConfig.info['code' + response.code],
				duration: WeChatConfig.info.duration,
			})
		}
		else {

			//dispatch action
			const { dispatch } = target.props.screenProps;
			dispatch({ 'type': TYPES.LOGGED_IN, user: response.result });

			//success toast
			Toast({
				msg: WeChatConfig.info.loginSuccess,
				onshow: cb(target, response)
			})
		}
	})

}