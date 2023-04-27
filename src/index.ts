import { stringRotation } from "./1_arrays_and_strings/1-9-StringRotation";
main();

function main(): void {
	console.log("This is a collection of my answers to Cracking the Coding Interview.");
	console.log('Use "npm run test" to test this application.');

	console.log(stringRotation("abcdef", "defabc"));
	console.log(stringRotation("abcdef", "abcabc"));
	console.log(stringRotation("abcdef", "bcdefa"));
	console.log(stringRotation("abcdef", "fabcde"));
	console.log(stringRotation("aaaaaa", "abbbba"));
}
