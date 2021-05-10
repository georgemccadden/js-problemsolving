/*
PROBLEM DOMAIN :
The API: "int read4(char *buf)" reads four characters at a time from a file. The return value is the actual number of characters read. For example, it returns three if there is only three characters left in the file. By using the read4 API, implement the function "int read(char *buf, int n)" that reads n characters from the file.

TEST CASES :
"wheniwasayoungwarthog"

whereToStart = 8
num = 6

output -> ayoung


BRUTE FORCE SOLUTION :
*/
const readCharacters = (num) => {
	let whereToStart = 0;
	num += whereToStart;

	for (let p = whereToStart; p < num + 1; p++) {
		console.log(arr[p]);
	}
	whereToStart += num;
};
