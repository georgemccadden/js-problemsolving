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
