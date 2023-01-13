const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    "Track's id"
    id: ID!
    "Track's title"
    title: String!
    "Track's author"
    author: Author!
    "Track's main illustration to display in track's card or track's page"
    thumbnail: String
    "Approx time to complete track"
    length: Int
    "Number of modules in track"
    modulesCount: Int
  }

  type Author {
    id: ID!
    "Author's full name"
    name: String!
    "Link to author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
