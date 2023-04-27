import assert from "assert";
import "mocha";

import { checkPermutation } from "./1-2-CheckPermutations";

describe("1. Arrays and Strings", function () {
	describe("1.2 Check Permutation", function () {
		it('"abc" is a permutation of "cba"', function () {
			assert.equal(checkPermutation("abc", "cba"), true);
		});
		it('"aaab" is a permutation of "abaa"', function () {
			assert.equal(checkPermutation("aaab", "abaa"), true);
		});
		it('"aaa" is NOT a permutation of "aaaa"', function () {
			assert.equal(checkPermutation("aaa", "aaaa"), false);
		});
		it('"aaaa" is NOT a permutation of "aaa"', function () {
			assert.equal(checkPermutation("aaaa", "aaa"), false);
		});
		it('"abc" is NOT a permutation of "def"', function () {
			assert.equal(checkPermutation("abc", "def"), false);
		});
		it('"abc" is NOT a permutation of "abcd"', function () {
			assert.equal(checkPermutation("abc", "abcd"), false);
		});
		it('"abcd" is NOT a permutation of "abc"', function () {
			assert.equal(checkPermutation("abcd", "abc"), false);
		});
		it('"" is NOT a permutation of "abc"', function () {
			assert.equal(checkPermutation("", "abc"), false);
		});
		it('"abc" is NOT a permutation of ""', function () {
			assert.equal(checkPermutation("abc", ""), false);
		});
	});
});
