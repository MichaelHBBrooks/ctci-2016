/*
String Rotation: Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").
*/

export function stringRotation(s1: string, s2: string): boolean {
	if (s1.length !== s2.length) {
		return false;
	} else if (s1 === s2) {
		return true;
	}
	//We could count letters. Roughly O(2N) to perform the check.
	// const countChars = (string: string): Map<string, number> => {
	// 	const stringMap = new Map();
	// 	for (const char of string.split("")) {
	// 		const count = stringMap.get(char);
	// 		if (count === undefined) {
	// 			stringMap.set(char, 0);
	// 		} else {
	// 			stringMap.set(char, count + 1);
	// 		}
	// 	}
	// 	return stringMap;
	// };
	// const s1Map = countChars(s1);
	// const s2Map = countChars(s2);

	// if (s1Map.size !== s2Map.size) {
	// 	return false;
	// } else if (s1Map.size === 1) {
	// 	//"aaa" is always a rotation of "aaa"
	// 	return true;
	// }
	// for (const [char, count1] of s1Map) {
	// 	const count2 = s2Map.get(char);
	// 	if (count1 !== count2) {
	// 		return false;
	// 	}
	// }

	let runningTotal = 0;
	let x = 0;
	while (runningTotal < s1.length) {
        runningTotal++;
		if (s1.charAt(x) === s2.charAt(x)) {
			x++;
			continue;
		}
		s2 = s2.slice(x + 1, s2.length) + s2.slice(0, x + 1);
		x = 0;
	}
	return s1 === s2;
}
