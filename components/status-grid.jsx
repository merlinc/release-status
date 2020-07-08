import React from "react";
import ReleaseCandidates from "./release-candidates";
import Tickets from "./tickets";
import Waterline from "./waterline";
import _ from "lodash";

class StatusGrid extends React.Component {
  render() {
    // sort builds
    let builds = _.values(this.props.builds).sort((a, b) =>
      b.id === "HEAD" ? 1 : b.id - a.id
    );

    // collect build indexes
    let buildIndexes = {};
    builds.forEach((build, index) => (buildIndexes[build.id] = index));

    // collect updates
    let updates = [];
    // builds.forEach((build, index) => {
    //   if (build.updates && build.updates.length) {
    //     updates.push({
    //       top: index,
    //       buildId: build.id,
    //       updates: build.updates
    //     });
    //   }
    // });

    return (
      <div>
        <ReleaseCandidates releases={this.props.commits} />

        <Tickets
          tickets={this.props.tickets}
          commits={this.props.commits}
          config={this.props.config}
        />

        {/*<Waterline commits={this.props.status.commits} />*/}
      </div>
    );
  }
}

export default StatusGrid;
