"use strict";

const React = require("react");

class MoreLink extends React.Component {
  render() {
    return (
      <div className="more">
        <a href={"?count=" + (this.props.options.count + 100)}>Load More</a>
      </div>
    );
  }
}

module.exports = MoreLink;
