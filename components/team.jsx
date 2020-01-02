import React from "react";
import styled from "styled-components";

const TeamWrapper = styled.div`
  display: inline;
  float: right;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 5px 1px 5px;
  border: solid 2px;
  margin-top: -3px;
  margin-left: -3px;
  margin-right: 5px;
  color: #999;
  border-color: #999;
`;

class Team extends React.Component {
  render() {
    return (
      <TeamWrapper>
        <div>{this.props.team}</div>
      </TeamWrapper>
    );
  }
}

export default Team;
