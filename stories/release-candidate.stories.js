import React from "react";
import { storiesOf } from "@storybook/react";

import ReleaseCandidate from "../components/release-candidate";

const options = {
  sha: "abcdeabcde",
  url: "http://example.org/abcdeabcde",
  ids: ["100", "200"],
  message: "Lorem Ipsum",
  date: "2019-12-20",
  promotions: [
    {
      buildId: 123,
      env: "staging",
      date: "2019-12-21"
    }
  ],
  builds: [{ buildId: 123, build: "something" }]
};

storiesOf("Release Candidate", module)
  .add("default", () => <ReleaseCandidate release={options} />)
  .add("empty", () => <ReleaseCandidate />);
