import React from "react";
import Main from "../../../components/main";
import Meta from "../../../components/meta";

export default class extends React.Component {
  static async getInitialProps(context) {
    return context.query;
  }

  render() {
    return (
      <div>
        <Meta />
        <Main {...this.props} />
      </div>
    );
  }
}
