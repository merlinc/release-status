const config = require("config");

//         graphqlHost: `${config.get("graphql.host")}:${config.get("graphql.port")}/${config.get("graphql.path")}`,
module.exports = {
  env: {
    graphqlHost: `${config.get("graphql.host")}`
  }
};
