/*
Remove Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

export class LinkedList {
	head: LinkedListNode | null;
	constructor() {
		// this.head = new LinkedListNode();
		this.head = null;
	}

	appendToTail(data: unknown) {
		let end = this.head;
		if (end === null) {
			this.head = new LinkedListNode(data);
			return;
		}
		while (end.next !== null) {
			end = end.next;
		}
		end.next = new LinkedListNode(data);
	}

	print(): void {
		let node = this.head;
		while (node !== null) {
			console.log(node.data);
			node = node.next;
		}
	}
}

export class LinkedListNode {
	next: LinkedListNode | null;
	data: unknown;

	constructor(data?: unknown) {
		this.next = null;
		this.data = data;
	}
}

export function removeDups(list: LinkedList): LinkedList {
	let node = list.head;
	if (node === null) {
		return list;
	}
	const dataMap = new Map();
	let previousNode = node;
	node = node.next;
	while (node !== null) {
		if (dataMap.has(node.data)) {
			previousNode.next = node.next;
		} else {
			dataMap.set(node.data, true);
			previousNode = node;
		}
		node = node.next;
	}
	return list;
}
