/**
 * Dijkstra's Algorithm Implementation
 * 
 * Time Complexity: O(V^2) with adjacency matrix.
 * Space Complexity: O(V)
 */

#include <iostream>
#include <vector>
#include <climits>

int minDistance(const std::vector<int>& dist, const std::vector<bool>& visited) {
    int min = INT_MAX, min_index = -1;
    for (int v = 0; v < dist.size(); v++) {
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

std::vector<int> dijkstra(const std::vector<std::vector<int>>& graph, int src) {
    int n = graph.size();
    std::vector<int> dist(n, INT_MAX);
    std::vector<bool> visited(n, false);

    dist[src] = 0;

    for (int count = 0; count < n - 1; count++) {
        int u = minDistance(dist, visited);
        visited[u] = true;

        for (int v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX &&
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}

/*
int main() {
    std::vector<std::vector<int>> graph = {
        {0, 4, 0, 0, 0},
        {4, 0, 8, 0, 0},
        {0, 8, 0, 7, 0},
        {0, 0, 7, 0, 9},
        {0, 0, 0, 9, 0}
    };
    std::vector<int> dist = dijkstra(graph, 0);
    for (int i = 0; i < dist.size(); i++)
        std::cout << i << " \t " << dist[i] << std::endl;
    return 0;
}
*/
