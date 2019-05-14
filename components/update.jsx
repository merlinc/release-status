import React from "react";

class Update extends React.Component {
  render() {
    if (!this.props.update) {
      return null;
    }

    return (
      <a
        className="update"
        href={`/${this.props.update.module}#release-${
          this.props.update.version
        }`}
        target={`module-${this.props.update.module}`}
      >
        ⟰ {this.props.update.module} {this.props.update.version}
      </a>
    );
  }
}

export default Update;
