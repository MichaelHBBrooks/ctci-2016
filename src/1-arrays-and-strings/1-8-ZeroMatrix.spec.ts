import assert from "assert";
import "mocha";
import { zeroMatrix } from "./1-8-ZeroMatrix";

describe("1. Arrays and Strings", function () {
	describe("1.8 Zero Matrix", function () {
		it("should zero the 3rd row and 3rd column", function () {
			assert.deepEqual(
				zeroMatrix([
					[1, 2, 3, 4, 5],
					[6, 7, 8, 9, 10],
					[11, 12, 0, 14, 15],
					[16, 17, 18, 19, 20],
					[21, 22, 23, 24, 25]
				]),
				[
					[1, 2, 0, 4, 5],
					[6, 7, 0, 9, 10],
					[0, 0, 0, 0, 0],
					[16, 17, 0, 19, 20],
					[21, 22, 0, 24, 25]
				]
			);
		});
		it("should zero the first and last row and columns", function () {
			assert.deepEqual(
				zeroMatrix([
					[0, 2, 3, 4],
					[5, 6, 7, 8],
					[9, 10, 11, 12],
					[13, 14, 15, 16],
					[17, 18, 19, 0]
				]),
				[
					[0, 0, 0, 0],
					[0, 6, 7, 0],
					[0, 10, 11, 0],
					[0, 14, 15, 0],
					[0, 0, 0, 0]
				]
			);
		});
	});
});
