//system
import React from 'react';

//libs
import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";

//sagas
import AuthentificationSaga from './Sagas/Authentification/Authentification';

//components
import { Reducer as Authentification } from './Reducers/Authentification/Authentification';

//reducer
const rootReducer = combineReducers({
    Authentification
});

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//export store
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

// Then run the saga
sagaMiddleware.run(AuthentificationSaga)