import Link from "next/link";

import React from "react";
const { graphql, Query } = require("react-apollo");
const { compose } = require("recompose");
import gql from "graphql-tag";

import Layout from "./layout";

const displayLink = project => {
  const url = `/project?org=${project.org}&project=${project.project}`;

  return (
    <li key={project.id}>
      <Link href={url}>
        <a>
          {project.org}\<i>{project.project}</i>
        </a>
      </Link>
    </li>
  );
};
class List extends React.Component {
  render() {
    const projectConfig = gql`
      {
        list {
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

    return (
      <Query query={projectConfig}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <Layout title="Project List">
              <div>
                <p className="header">Project List</p>
              </div>
              <ul className="projects">{data.list.map(displayLink)}</ul>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default List;
