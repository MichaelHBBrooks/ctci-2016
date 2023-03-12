import assert from "assert";
import "mocha";
import { isPalindromePermutation } from "./1-4-palindromePermutation";

describe("1.4 Palindrome Permutation", function () {
	it('"Tact Coa" should be true', function () {
		assert.equal(isPalindromePermutation("Tact Coa"), true);
	});
	it('"racecar" should be true', function () {
		assert.equal(isPalindromePermutation("racecar"), true);
	});
	it('"racecar1" should be false', function () {
		assert.equal(isPalindromePermutation("racecar1"), false);
	});
	it('"a" should be true', function () {
		assert.equal(isPalindromePermutation("a"), true);
	});
	it('"aa" should be true', function () {
		assert.equal(isPalindromePermutation("aa"), true);
	});
	it('"ab" should be false', function () {
		assert.equal(isPalindromePermutation("ab"), false);
	});
	it('"aaa" should be true', function () {
		assert.equal(isPalindromePermutation("aaa"), true);
	});
	it('"aaab" should be false', function () {
		assert.equal(isPalindromePermutation("aaab"), false);
	});
	it('"" should throw an empty string error', function () {
		assert.throws(() => {
			isPalindromePermutation("");
		}, Error);
	});
});
