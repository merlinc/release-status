import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "../components/header";

const options = {
  org: "github-org",
  project: "project-name"
};

storiesOf("Header", module)
  .add("default", () => <Header />)
  .add("with org & project", () => (
    <Header org={options.org} project={options.project} />
  ));
