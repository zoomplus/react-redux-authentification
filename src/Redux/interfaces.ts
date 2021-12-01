import {
    DefaultRootState
} from "react-redux";
import { AuthentificationState } from "./Reducers/Authentification/interfaces";

export interface IAction {
    type: string
}

export interface RootState extends DefaultRootState {
    Authentification: AuthentificationState,
}

export * from './Reducers/Authentification/interfaces';
