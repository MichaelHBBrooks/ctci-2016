import assert from "assert";
import "mocha";

import { routeBetweenNodes, Graph, Node } from "4-trees-and-graphs/4-1-Route-Between-Nodes";

describe("4.1 Route Between Nodes", function () {
	it("should be able to find a path between two linked nodes", function () {
		const n1 = new Node("a");
		const n2 = new Node("b");
		const n3 = new Node("c");
		const n4 = new Node("d");
		const n5 = new Node("e");
		const n6 = new Node("f");
		const n7 = new Node("g");

		n1.children.push(n2);
		n1.children.push(n3);
		n3.children.push(n4);
		n5.children.push(n4);
		n5.children.push(n6);
		n5.children.push(n7);

		const graph = new Graph();
		graph.nodes = [n1, n2, n3, n4, n5, n6, n7];

		const found = routeBetweenNodes(graph, n1, n5);
		assert.equal(found, true);
	});
	it("should NOT be able to find a path between two unlinked nodes", function () {
		const n1 = new Node("a");
		const n2 = new Node("b");
		const n3 = new Node("c");
		const n5 = new Node("e");
		const n6 = new Node("f");
		const n7 = new Node("g");

		n1.children.push(n2);
		n1.children.push(n3);
		n5.children.push(n6);
		n5.children.push(n7);

		const graph = new Graph();
		graph.nodes = [n1, n2, n3, n5, n6, n7];

		const found = routeBetweenNodes(graph, n1, n5);
		assert.equal(found, false);
	});
});
