import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Home from './Home'
import Leagues from './Leagues'
import { Route, Switch } from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications'
import Signup from './Signup'
import Profile from './Profile'
App.propTypes = {
    
};

function App(props) {
    return (
      <div className = 'background'>
      <ToastProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/leagues/:leaguename" component = {Leagues}/>
          <Route path="/signup" component = {()=><Signup act = "Sign up" />}/>
          <Route path="/login" component = {()=> <Signup act = "Login" />}/>
          <Route path="/profile" component = {Profile}/>
        </Switch>
        </ToastProvider>
      </div>
    );
}

export default App;
