import React from "react";
import { storiesOf } from "@storybook/react";

import Promotion from "../components/promotion";

const promotion = {
  buildId: "123",
  url: "http://example.org",
  env: "staging",
  rough: false,
  timestamp: new Date()
};

storiesOf("Promotion", module)
  .add("default", () => <Promotion promotion={{ ...promotion }} />)
  .add("environments", () => (
    <div>
      <Promotion promotion={{ ...promotion, env: "ci" }} />
      <Promotion promotion={{ ...promotion, env: "integration" }} />
      <Promotion promotion={{ ...promotion, env: "staging" }} />
      <Promotion promotion={{ ...promotion, env: "production" }} />
      <Promotion promotion={{ ...promotion, env: "unknown" }} />
      <Promotion promotion={{ ...promotion, env: "other" }} />
    </div>
  ))
  .add("promote", () => <Promotion promotion={{ ...promotion }} />)
  .add("rough", () => (
    <Promotion promotion={{ ...promotion, env: "rough", rough: true }} />
  ));
