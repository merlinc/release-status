"use strict";

const React = require("react");
const Build = require("./build");
const utils = require('../lib/release-status-utils');

class Release extends React.Component {
  render() {
    let style = {
      top: utils.calcY(this.props.top)
    };

    return (
      <div
        id={"release-" + this.props.release.sha}
        className={"release"}
        style={style}
      >
        <a
          title={this.props.release.ids && this.props.release.ids.join(" ")}
          href={this.props.release.url}
        >
          ⚙ {utils.shortHash(this.props.release.sha)}
        </a>
        <span> {utils.shortMessage(this.props.release.message)} </span>
        <div style={{ display: "none" }}>{this.props.release.message}</div>
        <span className="date">{this.props.release.date}</span>

        <Build promotions={this.props.release.promotions} />

        {this.props.release.builds &&
          this.props.release.builds.map((build, index) => {
            return (
              <Build
                key={build.buildId}
                build={build}
                promotions={this.props.release.promotions}
              />
            );
          })}
      </div>
    );
  }
}

module.exports = Release;
