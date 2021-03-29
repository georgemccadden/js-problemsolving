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

*/
