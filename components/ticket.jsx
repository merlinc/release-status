import React from "react";
const _ = require("lodash");
import utils from "../lib/release-status-utils";

class Ticket extends React.Component {
  commits() {
    return _.uniq(
      _.map(this.props.ticket.commits, commit => {
        return (
          commit.title +
          "\n" +
          "- " +
          commit.author +
          " - " +
          utils.formatDate(commit.date)
        );
      })
    );
  }

  className(ticket) {
    if (ticket.status === "NOJIRA") return "nojira";

    let classNames = {
      ready: "ready",
      closed: "closed",
      develop: "develop",
      review: "review",
      test: "test"
    };

    return classNames[ticket.status] || "unknown";
  }

  buildStyle() {
    let height =
      Math.max(
        utils.calcY(this.props.bottom) - utils.calcY(this.props.top),
        0
      ) + 12;
    return {
      top: utils.calcY(this.props.top),
      left: utils.calcX(this.props.left),
      height
    };
  }
}

export default Ticket;
