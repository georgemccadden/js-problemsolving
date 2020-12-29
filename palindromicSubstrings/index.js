/* 

PROBLEM DOMAIN :

Given a string, determine how many palindromic substrings are present.

Edge Cases -> 

- Palindromes can be counted even if they consist of the same characters.
- Input strings' length cannot exceed 1000 characters
- Single characters are considered palindromes


EXAMPLE 1 :

Input -> `abc`
Output -> 3
Explanation -> There are three palindromic strings: `a`, `b`, `c`

EXAMPLE 2 :

Input -> `aaa`
Output -> 6
Explanation -> There are six palindromic strings: `a`, `a`, `a`, `aa`, `aa`, `aaa`


OPTIMAL SOLUTION :

@param {string} str
@return {number}

*/

const palindromicSubstring = (str) => {
	/* Determining how long to run based on the time complexity */
	let length = str.length,
		howLong = 2 * length - 1,
		i = 0;
	let count = 0;

	/* Loop through the string and check for valid palindromes for each character of the string as well as in between them */
	while (i <= howLong) {
		let left = Math.floor(i / 2);
		let right = left + i % 2;

		/* Expanding the substring of characters to see if it's a valid palindrome */
		while (left >= 0 && right < length && str.charAt(left) == str.charAt(right)) {
			count++;
			left--;
			right++;
		}
		i++;
	}
	return count;
};
