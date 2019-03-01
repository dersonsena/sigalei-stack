import React from 'react'
import { QueryRenderer } from "react-relay";

import environment from "./CreateRelayEnviroment";

export default function createQueryRenderer(FragmentComponent, config) {
  const { query, variables } = config;
  const QueryRendererWrapper = wrapperProps => {
    return (
      <QueryRenderer
        query={query}
        variables={variables}
        environment={environment}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (props) {
            return <FragmentComponent {...wrapperProps} data={props} />;
          }
          return <div>Loading!</div>;
        }}
      />
    );
  };
  return QueryRendererWrapper;
}
