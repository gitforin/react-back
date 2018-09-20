import React from 'react';
//import { Router, Route, IndexRoute, Link } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
// import PageIndex from '@/pages/index';
// import Login from '@/pages/login';
// import NotFound from '@/pages/error';
import asyncComponent from '../config/asyncComponent';
// 异步路由
const Login = asyncComponent(() => import("@/pages/login"));
const Register = asyncComponent(() => import("@/pages/register"));
const NotFound = asyncComponent(() => import("@/pages/error"));

export default class RouteMap extends React.Component {
    render() {
        return ( 
        	<Switch>
        	 	<Route path="/" exact render={() => (<Redirect to="/staff/login" />)} />
                <Route path = '/staff/register'   component = { Register } />
				<Route path = '/staff/login'   component = { Login } />
				<Route path = '*' component = { Login } />
            </Switch>
        )
    }
}