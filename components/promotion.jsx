import React from "react";
const utils = require("../lib/release-status-utils");
import styled from "styled-components";

const EnvWrapper = styled.div`
  display: inline;
  float: right;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 5px 1px 5px;
  border: ${props => {
      if (props.envName === "promote") {
        return "dotted";
      } else if (props.envName === "rough") {
        return "dashed";
      }

      return "solid";
    }}
    2px;
  margin-top: -3px;
  margin-left: -3px;
  margin-right: 5px;
`;

const PromoteWrapper = styled(EnvWrapper)``;

const RoughWrapper = styled(EnvWrapper)``;

const CIWrapper = styled(EnvWrapper)`
  color: #00d;
  border-color: #00d;
`;

const colors = {
  ci: "#00d"
};

const IntegrationWrapper = styled(EnvWrapper)`
  color: #090;
  border-color: #090;
`;

const StagingWrapper = styled(EnvWrapper)`
  color: #990;
  border-color: #990;
`;

const ProductionWrapper = styled(EnvWrapper)`
  color: #d00;
  border-color: #d00;
`;

class Promotion extends React.Component {
  render() {
    return (
      <a
        href={this.props.promotion.url}
        target={"build-" + this.props.promotion.buildId}
        className={
          "env " +
          this.props.promotion.env +
          (this.props.promotion.rough ? " rough" : "")
        }
        title={utils.formatDate(this.props.promotion.timestamp)}
      >
        {this.props.promotion.env}
      </a>
    );
  }
}

export default Promotion;
