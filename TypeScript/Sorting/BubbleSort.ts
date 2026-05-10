/**
 * Bubble Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n) - when array is already sorted.
 * - Worst Case: O(n^2)
 * - Average Case: O(n^2)
 * 
 * Space Complexity: O(1) - in-place sorting.
 */

export function bubbleSort<T>(arr: T[]): T[] {
    const n = arr.length;
    const sortedArr = [...arr];

    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap elements
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
                swapped = true;
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;
    }

    return sortedArr;
}

// Example usage:
// const data = [5, 3, 8, 4, 2];
// console.log(bubbleSort(data));
