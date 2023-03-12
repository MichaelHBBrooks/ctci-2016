/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

export function oneWay(first: string, second: string): boolean {
	const lengthDiff = Math.abs(first.length - second.length);
	if (lengthDiff > 1) {
		return false;
	}
	if (first === second) {
		return true;
	}

	if (first.length === second.length) {
		return checkSwap(first, second);
	} else if (first.length > second.length) {
		return checkRemoval(first, second);
	} else if (first.length < second.length) {
		// return checkAddition(first, second);
		return checkRemoval(second, first);
	}

	return true;
}

function checkSwap(first: string, second: string): boolean {
	let swapFound = false;
	for (let x = 0; x < first.length; x++) {
		if (first.charAt(x) !== second.charAt(x)) {
			if (swapFound) {
				return false;
			} else {
				swapFound = true;
			}
		}
	}
	return true;
}

function checkRemoval(first: string, second: string): boolean {
	let y = 0;
	let removalFound = false;
	for (let x = 0; x < first.length; x++) {
		if (first.charAt(x) !== second.charAt(y)) {
			if (removalFound) {
				return false;
			}
			x++;
			if (first.charAt(x) !== second.charAt(y)) {
				return false;
			}
			removalFound = true;
		}
		y++;
	}
	return true;
}

// function checkAddition(first: string, second: string): boolean {
// 	let y = 0;
// 	let additionFound = false;
// 	for (let x = 0; x < first.length; x++) {
// 		if (first.charAt(x) !== second.charAt(y)) {
// 			if (additionFound) {
// 				return false;
// 			}
// 			y++;
// 			if (first.charAt(x) !== second.charAt(y)) {
// 				return false;
// 			}
// 			additionFound = true;
// 		}
// 		y++;
// 	}
// 	return true;
// }
//  I looked at the solution before I split the code into their separate functions. The solution used one method for
//  both removal and addition of a character. Had I cleaned up my code with the separate functions it's possible I
//  would have realized this. I am keeping it around to show my thought process had I kept them separate.
