// lib/withApollo.js
import React from "react";
import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "http://localhost:8001/graphql",
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        // eslint-disable-next-line react/destructuring-assignment
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
