const Sanitizer = require('./src/sanitizer');
const SanitationError = require('./src/sanitation-error');

let Boolean = require('./src/sanitizers/boolean');
let String = require('./src/sanitizers/string');

Sanitizer.add('boolean', Boolean);
Sanitizer.add('string', String);

module.exports = {
    Sanitizer,
    SanitationError,
    String,
    Boolean
};
