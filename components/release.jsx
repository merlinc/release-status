"use strict";

const React = require("react");
const ReleaseStatus = require("./release-status");
const Build = require("./build");

class Release extends ReleaseStatus {
  render() {
    let style = {
      top: this.Y(this.props.top)
    };

    console.log(this.props.release.builds);

    let name =
      this.props.release.message === "HEAD"
        ? "HEAD"
        : "⚙ " + this.props.release.message; //.substr(0, 8);

    let shortHash = this.props.release.sha.substr(0, 8);

    let shortMessage = this.props.release.message.substr(0, 80);

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
          ⚙ {shortHash}
        </a>
        <span> {shortMessage} </span>
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
