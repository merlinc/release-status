import React from "react";
import styled from "styled-components";

const UpdateWrapper = styled.div`
  display: inline-block;
  font-size: 12px;
  padding: 1px 10px 1px 10px;
  border: solid 1px #808;
  margin-top: 5px;
  margin-left: 10px;
  color: #808;
  background-color: rgba(220, 220, 220, 0.7);
`;

class Update extends React.Component {
  render() {
    if (!this.props.update) {
      return null;
    }

    return (
      <UpdateWrapper>
        <a
          href={`/${this.props.update.module}#release-${this.props.update.version}`}
          target={`module-${this.props.update.module}`}
        >
          ⟰ {this.props.update.module} {this.props.update.version}
        </a>
      </UpdateWrapper>
    );
  }
}

export default Update;
