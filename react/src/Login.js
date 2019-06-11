/* global document */
import React from "react";
import fetchQuery from "./fetchQuery";
import graphql from "babel-plugin-relay/macro";

import "./index.css";
import FormField from "./FormField";

const query = graphql`
  query LoginQuery($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false
    };

    this.fields = [
      {
        name: 'email',
        type: 'email',
        label: 'E-mail:',
        onChange: this.handleChange
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password:',
        onChange: this.handleChange
      }
    ];
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  };

  handleClick = () => {
    const { onLogin } = this.props;
    const email = this.state.email;
    const password = this.state.password;

    fetchQuery(query, { email, password }).then(response => {
      if (!response.login) {
        this.setState({ error: true });
        return;
      }

      this.setState({ error: false });
      onLogin(response.login.token);
    });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <div>
          <div className="block">
            <h1>Enter the plataform</h1>
          </div>

          {
            this.fields.map((field, key) => {
              return <FormField key={key} value={this.state[field.name]} { ...field } />
            })
          }
          
          <button type="button" onClick={this.handleClick}>
            Login
          </button>
          <div className="block">
            { error ? <span className="error">Login error</span> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
