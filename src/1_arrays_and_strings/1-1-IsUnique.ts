/* 
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 
*/

export function isUnique(input: string): boolean {
	const map = new Map();
	const inputArray = input.split("");
	for (const e of inputArray) {
		if (map.get(e)) {
			return false;
		}
		map.set(e, true);
	}
	return true;
}

export function isUniqueAlternate(input: string): boolean {
	for (let x = 0; x < input.length; x++) {
		const char = input.charAt(x);
		for (let y = 0; y < input.length; y++) {
			if (y === x) {
				continue;
			} else if (input.charAt(y) === char) {
				return false;
			}
		}
	}
	return true;
}
