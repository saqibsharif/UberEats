import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers';

const rootReducer =  combineReducers({cartReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));