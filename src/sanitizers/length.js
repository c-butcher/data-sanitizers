const Sanitizer = require('../sanitizer');

class Length extends Sanitizer {
    constructor(options = {}) {
        super('length', options);

        if (this.options.min && this.options.max && this.options.min >= this.options.max) {
            throw new Error('Minimum value must be less than maximum value.');
        }
    }

    defaults() {
        return {
            min: null,
            max: null,
            fill: null,
        };
    }

    sanitize(value) {
        if (Array.isArray(value)) {
            if (this.options.min && value.length < this.options.min) {
                if (Array.isArray(this.options.fill)) {
                    for (let i = value.length; value.length < this.options.min; i++) {
                        value.push(...this.options.fill);
                    }

                } else {
                    for (let i = value.length; value.length < this.options.min; i++) {
                        value.push(this.options.fill);
                    }
                }
            }

            if (this.options.max && value.length > this.options.max) {
                value.length = this.options.max;
            }
        }

        if (typeof value === 'string') {
            value = this.handleString(value);
        }

        if (typeof value === 'number') {
            value = value.toString();
            value = this.handleString(value);
            value = parseFloat(value);
        }

        return value;
    }

    handleString(value) {
        if (this.options.min && value.length < this.options.min) {

            let fill = this.options.fill.toString();
            let fillArea = this.options.min - value.length;
            let fillCount = Math.ceil(fillArea / fill.length);

            value += fill.repeat(fillCount);
        }

        if (this.options.max && value.length > this.options.max) {
            value = value.substr(0, this.options.max);
        }

        return value;
    }
}

module.exports = Length;