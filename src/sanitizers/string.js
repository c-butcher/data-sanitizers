const Sanitizer = require('../sanitizer');

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

        value = this.constructor.clean(value, 'length', this.length);

        return value;
    }
}

module.exports = String;