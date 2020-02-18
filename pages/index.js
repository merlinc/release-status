import React from "react";

import List from "../components/list";
import Meta from "../components/meta";

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <List {...this.props} />
      </div>
    );
  }
}
