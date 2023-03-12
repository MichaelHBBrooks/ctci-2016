import assert from "assert";
import "mocha";

// describe("test", () => {
// 	it("asdf", () => {
// 		assert.equal(2, 2);
// 	});
// });

describe("Array", function () {
	describe("#indexOf()", function () {
		it("should return -1 when the value is not present", function () {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});
