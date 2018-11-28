const Sanitizer = require('../sanitizer');

class Number extends Sanitizer {
    constructor(options = {}) {
        super('number', options);
    }

    defaults() {
        return {
            decimals: null
        };
    }

    sanitize(value) {
        let number = 0;

        if (Array.isArray(value)) {
            number = value.length;

        } else if (typeof value === "boolean") {
            number = value ? 1 : 0;

        } else {
            number = parseFloat(value);
            if (typeof this.options.decimals === 'number') {
                number = parseFloat(number.toFixed(this.options.decimals));
            }
        }

        // Non-numbers should be set to zero.
        if (isNaN(number)) {
            number = 0;
        }

        return number;
    }
}

module.exports = Number;