const chai = require('chai');
const { Sanitizer, String } = require('../main');

describe('Sanitizer', function() {

    describe('constructor(options)', function() {
        it('passes when supplied argument is an object', function() {
            chai.expect(function(){
                let sanitizer = new String({});
            }).to.not.throw();
        });

        it('fails when supplied argument is not an object', function() {
            chai.expect(function(){
                let sanitizer = new String(123);
            }).to.throw();
        });

        it('fails when callable directly', function() {
            chai.expect(function(){
                let sanitizer = new Sanitizer();
            }).to.throw();
        });
    });

    describe('add(name, sanitizer)', function() {
        it('passes when sanitizer extends sanitizer class', function() {
            chai.expect(function() {
                Sanitizer.add('new-sanitizer', class NewSanitizer extends Sanitizer {
                    constructor(options) {
                        super('new-sanitizer', options);
                    }

                    sanitize(value) {
                        return true;
                    }
                });
            }).to.not.throw();

            chai.assert.isTrue(Sanitizer.has('new-sanitizer'));
        });

        it('fails when sanitizer does not extend sanitizer class', function() {
            chai.expect(function() {
                Sanitizer.add('invalid', {
                    sanitize: (value) => {
                        return true;
                    }
                });
            }).to.throw();
        });
    });

    describe('get(name, options)', function() {
        it('passes when sanitizer exists', function() {
            let string = Sanitizer.get('string');

            chai.assert.instanceOf(string, Sanitizer);
        });

        it('fails when sanitizer does not exist', function() {
            chai.expect(function(){
                let nonExistent = Sanitizer.get('non-existent');
            }).to.throw();
        });
    });

    describe('clean(value, name, options)', function() {
        it('passes the cleaned value back', function() {
            let value = Sanitizer.clean(150, 'string');

            chai.assert.typeOf(150, 'number');
            chai.assert.typeOf(value, 'string');
        });
    });

    describe('types()', function() {
        it('returns all the sanitation types', function() {
            let types = Sanitizer.types();

            chai.assert.instanceOf(types, Map);
            chai.assert.property(types, 'size');
            chai.assert.isAbove(types.size, 0);
            chai.assert.typeOf(types.values().next().value, 'function');
        });
    });
});
