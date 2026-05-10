/**
 * Quick Sort Implementation
 * 
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Worst Case: O(n^2) - occurs when the pivot is always the smallest or largest element.
 * - Average Case: O(n log n)
 * 
 * Space Complexity: O(log n) for recursion stack.
 */

export function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
// const data = [5, 3, 8, 4, 2];
// console.log(quickSort(data));
