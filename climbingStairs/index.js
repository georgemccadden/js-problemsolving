// ** PROBLEM DOMAIN :

// Determine how many distinct ways you climb to the top of the stairs when given these parameters ->
// - You can either climb one or two steps at a time
// - It takes `n` steps to reach the top

// ** EXAMPLE 1 :

// Input -> n = 2
// Output -> 2
// Explanation -> There are two ways to climb to the top of the stairs (1. One step + one step / 2. Two steps)

// ** EXAMPLE 2 :

// Input -> n = 3
// Output -> 3
// Explanation -> There are three ways to climb to the top of the stairs (1. One step + one step + one step / 2. One step + two steps / 3. Two steps + one step)

// ** OPTIMAL SOLUTION :

const climbStairs = (n) => {
	const dp = [ 1, 1 ];

	for (let i = 2; i <= n; i++) {
		const result = dp[0] + dp[1];
		dp[0] = dp[1];
		dp[1] = result;
	}
	return dp[1];
};
