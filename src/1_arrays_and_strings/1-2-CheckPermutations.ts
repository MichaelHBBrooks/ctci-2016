/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
*/

export function checkPermutation(str1: string, str2: string): boolean {
	if (str1.length !== str2.length) {
		return false;
	}
	const str1Map = new Map();
	for (const char of str1) {
		const numFound = str1Map.get(char) ?? 0;
		str1Map.set(char, numFound + 1);
	}
	const str2Map = new Map();
	for (const char of str2) {
		const numFound = str2Map.get(char) ?? 0;
		str2Map.set(char, numFound + 1);
	}
	for (const [key, value] of str1Map.entries()) {
		if (str2Map.get(key) !== value) {
			return false;
		}
	}
	return true;
}
