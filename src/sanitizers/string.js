const Sanitizer = require('../sanitizer');
const Length = require('../sanitizers/length');

class String extends Sanitizer {
    constructor(options = {}) {
        super('string', options);
    }

    defaults() {
        return {
            glue: ',',
            length: {
                min: null,
                max: null,
            }
        };
    }

    sanitize(value) {
        if (Array.isArray(value)) {
            value = value.join(this.options.glue);
        }

        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        if (typeof value === 'boolean') {
            value = value ? 'true' : 'false';
        }

        if (typeof value === 'number' || value instanceof Date) {
            value = value.toString();
        }

        let cleaner = new Length(this.length);
        value = cleaner.sanitize(value);

        return value;
    }
}

module.exports = String;