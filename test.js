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

	it('3.14 should be PI', function() {
		expect(isPI(3.14)).to.equal(true);
	});

	it('unicorn should not be PI', function() {
		expect(isPI('unicorn')).to.equal(false);
	});

	it('3.13 should be almost PI', function() {
		expect(isPI(3.13)).to.equal(false);
	});
});
