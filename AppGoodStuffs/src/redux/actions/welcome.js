'use strict';

import * as TYPES from './types';

// logged
export function logged(opt) {
    return (dispatch) => {
        dispatch({ 'type': TYPES.WELCOME_LOGGED });
    }
}