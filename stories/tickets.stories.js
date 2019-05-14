import React from "react";
import { storiesOf } from "@storybook/react";

import Tickets from "../components/tickets";

const options = {
  tickets: [
    {
      commits: [
        { title: "Fix bug", author: "docbrown", date: "2019-02-04" },
        { title: "Trap delorean", author: "marty", date: "2019-03-04" }
      ],
      id: "JIRA-123",
      title: "Lorem",
      top: 1,
      left: 1,
      status: "closed",
      builds: ["build100", "build102"],
      merges: {
        build100: {
          mergeId: "abcdeabcde",
          id: "090909",
          link: "http://example.org/git/merge/090909"
        },
        build102: {
          mergeId: "09abcd",
          id: "364656",
          link: "http://example.org/git/merge/364656"
        }
      }
    },
    {
      commits: [{ title: "Visit future", author: "marty", date: "2019-03-04" }],
      id: "NOJIRA",
      title: "Lorem",
      // top:2,
      // left:1,
      status: "NOJIRA",
      merges: {
        build101: {
          mergeId: "aaaaaa",
          id: "44444",
          link: "http://example.org/git/merge/44444"
        }
      },
      builds: ["build101"]
    }
  ],
  updates: [],
  buildIndexes: {
    build100: 0,
    build101: 1,
    build102: 2,
    build105: 3
  }
};

storiesOf("Tickets", module).add("default", () => (
  <Tickets
    tickets={options.tickets}
    updates={options.updates}
    buildIndexes={options.buildIndexes}
  />
));
