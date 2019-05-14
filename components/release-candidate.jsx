import React from "react";
import Build from "./build";
import utils from "../lib/release-status-utils";

class Release extends React.Component {
  render() {
    let style = {
      top: utils.calcY(this.props.top)
    };

    if (!this.props.release) {
      return null;
    }

    console.log(this.props.release);

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

        {/* New style batched builds with promotions*/}
        {this.props.release.builds &&
          this.props.release.builds.map((build, index) => {
            return (
              <Build
                key={build.buildId}
                build={build}
                promotions={this.props.release.promotions.filter(
                  promotion => promotion.buildId === build.buildId
                )}
              />
            );
          })}

        {/*  Old Style "all builds" as promotions */}
        {this.props.release.promotions && (
          <Build promotions={this.props.release.promotions} />
        )}
      </div>
    );
  }
}

export default Release;
