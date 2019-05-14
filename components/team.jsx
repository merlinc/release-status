import React from "react";

class Team extends React.Component {
  render() {
    return (
      <div className="team">
        {this.props.team}
      </div>
    );
  }
}

export default Team;
