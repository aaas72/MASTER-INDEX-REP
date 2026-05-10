/**
 * 0/1 Knapsack Problem Implementation (Dynamic Programming)
 * 
 * Time Complexity: O(n * W)
 * Space Complexity: O(n * W)
 */

#include <iostream>
#include <vector>
#include <algorithm>

int knapsack(const std::vector<int>& weights, const std::vector<int>& values, int capacity) {
    int n = values.size();
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(capacity + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = std::max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

/*
int main() {
    std::vector<int> values = {60, 100, 120};
    std::vector<int> weights = {10, 20, 30};
    int capacity = 50;
    std::cout << knapsack(weights, values, capacity) << std::endl; // Output: 220
    return 0;
}
*/
