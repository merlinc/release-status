"use strict";

const React = require("react");
const ReleaseStatus = require("./release-status");
const Promotion = require("./promotion");
const PromoteLink = require("./promote-link");
// const config = require('../config');
const _ = require("lodash");

class Build extends React.Component {
  Y(y) {
    return dimensions.releaseOffset + y * dimensions.releaseHeight;
  }

  X(x) {
    return x * dimensions.ticketWidth;
  }

  pad(v, n, c) {
    n = n || 2;
    c = c || "0";
    v = "" + v;
    while (v.length < n) v = c + v;
    return v;
  }

  /*
            //         <a target={'build-' + this.props.build.buildId}
        //             title={this.props.build.link}
        //             href={this.props.build.link}>Build {this.props.build.id}</a>
        //         {this.props.build.result === 'success' ? '✅' : '❌'}&nbsp;&nbsp;  
        //         {this.props.build.promoteLink && <PromoteLink env="prd" link={this.props.build.promoteLink} />}
        // {this.props.promotions.map((promotion, index) => { 
        //     return <Promotion key={index} promotion={promotion} />;
        // })}

*/

  render() {
    // let resultClass = (this.props.build.result).toLowerCase();

    const resultClass = "nobuild";

    return (
      <div id={"build-"} className={"build " + resultClass}>
        {this.props.promotions.map((promotion, index) => {
          return <Promotion key={index} promotion={promotion} />;
        })}
      </div>
    );
  }
}

module.exports = Build;
