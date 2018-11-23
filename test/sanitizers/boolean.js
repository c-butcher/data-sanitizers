const chai = require('chai');
const { Sanitizer } = require('../../main');

describe('Boolean Sanitizer', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Sanitizer.types().has('string'));
    });

    it('passes when sanitizing a string', function() {
        let value = Sanitizer.clean('Hello', 'boolean');

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing a number', function() {
        let value = Sanitizer.clean(123, 'boolean');

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing a boolean', function() {
        let value = Sanitizer.clean(false, 'boolean');

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing an array', function() {
        let value = Sanitizer.clean(['one', 123, true], 'boolean');

        chai.assert.isBoolean(value);
    });

    it('passes when sanitizing an object', function() {
        let value = Sanitizer.clean({Hello: 'World'}, 'boolean');

        chai.assert.isBoolean(value);
    });
});