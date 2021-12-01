import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { testActionCreator } from "../../Redux/Reducers/Authentification/Authentification";
import {RootState} from "../../Redux/interfaces";

const Main = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState): string => state.Authentification.token);

    const testingAction = () => {
        dispatch(testActionCreator('test_token'));
    }

    return (
        <div>
            main home page

            this token is {token}
            <button onClick={testingAction}>TEST TOKEN</button>
        </div>
    );
};

export default Main;
