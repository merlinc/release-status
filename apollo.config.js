module.exports = {
  client: {
    service: {
      name: "release-status-graphql",
      url: process.env.GRAPHQL
        ? process.env.GRAPHQL
        : "http://localhost:8001/graphql"
    }
  }
};
