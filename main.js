const Sanitizer = require('./src/sanitizer');
const Boolean = require('./src/sanitizers/boolean');
const Length = require('./src/sanitizers/length');
const Number = require('./src/sanitizers/number');
const String = require('./src/sanitizers/string');

Sanitizer.add('boolean', Boolean);
Sanitizer.add('length', Length);
Sanitizer.add('number', Number);
Sanitizer.add('string', String);

module.exports = {
    Sanitizer,
    Boolean,
    Length,
    Number,
    String,
};
