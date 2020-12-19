/*
PROBLEM DOMAIN :

Given a 2D grid map of `L`s (land) and `~`s (water), return the number of  islands.

(note / An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water)


EXAMPLE 1 :

Input -> 

grid = 
[
    [`L`, `L`, `L`, `L`, `~`],
    [`L`, `L`, `~`, `L`, `~`],
    [`L`, `L`, `~`, `~`, `~`],
    [`~`, `~`, `~`, `~`, `~`]
]

Output -> 1

EXAMPLE 2 :

Input -> 

grid =
[
    [`L`, `L`, `~`, `~`, `~`],
    [`L`, `L`, `~`, `~`, `~`],
    [`~`, `~`, `L`, `~`, `~`],
    [`~`, `~`, `~`, `L`, `~`]
]

Output -> 3


BRUTE FORCE APPROACH :

- Traverse the entire 2D matrix
- Keep a count of how much land is present
- Look up coordinates
- Return the island count

@param {character[][]} grid
@return {number}
*/
