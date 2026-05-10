"""
Prim's Algorithm Implementation (Minimum Spanning Tree)

Time Complexity: O(V^2)
Space Complexity: O(V)
"""

import sys

def prim_mst(graph):
    n = len(graph)
    key = [sys.maxsize] * n
    parent = [None] * n
    mst_set = [False] * n

    key[0] = 0
    parent[0] = -1

    for _ in range(n):
        u = min_key(key, mst_set)
        mst_set[u] = True

        for v in range(n):
            if graph[u][v] > 0 and not mst_set[v] and graph[u][v] < key[v]:
                key[v] = graph[u][v]
                parent[v] = u

    return parent

def min_key(key, mst_set):
    min_val = sys.maxsize
    min_index = -1

    for v in range(len(key)):
        if key[v] < min_val and not mst_set[v]:
            min_val = key[v]
            min_index = v

    return min_index

# Example usage:
# if __name__ == "__main__":
#     graph = [
#         [0, 2, 0, 6, 0],
#         [2, 0, 3, 8, 5],
#         [0, 3, 0, 0, 7],
#         [6, 8, 0, 0, 9],
#         [0, 5, 7, 9, 0]
#     ]
#     print(prim_mst(graph))
