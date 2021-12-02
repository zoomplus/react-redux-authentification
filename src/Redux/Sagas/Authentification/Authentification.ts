import { call, put, takeEvery } from 'redux-saga/effects'
import { loginAndGetToken } from '../../../Api/Authentificate/loginAndGetToken';
import {
    GET_LOGIN_TOKEN_REQUEST,
    getLoginTokenError,
    getLoginTokenSuccess
} from "../../Reducers/Authentification/Authentification";
import {GetLoginTokenRequestInterface} from "../../Reducers/Authentification/interfaces";
import {AxiosResponse} from "axios";


// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: GetLoginTokenRequestInterface) {
    try {
        //@ts-ignore
        const res: AxiosResponse<any, any> = yield call(loginAndGetToken, action.payload);

        yield put(getLoginTokenSuccess(res.data['user-token']));
    } catch {
        yield put(getLoginTokenError('Не правильный логин или пароль'));
    }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* AuthentificationSaga() {
    yield takeEvery(GET_LOGIN_TOKEN_REQUEST, fetchUser);
}

export default AuthentificationSaga;