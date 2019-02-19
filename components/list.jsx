import Link from "next/link";

const React = require("react");
const { graphql } = require("react-apollo");
const { compose } = require("recompose");
const gql = require("graphql-tag");

const Layout = require("./layout");

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
    return (
      <Layout title="Project List">
        <div>
          <p className="header">Project List</p>
        </div>
        <ul className="projects">{this.props.list.map(displayLink)}</ul>
      </Layout>
    );
  }
}

const projectConfig = gql`
  query list {
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

export default compose(
  graphql(projectConfig, {
    props: ({ data }) => {
      return data;
    }
  })
)(List);
