"use strict";

const React = require("react");

class Update extends React.Component {
  render() {
    return (
      <a
        className="update"
        href={
          "/" +
          this.props.update.module +
          "#release-" +
          this.props.update.version
        }
        target={"module-" + this.props.update.module}
      >
        ⟰ {this.props.update.module} {this.props.update.version}
      </a>
    );
  }
}

module.exports = Update;
