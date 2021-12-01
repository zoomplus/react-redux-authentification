//system
import React from 'react';

//libs
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

//components
import { Reducer as Authentification } from './Reducers/Authentification/Authentification';

//reducer
const rootReducer = combineReducers({
    Authentification
});

//export store
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));