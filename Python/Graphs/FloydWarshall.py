"""
Floyd-Warshall Algorithm Implementation

Time Complexity: O(V^3)
Space Complexity: O(V^2)
"""

def floyd_warshall(graph):
    n = len(graph)
    # Initialize distances. Use float('inf') for no edge, and 0 for i == j.
    dist = []
    for i in range(n):
        row = []
        for j in range(n):
            if i == j:
                row.append(0)
            elif graph[i][j] == 0:
                row.append(float('inf'))
            else:
                row.append(graph[i][j])
        dist.append(row)

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] != float('inf') and dist[k][j] != float('inf') and \
                   dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

# Example usage:
# if __name__ == "__main__":
#     graph = [
#         [0, 5, 0, 10],
#         [0, 0, 3, 0],
#         [0, 0, 0, 1],
#         [0, 0, 0, 0]
#     ]
#     print(floyd_warshall(graph))
