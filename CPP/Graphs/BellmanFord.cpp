/**
 * Bellman-Ford Algorithm Implementation
 * 
 * Time Complexity: O(V * E)
 * Space Complexity: O(V)
 */

#include <iostream>
#include <vector>
#include <climits>

struct Edge {
    int src, dest, weight;
};

void bellmanFord(int V, int E, int src, const std::vector<Edge>& edges) {
    std::vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = edges[j].src;
            int v = edges[j].dest;
            int weight = edges[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }

    for (int i = 0; i < E; i++) {
        int u = edges[i].src;
        int v = edges[i].dest;
        int weight = edges[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
            std::cout << "Graph contains negative weight cycle" << std::endl;
            return;
        }
    }

    for (int i = 0; i < V; i++)
        std::cout << i << " \t " << dist[i] << std::endl;
}

/*
int main() {
    int V = 5;
    int E = 8;
    std::vector<Edge> edges = {
        {0, 1, -1}, {0, 2, 4}, {1, 2, 3}, {1, 3, 2},
        {1, 4, 2}, {3, 2, 5}, {3, 1, 1}, {4, 3, -3}
    };
    bellmanFord(V, E, 0, edges);
    return 0;
}
*/
