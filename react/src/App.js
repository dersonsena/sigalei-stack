// App.js
import React from "react";
import graphql from 'babel-plugin-relay/macro';
import createQueryRenderer from './CreateQueryRender'

class App extends React.Component {
  render() {
    console.log(this.props);
    return <div>olaaa</div>;
  }
}


export default  createQueryRenderer(App, {
  query: graphql`
    query AppQuery {
      user(id: "f229173d-1a54-43c3-9a81-5d02b6fb1093") {
        id
        email
      }
    }
  `
});

