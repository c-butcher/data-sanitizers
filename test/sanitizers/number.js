const chai = require('chai');
const Number = require('../../src/sanitizers/number');

describe('Number Sanitizer', function() {

    it('passes when sanitizing a string', function() {
        let sanitizer = new Number();

        let value = sanitizer.sanitize("hello");

        chai.assert.equal(value, 0);
    });

    it('passes when sanitizing a number', function() {
        let sanitizer = new Number();

        let value = sanitizer.sanitize(123);

        chai.assert.equal(value, 123);
    });

    it('passes when sanitizing a boolean', function() {
        let sanitizer = new Number();

        let fls = sanitizer.sanitize(false);
        chai.assert.equal(fls, 0);

        let tru = sanitizer.sanitize(true);
        chai.assert.equal(tru, 1);

    });

    it('passes when sanitizing an array', function() {
        let sanitizer = new Number();

        let value = sanitizer.sanitize(['one', 123, true]);

        chai.assert.equal(value, 3);
    });

    it('passes when sanitizing an object', function() {
        let sanitizer = new Number();

        let value = sanitizer.sanitize({Hello: 'World'});

        chai.assert.equal(value, 0);
    });

    it('passes when sanitizing an function', function() {
        let sanitizer = new Number();

        let value = sanitizer.sanitize(() => {});

        chai.assert.equal(value, 0);
    });
});