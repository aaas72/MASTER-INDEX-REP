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
 * Note: Input array must be sorted.
 */

export function jumpSearch(arr: number[], target: number): number {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }

    if (arr[prev] === target) return prev;

    return -1;
}

// Example usage:
// const data = [1, 2, 3, 4, 5, 8, 9, 10, 15, 20];
// console.log(jumpSearch(data, 15)); // Output: 8
