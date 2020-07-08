import React from "react";
import gql from "graphql-tag";
import StatusGrid from "./status-grid";
import withApollo from "../lib/with-apollo";
import { useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";
import Layout from "./layout";

export const QUERY = gql`
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

const Main = props => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { org: props.org, project: props.project }
  });

  if (loading) return "Loading...";
  if (error) return "Error...";

  return (

  <Layout title="Ticket Status" org={props.org} project={props.project}>
      <StatusGrid
        commits={data.status.commits}
        tickets={props.showTickets && data.status.tickets}
      />
      {/*tickets={this.props.showTickets && data.status.tickets}*/}

      {/*<StatusGrid commits={this.props.status.commits} tickets={this.props.status.tickets} releases={this.props.status.commits} updates={}/>*/}

      {/* <MoreLink options={this.props.options} /> */}
  </Layout>
  );
};

export default withApollo(Main, { getDataFromTree });
