const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen(PORT).then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port ${PORT}
      📭  Query at http://localhost:${PORT}
    `);
});
