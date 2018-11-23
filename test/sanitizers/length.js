const chai = require('chai');
const { Sanitizer } = require('../../main');

describe('Length Sanitizer', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Sanitizer.types().has('length'));
    });

    it('passes when trimming string length', function() {
        let value = Sanitizer.clean('1234567890', 'length', {
            max: 5
        });

        chai.assert.isString(value);
        chai.assert.lengthOf(value, 5);
    });

    it('passes when padding string length', function() {
        let value = Sanitizer.clean('12', 'length', {
            min: 5,
            fill: 345,
        });

        chai.assert.isString(value);
        chai.assert.lengthOf(value, 5);
        chai.assert.equal(value, '12345');
    });

    it('passes when trimming array length', function() {
        let value = Sanitizer.clean([1,2,3,4,5,6,7,8,9,10], 'length', {
            max: 5
        });

        chai.assert.isArray(value);
        chai.assert.lengthOf(value, 5);
    });

    it('passes when padding array length', function() {
        let value = Sanitizer.clean([1,2], 'length', {
            min: 5,
            fill: [3,4,5],
        });

        chai.assert.isArray(value);
        chai.assert.lengthOf(value, 5);
    });

    it('passes when trimming number length', function() {
        let value = Sanitizer.clean(1234567890, 'length', {
            max: 5
        });

        chai.assert.isNumber(value);
        chai.assert.lengthOf(value.toString(), 5);
    });

    it('passes when padding number length', function() {
        let value = Sanitizer.clean(12, 'length', {
            min: 5,
            fill: 345,
        });

        chai.assert.isNumber(value);
        chai.assert.lengthOf(value.toString(), 5);
    });
});