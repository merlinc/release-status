import React from "react";
import Ticket from "./ticket";
import Update from "./update";

class UpdatesTicket extends Ticket {
  render() {
    return (
      <div className="updates" style={this.buildStyle()}>
        {this.props.updates.map(update => (
          <Update key={update.module} update={update} />
        ))}
      </div>
    );
  }
}

export default UpdatesTicket;
