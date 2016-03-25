"use strict";

var isPI = require('.');
var expect = require('chai').expect;

// Describe our tests.
describe('fake suite of tests', function() {

	it('Math.PI should be PI', function() {
		expect(isPI(Math.PI)).to.equal(true);
	});

	it('3 should not be PI', function() {
		expect(isPI(3)).to.equal(false);
	});
});
