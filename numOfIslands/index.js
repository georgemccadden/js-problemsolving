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

OPTIMAL SOLUTION :

@param {character[][]} grid
@return {number}
*/

const numIslands = (grid) => {
	if (!grid || grid.length === 0) {
		return 0;
	}

	const gridLength = grid.length;
	const rowLength = grid[0].length;

	let howManyIslands = 0;

	for (let i = 0; i < gridLength; i++) {
		for (let j = 0; j < rowLength; j++) {
			if (grid[i][j] === `L`) {
				howManyIslands++;
				makeIntoWater(grid, i, j);
			}
		}
	}

	return howManyIslands;
};

const makeIntoWater = (grid, rowIndex, colIndex) => {
	if (grid[rowIndex] === undefined || grid[rowIndex][colIndex] === undefined || grid[rowIndex][colIndex] === `~`)
		return;

	grid[rowIndex][colIndex] = `~`;
	makeIntoWater(grid, rowIndex + 1, colIndex);
	makeIntoWater(grid, rowIndex - 1, colIndex);
	makeIntoWater(grid, rowIndex, colIndex + 1);
	makeIntoWater(grid, rowIndex, colIndex - 1);
};
