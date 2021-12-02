//initial
import {
    AuthentificationState,
    GetLoginTokenErrorInterface,
    GetLoginTokenRequestInterface,
    GetLoginTokenSuccessInterface
} from "./interfaces";
import {loginAndGetTokenInterface} from "../../../Api/Authentificate/loginAndGetToken";

const initialState: AuthentificationState = {
    token: '',
    error: ''
}

//action types
export const GET_LOGIN_TOKEN_REQUEST = 'GET_LOGIN_TOKEN_REQUEST';
export const GET_LOGIN_TOKEN_SUCCESS = 'GET_LOGIN_TOKEN_SUCCESS';
export const GET_LOGIN_TOKEN_ERROR = 'GET_LOGIN_TOKEN_ERROR';

//reducer
export const Reducer = (state = initialState, action: {type: string; payload: any}) => {
    switch (action.type) {
        case GET_LOGIN_TOKEN_REQUEST: {
            return {
                ...state
            };
        }
        case GET_LOGIN_TOKEN_SUCCESS: {
            return {
                token: action.payload
            }
        }
        case GET_LOGIN_TOKEN_ERROR: {
            return {
                error: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

//action creators
export const getLoginTokenRequest = (payload: loginAndGetTokenInterface): GetLoginTokenRequestInterface => {
    return {
        type: GET_LOGIN_TOKEN_REQUEST,
        payload
    }
}

export const getLoginTokenSuccess = (payload: string): GetLoginTokenSuccessInterface => {
    return {
        type: GET_LOGIN_TOKEN_SUCCESS,
        payload
    }
}

export const getLoginTokenError = (payload: string): GetLoginTokenErrorInterface => {
    return {
        type: GET_LOGIN_TOKEN_ERROR,
        payload
    }
}