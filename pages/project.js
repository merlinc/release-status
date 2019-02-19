import React from "react";
import Main from "../components/main";
import Meta from "../components/meta";

export default class extends React.Component {
  static async getInitialProps(context) {
    // const { originalUrl } = context.req || {};

    // console.log(`Query: ${JSON.stringify(context.query, null, 2)}`);
    // console.log(originalUrl);
    // { url: { query: { id } } }

    // console.log(`res.query: ${JSON.stringify(context.res.query)}`);

    //     return client.query({
    //         query: gql`

    //         `,

    return context.query;
  }

  // }

  render() {
    return (
      <div>
        <Meta />
        <Main {...this.props} />
      </div>
    );
  }
}
