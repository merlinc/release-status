import React from "react";
const _ = require("lodash");
import Merges from "./merges";
import JiraTicket from "./jira-ticket";
import CommitTicket from "./commit-ticket";
import UpdatesTicket from "./updates-ticket";
import styled from "styled-components";

const TicketsWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 135px;
  right: 100px;
`;

class Tickets extends React.Component {
  areCellsAvailable(cells, x, y, yLast) {
    cells[x] = cells[x] || [];
    y = y || 0;
    yLast = yLast > y ? yLast : y;
    for (let yy = y; yy <= yLast; yy++) {
      if (cells[x][yy]) return true;
    }
  }

  nextAvailableBlock(cells, y, yLast) {
    let x = 0;
    while (this.areCellsAvailable(cells, x, y, yLast)) x++;
    return x;
  }

  lastCellInRow(cells, y) {
    let lastX = 0;
    for (let x = cells.length; x >= 0; x--) {
      if (cells[x] && cells[x][y]) break;
      lastX = x;
    }
    return lastX;
  }

  makeCellsUnavailable(cells, x, y, yLast, val) {
    cells[x] = cells[x] || [];
    for (let yy = y; yy <= yLast; yy++) cells[x][yy] = val || 1;
  }

  getTop(ticket) {
    return _.findIndex(this.props.commits, {
      sha: _.get(_.first(ticket.merges), "mergeId") || 0
    });
  }

  getBottom(ticket) {
    return _.findIndex(this.props.commits, {
      sha: _.get(_.last(ticket.merges), "mergeId") || 0
    });
  }

  getHeight(ticket) {
    return Math.max(this.getTop(ticket) - this.getBottom(ticket), 0);
  }

  render() {
    let tickets = _.values(this.props.tickets);

    // sort tickets by smallest first and then by name
    tickets = _.sortBy(tickets, "id");
    tickets = _.sortBy(tickets, ticket => this.getHeight(ticket));

    const cells = [];

    return (
      <TicketsWrapper>
        {tickets.map(ticket => {
          const TicketType =
            ticket.status === "NOJIRA" ? CommitTicket : JiraTicket;

          const top = this.getTop(ticket);
          const bottom = this.getBottom(ticket);
          const left = this.nextAvailableBlock(cells, top, bottom);

          this.makeCellsUnavailable(cells, left, top, bottom, ticket.id);

          return (
            <div key={ticket.id} data-ticket-id={ticket.id}>
              <TicketType
                ticket={ticket}
                top={top}
                bottom={bottom}
                left={left}
              />
              <Merges
                merges={ticket.merges}
                commits={this.props.commits}
                left={left}
              />
            </div>
          );
        })}
        {/*{this.props.updates.map(update => {*/}
        {/*  const left = this.lastCellInRow(cells, update.top);*/}
        {/*  return (*/}
        {/*    <UpdatesTicket*/}
        {/*      key={update.releaseId}*/}
        {/*      updates={update.updates}*/}
        {/*      top={update.top}*/}
        {/*      bottom={update.top}*/}
        {/*      left={left}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </TicketsWrapper>
    );
  }
}

export default Tickets;
