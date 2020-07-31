import React from 'react';
import { Link } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const Navigation = (props) => {
    const {isAuthenticated, loginWithRedirect, logout} = Auth0Provider();
  return (
    <div className="header">
        {!isAuthenticated && (
            <ul className="nav nav-pills pull-right">
                <li><Link to="/">Home</Link></li>
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            </ul>
        )}
        {isAuthenticated && (
            <ul className="nav nav-pills pull-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <button onClick={() => logout()}>Log out</button>
            </ul>
        )}

      <h3 className="text-muted">Securing React</h3>
    </div>
  );
}

export default Navigation; 
