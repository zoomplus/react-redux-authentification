import { IAction } from "../../interfaces";

export interface AuthentificationState {
    token: string;
    error?: string;
}

export interface PayloadGetLoginTokenRequestInterface {
    login: string;
    password: string;
}

export interface GetLoginTokenRequestInterface extends IAction {
    payload: PayloadGetLoginTokenRequestInterface
}

export interface GetLoginTokenSuccessInterface extends IAction {
    payload: string;
}

export interface GetLoginTokenErrorInterface extends IAction {
    payload: string;
}