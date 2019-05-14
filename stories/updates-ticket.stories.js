import React from "react";
import { storiesOf } from "@storybook/react";

import UpdatesTicket from "../components/updates-ticket";

const options = [];
storiesOf("Updates Ticket", module).add("empty", () => (
  <UpdatesTicket updates={options} />
));
