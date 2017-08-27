// import { NavigationActions } 	from 'react-navigation';
// // import { Navigator } 			from '../../configs/navigator'

// //const route
// const initRoute = 'Home'

// //init state
// // const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams(initRoute));
// /**
//  * simply return the original `state` if `nextState` is null or undefined.
//  */
// export default function welcome(state = {}, action) {
// 	let nextState;
// 	switch (action.type) {
// 		// case 'Login':
// 		// 	nextState = Navigator.router.getStateForAction(NavigationActions.back(),state);
// 		// 	break;
// 		// case 'Logout':
// 		// 	nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }),state);
// 		// 	break;
// 		default:
// 		nextState = {}
// 			// nextState = Navigator.router.getStateForAction(action, state);
// 			break;
// 	}

// 	return nextState || state;
// }

'use strict';

import * as TYPES from '../actions/types';

const initialState = {
	isFirstLogin: true
}

export default function welcome(state = initialState, action) {
	
	switch (action.type) {
		case TYPES.WELCOME_LOGGED:
			return {
				...state,
				isFirstLogin: false,
				status		: 'doing'
			};

		default:
			return state;
	}
}
