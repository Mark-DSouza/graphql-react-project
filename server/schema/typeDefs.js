const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		users: [User!]!
		user(id: ID!): User
		movies: [Movie]
		movie(name: String!): Movie
	}

	type User {
		id: ID!
		name: String!
		username: String!
		age: Int!
		nationality: Nationality!
		friends: [User]
		favoriteMovies: [Movie]
	}

	enum Nationality {
		CANADA
		BRAZIL
		CHILE
		INDIA
		GERMANY
	}

	type Movie {
		id: ID!
		name: String!
		yearOfPublication: Int!
		isInTheaters: Boolean!
	}

	input CreateUserInput {
		name: String!
		username: String!
		age: Int = 18
		nationality: Nationality = BRAZIL
	}

	input UpdateUsernameInput {
		id: ID!
		username: String!
	}

	type Mutation {
		createUser(input: CreateUserInput!): User
		updateUsername(input: UpdateUsernameInput): User
		deleteUser(id: ID!): User
	}
`;

module.exports = { typeDefs };
