# Algorithmic Complexity Overview

This document provides a summary of the time and space complexities for all 20 algorithms implemented in this repository.

| Category | Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sorting** | Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| | Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| | Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| | Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| | Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| **Searching** | Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| | Linear Search | O(1) | O(n) | O(n) | O(1) |
| | Jump Search | O(1) | O(√n) | O(√n) | O(1) |
| | Interpolation Search | O(1) | O(log(log n)) | O(n) | O(1) |
| | Exponential Search | O(1) | O(log n) | O(log n) | O(1) |
| **Graphs** | Dijkstra | O(V²) | O(E log V) | O(E log V) | O(V) |
| | BFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| | DFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| | Bellman-Ford | O(E) | O(V * E) | O(V * E) | O(V) |
| | Floyd-Warshall | O(V³) | O(V³) | O(V³) | O(V²) |
| **DP & Math** | Fibonacci (DP) | O(n) | O(n) | O(n) | O(1) / O(n) |
| | Knapsack (0/1) | O(n * W) | O(n * W) | O(n * W) | O(n * W) |
| | LCS | O(m * n) | O(m * n) | O(m * n) | O(m * n) |
| | Prim's Algorithm | O(V²) | O(V²) | O(V²) | O(V) |
| | Sieve of Eratosthenes | O(n log log n) | O(n log log n) | O(n log log n) | O(n) |

---
*Note: V = Vertices, E = Edges, n = elements, W = Capacity, m/n = String lengths.*
