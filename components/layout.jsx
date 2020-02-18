import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title} - Ticket Status</title>
          <script src="/app.js" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

export default Layout;
