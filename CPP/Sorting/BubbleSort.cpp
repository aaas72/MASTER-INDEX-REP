/**
 * Bubble Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n)
 * - Worst Case: O(n^2)
 * - Average Case: O(n^2)
 * 
 * Space Complexity: O(1) - in-place sorting.
 */

#include <iostream>
#include <vector>
#include <algorithm>

template <typename T>
void bubbleSort(std::vector<T>& arr) {
    int n = arr.size();
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

/*
int main() {
    std::vector<int> data = {5, 3, 8, 4, 2};
    bubbleSort(data);
    for (int x : data) std::cout << x << " ";
    return 0;
}
*/
