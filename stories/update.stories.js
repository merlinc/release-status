import React from "react";
import { storiesOf } from "@storybook/react";

import Update from "../components/update";

const options = {
  module: "module-name",
  version: "3.4.456"
};

storiesOf("Update", module)
  .add("empty", () => <Update />)
  .add("default", () => <Update update={options} />);
