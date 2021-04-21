/*

PROBLEM DOMAIN :
Given two strings "s" and "t", return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.


TEST CASES :
Input -> s = "ab#c", t = "ad#c"
Output -> true
Explanation -> Both s and t become "ac".

Input -> s = "ab##", t = "c#d#"
Output -> true
Explanation -> Both s and t become "".

Input -> s = "a#c", t = "b"
Output -> false
Explanation -> s becomes "c" while t becomes "b".

Input -> s = "a#c", t = "b"
Output -> false
Explanation -> s becomes "c" while t becomes "b".


BRUTE FORCE SOLUTION :
*/
const buildString = (string) => {
	let finalString = [];
	for (let p = 0; p < string.length; p++) {
		if (string[p] !== '#') {
			finalString.push(string[p]);
		} else {
			finalString.pop();
		}
	}
	return finalString;
};

const bruteForce = (firstString, secondString) => {
	let finalFirst = bruteForce(firstString);
	let finalSecond = bruteForce(secondString);
	if (finalFirst.length !== finalSecond.length) {
		return false;
	} else {
		for (let p = 0; p < finalSecond.length; p++) {
			if (finalFirst[p] !== finalSecond[p]) {
				return false;
			}
		}
	}
	return true;
};
