import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./header.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Kallare</h1>
      </div>
      <div>
        <Button
          primary
          size="large"
          onClick={onCreateAccount}
          label="Primary"
        />
        <Button size="large" onClick={onLogin} label="Secondary" />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
