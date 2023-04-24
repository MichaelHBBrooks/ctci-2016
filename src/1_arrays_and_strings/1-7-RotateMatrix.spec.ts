import assert from "assert";
import "mocha";
import { RotateMatrix } from "./1-7-RotateMatrix";

describe("1. Arrays and Strings", function () {
	describe("1.7 Rotate Matrix", function () {
		it("should rotate a matrix with an odd amount of entries", function () {
			assert.deepEqual(
				RotateMatrix([
					[1, 2, 3, 4, 5],
					[6, 7, 8, 9, 10],
					[11, 12, 13, 14, 15],
					[16, 17, 18, 19, 20],
					[21, 22, 23, 24, 25]
				]),
				[
					[21, 16, 11, 6, 1],
					[22, 17, 12, 7, 2],
					[23, 18, 13, 8, 3],
					[24, 19, 14, 9, 4],
					[25, 20, 15, 10, 5]
				]
			);
		});
		it("should rotate a matrix with an even amount of entries", function () {
			assert.deepEqual(
				RotateMatrix([
					[1, 2, 3, 4],
					[5, 6, 7, 8],
					[9, 10, 11, 12],
					[13, 14, 15, 16]
				]),
				[
					[13, 9, 5, 1],
					[14, 10, 6, 2],
					[15, 11, 7, 3],
					[16, 12, 8, 4]
				]
			);
		});
	});
});
