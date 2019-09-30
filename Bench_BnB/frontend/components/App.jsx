import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
      <AuthRoute exact={true} path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;