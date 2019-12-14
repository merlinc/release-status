import React from "react";
import Ticket from "./ticket";
import Update from "./update";
import styled from "styled-components";

const UpdatesWrapper = styled.div`
  position: absolute;
`;

class UpdatesTicket extends Ticket {
  render() {
    return (
      <UpdatesWrapper style={this.buildStyle()}>
        {this.props.updates.map(update => (
          <Update key={update.module} update={update} />
        ))}
      </UpdatesWrapper>
    );
  }
}

export default UpdatesTicket;
