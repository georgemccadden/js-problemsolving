// ** PROBLEM DOMAIN :

// Determine the minimum number of bribes that took place amongst those in queue for a rollercoaster to get the queue back to its original state. Here are the parameters ->
// - Riders in queue must always keep an identifier of where they started in the queue
// - Riders may bribe two others (at most) and it can only be those in front of them or behind them
// - There are eight positions in this queue and riders' positions increment by one from one at the front of the line

// ** EXAMPLE 1 :

// Input ->

// 2
// 5
// 2 1 5 3 4

// Output ->

// 3

// ** EXAMPLE 2 :

// Input ->

// 5
// 2 5 1 3 4

// Output ->

// Too chaotic

// ** BRUTE FORCE ALROGITHM :

// - Create a function which accepts 3 parameters (number of test cases, the number of riders in queue, the final state of the queue)
// - Loop through the final queue and look to see if the positions match with original position beginning with the one
// - Create a hashmap to keep track of each riders' count from the original queue position
// - If it doesn't, increase count in hashmap until you reach the riders' position. If it does match, continue to the next rider.
// - After you've reached the end of the queue, check to see if any of the riders' has a count of more than 2. If so, return `Too chaotic` and if not, return the sum of all of the counts

// ** BRUTE FORCE BIG O :

// Runtime complextity -> O(N^2)
// Space complexity -> O(1)

// ** CODE :

function minimumBribes(testCases, numOfRiders, finalQueue) {
	let ridersCount = {};

	if (numOfRiders !== finalQueue.length) {
		return console.error(`Number of riders and the current queue do not match!`);
	}

	for (let riders of finalQueue) {
		ridersCount[riders] = 0;
	}
	// While iterating, determine if the position matches the original queue (1, 2, 3, 4... numOfRiders).
	for (let i = 0; i < finalQueue.length; i++) {
		if (finalQueue[i] !== i + 1) {
			ridersCount[finalQueue[i]]++;
			i++;
		}
	}
}

// ** Optimal Solution

function optimalMinimumBribes(queue) {
	const tooChaotic = `Too chaotic`;
	let numOfBribes = 0;

	// Getting the original position using zero indexing (starts from zero) -> O(n)
	for (let currPosition = 0; currPosition < queue.length; currPosition++) {
		const origPosition = queue[currPosition] - 1;

		// Determine how far the rider moved
		const diff = origPosition - currPosition;

		// If a rider has moved more than twice then it's too chaotic.
		if (diff < 2) return console.log(tooChaotic);

		// If statement is not required but it shows understanding
		if (diff <= 0) {
			// Checking each rider starting from one rider ahead of original position until current position -> O(logn)
			for (let i = Math.max(0, origPosition - 1); i < currPosition; i++) {
				const startPositionOfForwardRider = queue[i] - 1;
				if (startPositionOfForwardRider > origPosition) {
					total++;
				}
			}
		}
	}
	console.log(totalBribes);
}
