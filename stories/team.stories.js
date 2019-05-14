import React from "react";
import { storiesOf } from "@storybook/react";

import Team from "../components/team";

const team = {
  name: "team name"
};

storiesOf("Team", module).add("default", () => <Team team={team.name} />);
