import React from "react";
import Build from "./build";
import utils from "../lib/release-status-utils";
import styled from "styled-components";

const DateWrapper = styled.div`
  float: right;
  text-align: right;
  min-width: 80px;
`;

const ReleaseWrapper = styled.div`
  position: absolute;
  left: 40px;
  right: 50px;
  padding: 5px;
  border: solid 1px #ccc;
  height: 16px;
  overflow: hidden;
  background-color: white;

&:hover {
  border-color: black;
}
}
`;
class Release extends React.Component {
  render() {
    let style = {
      top: utils.calcY(this.props.top)
    };

    if (!this.props.release) {
      return null;
    }

    return (
      <ReleaseWrapper id={"release-" + this.props.release.sha} style={style}>
        <a
          title={this.props.release.ids && this.props.release.ids.join(" ")}
          href={this.props.release.url}
        >
          ⚙ {utils.shortHash(this.props.release.sha)}
        </a>

        <span> {utils.shortMessage(this.props.release.message)} </span>
        <div style={{ display: "none" }}>{this.props.release.message}</div>
        <DateWrapper>{this.props.release.date}</DateWrapper>

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
      </ReleaseWrapper>
    );
  }
}

export default Release;
