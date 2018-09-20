import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as register from '../reducer/register';
let store = createStore(
  combineReducers({...register}),
  applyMiddleware(thunk),
  
  // 触发 redux-devtools
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;