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

*/
