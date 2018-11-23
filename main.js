const Sanitizer = require('./src/sanitizer');
const SanitationError = require('./src/sanitation-error');

let Boolean = require('./src/sanitizers/boolean');
let String = require('./src/sanitizers/string');
let Length = require('./src/sanitizers/length');

Sanitizer.add('boolean', Boolean);
Sanitizer.add('string', String);
Sanitizer.add('length', Length);

module.exports = {
    Sanitizer,
    SanitationError,
    String,
    Boolean
};
