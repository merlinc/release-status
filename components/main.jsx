const { graphql, Query } = require("react-apollo");
const { compose } = require("recompose");
import gql from "graphql-tag";

import React from "react";
import StatusGrid from "./status-grid";

export const projectStatus = gql`
  query status($org: String!, $project: String!) {
    status(org: $org, project: $project) {
      project
      commits {
        sha
        message
        url
        promotions {
          buildId
          env
          rough
          timestamp
          url
        }
      }
      tickets {
        id
        title
        status
        merges {
          mergeId
        }
      }
    }
  }
`;

class Main extends React.Component {
  render() {
    console.log("Render Main");

    console.log(JSON.stringify(this.props, null, 2));

    return (
      <Query
        query={projectStatus}
        variables={{ org: this.props.org, project: this.props.project }}
      >
        {({ loading, error, data }) => {
          console.log(loading, error, data);
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          console.log(`data: ${JSON.stringify(data, null, 2)}`);
          return (
            <div>
              <a className="header" href="/">
                {data.status.project}
              </a>

              <StatusGrid
                commits={data.status.commits}
                tickets={this.props.showTickets && data.status.tickets}
              />

              {/*<StatusGrid commits={this.props.status.commits} tickets={this.props.status.tickets} releases={this.props.status.commits} updates={}/>*/}

              {/* <MoreLink options={this.props.options} /> */}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Main;
// export const projectConfig = gql`
//   query config($org: String!, $project: String!) {
//     config(org: $org, project: $project) {
//       org
//       project
//       type
//       git {
//         baseUrl
//         commitUrl
//         compareUrl
//       }
//     }
//   }
// `;

// // The `graphql` wrapper executes a GraphQL query and makes the results
// // available on the `data` prop of the wrapped component (PostList)
// export default compose(
//   graphql(projectStatus, {
//     options: props => ({
//       variables: { org: props.org, project: props.project }
//     }),
//     props: ({ data }) => {
//       return data;
//     }
//   }),
//   // graphql(projectConfig, {
//   //   options: props => ({
//   //     variables: { org: props.org, project: props.project }
//   //   }),
//   //   props: ({ data }) => {
//   //     return data;
//   //   }
//   // })
// )(Main);
