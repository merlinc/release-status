import React from "react";
import { storiesOf } from "@storybook/react";

import JiraTicket from "../components/jira-ticket";

const options = {
  commits: [
    { title: "Fix bug", author: "docbrown", date: "2019-02-04" },
    { title: "Trap delorean", author: "marty", date: "2019-03-04" }
  ],
  id: "JIRA-123",
  title: "Lorem",
  top: 0,
  left: 0,
  status: "closed"
};

storiesOf("Jira Ticket", module)
  .add("default", () => <JiraTicket ticket={options} />)
  .add("develop", () => (
    <JiraTicket ticket={{ ...options, status: "develop" }} />
  ))
  .add("review", () => <JiraTicket ticket={{ ...options, status: "review" }} />)
  .add("test", () => <JiraTicket ticket={{ ...options, status: "test" }} />)
  .add("ready", () => <JiraTicket ticket={{ ...options, status: "ready" }} />)
  .add("closed", () => <JiraTicket ticket={{ ...options, status: "closed" }} />)
  .add("nojira", () => <JiraTicket ticket={{ ...options, status: "nojira" }} />)
  .add("team", () => (
    <JiraTicket ticket={{ ...options, status: "closed" }} team="team name" />
  ));
