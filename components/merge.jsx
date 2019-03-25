"use strict";

const React = require("react");
const utils = require('../lib/release-status-utils');

class Merge extends React.Component {
  render() {
    let style = {
      top: utils.calcY(this.props.top),
      left: utils.calcX(this.props.left)
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
