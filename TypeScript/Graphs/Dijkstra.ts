/**
 * Dijkstra's Algorithm Implementation
 * 
 * Time Complexity:
 * - O(V^2) with adjacency matrix.
 * - O(E log V) with adjacency list and priority queue.
 * 
 * Space Complexity: O(V) to store distances and visited state.
 */

export class Dijkstra {
    /**
     * Finds the shortest path from a start node to all other nodes.
     * @param graph Adjacency matrix representation of the graph
     * @param startNode The starting node index
     */
    static findShortestPath(graph: number[][], startNode: number): number[] {
        const n = graph.length;
        const distances = new Array(n).fill(Infinity);
        const visited = new Array(n).fill(false);

        distances[startNode] = 0;

        for (let i = 0; i < n - 1; i++) {
            const u = this.minDistance(distances, visited);
            visited[u] = true;

            for (let v = 0; v < n; v++) {
                if (!visited[v] && graph[u][v] !== 0 && distances[u] !== Infinity &&
                    distances[u] + graph[u][v] < distances[v]) {
                    distances[v] = distances[u] + graph[u][v];
                }
            }
        }

        return distances;
    }

    private static minDistance(distances: number[], visited: boolean[]): number {
        let min = Infinity;
        let minIndex = -1;

        for (let v = 0; v < distances.length; v++) {
            if (!visited[v] && distances[v] <= min) {
                min = distances[v];
                minIndex = v;
            }
        }

        return minIndex;
    }
}

// Example usage:
/*
const graph = [
    [0, 4, 0, 0, 0],
    [4, 0, 8, 0, 0],
    [0, 8, 0, 7, 0],
    [0, 0, 7, 0, 9],
    [0, 0, 0, 9, 0]
];
console.log(Dijkstra.findShortestPath(graph, 0));
*/
