import { gql } from "apollo-server-azure-functions";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User{
    id: Int,
    firstName: String,
    lastName: String,
    fullName: String
  }

  type Query {
    user: String,
    books: String,
    getAllUsers: [User!]!
  }
`;

module.exports = {typeDefs};