/*

PROBLEM DOMAIN :
Given 'n' non-negative representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

CONSTRAINTS :
- Do the left and right sides of the graph count as walls? -> No, the sides cannot be used to form a container.
- Will there be negative integers? -> No, assume that all integers are positive or 0.

TEST CASES :
[0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
    ^-----^
       1  ^--------^
               3   ^-----------^
                         4

- These values create a graph that holds 8 blocks which represent rain water.

[ ]
 ^
- This empty collection would return 0 since there are no values.

[3]
 ^
- This collection would return 0 because it doesn't have other values which would properly represent trapped rain water.

[3, 4, 3]
    ^
- This collection would return 0 because it doesn't have other values which would properly represent trapped rain water.

BRUTE FORCE SOLUTION :
*/
const bruteForce = (heights) => {
	let totalRainWater = 0;
	for (let pointer = 0; pointer < heights.length; pointer++) {
		let leftPointer = pointer;
		let rightPointer = pointer;
		let maxLeft = 0;
		let maxRight = 0;
		while (leftPointer >= 0) {
			maxLeft = Math.max(maxLeft, heights[leftPointer]);
			leftPointer--;
		}
		while (rightPointer < heights.length) {
			maxRight = Math.max(maxRight, heights[rightPointer]);
			rightPointer++;
		}
		const currRainWater = Math.min(maxLeft, maxRight) - heights[pointer];
		if (currRainWater >= 0) {
			totalRainWater += currRainWater;
		}
	}
	return totalRainWater;
};

/*
COMPLEXITY ANALYSIS :
Time Complexity -> Quadratic runtime of O(n^2) because of the nested while loops inside of the for loop.
Space Complexity -> Constant space of O(1) because none of the variables scale.

OPTIMAL SOLUTION :
*/
const trappingRainwater = (heights) => {
	let left = 0;
	let right = heights.length - 1;
	let maxLeft = 0;
	let maxRight = 0;
	let total = 0;
	while (left < right) {
		if (heights[left] <= heights[right]) {
			if (heights[left] >= maxLeft) {
				maxLeft = heights[left];
			} else {
				total += maxLeft - heights[left];
			}
			left++;
		} else {
			if (heights[right] >= maxRight) {
				maxRight = heights[right];
			} else {
				total += maxRight - heights[right];
			}
			right--;
		}
	}
	return total;
};

/*

COMPLEXITY ANALYSIS :
Time Complexity -> Linear runtime of O(n) because I only iterate through the heights array once.
Space Complexity -> Constant time of O(1) because none of the variables used will scale although they changed.

*/
