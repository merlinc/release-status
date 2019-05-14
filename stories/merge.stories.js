import React from "react";
import { storiesOf } from "@storybook/react";

import Merge from "../components/merge";

const options = {
  top: 1,
  left: 1,
  merge: {
    mergeId: "abcdeabcde",
    id: "090909",
    link: "http://example.org/git/merge/090909"
  }
};

storiesOf("Merge", module).add("default", () => (
  <Merge top={options.top} left={options.left} merge={options.merge} />
));
