import React from "react";
import styled from "styled-components";

const MoreWrapper = styled.div`
  display: inline;
  float: right;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 5px 1px 5px;
  border: solid 2px;
  margin-top: -2px;
  margin-right: 5px;
  color: #00d;
  border-color: #00d;
`;
class MoreLink extends React.Component {
  render() {
    return (
      <MoreWrapper>
        <a href={"?count=" + (this.props.options.count + 100)}>Load More</a>
      </MoreWrapper>
    );
  }
}

export default MoreLink;
