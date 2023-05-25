/*
Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
route between two nodes.
*/

export function routeBetweenNodes(graph: Graph, node1: Node, node2: Node): boolean {
	if (node1 === node2) {
		return true;
	} else if (node1.children.length === 0 || node2.children.length === 0) {
		return false;
	}

	for (const node of graph.nodes) {
		node.visited = false;
		node.visitedBy = 0;
	}

	const queue1: Node[] = [node1];
	const queue2: Node[] = [node2];

	while (queue1.length !== 0 && queue2.length !== 0) {
		const child1 = queue1.shift();
		if (child1) {
			for (const adjacent of child1.children) {
				if (!adjacent.visited) {
					if (adjacent === node2) {
						return true;
					} else {
						adjacent.visited = true;
						adjacent.visitedBy = 1;
						queue1.push(adjacent);
					}
				} else if (adjacent.visitedBy === 2) {
					return true;
				}
			}
			child1.visited = true;
			child1.visitedBy = 1;
		}

		const child2 = queue2.shift();
		if (child2) {
			for (const adjacent of child2.children) {
				if (!adjacent.visited) {
					if (adjacent === node2) {
						return true;
					} else {
						adjacent.visited = true;
						adjacent.visitedBy = 2;
						queue2.push(adjacent);
					}
				} else if (adjacent.visitedBy === 1) {
					return true;
				}
			}
			child2.visited = true;
			child2.visitedBy = 2;
		}
	}

	return false;
}

export class Graph {
	nodes: Node[];

	constructor() {
		this.nodes = [];
	}
}

export class Node {
	name: string;
	children: Node[];
	visited: boolean;
	visitedBy: number;

	constructor(name: string) {
		this.name = name;
		this.children = [];
		this.visited = false;
		this.visitedBy = 0;
	}
}
