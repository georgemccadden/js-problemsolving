/*

PROBLEM DOMAIN :

Given an array of integers, nums, containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. All elements appear only once except for precisely one integer which appears two or more times.

(An array is best for accessing elements by index in O(1) time but for searching, inserting, and deleting it is inefficient and takes O(n) time)


EXAMPLE 1 :

Input -> nums = [1,3,4,2,2]
Output -> 2

EXAMPLE 2 :

Input -> nums = [3,1,3,4,2]
Output -> 3

EXAMPLE 3 :

Input -> nums = [1,1]
Output -> 1

EXAMPLE 4 :

Input -> nums = [1, 2, 3]
Output -> undefined
Explanation -> All the integers are unique and there are none which repeat.


SOLUTION W/ ALGORITHM :

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
	/* Keep a tally of the variables as you iterate with O(n) space */
	const allNums = {};

	/* Loop through the nums array in O(n) time */
	for (let i = 0; i < nums.length; i++) {
		if (!allNums[nums[i]]) {
			allNums[nums[i]] = nums[i];
		} else {
			/* Return the first duplicate number */
			return nums[i];
		}
	}
	/* Return undefined if all of the integers are unique */
	return undefined;
}
/*

BIG O :

Runtime complexity ~> O(n)

Space complexity ~> O(n)

*/
