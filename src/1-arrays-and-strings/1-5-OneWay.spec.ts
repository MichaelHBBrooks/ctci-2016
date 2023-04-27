import assert from "assert";
import "mocha";
import {oneWay} from "./1-5-OneWay";

// describe("Array", function () {
// 	describe("#indexOf()", function () {
// 		it("should return -1 when the value is not present", function () {
// 			assert.equal([1, 2, 3].indexOf(4), -1);
// 		});
// 	});
// });

describe("1.5 One Way", function () {
	it('"pale" and "ple" should be true', function () {
		assert.equal(oneWay("pale","ple"), true);
	});
	it('"pales" and "pale" should be true', function () {
		assert.equal(oneWay("pales","pale"), true);
	});
	it('"pale" and "bale" should be true', function () {
		assert.equal(oneWay("pale","bale"), true);
	});
	it('"pale" and "bae" should be false', function () {
		assert.equal(oneWay("pale","bae"), false);
	});
});
