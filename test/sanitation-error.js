const chai = require('chai');
const SanitationError = require('../src/sanitation-error');

describe('Sanitation Error', function() {

    describe('constructor(message, params)', function() {
        it('passes when message is a string and params are an object', function() {
            chai.expect(function(){
                let error = new SanitationError('Hello {name}.', {
                    name: 'Human',
                });

                chai.assert.instanceOf(error, SanitationError);
            }).to.not.throw();
        });

        it('fails when message is not a string', function() {
            chai.expect(function(){
                let error = new SanitationError(true, 234);
            }).to.throw();
        });

        it('fails when params is not an object', function() {
            chai.expect(function(){
                let error = new SanitationError('hello', 234);
            }).to.throw();
        });

        it('message placeholders are replaced with parameters', function() {
            let error = new SanitationError('Hello {name}', {
                name: 'Human',
            });

            chai.assert.equal(error.message, 'Hello Human');
        });
    });
});
