/**
 * Fibonacci Sequence Implementation (Dynamic Programming)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) with memoization array, or O(1) with iterative approach.
 */

export class Fibonacci {
    /**
     * Recursive approach with Memoization
     */
    static getWithMemo(n: number, memo: Map<number, number> = new Map()): number {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n)!;

        const result = this.getWithMemo(n - 1, memo) + this.getWithMemo(n - 2, memo);
        memo.set(n, result);
        return result;
    }

    /**
     * Iterative approach (Space Optimized)
     */
    static getIterative(n: number): number {
        if (n <= 1) return n;
        
        let prev = 0;
        let curr = 1;

        for (let i = 2; i <= n; i++) {
            const next = prev + curr;
            prev = curr;
            curr = next;
        }

        return curr;
    }
}

// Example usage:
// console.log(Fibonacci.getIterative(10)); // Output: 55
