const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
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
    "Track's Description"
    description: String
    "Number of views on current track"
    numberOfViews: Int
    "Modules in track"
    modules: [Module!]!
  }

  type Author {
    id: ID!
    "Author's full name"
    name: String!
    "Link to author's profile picture"
    photo: String
  }

  type Module {
    "Module's unique id"
    id: ID!
    "Module's title"
    title: String!
    "Module's length in minutes"
    length: Int
  }
`

module.exports = typeDefs
