import Link from "next/link";
import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";

import withApollo from "../lib/with-apollo";
import Layout from "./layout";

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
  const url = `/dashboard/${project.org}/${project.project}`;
  const key = `${project.org}\${project.project}`;
  return (
    <li key={key}>
      <Link href={url}>
        <a>
          {project.org}\<i>{project.project}</i>
        </a>
      </Link>
    </li>
  );
};

const QUERY = gql`
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

const List = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }
  if (loading) return "Loading...";

  return (
    <Layout title="Project List">
      <HeaderWrapper>
        <p>Project List</p>
      </HeaderWrapper>
      <ul className="projects">{data.list.map(displayLink)}</ul>
    </Layout>
  );
};

export default withApollo(List, { getDataFromTree });
