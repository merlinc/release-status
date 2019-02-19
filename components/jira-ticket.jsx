"use strict";

const React = require("react");
const Ticket = require("./ticket");

class JiraTicket extends Ticket {
  render() {
    let ticket = this.props.ticket;
    let parent = ticket.parent;

    let title =
      ticket.id +
      "\n\n" +
      ticket.title +
      "\n\n" +
      "[" +
      ticket.status +
      "]\n\n" +
      this.commits().join("\n\n");

    let parentTitle;
    if (parent) {
      title = "[" + parent.key + "] " + title;

      parentTitle =
        parent.key + "\n\n" + parent.title + "\n\n" + "[" + parent.status + "]";
    }

    return (
      <div
        className={"ticket " + this.className(ticket)}
        style={this.buildStyle()}
        title={title}
      >
        <p>
          <a target={"ticket-" + ticket.id} href={ticket.link}>
            {ticket.id}
          </a>
          {parent ? (
            <span
              className={"parent " + this.className(parent)}
              title={parentTitle}
            >
              <a target={"ticket-" + parent.key} href={parent.link}>
                {parent.key}
              </a>
            </span>
          ) : null}
        </p>
        <p>{ticket.title}</p>
        <p>[{ticket.status}]</p>
      </div>
    );
  }
}

module.exports = JiraTicket;
