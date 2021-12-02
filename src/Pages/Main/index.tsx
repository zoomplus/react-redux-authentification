import React from 'react';
import {useDispatch, useSelector} from "react-redux";
// import { testActionCreator } from "../../Redux/Reducers/Authentification/Authentification";
import {RootState} from "../../Redux/interfaces";
import { Formik, Field } from 'formik';
import {getLoginTokenRequest} from "../../Redux/Reducers/Authentification/Authentification";

const Main = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState): string => state.Authentification.token);


    return (
        <div>
            main home page

            this token is {token}
            <Formik
                initialValues={{ login: '', password: '' }}
                onSubmit={(values) => {
                    dispatch(getLoginTokenRequest(values));
                    // console.log(getLoginTokenRequest(values));
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Field type='input' name='login' value={values.login} />
                        <Field type='input' name='password' value={values.password} />
                        <button type='submit'>
                            login
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Main;
