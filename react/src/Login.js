/* global document */
import React, { useState } from "react";
import fetchQuery from "./fetchQuery";
import graphql from "babel-plugin-relay/macro";
import PropTypes from 'prop-types';

import "./index.css";
import FormField from "./FormField";

const query = graphql`
  query LoginQuery($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const fields = [
    {
      name: 'email',
      type: 'email',
      label: 'E-mail:',
      value: email,
      onChange: e => setEmail(e.target.value)
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password:',
      value: password,
      onChange: e => setPassword(e.target.value)
    }
  ];

  const handleSubmit = e => {
    fetchQuery(query, { email, password }).then(response => {
      if (!response.login) {
        setError(true);
        return;
      }

      setError(false);
      onLogin(response.login.token);
    });

    e.preventDefault();
  };

  return (
    <div className="container">
      <div>
        <div className="block">
          <h1>Enter the plataform</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {
            fields.map((field, key) => {
              return <FormField key={key} { ...field } />
            })
          }
          
          <button type="submit">
            Login
          </button>

          <div className="block">
            { error ? <span className="error">Login error</span> : null }
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
