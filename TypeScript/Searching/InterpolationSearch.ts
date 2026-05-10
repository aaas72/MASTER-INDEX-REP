/**
 * Interpolation Search Implementation
 * 
 * Time Complexity:
 * - Best Case: O(1)
 * - Worst Case: O(n) - occurs when distribution is non-uniform.
 * - Average Case: O(log(log n)) - for uniformly distributed data.
 * 
 * Space Complexity: O(1)
 * 
 * Note: Input array must be sorted and uniformly distributed for best performance.
 */

export function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) return low;
            return -1;
        }

        // Probing formula
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

// Example usage:
// const data = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
// console.log(interpolationSearch(data, 18)); // Output: 4
