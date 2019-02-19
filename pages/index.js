import React from "react";

import List from "../components/list";
import Meta from "../components/meta";

export default class extends React.Component {
  static async getInitialProps(context) {
    return context.query;
  }

  render() {
    return (
      <div>
        <Meta />
        <List {...this.props} />
      </div>
    );
  }
}
