import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import "./page.css";

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <section>
      <h2>DQA Workflow Demo</h2>
      <p>
  There is an integrated workflow opportunity that with the right setup, we can
  leverage to reduce the gap between design and development during define
  through deploy.
</p>
<p>The key touchpoints include:</p>
<ul>
  <li>Design Estimation</li>
  <li>Make DQA a part of the process from the start</li>
  <li>Initial Baseline setting with Figma and Storybook </li>
  <li>Continuous Integration with Figma Tokens synced with github </li>
  <li>Regression testing with Storybook Chromatic (or Virtuoso)</li>{" "}
</ul>
<p>This is a work in progress. </p>

<ul>
  <li>
    Read more in the{" "}
    <a
      href="https://myplanet.jira.com/l/cp/KkAFmysY"
      target="_blank"
      rel="noopener noreferrer"
    >
      docs
    </a>
    .
  </li>
  <li>
    Check out the{" "}
    <a
      href="https://github.com/jacquesramphal/taskbox"
      target="_blank"
      rel="noopener noreferrer"
    >
      git repo
    </a>.
  </li>
</ul>
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
