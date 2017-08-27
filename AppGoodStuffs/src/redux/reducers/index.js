'use strict';

import userReducer 			from './user';
import wlcmReducer 			from './welcome';
import { combineReducers } 	from 'redux';

export default combineReducers({
	userStore	: userReducer,
	wlcmStore	: wlcmReducer
});