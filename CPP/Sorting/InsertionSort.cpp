/**
 * Insertion Sort Implementation
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

template <typename T>
void insertionSort(std::vector<T>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        T key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

/*
int main() {
    std::vector<int> data = {5, 3, 8, 4, 2};
    insertionSort(data);
    for (int x : data) std::cout << x << " ";
    return 0;
}
*/
