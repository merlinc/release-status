import React from "react";

class PromoteLink extends React.Component {
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

export default PromoteLink;
