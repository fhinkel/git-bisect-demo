const assert = require("assert");
const add = require("./index.js");

describe("Git bisect demo", function() {
	describe("#logic()", function() {
		it("should return the sum when adding zero", function() {
			assert.equal(add(10,0), 10);
		});
		it("should return the sum when adding to zero", function() {
			assert.equal(add(0, 10), 10);
		});
		it("should return the sum", function() {
			assert.equal(add(10, 10), 20);
		});
		it("should return the sum for negative numbers", function() {
			assert.equal(add(-10, -10), 20);
		});
		it("should return the sum", function() {
			assert.equal(add(1, 3), 4);
		});
		it("should return zero", function() {
			assert.equal(add(-2, 2), 0);
		});
		it("should not equal zero", function() {
			assert.notEqual(add(1002002403, 13892492392), 0);
		});
	});
});
