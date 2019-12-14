import React from "react";
import Ticket from "./ticket";
import Team from "./team";
import styled from "styled-components";

const TicketWrapper = styled.div``;

class CommitTicket extends Ticket {
  render() {
    let title = this.props.ticket.title + "\n\n" + this.commits().join("\n\n");

    return (
      // <TicketWrapper>
      <div className="ticket nojira" style={this.buildStyle()} title={title}>
        <span>⚐ {this.props.ticket.title}</span>
        {this.props.team && <Team team={this.props.team} />}
      </div>
      // </TicketWrapper>
    );
  }
}

export default CommitTicket;
