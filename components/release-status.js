/* eslint-disable no-param-reassign, class-methods-use-this */
const React = require("react");

const dimensions = {
  releaseOffset: 50,
  releaseHeight: 30,
  ticketWidth: 190
};

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class ReleaseStatus extends React.Component {
  Y(y) {
    return dimensions.releaseOffset + y * dimensions.releaseHeight;
  }

  X(x) {
    return x * dimensions.ticketWidth;
  }

  pad(v, n, c) {
    n = n || 2;
    c = c || "0";
    v = `${v}`;
    while (v.length < n) v = c + v;
    return v;
  }

  formatDate(date) {
    if (!date) return "";
    date = new Date(date);
    const diff = Date.now() - date.getTime();
    if (diff < 1000 * 60 * 60 * 2) {
      return `${this.pad(date.getHours())}:${this.pad(
        date.getMinutes()
      )}:${this.pad(date.getSeconds())}`;
    }
    if (diff < 1000 * 60 * 60 * 24 * 6) {
      return `${dayNames[date.getDay()]} ${this.pad(
        date.getHours()
      )}:${this.pad(date.getMinutes())}`;
    }
    return `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(
      date.getDate()
    )}`;
  }
}

module.exports = ReleaseStatus;
