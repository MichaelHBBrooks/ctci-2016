/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters,and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
*/

export function urlify(str: string, _length: number): string {
	return str.replaceAll(" ", "%20");
}

export function urlifyWithoutReplaceAll(str: string, _length: number): string {
	let newStr = "";
	for (const char of str) {
		newStr += char === " " ? "%20" : char;
	}
	return newStr;
}
