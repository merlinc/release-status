import React from "react";
import Header from "./header";

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title} - Ticket Status</title>
          <script src="/app.js" />
        </head>
        <body>
          <Header org={this.props.org} project={this.props.project} />
          {this.props.children}
        </body>
      </html>
    );
  }
}

export default Layout;
