import React from "react";
import styled from "styled-components";

const BreadCrumbsWrapper = styled.div`
  display: inline;
  float: left;
  font-size: 12px;
  font-weight: bold;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  // border: solid 1px #666;
  margin-top: -4px;
  margin-right: 5px;
  min-height: 18px;
  background-color: white;
  color: #666;
`;

class BreadCrumbs extends React.Component {
  render() {
    return (
      <BreadCrumbsWrapper>
        <a className="header" href="/">
          Home
        </a>
        | {this.props.org}| {this.props.project}
      </BreadCrumbsWrapper>
    );
  }
}
export default BreadCrumbs;
