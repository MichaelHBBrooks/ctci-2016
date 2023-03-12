import assert from "assert";
import "mocha";
import { urlify, urlifyWithoutReplaceAll } from "./1-3-URLify";

describe("1. Arrays and Strings", function () {
	describe("1.2 URLify", function () {
		describe("Default function", function () {
			standardTests(urlify);
		});
		describe("Alternate function", function () {
			standardTests(urlifyWithoutReplaceAll);
		});
	});
});

function standardTests(func: (str: string, num: number) => string) {
	it('"Mr John Smith" should be "Mr%20John%20Smith"', function () {
		assert.equal(func("Mr John Smith", 13), "Mr%20John%20Smith");
	});
	it('"hello" should be "hello"', function () {
		assert.equal(func("hello", 5), "hello");
	});
	it('"" should be ""', function () {
		assert.equal(func("", 0), "");
	});
	it('" a b  c   " should be "%20a%20b%20%20c%20%20%20"', function () {
		assert.equal(func(" a b  c   ", 0), "%20a%20b%20%20c%20%20%20");
	});
}
