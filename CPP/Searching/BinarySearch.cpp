/**
 * Binary Search Implementation
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

template <typename T>
int binarySearch(const std::vector<T>& arr, T target) {
    int low = 0;
    int high = arr.size() - 1;

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

/*
int main() {
    std::vector<int> data = {1, 2, 3, 4, 5, 8, 9};
    std::cout << binarySearch(data, 8) << std::endl;
    return 0;
}
*/
