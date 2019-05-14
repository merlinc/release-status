import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { ApolloProvider } from "react-apollo";

import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

const globalMocks = {
  // Todo: () => ({
  //   text: () => 'faker.sentence()',
  //   completed: () => 'faker.random.boolean()',
  // }),
  list: () => ({
    list: [
      {
        project: "p11",
        org: "o11"
      }
    ]
  }),
  User: () => ({
    name: () => "faker.name.findName()"
  })
};

// Fill this in with the schema string
const schemaString = `
type Config {
  org: String
  project: String!
}

# the schema allows the following query:
type Query {
  list: [Config]
}
`;

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs: schemaString });

// import schema from '../../release-status-graphql/src/graphql/typedefs.graphql';

/**
 * Given a map of mock GraphQL resolver functions, merge in a map of
 * desired mocks. Generally, `target` will be the default mocked values,
 * and `input` will be the values desired for a portal example or Jest tests.
 */
const mergeResolvers = (target, input) => {
  const inputTypenames = Object.keys(input);
  const merged = inputTypenames.reduce(
    (accum, key) => {
      const inputResolver = input[key];
      if (target.hasOwnProperty(key)) {
        const targetResolver = target[key];
        const resolvedInput = inputResolver();
        const resolvedTarget = targetResolver();

        if (
          !!resolvedTarget &&
          !!resolvedInput &&
          typeof resolvedTarget === "object" &&
          typeof resolvedInput === "object" &&
          !Array.isArray(resolvedTarget) &&
          !Array.isArray(resolvedInput)
        ) {
          const newValue = { ...resolvedTarget, ...resolvedInput };
          //   [key]: () => newValue }, null, 2)}`)
          return {
            ...accum,
            [key]: () => newValue
          };
        }
      }
      return { ...accum, [key]: inputResolver };
    },
    { ...target }
  );

  return merged;
};

const ApolloMockingProvider = props => {
  const mocks = mergeResolvers(globalMocks, props.customResolvers);

  addMockFunctionsToSchema({ schema, mocks });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloMockingProvider;
