import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { check, createNew, error, login, send } from './AminReducers';


const rootReducer = combineReducers({ send, check, createNew, login, error });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));