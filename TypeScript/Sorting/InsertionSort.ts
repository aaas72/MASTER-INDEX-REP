/**
 * Insertion Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n) - when array is already sorted.
 * - Worst Case: O(n^2)
 * - Average Case: O(n^2)
 * 
 * Space Complexity: O(1) - in-place sorting.
 */

export function insertionSort<T>(arr: T[]): T[] {
    const n = arr.length;
    const sortedArr = [...arr];

    for (let i = 1; i < n; i++) {
        let key = sortedArr[i];
        let j = i - 1;

        /* Move elements of sortedArr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && sortedArr[j] > key) {
            sortedArr[j + 1] = sortedArr[j];
            j = j - 1;
        }
        sortedArr[j + 1] = key;
    }

    return sortedArr;
}

// Example usage:
// const data = [5, 3, 8, 4, 2];
// console.log(insertionSort(data));
