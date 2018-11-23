const Sanitizer = require('../sanitizer');

class Boolean extends Sanitizer {
    constructor(options = {}) {
        super('boolean', options);
    }

    defaults() {
        return {};
    }

    sanitize(value) {
        return !!value;
    }
}

module.exports = Boolean;