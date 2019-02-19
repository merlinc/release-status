"use strict";

const React = require("react");
const Release = require("./release");

class Releases extends React.Component {
  render() {
    return (
      <div className="releases">
        {this.props.releases.map((release, index) => {
          // const buildIds = release.builds ? release.builds.map((build)=> {
          //     return build.id;
          // }) : [];

          // let buildPromotions = this.props.promotions.filter((promotion) => {
          //     return buildIds.includes(promotion.buildId.toString())
          // });

          return <Release key={release.sha} release={release} top={index} />;
        })}
      </div>
    );
  }
}

module.exports = Releases;
