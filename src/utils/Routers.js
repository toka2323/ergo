import React, { lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Dashboard = lazy(() => import('../views/Dashboard/Dashboard'));
const Calendar = lazy(() => import('../views/Calendar/CalendarEvent'));
const Patient = lazy(() => import('../views/Patient/Patient'));
const Login = lazy(() => import('../views/Login/Login'));
const NotFound = lazy(() => import('../views/NotFound/NotFound'));

const Routers = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/calendar' component={Calendar} />
                <Route path='/patient' component={Patient} />
                <Route path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )

}

export default Routers;