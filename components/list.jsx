import Link from "next/link";

import React from "react";
const { graphql, Query } = require("react-apollo");
const { compose } = require("recompose");
import gql from "graphql-tag";

import Layout from "./layout";
import styled from "styled-components";

const ProjectListWrapper = styled.div`
  font-size: 1.5em;
  line-height: 2em;
  margin: 100px;
`;

const HeaderWrapper = styled.div`
  font-weight: bold;
  font-size: 30px;
  position: absolute;
  top: 1px;
  margin-left: 30%;
`;

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
              <HeaderWrapper>
                <p>Project List</p>
              </HeaderWrapper>
              <ul className="projects">{data.list.map(displayLink)}</ul>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default List;
