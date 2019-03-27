"use strict";

const React = require("react");
const Merge = require("./merge");

class Merges extends React.Component {
  render() {
    return (
      <div>
        {/* { mergeReleases.map(releaseId => <Merge
                    key={releaseId}
                    merge={this.props.merges[releaseId]}
                    left={this.props.left}
                    top={this.props.releaseIndexes[releaseId]} />) } */}
        {this.props.merges.map(merge => (
          <Merge
            key={merge.releaseId}
            merge={merge}
            left={this.props.left}
            top={this.props.releaseIndexes[merge.releaseId]}
          />
        ))}
      </div>
    );
  }
}

module.exports = Merges;
