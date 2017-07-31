import React from 'react';

import './index.scss';

const WelcomeComponent = ({ onClickSignIn, onClickSignUp }) => (
  <div className="welcome_component">
    <p className="description">Welcome to Visual Comic Reader</p>
    <p className="info">You can login with your mail to save your read comics</p>
    <div className="buttons">
      <button onClick={onClickSignIn}>Sign in</button>
      <button onClick={onClickSignUp}>Sign up</button>
    </div>
  </div>
);

export default WelcomeComponent;

