import React from "react";
import { storiesOf } from "@storybook/react";

import PromoteLink from "../components/promote-link";

const options = {
  count: 10
};

storiesOf("PromoteLink", module).add("default", () => (
  <PromoteLink options={options} />
));
