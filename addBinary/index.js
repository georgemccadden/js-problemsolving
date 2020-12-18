/*

PROBLEM DOMAIN :

Given two binary strings `a` and `b`, return their sum as a binary string.

(note / The input strings are both non-empty and contain only characters 1 or 0)


EXAMPLE 1 :

Input -> a = `11`, b = `1`
Output -> `100`

Example 2 :

Input -> a = `1010`, b = `1011`
Output -> `10101`


OPTIMAL SOLUTION :
*/
const addBinary = (a, b) => {
	let sum = ``;
	let carryover = 0;
	let i = a.length - 1; /* We want the right most element in both strings `a` and `b` */
	let j = b.length - 1;

	while (i >= 0 || j >= 0 || carryover > 0) {
		const firstNum = i < 0 ? 0 : a[i--] - `0`;
		const secondNum = j < 0 ? 0 : b[j--] - `0`;

		sum += firstNum ^ secondNum ^ carryover;
		carryover = (firstNum + secondNum + carryover) >> 1; /* The >> is a bitwise operator */
	}

	return sum;
};
