import React from "react";
import styled from "styled-components";
const utils = require("../lib/release-status-utils");

const MergeWrapper = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 10px solid #444;
  margin-left: -10px;
  margin-top: 2px;

  &:hover {
    border-right-color: #f44;
  }
`;

class Merge extends React.Component {
  render() {
    let style = {
      top: utils.calcY(this.props.top),
      left: utils.calcX(this.props.left)
    };

    const mergeId =
      this.props.merge &&
      (this.props.merge.mergeId
        ? this.props.merge.mergeId
        : this.props.merge.id);
    return (
      <MergeWrapper style={style}>
        <a
          // className="merge"
          target={`merge-${mergeId}`}
          href={this.props.merge && this.props.merge.link}
          title={`Merge ${mergeId}`}
        />
      </MergeWrapper>
    );
  }
}

export default Merge;
