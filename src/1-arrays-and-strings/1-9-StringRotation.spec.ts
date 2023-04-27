import assert from "assert";
import "mocha";
import { stringRotation } from "./1-9-StringRotation";

describe("1. Arrays and Strings", function () {
	describe("1.9 String Rotation", function () {
		it('Should find a rotation between "abcdef" and "defabc"', function () {
			assert.equal(stringRotation("abcdef", "defabc"), true);
		});
		it('Should not find a rotation between "abcdef" and "abcabc"', function () {
			assert.equal(stringRotation("abcdef", "abcabc"), false);
		});
		it('Should find a rotation between "abcdef" and "bcdefa"', function () {
			assert.equal(stringRotation("abcdef", "bcdefa"), true);
		});
		it('Should find a rotation between "abcdef" and "fabcde"', function () {
			assert.equal(stringRotation("abcdef", "fabcde"), true);
		});
		it('Should not find a rotation between "aaaaaa" and "abbbba"', function () {
			assert.equal(stringRotation("aaaaaa", "abbbba"), false);
		});
	});
});
