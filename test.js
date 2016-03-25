"use strict";

var isPI = require('.');
var expect = require('chai').expect;

// Tests.
describe('Checking for arbitrary stuff.', function() {
	it('Math.PI should be the PI-est PI of all', function() {
		expect(isPI(Math.PI)).to.equal(true);
	});

	it('3 should not be PI', function() {
		expect(isPI(3)).to.equal(false);
	});

	it('\'unicorn\' should not be PI', function() {
		expect(isPI('unicorn')).to.equal(false);
	});

	it('3.14 should be PI', function() {
		expect(isPI(3.14)).to.equal(true);
	});

	it('3.13 should be almost PI', function() {
		expect(isPI(3.13)).to.equal(false);
	});
});

describe('Checking 10 random generated numbers between 0 and 5', function() {
	for (var i = 0; i < 10; ++i) {
		var random = +((Math.random() * 5) + 1).toFixed(2);
		if (random == 3.14) it(random + ' should be PI', function() {
			expect(isPI(random)).to.equal(true);
		});
		else it(random + ' should not be PI', function() {
			expect(isPI(random)).to.equal(false);
		});
	}
});

describe('Checking for variable types.', function() {
	// All of these are not PI.
	[[], {}, undefined, null, '', "", new Array(), new Object(), function() {}].forEach(function(item, i) {
		it(item + ' should not be PI', function() {
			expect(isPI(item)).to.equal(false);
		});
	});
});