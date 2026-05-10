/**
 * Floyd-Warshall Algorithm Implementation
 * 
 * Time Complexity: O(V^3)
 * Space Complexity: O(V^2)
 * 
 * Note: Computes shortest paths between all pairs of vertices.
 */

export function floydWarshall(graph: number[][]): number[][] {
    const n = graph.length;
    const dist = Array.from({ length: n }, (_, i) => 
        Array.from({ length: n }, (_, j) => {
            if (i === j) return 0;
            return graph[i][j] === 0 ? Infinity : graph[i][j];
        })
    );

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity &&
                    dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

// Example usage:
/*
const graph = [
    [0, 5, 0, 10],
    [0, 0, 3, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
];
console.log(floydWarshall(graph));
*/
