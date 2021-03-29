/*

PROBLEM DOMAIN :
Given 'n' non-negative integers 'a1, a2, ..., n' , where each represents a point at coordinate (i, ai). 'n' vertical lines are drawn such that the two endpoints of the line 'i' is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water. (You may not slant the container)

CONSTRAINTS :
- Does the thickness of the lines affect the area? -> No, assume they take up no space.
- Do the left and right sides of the graph count as walls? -> No, the sides cannot be used to form a container.
- Does a higher line inside of our container affect the area? -> No, lines inside a container does not affect the area.

TEST CASES :
[7, 1, 2, 3, 9]
 ^    and    ^
- Since these are the two largest lines in our graph, they would hold the greatest area (a = l * w). 7 is the height given that it's the greatest common number of the walls. 
- Subtract the indexes to find the width, 4 - 0 = 4.
- The area is 7 * 4 = 28. 

[ ]
 ^
- Since the array's length is less than 2, the function should return 0.

[6, 9, 3, 4, 5, 8]
    ^           ^
- Although these index values aren't the most obvious choices, they hold the greatest area.
- Subtracting the indexes to find the width, 5 - 1 = 4.
- The area is 8 * 4 = 32.

BRUTE FORCE SOLUTION :
*/
const bruteForce = (arr) => {
	let maxArea = 0;
	for (let p1 = 0; p1 < arr.length; p1++) {
		for (let p2 = p1 + 1; p2 < arr.length; p2++) {
			const min = Math.min(arr[p2], arr[p1]);
			const width = p2 - p1;
			const area = min * width;
			maxArea = Math.max(area, maxArea);
		}
	}
	return maxArea;
};

/*
COMPLEXITY ANALYSIS :
Time complexity -> Quadratic runtime of O(n^2) because of the nested for loop.
Space complextiy -> Constant space of O(1) because none of the variables use more memory than initialized.

OPTIMIZATION EXPLANATION :
In order to improve the runtime I iterated over the array only once while using two pointers. Using the equation for finding the area, area = min(a, b) * (b[i] - a[i]) will allow for the use of the greatest minimum height and working our way inwards to find other alternative heights.

OPTIMAL SOLUTION :
*/
const containerWithMostWater = (arr) => {
	let maxArea = 0;
	let p1 = 0;
	let p2 = arr.length - 1;
	while (p1 < p2) {
		const height = Math.min(arr[p1], arr[p2]);
		const width = p2 - p1;
		const area = height * width;
		maxArea = Math.max(area, maxArea);
		if (p1 <= p2) {
			p1++;
		} else {
			p2++;
		}
	}
	return maxArea;
};
/*
COMPLEXITY ANALYSIS :
Time complexity -> Linear runtime of O(n) because I must visit every element in the array.
Space complexity -> Constant space of O(1) because none of the variables use more memory than initialized.
  
*/
