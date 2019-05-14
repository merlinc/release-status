import React from "react";
import { storiesOf } from "@storybook/react";

import Ticket from "../components/ticket";

const options = {
  title: "Lorem",
  count: 10
};

storiesOf("Ticket", module).add("default", () => <Ticket ticket={options} />);
