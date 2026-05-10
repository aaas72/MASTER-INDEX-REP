"""
Fibonacci Sequence Implementation (Dynamic Programming)

Time Complexity: O(n)
Space Complexity: O(n) with memoization or O(1) with iterative approach.
"""

def fibonacci_memo(n, memo={}):
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

def fibonacci_iterative(n):
    if n <= 1:
        return n
    
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr

# Example usage:
# if __name__ == "__main__":
#     print(fibonacci_iterative(10)) # Output: 55
