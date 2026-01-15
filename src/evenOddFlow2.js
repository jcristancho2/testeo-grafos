import { node, flow } from 'pocketflow';

class Graph { 
    constructor() {
        this.directed = directed;
        this.adjacencyList = new Map();
    }
}

addVertice(vertice) {
    if (!this.adjacencyList.has(vertice)) {
        this.adjacencyList.set(vertice, []);
    }
}

addEdge(vertice1, vertice2, weight = 1) {
    if (!this.adjacencyList.has(vertice1)) {
        this.addVertice(vertice1);
    }
    if (!this.adjacencyList.has(vertice2)) {
        this.addVertice(vertice2);
    }
    this.adjacencyList.get(vertice1).push({ node: vertice2, weight });
    if (!this.directed) {
        this.adjacencyList.get(vertice2).push({ node: vertice1, weight });
    }
}

removeEdge(vertice1, vertice2) {
    if (this.adjacencyList.has(vertice1)) {
        this.adjacencyList.set(
            vertice1,
            this.adjacencyList.get(vertice1).filter(
                edge => edge.node !== vertice2
            )
        );
    }
    if (!this.directed && this.adjacencyList.has(vertice2)) {
        this.adjacencyList.set(
            vertice2,
            this.adjacencyList.get(vertice2).filter(
                edge => edge.node !== vertice1
            )
        );
    }
}
