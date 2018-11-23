const chai = require('chai');
const { Sanitizer } = require('../../main');

describe('String Sanitizer', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Sanitizer.types().has('string'));
    });

    it('passes when sanitizing a string', function() {
        let value = Sanitizer.clean('Hello', 'string');

        chai.assert.equal(value, 'Hello')
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing a number', function() {
        let value = Sanitizer.clean(123, 'string');

        chai.assert.equal(value, '123');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing a boolean', function() {
        let value = Sanitizer.clean(true, 'string');

        chai.assert.equal(value, 'true');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing an array', function() {
        let value = Sanitizer.clean(['one', 123, true], 'string');

        chai.assert.equal(value, 'one,123,true');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing an object', function() {
        let value = Sanitizer.clean({Hello: 'World'}, 'string');

        chai.assert.equal(value, '{"Hello":"World"}');
        chai.assert.typeOf(value, 'string');
    });
});