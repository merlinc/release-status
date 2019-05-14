import React from "react";
import { storiesOf } from "@storybook/react";

import MoreLink from "../components/more";

const options = {
  count: 10
};

storiesOf("MoreLink", module).add("default", () => (
  <MoreLink options={options} />
));
