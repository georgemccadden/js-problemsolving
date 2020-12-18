/*

PROBLEM DOMAIN :

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. These are the constraints ->
- You may assume that each input would have exactly ONE solution
- You may not use the same element twice
- There must be at least two elements

EXAMPLE 1 :

Input -> nums = [2, 7, 11, 15], target = 9
Output -> [0, 1]
Explanation -> Because nums[0] + nums[1] == 9, [0, 1] is returned

EXAMPLE 2 :

Input -> nums = [3, 2, 4], target = 6
Output -> [1, 2]
Explanation -> Because nums[1] + nums[2] == 6, [1, 2] is returned

BRUTE FORCE APPROACH :

- First look at the passed in `target` integer
- Loop through the array and, for each element, loop until you find another value that equals to the target

COMPLEXITY ANALYSIS : 

Big O would be O(n^2) time because, for each element, you must loop through the rest of the array in order to find the compliment. The space would be O(1).

OPTIMAL SOLUTION :

*/

const twoSum = (nums, target) => {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		const neededVal = target - nums[i];

		if (neededVal in map) {
			return [ map[neededVal], i ];
		}

		map[nums[i]] = i;
	}

	return null;
};

/*

COMPLEXITY ANALYSIS :

Time -> O(n) because I traverse entire array which contains `n` elements and store the values in a hash table. The look up time only costs O(1).

Space -> O(n) because the extra space required depends on the number of items stored in the hash table. At most, the hash table will have `n` elements.

*/
