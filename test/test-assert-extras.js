var nodeunit = require('../lib/nodeunit');
var testCase = nodeunit.testCase;

exports.testAssertExtras = function (test) {
	// Make sure that the extra methods have been added
	test.expect(2);
	test.isTrue(true);
	test.isNull(null);
	test.done();
};