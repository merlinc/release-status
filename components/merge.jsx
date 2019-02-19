"use strict";

const React = require("react");
const ReleaseStatus = require("./release-status");

class Merge extends ReleaseStatus {
  render() {
    let style = {
      top: this.Y(this.props.top),
      left: this.X(this.props.left)
    };

    const mergeId = this.props.merge.mergeId
      ? this.props.merge.mergeId
      : this.props.merge.id;
    return (
      <a
        className="merge"
        style={style}
        target={`merge-${mergeId}`}
        href={this.props.merge.link}
        title={`Merge ${mergeId}`}
      />
    );
  }
}

module.exports = Merge;
