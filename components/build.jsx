import React from "react";
import Promotion from "./promotion";
import PromoteLink from "./promote-link";
const _ = require("lodash");
import utils from "../lib/release-status-utils";

class Build extends React.Component {
  render() {
    const resultClass = "nobuild";

    return (
      <div id={"build-"} className={"build " + resultClass}>
        {this.props.build && this.props.build.promoteLink && (
          <PromoteLink env="prd" link={this.props.build.promoteLink} />
        )}

        {this.props.promotions &&
          this.props.promotions.map((promotion, index) => {
            return <Promotion key={index} promotion={promotion} />;
          })}
      </div>
    );
  }
}

export default Build;
