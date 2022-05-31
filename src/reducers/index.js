import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { send } from './AminReducers';


const rootReducer = combineReducers({ send });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));