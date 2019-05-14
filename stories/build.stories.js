import React from "react";
import { storiesOf } from "@storybook/react";

import Build from "../components/build";

const options = {
  promotions: [
    {
      buildId: "123",
      url: "http://example.org",
      env: "staging",
      timestamp: new Date()
    },
    {
      buildId: "123",
      url: "http://example.org",
      env: "production",

      timestamp: new Date()
    }
  ],
  build: {
    promoteLink: "http://example.org/promote/123"
  }
};

storiesOf("Build", module)
  .add("default", () => <Build promotions={options.promotions} />)
  .add("with promote link", () => (
    <Build promotions={options.promotions} build={options.build} />
  ))
  .add("with only promote link", () => <Build build={options.build} />);
