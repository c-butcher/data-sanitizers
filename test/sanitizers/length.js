const chai = require('chai');
const Length = require('../../src/sanitizers/length');

describe('Length Sanitizer', function() {

    it('passes when trimming string', function() {
        let length = new Length({
            max: 5
        });

        let value = length.sanitize('1234567890');

        chai.assert.isString(value);
        chai.assert.lengthOf(value, 5);
    });

    it('passes when trimming array', function() {
        let length = new Length({
            max: 5,
        });

        let value = length.sanitize([1,2,3,4,5,6,7,8,9,10]);

        chai.assert.isArray(value);
        chai.assert.lengthOf(value, 5);
    });

    it('passes when trimming number', function() {
        let length = new Length({
            max: 5,
        });

        let value = length.sanitize(1234567890);

        chai.assert.isNumber(value);
        chai.assert.lengthOf(value.toString(), 5);
    });

    it('passes when padding string', function() {
        let length = new Length({
            min: 5,
            fill: 345,
        });

        let value = length.sanitize('12');

        chai.assert.isString(value);
        chai.assert.lengthOf(value, 5);
        chai.assert.equal(value, '12345');
    });

    it('passes when padding array', function() {
        let length = new Length({
            min: 5,
            fill: [3,4,5],
        });

        let value = length.sanitize([1,2]);

        chai.assert.isArray(value);
        chai.assert.lengthOf(value, 5);
    });

    it('passes when padding number', function() {
        let length = new Length({
            min: 5,
            fill: 345,
        });

        let value = length.sanitize(12);

        chai.assert.isNumber(value);
        chai.assert.lengthOf(value.toString(), 5);
    });
});