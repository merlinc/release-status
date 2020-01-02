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

const CommitTicketWrapper = styled(TicketWrapper)`
  background-color: ${props => {
    console.log(props.ticketType);
    return colors[props.ticketType];
  }};
  color: ${props => (props.ticketType === "unknown" ? "white" : "black")};
  float: right;
`;

class CommitTicket extends Ticket {
  render() {
    let title = this.props.ticket.title + "\n\n" + this.commits().join("\n\n");

    return (
      <CommitTicketWrapper
        style={this.buildStyle()}
        title={title}
        ticketType="nojira"
      >
        <span>⚐ {this.props.ticket.title}</span>
        {this.props.team && <Team team={this.props.team} />}
      </CommitTicketWrapper>
    );
  }
}

export default CommitTicket;
