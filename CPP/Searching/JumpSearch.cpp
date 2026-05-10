/**
 * Jump Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1)
 * - Worst Case: O(√n)
 * - Average Case: O(√n)
 * 
 * Space Complexity: O(1)
 * 
 * Note: Input vector must be sorted.
 */

#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

int jumpSearch(const std::vector<int>& arr, int target) {
    int n = arr.size();
    int step = std::sqrt(n);
    int prev = 0;

    while (arr[std::min(step, n) - 1] < target) {
        prev = step;
        step += std::sqrt(n);
        if (prev >= n) return -1;
    }

    while (arr[prev] < target) {
        prev++;
        if (prev == std::min(step, n)) return -1;
    }

    if (arr[prev] == target) return prev;
    return -1;
}

/*
int main() {
    std::vector<int> data = {1, 2, 3, 4, 5, 8, 9, 10, 15, 20};
    std::cout << jumpSearch(data, 15) << std::endl;
    return 0;
}
*/
