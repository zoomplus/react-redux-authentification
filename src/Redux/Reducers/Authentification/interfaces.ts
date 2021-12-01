import { IAction } from "../../interfaces";

export interface AuthentificationState {
    token: string;
}

export interface AuthTestAction extends IAction {
    payload: any
}