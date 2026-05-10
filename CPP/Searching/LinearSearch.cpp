/**
 * Linear Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1)
 * - Worst Case: O(n)
 * - Average Case: O(n)
 * 
 * Space Complexity: O(1)
 */

#include <iostream>
#include <vector>

template <typename T>
int linearSearch(const std::vector<T>& arr, T target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}

/*
int main() {
    std::vector<int> data = {5, 3, 8, 4, 2};
    std::cout << linearSearch(data, 8) << std::endl;
    return 0;
}
*/
