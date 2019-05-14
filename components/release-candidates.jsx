import React from "react";
import ReleaseCandidate from "./release-candidate";

class ReleaseCandidates extends React.Component {
  render() {
    if (!this.props.releases) {
      return null;
    }

    return (
      <div className="releases">
        {this.props.releases.map((release, index) => {
          // const buildIds = release.builds ? release.builds.map((build)=> {
          //     return build.id;
          // }) : [];

          // let buildPromotions = this.props.promotions.filter((promotion) => {
          //     return buildIds.includes(promotion.buildId.toString())
          // });

          return (
            <ReleaseCandidate key={release.sha} release={release} top={index} />
          );
        })}
      </div>
    );
  }
}

export default ReleaseCandidates;
