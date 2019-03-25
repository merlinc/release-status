"use strict";

const React = require("react");
const Promotion = require("./promotion");
const PromoteLink = require("./promote-link");
const _ = require("lodash");
const utils = require("../lib/release-status-utils");

class Build extends React.Component {
  render() {
    const resultClass = "nobuild";

    return (
      <div id={"build-"} className={"build " + resultClass}>
        {this.props.promotions.map((promotion, index) => {
          return <Promotion key={index} promotion={promotion} />;
        })}
      </div>
    );
  }
}

module.exports = Build;
