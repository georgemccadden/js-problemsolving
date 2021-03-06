/* 

PROBLEM DOMAIN :

Given an integer number `n`, return the difference between the product of its digits and the sum of its digits.

EDGE CASES ->

- If the integer is just one digit then return that number
- If there is no passed in integer then print `empty integer` to the console


EXAMPLE 1 :

Input -> n = 234
Output -> 15
Explanation -> The product of the digits = 2 * 3 * 4 = 24, the sum of the digits = 2 + 3 + 4 = 9, the difference of 24 - 9 = 15.

EXAMPLE 2 :

Input -> n = 4421
Output -> 21
Explanation -> The product of the digits = 4 * 4 * 2 * 1 = 32, the sum of the digits = 4 + 4 + 2 + 1 = 11, the difference of 32 - 11 = 21.


BRUTE FORCE ALGORITHM :

- Convert the passed in integer into a string
- Split the string into individual elements
- Convert the string elements back to integers
- Create variables to hold the product and sum of the elements
- Return the difference of product and sum

CODE :
*/
const productAndSum = (num) => {
	let product = 1;
	let sum = 0;
	let newNum = num + '';
	newNum = [ ...(newNum + '') ].map(Number);

	for (let p = 0; p < newNum.length; p++) {
		product *= newNum[p];
		sum += newNum[p];
	}
	return product - sum;
};

/*
COMPLEXTIY ANALSYIS :
Runtime complexity -> O(2n) ~ O(n)
Space complexity -> 
*/
