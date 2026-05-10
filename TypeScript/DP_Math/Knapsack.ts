/**
 * 0/1 Knapsack Problem Implementation (Dynamic Programming)
 * 
 * Time Complexity: O(n * W) where n is the number of items and W is the capacity.
 * Space Complexity: O(n * W)
 */

export function knapsack(weights: number[], values: number[], capacity: number): number {
    const n = values.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Example usage:
/*
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(weights, values, capacity)); // Output: 220
*/
