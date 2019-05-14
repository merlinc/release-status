import React from "react";
import { storiesOf } from "@storybook/react";

import ReleaseCandidates from "../components/release-candidates";

const releases = [
  {
    sha: "abcdeabcde",
    url: "http://example.org/abcdeabcde",
    ids: ["100", "200"],
    message: "Lorem Ipsum",
    date: "2019-12-20",
    promotions: [{ buildId: "123", env: "staging", date: "2019-12-21" }],
    builds: [{ buildId: "123", build: "something" }]
  },
  {
    sha: "e9030401af",
    url: "http://example.org/e9030401af",
    ids: ["300", "400"],
    message: "Dolor Sit",
    date: "2019-12-22",
    promotions: [
      { buildId: 456, env: "staging", date: "2019-12-21" },
      { buildId: 456, env: "production", date: "2019-12-21" }
    ],
    builds: [{ buildId: 456, build: "something" }]
  }
];

storiesOf("Release Candidates", module)
  .add("default", () => <ReleaseCandidates releases={releases} />)
  .add("empty", () => <ReleaseCandidates />);
