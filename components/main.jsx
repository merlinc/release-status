"use strict";

const { graphql } = require("react-apollo");
const { compose } = require("recompose");
const gql = require("graphql-tag");

const React = require("react");
const Layout = require("./layout");
const Releases = require("./releases");
const Tickets = require("./tickets");
const MoreLink = require("./more");

class Main extends React.Component {
  render() {
    let releaseIndexes = {};

    let updates = [];

    this.props.status.releases = [];

    return (
      <div>
        <a className="header" href="/">
          {this.props.status.project}
        </a>
        <Releases
          releases={this.props.status.commits}
          config={this.props.config}
        />
        <Tickets
          tickets={this.props.status.tickets}
          updates={updates}
          releaseIndexes={releaseIndexes}
        />
        {/* <MoreLink options={this.props.options} /> */}
      </div>
    );
  }
}

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
        tickets {
          id
          title
          status
        }
      }
    }
  }
`;

export const projectConfig = gql`
  query config($org: String!, $project: String!) {
    config(org: $org, project: $project) {
      org
      project
      type
      git {
        baseUrl
        commitUrl
        compareUrl
      }
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default compose(
  graphql(projectStatus, {
    options: props => ({
      variables: { org: props.org, project: props.project }
    }),
    props: ({ data }) => {
      return data;
    }
  }),
  graphql(projectConfig, {
    options: props => ({
      variables: { org: props.org, project: props.project }
    }),
    props: ({ data }) => {
      return data;
    }
  })
)(Main);
