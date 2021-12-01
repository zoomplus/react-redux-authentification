//system
import React from 'react';

//libs
import { Routes, Route } from "react-router-dom";

//pages
import Main from './Main';
import Private from "./Private";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/private' element={<Private />}/>
        </Routes>
    );
};

export default Router;
