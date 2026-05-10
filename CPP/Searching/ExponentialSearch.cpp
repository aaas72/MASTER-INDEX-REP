/**
 * Exponential Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1)
 * - Worst Case: O(log n)
 * - Average Case: O(log n)
 * 
 * Space Complexity: O(1)
 * 
 * Note: Input vector must be sorted.
 */

#include <iostream>
#include <vector>
#include <algorithm>

int binarySearchRange(const std::vector<int>& arr, int low, int high, int target) {
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int exponentialSearch(const std::vector<int>& arr, int target) {
    int n = arr.size();
    if (n == 0) return -1;
    if (arr[0] == target) return 0;

    int i = 1;
    while (i < n && arr[i] <= target)
        i = i * 2;

    return binarySearchRange(arr, i / 2, std::min(i, n - 1), target);
}

/*
int main() {
    std::vector<int> data = {1, 2, 3, 4, 5, 8, 9, 10, 15, 20};
    std::cout << exponentialSearch(data, 15) << std::endl;
    return 0;
}
*/
