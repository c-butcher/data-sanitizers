let sanitizers = new Map();

class Sanitizer {

    /**
     * Sanitizers are used to clean values until they meet certain requirements.
     *
     * @param {string} name
     * @param {object} options
     */
    constructor(name, options = {}) {
        if (this.constructor === Sanitizer) {
            throw new Error('Abstract class Sanitizer cannot be called directly.');
        }

        if (typeof this.sanitize !== 'function') {
            throw new Error('Abstract class Sanitizer must implement a sanitize() method.')
        }

        if (typeof options !== 'object') {
            throw new Error('Options argument must be an object.');
        }

        let defaults = this.defaults();
        if (typeof defaults !== 'object') {
            throw new Error('Sanitizers defaults() method must return an object.');
        }

        this.name = name;
        this.options = Object.assign(defaults, options);
    }

    /**
     * Returns the default options for this sanitizer.
     *
     * @returns {{}}
     */
    defaults() {
        return {};
    }

    /**
     * Adds a sanitizer to the list of available sanitizers.
     *
     * @param {string} name
     * @param {function} sanitizer
     */
    static add(name, sanitizer) {
        if (typeof name !== 'string') {
            throw new Error('Name argument must be a string.');
        }

        if (typeof sanitizer !== 'function') {
            throw new Error('Sanitizer argument must be a function that implements OpenData.Schema.Field.Sanitizer.');
        }

        sanitizers.set(name, sanitizer);
    }

    /**
     * Check whether a sanitizer exists.
     *
     * @param {string} name
     *
     * @returns {boolean}
     */
    static has(name) {
        return sanitizers.has(name);
    }

    /**
     * Returns a fully configured sanitizer ready to start cleaning values.
     *
     * @param {string} name
     * @param {object} options
     *
     * @returns {Sanitizer}
     */
    static get(name, options = {}) {
        if (typeof name !== 'string') {
            throw new Error('Name argument must be a string.');
        }

        if (!sanitizers.has(name)) {
            throw new Error(`Sanitizer '${name}' not found.`);
        }

        const SanitizerType = sanitizers.get(name);

        let cleaner = new SanitizerType(options);
        if (!(cleaner instanceof Sanitizer)) {
            throw new Error(`Sanitizer '${name}' must implement OpenData.Schema.Field.Sanitizer.`);
        }

        return cleaner;
    }

    /**
     * Sanitizes a value to a specific type.
     *
     * @param {*} value
     * @param {string} type
     * @param {object} options
     *
     * @returns {*}
     */
    static clean(value, type, options = {}) {
        let sanitizer = this.get(type, options);
        return sanitizer.sanitize(value);
    }

    /**
     * Returns all of the sanitizer types.
     *
     * @returns {Map<string, function>}
     */
    static types() {
        return new Map(sanitizers);
    }
}

module.exports = Sanitizer;