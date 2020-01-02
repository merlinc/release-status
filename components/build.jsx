import React from "react";
import Promotion from "./promotion";
import PromoteLink from "./promote-link";
const _ = require("lodash");
import utils from "../lib/release-status-utils";
import styled from "styled-components";

const BuildWrapper = styled.div`
  display: inline;
  float: right;
  font-size: 12px;
  font-weight: bold;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border: solid 1px #666;
  margin-top: -4px;
  margin-right: 5px;
  min-height: 18px;
  background-color: white;
  color: #666;
`;

const BuildSuccessWrapper = styled.div`
  border: solid 1px #444;
  background-color: #eee;
  color: black;
`;

const BuildLinkWrapper = styled.div`
  float: right;
`;

class Build extends React.Component {
  render() {
    const resultClass = "nobuild";

    return (
      <BuildWrapper>
        {/*<BuildSuccessWrapper>*/}
        <div id={"build-"} className={"build " + resultClass}>
          {this.props.build && this.props.build.promoteLink && (
            <PromoteLink env="prd" link={this.props.build.promoteLink} />
          )}

          {this.props.promotions &&
            this.props.promotions.map((promotion, index) => {
              return (
                <BuildLinkWrapper key={index}>
                  <Promotion promotion={promotion} />
                </BuildLinkWrapper>
              );
            })}
        </div>
        {/*</BuildSuccessWrapper>*/}
      </BuildWrapper>
    );
  }
}

export default Build;
