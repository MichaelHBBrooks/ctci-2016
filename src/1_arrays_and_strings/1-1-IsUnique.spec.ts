import assert from "assert";
import "mocha";
import { isUnique, isUniqueAlternate } from "./1-1-IsUnique";

// describe("Array", function () {
// 	describe("#indexOf()", function () {
// 		it("should return -1 when the value is not present", function () {
// 			assert.equal([1, 2, 3].indexOf(4), -1);
// 		});
// 	});
// });

describe("1. Arrays and Strings", function () {
	describe("1.1 Is Unique", function () {
		describe("Default function", function () {
			standardTests(isUnique);
		});
		describe("Alternate function", function () {
			standardTests(isUniqueAlternate);
		});
	});
});

function standardTests(func: (arg: string) => boolean) {
	it("Should find the empty string is unique", function () {
		assert.equal(func(""), true);
	});
	it('Should find "a" is unique', function () {
		assert.equal(func("a"), true);
	});
	it('Should find "abc" is unique', function () {
		assert.equal(func("abc"), true);
	});
	it('Should find "aa" is NOT unique', function () {
		assert.equal(func("aa"), false);
	});
	it('Should find "aba" is NOT unique', function () {
		assert.equal(func("aba"), false);
	});
}
