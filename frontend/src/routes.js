import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
=======
import { BrowserRouter, Route } from "react-router-dom";
>>>>>>> 1f2dcbcb7af24b5baba1bdbcfdc6beeab2d7830f

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
<<<<<<< HEAD
            <Route path="/dev/:id" component={Main} />
=======
            <Route path="/main" component={Main} />
>>>>>>> 1f2dcbcb7af24b5baba1bdbcfdc6beeab2d7830f
        </BrowserRouter>
    );
}