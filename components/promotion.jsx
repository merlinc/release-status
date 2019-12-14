import React from "react";
const utils = require("../lib/release-status-utils");
import styled from "styled-components";

const colors = {
  ci: "#00d",
  integration: "#090",
  staging: "#990",
  production: "#d00"
};

const EnvWrapper = styled.div`
  display: inline;
  float: right;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 5px 1px 5px;
  border: ${props => {
      if (props.env === "promote") {
        return "dotted";
      } else if (props.rough) {
        return "dashed";
      }

      return "solid";
    }}
    2px;
  margin-top: -3px;
  margin-left: -3px;
  margin-right: 5px;
  color: ${props => {
    console.log(props);
    if (colors[props.env]) {
      return colors[props.env];
    }

    return "c3c3c3";
  }};
  border-color: ${props => {
    if (colors[props.env]) {
      return colors[props.env];
    }

    return "c3c3c3";
  }};
`;

class Promotion extends React.Component {
  render() {
    return (
      <EnvWrapper env={this.props.promotion.env}>
        <a
          href={this.props.promotion.url}
          target={"build-" + this.props.promotion.buildId}
          title={utils.formatDate(this.props.promotion.timestamp)}
        >
          {this.props.promotion.env}
        </a>
      </EnvWrapper>
    );
  }
}

/*
          // className={
          //   "env " +
          //   this.props.promotion.env +
          //   (this.props.promotion.rough ? " rough" : "")
          {}}

 */
export default Promotion;
