# MASTER-INDEX-REP

Twenty fundamental computer-science algorithms, each implemented in **TypeScript**, **Python** and **C++** — 60 clean, documented, standalone reference implementations with complexity analysis.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Algorithms](https://img.shields.io/badge/Algorithms-20-0E75B6?style=flat-square)

> Want to see them run? The interactive visualizer and simulation lab lives in **[THE HUB — MASTER-INDEX](https://github.com/aaas72/MASTER-INDEX)** ([live demo](https://aaas72.github.io/MASTER-INDEX/)).

## Algorithm Index

| Category | Algorithm | TypeScript | Python | C++ |
|---|---|---|---|---|
| **Sorting** | Quick Sort | [TS](TypeScript/Sorting/QuickSort.ts) | [Python](Python/Sorting/QuickSort.py) | [C++](CPP/Sorting/QuickSort.cpp) |
|  | Merge Sort | [TS](TypeScript/Sorting/MergeSort.ts) | [Python](Python/Sorting/MergeSort.py) | [C++](CPP/Sorting/MergeSort.cpp) |
|  | Bubble Sort | [TS](TypeScript/Sorting/BubbleSort.ts) | [Python](Python/Sorting/BubbleSort.py) | [C++](CPP/Sorting/BubbleSort.cpp) |
|  | Insertion Sort | [TS](TypeScript/Sorting/InsertionSort.ts) | [Python](Python/Sorting/InsertionSort.py) | [C++](CPP/Sorting/InsertionSort.cpp) |
|  | Heap Sort | [TS](TypeScript/Sorting/HeapSort.ts) | [Python](Python/Sorting/HeapSort.py) | [C++](CPP/Sorting/HeapSort.cpp) |
| **Searching** | Binary Search | [TS](TypeScript/Searching/BinarySearch.ts) | [Python](Python/Searching/BinarySearch.py) | [C++](CPP/Searching/BinarySearch.cpp) |
|  | Linear Search | [TS](TypeScript/Searching/LinearSearch.ts) | [Python](Python/Searching/LinearSearch.py) | [C++](CPP/Searching/LinearSearch.cpp) |
|  | Jump Search | [TS](TypeScript/Searching/JumpSearch.ts) | [Python](Python/Searching/JumpSearch.py) | [C++](CPP/Searching/JumpSearch.cpp) |
|  | Interpolation Search | [TS](TypeScript/Searching/InterpolationSearch.ts) | [Python](Python/Searching/InterpolationSearch.py) | [C++](CPP/Searching/InterpolationSearch.cpp) |
|  | Exponential Search | [TS](TypeScript/Searching/ExponentialSearch.ts) | [Python](Python/Searching/ExponentialSearch.py) | [C++](CPP/Searching/ExponentialSearch.cpp) |
| **Graphs** | Dijkstra | [TS](TypeScript/Graphs/Dijkstra.ts) | [Python](Python/Graphs/Dijkstra.py) | [C++](CPP/Graphs/Dijkstra.cpp) |
|  | Breadth-First Search | [TS](TypeScript/Graphs/BFS.ts) | [Python](Python/Graphs/BFS.py) | [C++](CPP/Graphs/BFS.cpp) |
|  | Depth-First Search | [TS](TypeScript/Graphs/DFS.ts) | [Python](Python/Graphs/DFS.py) | [C++](CPP/Graphs/DFS.cpp) |
|  | Bellman-Ford | [TS](TypeScript/Graphs/BellmanFord.ts) | [Python](Python/Graphs/BellmanFord.py) | [C++](CPP/Graphs/BellmanFord.cpp) |
|  | Floyd-Warshall | [TS](TypeScript/Graphs/FloydWarshall.ts) | [Python](Python/Graphs/FloydWarshall.py) | [C++](CPP/Graphs/FloydWarshall.cpp) |
| **DP & Math** | Fibonacci (DP) | [TS](TypeScript/DP_Math/Fibonacci.ts) | [Python](Python/DP_Math/Fibonacci.py) | [C++](CPP/DP_Math/Fibonacci.cpp) |
|  | 0/1 Knapsack | [TS](TypeScript/DP_Math/Knapsack.ts) | [Python](Python/DP_Math/Knapsack.py) | [C++](CPP/DP_Math/Knapsack.cpp) |
|  | Longest Common Subsequence | [TS](TypeScript/DP_Math/LCS.ts) | [Python](Python/DP_Math/LCS.py) | [C++](CPP/DP_Math/LCS.cpp) |
|  | Prim's MST | [TS](TypeScript/DP_Math/PrimAlgorithm.ts) | [Python](Python/DP_Math/PrimAlgorithm.py) | [C++](CPP/DP_Math/PrimAlgorithm.cpp) |
|  | Sieve of Eratosthenes | [TS](TypeScript/DP_Math/Sieve.ts) | [Python](Python/DP_Math/Sieve.py) | [C++](CPP/DP_Math/Sieve.cpp) |

Best, average and worst-case time complexity plus space complexity for every algorithm are summarized in **[Complexity.md](Complexity.md)**.

## Design Principles

| Language | Style | Focus |
|---|---|---|
| TypeScript | Functional, strongly typed | Generics and interfaces for type-safe, reusable code |
| Python | Pythonic, procedural | Readability and idiomatic use of the standard library |
| C++ | Systems-level | STL containers, memory efficiency and execution speed |

Every file is self-contained and documents its time and space complexity, so it can be read, copied or run on its own.

## Running an Implementation

```bash
# TypeScript (Node.js 20+)
npx tsx TypeScript/Sorting/QuickSort.ts

# Python 3
python Python/Graphs/Dijkstra.py

# C++ (C++17)
g++ -std=c++17 CPP/DP_Math/Knapsack.cpp -o knapsack && ./knapsack
```

C++ files include a runnable `main()` demo; TypeScript and Python files end with a commented example usage block — uncomment it to see output.

## Repository Structure

```text
TypeScript/ · Python/ · CPP/
   ├── Sorting/
   ├── Searching/
   ├── Graphs/
   └── DP_Math/
Complexity.md
```

## Author

**Abdellah Sheikh** — [abdellahsheikh.dev](https://abdellahsheikh.dev) · [LinkedIn](https://www.linkedin.com/in/abdellahsheikh)
