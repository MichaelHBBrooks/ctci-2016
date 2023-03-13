/*
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

export function stringCompression(str: string): string {
	if (str.length === 0) {
		throw new Error("String must not be empty");
	}
	let lastChar = str.charAt(0);
	let amount = 0;
	let compressedString = "";
	for (const char of str) {
		if (char === lastChar) {
			amount++;
		} else {
			compressedString += lastChar + amount;
			amount = 1;
			lastChar = char;
		}
	}
	compressedString += lastChar + amount;

	return compressedString.length < str.length ? compressedString : str;
}
