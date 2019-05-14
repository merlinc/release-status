import React from "react";
import { storiesOf } from "@storybook/react";

import Waterline from "../components/waterline";

const options = {
  count: 10
};

storiesOf("Waterline", module).add("default", () => (
  <Waterline options={options} />
));
