import React from "react";
import Ticket from "./ticket";
import Team from "./team";
import styled from "styled-components";

const colors = {
  unknown: "rgba(255, 0, 0, 0.7)",
  nojira: "rgba(220, 255, 255, 0.7)",
  ready: "rgba(200, 255, 200, 0.7)",
  develop: "rgba(255, 170, 180, 0.7)",
  test: "rgba(190, 200, 255, 0.7)",
  review: "rgba(220, 190, 255, 0.7)",
  closed: "rgba(220, 220, 220, 0.7)"
};

const TicketWrapper = styled.div`
  position: absolute;
  padding: 5px;
  border: solid 3px #444;
  width: 160px;
  overflow: hidden;
  background-color: rgba(255, 0, 0, 0.7);
  color: black;
`;

const JiraTicketWrapper = styled(TicketWrapper)`
  background-color: ${props => {
    return colors[props.ticketType];
  }};
  color: ${props => (props.ticketType === "unknown" ? "white" : "black")};
  float: right;
`;

const ParentWrapper = styled.div`
  padding: 0 1px 0 1px;
  border: solid 1px #444;
  background-color: rgba(255, 0, 0, 0.7);
  color: black;
  margin: -2px -2px 0 4px;
  float: right;
`;

class JiraTicket extends Ticket {
  render() {
    let ticket = this.props.ticket;
    let parent = ticket.parent;

    let title = `${ticket.id}\n\n${ticket.title}\n\n[${
      ticket.status
    }]\n\n${this.commits().join("\n\n")}`;

    let parentTitle;

    if (parent) {
      title = `[${parent.key}] ${title}`;

      parentTitle = `${parent.key}\n\n${parent.title}\n\n[${parent.status}]`;
    }

    return (
      <JiraTicketWrapper
        ticketType={this.className(ticket)}
        style={this.buildStyle()}
      >
        <div
          // className={"ticket " + this.className(ticket)}
          title={title}
        >
          {this.props.team && <Team team={this.props.team} />}
          <p>
            <a target={"ticket-" + ticket.id} href={ticket.link}>
              {ticket.id}
            </a>
            {parent ? (
              <ParentWrapper title={parentTitle}>
                <a target={`ticket-${parent.key}`} href={parent.link}>
                  {parent.key}
                </a>
              </ParentWrapper>
            ) : null}
          </p>
          <p>{ticket.title}</p>
          <p>[{ticket.status}]</p>
        </div>
      </JiraTicketWrapper>
    );
  }
}

export default JiraTicket;
