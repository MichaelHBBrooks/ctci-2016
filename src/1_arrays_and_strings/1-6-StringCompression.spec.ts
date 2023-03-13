import assert from "assert";
import "mocha";

import { stringCompression } from "./1-6-StringCompression";

describe.only("1.6 String Compression", function () {
	it('"" should throw an error', function () {
		assert.throws(() => {
			stringCompression("");
		}, Error);
	});
	it('"a" should be "a"', function () {
		assert.equal(stringCompression("a"), "a");
	});
	it('"aa" should be "aa"', function () {
		assert.equal(stringCompression("aa"), "aa");
	});
	it('"aaa" should be "a3"', function () {
		assert.equal(stringCompression("aaa"), "a3");
	});
	it('"abbaa" should be "abbaa"', function () {
		assert.equal(stringCompression("abbaa"), "abbaa");
	});
	it('"abbbbaaaabbb" should be "a1b4a4b3"', function () {
		assert.equal(stringCompression("abbbbaaaabbb"), "a1b4a4b3");
	});
	it('"aaaAAA" should be "a3A3"', function () {
		assert.equal(stringCompression("aaaAAA"), "a3A3");
	});
});
