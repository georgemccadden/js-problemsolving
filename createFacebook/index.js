/*

PROBLEM DOMAIN :
Design a Facebook-like application structure.

TEST CASES :
username -> happyperson@gmail.com
password -> iforgotmypassword
                    ^
- There should be a user database that checks whether or not the user enters a password incorrectly.

News Feed -> Rafa's Status - I'm looking forward to a great summer of tennis!
                ^
- After a user has successfully logged in they should be able to see a news feed with other users' statuses.

BRUTE FORCE SOLUTION :
*/
const database = [
	{
		username: 'happyperson@gmail.com',
		password: 'password4happyperson!',
		firstName: 'Rafa',
		lastName: 'Nadal',
		status: "I'm looking forward to a great summer of tennis!"
	},
	{
		username: 'sadperson@gmail.com',
		password: 'password4sadperson!',
		firstName: 'Michelle',
		lastName: 'Williams',
		status: 'If only I could stop limiting myself and be more like Beyoncé..'
	},
	{
		username: 'tallperson@gmail.com',
		password: 'password4tallperson!',
		firstName: 'Canden',
		lastName: 'Poindexter',
		status: 'I miss picking George up over my head and pretending to throw him down the hallway.. hehe good times!'
	}
];

const newsFeed = [
	{
		user: database[0].firstName,
		status: database[0].status
	},
	{
		user: database[1].firstName,
		status: database[1].status
	},
	{
		user: database[2].firstName,
		status: database[2].status
	}
];
