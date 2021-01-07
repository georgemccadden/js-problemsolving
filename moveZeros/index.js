/*

PROBLEM DOMAIN :

Given an array of numbers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.


EXAMPLE :

Input -> [0,1,0,3,12]
Output -> [1,3,12,0,0]
Explanation -> All of the zeros were moved to the end of the array without changing the order of the non-zero elements (and its the same array, not a copy).


SOLUTION W/ ALGORITHM :

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeros = (nums) => {
	/* Keep track of which index to start putting zeros */
	let index = 0;

	/* Push all of the non-zeros forwared using index variable */
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];

		if (num !== 0) {
			nums[index] = num;
			index++;
		}
	}
	/* Using the index variable to determine where to start filling the remaining elements with zeros */
	for (let i = index; i < nums.length; i++) {
		nums[i] = 0;
	}
};

/* 

BIG O :

Runtime complexity ~> O(n)
Space complexity ~> O(1)

*/
