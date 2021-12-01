//initial
import {
    AuthentificationState,
    AuthTestAction
} from "./interfaces";

const initialState: AuthentificationState = {
    token: ''
}

//action types
export const TEST_ACTION = 'TEST_ACTION';

//reducer
export const Reducer = (state = initialState, action: AuthTestAction) => {
    switch (action.type) {
        case TEST_ACTION: {
            return {
                token: action.payload
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
}

//action creators
export const testActionCreator = (payload: string) => {
    return {
        type: TEST_ACTION,
        payload
    }
}