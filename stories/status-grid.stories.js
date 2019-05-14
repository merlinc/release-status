import React from "react";
import { storiesOf } from "@storybook/react";

import StatusGrid from "../components/status-grid";

const options = {
  commits: [
    {
      title: "Trap delorean in 1950",
      author: "marty",
      date: "2019-03-04",
      sha: "2020202020202",
      message: "Trap delorean in 1950 as long",
      promotions: [
        { buildId: 101, env: "staging", date: "2019-12-21" },
        { buildId: 101, env: "production", date: "2019-12-21" }
      ],
      builds: [{ buildId: 101, build: "something" }]
    },
    {
      title: "Fix time machine",
      author: "docbrown",
      date: "2019-02-04",
      sha: "1010101010101",
      message: "Fix time machine as long",
      promotions: [
        {
          buildId: 101,
          env: "integration",
          date: "2019-12-21T15:00",
          rough: true
        },
        {
          buildId: 101,
          env: "integration",
          date: "2019-12-21T16:00",
          promoteLink: "http://example.net"
        },
        { buildId: 101, env: "staging", date: "2019-12-21T17:00" },
        { buildId: 101, env: "production", date: "2019-12-21T18:00" }
      ],
      builds: [{ buildId: 101, build: "something" }]
    },
    {
      title: "Trap delorean in 1880",
      author: "marty",
      date: "2019-03-04",
      sha: "3030303030303",
      message: "Trap delorean in 1880 as long",
      promotions: [
        {
          buildId: "103",
          env: "integration",
          date: "2019-12-21T15:00",
          rough: true
        },
        { buildId: "103", env: "integration", date: "2019-12-21T16:00" },
        {
          buildId: "105",
          env: "staging",
          date: "2019-12-21T15:00",
          rough: true
        },
        { buildId: "105", env: "staging", date: "2019-12-21T15:00" },
        {
          buildId: "105",
          env: "production",
          date: "2019-12-21T16:00",
          rough: true
        },
        { buildId: "105", env: "production", date: "2019-12-21T16:00" }
      ],
      builds: [
        { buildId: "103", build: "something" },
        { buildId: "105", build: "something" }
      ]
    }
  ],
  tickets: [
    {
      id: "JIRA-123",
      title: "Time machine is trapped in the past",
      status: "closed",
      // builds: [103, 101],
      merges: [
        {
          mergeId: "2020202020202",
          id: "0909090909",
          link: "http://example.org/git/merge/090909"
        },
        {
          mergeId: "3030303030303",
          id: "3646566676",
          link: "http://example.org/git/merge/364656"
        }
      ]
    },
    {
      id: "NOJIRA",
      title: "Time machine is broken",
      status: "NOJIRA",
      merges: [
        {
          mergeId: "1010101010101",
          id: "44444",
          link: "http://example.org/git/merge/44444"
        }
      ]
    }
  ]
  // builds: {
  //   "101": {
  //     id: 101
  //   },
  //   "102": {
  //     id: 102
  //   },
  //   "103": {
  //     id: 103
  //   }
  // }
};

storiesOf("Status Grid", module)
  .add("default", () => (
    <StatusGrid tickets={options.tickets} commits={options.commits} />
  ))
  .add("without tickets", () => (
    <StatusGrid
      commits={options.commits}
      // builds={options.builds}
    />
  ));
