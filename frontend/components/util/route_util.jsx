import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => 
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
}

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);