const { UserList, MovieList } = require('./../FakeData');
const lodash = require('lodash');

const resolvers = {
	Query: {
		users: () => UserList,
		user: (parent, args) => {
			const { id } = args;
			const foundUser = UserList.find((user) => user.id === Number(id));
			return foundUser;
		},
		movies: () => MovieList,
		movie: (parent, args) => {
			const { name } = args;
			const foundMovie = MovieList.find((movie) => (movie.name = name));
			return foundMovie;
		},
	},

	User: {
		favoriteMovies: () =>
			MovieList.filter(
				(movie) =>
					movie.yearOfPublication >= 2010 && movie.yearOfPublication <= 2020
			),
	},

	Mutation: {
		createUser: (parent, args) => {
			const { input } = args;
			const lastIndex = UserList.length - 1;
			input.id = lastIndex + 1;
			UserList.push(input);
			return UserList[lastIndex + 1];
		},

		updateUsername: (parent, args) => {
			const { id, username } = args.input;
			let updatedUser;
			UserList.forEach((user) => {
				if (user.id === Number(id)) {
					user.username = username;
					updatedUser = user;
				}
			});
			return updatedUser;
		},

		deleteUser: (parent, args) => {
			const { id } = args;
			lodash.remove(UserList, (user) => user.id === Number(id));
			return null;
		},
	},
};

module.exports = { resolvers };
