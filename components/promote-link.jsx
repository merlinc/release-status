"use strict";

const React = require("react");
const Releasestatus = require("./release-status");

class PromoteLink extends Releasestatus {
  render() {
    return (
      <div className={"promote env " + this.props.env}>
        <a target={"promote-" + this.props.env} href={this.props.link}>
          Promote to {this.props.env}
        </a>
      </div>
    );
  }
}

module.exports = PromoteLink;
