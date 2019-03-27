"use strict";

const React = require("react");
const utils = require('../lib/release-status-utils');


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

module.exports = Promotion;
