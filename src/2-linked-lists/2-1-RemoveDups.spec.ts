import assert from "assert";
import "mocha";

import { LinkedList, removeDups } from "./2-1-RemoveDups";

describe("2. Linked Lists", function () {
	describe("2.1 Remove Duplicates", function () {
		it("should modify 1->2->2->3 into 1->2->3", function () {
			const dupedList = new LinkedList();
			dupedList.appendToTail(1);
			dupedList.appendToTail(2);
			dupedList.appendToTail(2);
			dupedList.appendToTail(3);
            removeDups(dupedList);

			const correctList = new LinkedList();
			for (let x = 1; x <= 3; x++) {
				correctList.appendToTail(x);
			}
			compareLists(dupedList, correctList);
		});
		it("should find no dupes in a linked list with 1 node", function () {
			const dupedList = new LinkedList();
			dupedList.appendToTail(1);
			removeDups(dupedList);

			const correctList = new LinkedList();
			correctList.appendToTail(1);
			compareLists(dupedList, correctList);
		});
		it("should find no dupes in an empty linked list", function () {
			const dupedList = new LinkedList();
			removeDups(dupedList);

			const correctList = new LinkedList();
			compareLists(dupedList, correctList);
		});
        it("should modify 1->2->undefined->undefined into 1->2->undefined", function () {
            const dupedList = new LinkedList();
            dupedList.appendToTail(1);
            dupedList.appendToTail(2);
            dupedList.appendToTail(undefined);
            dupedList.appendToTail(undefined);
            removeDups(dupedList);
    
            const correctList = new LinkedList();
            correctList.appendToTail(1);
            correctList.appendToTail(2);
            correctList.appendToTail(undefined);
            compareLists(dupedList, correctList);
        });
	});
});

function compareLists(list1: LinkedList, list2: LinkedList): void {
	let node1 = list1.head;
	let node2 = list2.head;
	do {
		if (node1 === null || node2 === null) {
			assert.equal(node1, node2);
		} else {
			assert.equal(node1.data, node2.data);
			node1 = node1.next;
			node2 = node2.next;
		}
	} while (node1 !== null && node2 !== null);
}
