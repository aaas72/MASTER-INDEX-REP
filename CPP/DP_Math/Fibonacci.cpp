/**
 * Fibonacci Sequence Implementation (Dynamic Programming)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1) iterative approach
 */

#include <iostream>
#include <vector>

long long fibonacci(int n) {
    if (n <= 1) return n;
    
    long long prev = 0, curr = 1;
    for (int i = 2; i <= n; i++) {
        long long next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

/*
int main() {
    std::cout << fibonacci(10) << std::endl; // Output: 55
    return 0;
}
*/
