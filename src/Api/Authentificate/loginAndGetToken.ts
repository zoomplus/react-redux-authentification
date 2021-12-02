import { api } from '../api';
import {AxiosPromise} from "axios";

export interface loginAndGetTokenInterface {
    login: string;
    password: string;
}

export interface responseAuthApi {
    lastLogin: number,
    userStatus: string,
    created: number,
    accountType: string,
    ownerId: string,
    login: string,
    socialAccount: string,
    oAuthIdentities: null,
    name: null,
    ___class: string,
    blUserLocale: string,
    "user-token": string,
    updated: null,
    objectId: string,
    email: string
}

export const loginAndGetToken = ({login, password}: loginAndGetTokenInterface): AxiosPromise<responseAuthApi> => {
    console.log(login);
    console.log(password);

    return api.post('/users/login', {
        login,
        password
    })
}