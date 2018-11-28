const chai = require('chai');
const String = require('../../src/sanitizers/string');

describe('String Sanitizer', function() {

    it('passes when sanitizing a string', function() {
        let string = new String();

        let value = string.sanitize('Hello');

        chai.assert.equal(value, 'Hello')
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing a number', function() {
        let string = new String();

        let value = string.sanitize(123);

        chai.assert.equal(value, '123');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing a boolean', function() {
        let string = new String();

        let value = string.sanitize(true);

        chai.assert.equal(value, 'true');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing an array', function() {
        let string = new String();

        let value = string.sanitize(['one', 123, true]);

        chai.assert.equal(value, 'one,123,true');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing an object', function() {
        let string = new String();

        let value = string.sanitize({Hello: 'World'});

        chai.assert.equal(value, '{"Hello":"World"}');
        chai.assert.typeOf(value, 'string');
    });

    it('passes when sanitizing an function', function() {
        let string = new String();

        let value = string.sanitize(() => {});

        chai.assert.typeOf(value, 'string');
    });
});