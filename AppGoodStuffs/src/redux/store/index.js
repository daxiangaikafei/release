'use strict';

import { applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// const logger = store => next => action => {
// 	if(typeof action === 'function') console.log('dispatching a function');
// 	else console.log('dispatching', action);
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	return result;
// }

const _middlewares = [
	// logger,
	thunk
];
const middleware = applyMiddleware(..._middlewares);
const createAppStore = middleware(createStore);

export default function configureStore(onComplete: () => void) {

	const store = autoRehydrate()(createAppStore)(reducers);
	// const store = createAppStore(reducers,autoRehydrate());
	// 	autoRehydrate 用storage中的数据去恢复store中的数据，简单的逻辑合并，state变更后，storage做相应的变更
	//	简单的理解，就是stroe在丢失的情况下，可以从storage中恢复，故此理解为增强剂。
	let opt = {
		storage: AsyncStorage,
		transform: [],
		//whitelist: ['userStore'],
		//blacklist: ['userStore'],
		// blacklist 黑名单数组，可以忽略一些 reducers 中的 key。
		// whitelist 白名单数组，一旦设置，其他的 key 都会被忽略。
		// storage 一个 Engine，例如 LocalStorage 和 AsyncStorage
		// transforms 在 rehydration 和 storage 阶段被调用的转换器
		// debounce storage 操作被调用的频度。
		// store redux store 我们要存储的 store。
		// config 对象
	};
	persistStore(store, opt, onComplete);

	return store;
}