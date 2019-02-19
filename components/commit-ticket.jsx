"use strict";

const React = require("react");
const Ticket = require("./ticket");

class CommitTicket extends Ticket {
  render() {
    let title = this.props.ticket.title + "\n\n" + this.commits().join("\n\n");

    return (
      <div className="ticket nojira" style={this.buildStyle()} title={title}>
        <span>⚐ {this.props.ticket.title}</span>
      </div>
    );
  }
}

module.exports = CommitTicket;
