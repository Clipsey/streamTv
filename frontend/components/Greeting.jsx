import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = ({currentUser, logout}) => {
  let greetingDisplay = "";

  if (currentUser) {
    greetingDisplay = (
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    greetingDisplay = (
      <div>
        <Link to="/signup"></Link>
        <Link to="/login"></Link>
      </div>
    )
  }

  return (
    greetingDisplay
  );
}