/**
 * Interpolation Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1)
 * - Worst Case: O(n)
 * - Average Case: O(log(log n))
 * 
 * Space Complexity: O(1)
 * 
 * Note: Input vector must be sorted and uniformly distributed.
 */

#include <iostream>
#include <vector>

int interpolationSearch(const std::vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) return low;
            return -1;
        }

        // Probing formula
        int pos = low + (((double)(high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        if (arr[pos] == target)
            return pos;
        if (arr[pos] < target)
            low = pos + 1;
        else
            high = pos - 1;
    }
    return -1;
}

/*
int main() {
    std::vector<int> data = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47};
    std::cout << interpolationSearch(data, 18) << std::endl;
    return 0;
}
*/
