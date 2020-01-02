import React from "react";
import { storiesOf } from "@storybook/react";

import BreadCrumbs from "../components/bread-crumbs";

const options = {
  org: "github-org",
  project: "project-name"
};

storiesOf("BreadCrumbs", module).add("default", () => (
  <BreadCrumbs org={options.org} project={options.project} />
));
