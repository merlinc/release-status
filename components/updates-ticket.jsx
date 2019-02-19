"use strict";

const React = require("react");
const Ticket = require("./ticket");
const Update = require("./update");

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

module.exports = UpdatesTicket;
