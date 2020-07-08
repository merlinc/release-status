import React from "react";
import Merge from "./merge";

import _ from "lodash";

class Merges extends React.Component {
  render() {
    const findCommitIndex = (commits, sha) => {
      return _.findIndex(commits, { sha: sha });
    };

    if (!this.props.merges || !this.props.commits) {
      return null;
    }
    return (
      <div>
        {this.props.merges.map(merge => (
          <Merge
            key={merge.id}
            merge={merge}
            left={this.props.left}
            top={findCommitIndex(this.props.commits, merge.mergeId)}
          />
        ))}
      </div>
    );

    {
      /*/!* { mergeReleases.map(releaseId => <Merge*/
    }
    {
      /*            key={releaseId}*/
    }
    {
      /*            merge={this.props.merges[releaseId]}*/
    }
    {
      /*            left={this.props.left}*/
    }
    {
      /*            top={this.props.releaseIndexes[releaseId]} />) } *!/*/
    }
    {
      /*{this.props.merges &&*/
    }
    {
      /*  this.props.merges.map(merge => (*/
    }
    {
      /*    <Merge*/
    }
    {
      /*      key={merge.releaseId}*/
    }
    {
      /*      merge={merge}*/
    }
    {
      /*      left={this.props.left}*/
    }
    {
      /*      top={this.props.releaseIndexes[merge.releaseId]}*/
    }
    {
      /*    />*/
    }
    {
      /*  ))}*/
    }
    // );
  }
}

export default Merges;
