import React from "react";
import { storiesOf } from "@storybook/react";
import ApolloMockingProvider from "../lib/apollo-mocking-provider";

import List from "../components/list";

const customResolvers = {
  list: () => ({ list: [{ project: "p1", org: "o1" }] }),
  Query: () => ({ list: [{ project: "p1", org: "o1" }] })
};

storiesOf("List", module).add("default", () => (
  <ApolloMockingProvider customResolvers={customResolvers}>
    <List />
  </ApolloMockingProvider>
));
