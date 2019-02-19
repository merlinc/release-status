import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    uri: process.env.GRAPHQL ? process.env.GRAPHQL : "http://localhost:8001",
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }
  })
};

export default withData(config);
