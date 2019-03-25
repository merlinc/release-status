const React = require("react");
const _ = require("lodash");

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
          this.formatDate(commit.date)
        );
      })
    );
  }

  className(ticket) {
    if (ticket.status === "NOJIRA") return "nojira";

    let classNames = {
      ready: "ready",
      closed: "closed",
      develop: "develop"
    };

    return classNames[ticket.status] || "unknown";
  }

  buildStyle() {
    let height =
      Math.max(this.Y(this.props.bottom) - this.Y(this.props.top), 0) + 12;
    return {
      top: this.Y(this.props.top),
      left: this.X(this.props.left),
      height
    };
  }
}

module.exports = Ticket;
