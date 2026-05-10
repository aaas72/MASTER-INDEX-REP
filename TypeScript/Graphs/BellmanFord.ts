/**
 * Bellman-Ford Algorithm Implementation
 * 
 * Time Complexity: O(V * E)
 * Space Complexity: O(V)
 * 
 * Note: Can handle negative weights and detect negative cycles.
 */

export interface Edge {
    source: number;
    destination: number;
    weight: number;
}

export function bellmanFord(edges: Edge[], verticesCount: number, startNode: number): number[] | string {
    const distances = new Array(verticesCount).fill(Infinity);
    distances[startNode] = 0;

    // Relax all edges V - 1 times
    for (let i = 0; i < verticesCount - 1; i++) {
        for (const { source, destination, weight } of edges) {
            if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                distances[destination] = distances[source] + weight;
            }
        }
    }

    // Check for negative-weight cycles
    for (const { source, destination, weight } of edges) {
        if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
            return "Graph contains a negative weight cycle";
        }
    }

    return distances;
}

// Example usage:
/*
const edges: Edge[] = [
    { source: 0, destination: 1, weight: -1 },
    { source: 0, destination: 2, weight: 4 },
    { source: 1, destination: 2, weight: 3 },
    { source: 1, destination: 3, weight: 2 },
    { source: 1, destination: 4, weight: 2 },
    { source: 3, destination: 2, weight: 5 },
    { source: 3, destination: 1, weight: 1 },
    { source: 4, destination: 3, weight: -3 }
];
console.log(bellmanFord(edges, 5, 0)); // Output: [0, -1, 2, -2, 1]
*/
