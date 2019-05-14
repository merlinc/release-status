import React from "react";
import Ticket from "./ticket";
import Team from "./team";

class CommitTicket extends Ticket {
  render() {
    let title = this.props.ticket.title + "\n\n" + this.commits().join("\n\n");

    return (
      <div className="ticket nojira" style={this.buildStyle()} title={title}>
        <span>⚐ {this.props.ticket.title}</span>{ this.props.team && <Team team={this.props.team}/> }
      </div>
    );
  }
}

export default CommitTicket;
