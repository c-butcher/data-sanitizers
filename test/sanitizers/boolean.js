const chai = require('chai');
const Boolean = require('../../src/sanitizers/boolean');

describe('Boolean Sanitizer', function() {

    it('passes when sanitizing a string', function() {
        let sanitizer = new Boolean();

        let value = sanitizer.sanitize('hello');

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing a number', function() {
        let sanitizer = new Boolean();

        let value = sanitizer.sanitize(123);

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing a boolean', function() {
        let sanitizer = new Boolean();

        let value = sanitizer.sanitize(false);

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing an array', function() {
        let sanitizer = new Boolean();

        let value = sanitizer.sanitize(['one', 123, true]);

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing an object', function() {
        let sanitizer = new Boolean();

        let value = sanitizer.sanitize({Hello: 'World'});

        chai.assert.isBoolean(value);
    });
});