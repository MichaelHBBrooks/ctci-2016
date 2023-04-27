/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-
drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
*/

export function isPalindromePermutation(str: string): boolean {
	if (str.length === 0) {
		throw new Error("String is empty");
	}
	const palindromeMap: Map<string, boolean> = new Map();
	for (const char of str) {
		const lchar = char.toLowerCase();
		if (char === " ") {
			continue;
		}
		const mappedChar = palindromeMap.get(lchar);
		if (typeof mappedChar === "undefined") {
			palindromeMap.set(lchar, true);
		} else {
			palindromeMap.set(lchar, !mappedChar);
		}
	}
	let oddCharCount = 0;
	for (const value of palindromeMap.values()) {
		if (value) {
			oddCharCount++;
		}
		if (oddCharCount > 1) {
			return false;
		}
	}
	return true;
}
