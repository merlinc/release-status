const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dimensions = {
  releaseOffset: 50,
  releaseHeight: 30,
  ticketWidth: 190
};

/* eslint-disable no-param-reassign */
const pad = (v, n, c) => {
  n = n || 2;
  c = c || "0";
  v = `${v}`;
  while (v.length < n) v = c + v;
  return v;
};
/* eslint-enable no-param-reassign */

/* eslint-disable no-param-reassign */
const formatDate = date => {
  if (!date) return "";
  date = new Date(date);
  const diff = Date.now() - date.getTime();
  if (diff < 1000 * 60 * 60 * 2) {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )}`;
  }
  if (diff < 1000 * 60 * 60 * 24 * 6) {
    return `${dayNames[date.getDay()]} ${pad(date.getHours())}:${pad(
      date.getMinutes()
    )}`;
  }
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
};
/* eslint-enable no-param-reassign */

const calcY = y => {
  return dimensions.releaseOffset + y * dimensions.releaseHeight;
};

const calcX = x => {
  return x * dimensions.ticketWidth;
};

const shortHash = sha => {
  return sha.substr(0, 8);
};

const shortMessage = message => {
  return message.substr(0, 80);
};

const name = message => {
  return message === "HEAD" ? "HEAD" : `⚙ ${message}`;
};

module.exports = {
  formatDate,
  calcY,
  calcX,
  pad,
  shortHash,
  shortMessage,
  name
};
