import React from "react";
import { storiesOf } from "@storybook/react";

import Merges from "../components/merges";

const options = {
  merges: [
    {
      mergeId: "abcdeabcde",
      id: "090909",
      link: "http://example.org/git/merge/090909"
    },
    {
      mergeId: "09abcd",
      id: "364656",
      link: "http://example.org/git/merge/364656"
    }
  ],
  commits: ["abcdeabcde", "0902dafgca", "09abcd"],
  left: 1
};

storiesOf("Merges", module).add("default", () => (
  <Merges
    merges={options.merges}
    left={options.left}
    commits={options.commits}
  />
));
