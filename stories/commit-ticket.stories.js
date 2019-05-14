import React from "react";
import { storiesOf } from "@storybook/react";

import CommitTicket from "../components/commit-ticket";

const options = {
  commits: [
    { title: "Fix bug", author: "docbrown", date: "2019-02-04" },
    { title: "Trap delorean", author: "marty", date: "2019-03-04" }
  ],
  title: "Lorem",
  top: 0,
  left: 0,
  status: "closed"
};

storiesOf("Commit Ticket", module)
  .add("default", () => <CommitTicket ticket={options} />)
  .add("team", () => (
    <CommitTicket ticket={{ ...options, status: "closed" }} team="team name" />
  ));
