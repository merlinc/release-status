import React from "react";
import { ApolloProvider } from "react-apollo";

export const ErrorProvider = props => {
  // This is just a link that swallows all operations and returns the same thing
  // for every request: The specified error.
  const link = new ApolloLink(operation => {
    return new Observable(observer => {
      observer.next({
        errors: props.graphQLErrors || [
          { message: "Unspecified error from ErrorProvider." }
        ]
      });
      observer.complete();
    });
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
