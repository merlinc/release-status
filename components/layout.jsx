"use strict";

const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title} - Ticket Status</title>
          <script src="/static/app.js" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = Layout;
