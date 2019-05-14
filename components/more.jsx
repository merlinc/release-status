import React from "react";

class MoreLink extends React.Component {
  render() {
    return (
      <div className="more">
        <a href={"?count=" + (this.props.options.count + 100)}>Load More</a>
      </div>
    );
  }
}

export default MoreLink;
