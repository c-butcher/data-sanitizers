class SanitationError {
    constructor(message, params = {}) {
        if (typeof message !== 'string') {
            throw new Error("Argument 'message' must be a string.");
        }

        if (typeof params !== 'object') {
            throw new Error("Argument 'params' must be an object.");
        }

        this.message = message;
        this.params = new Map(Object.entries(params));

        if (this.params.size > 0) {
            this.params.forEach((value, name) => {

                if (Array.isArray(value)) {
                    value = '[' + value.join("', '") + ']';
                }

                if (typeof value === 'object') {
                    console.log(name);
                    console.log(value);
                    let entries = Object.entries(value);
                    for ({name, value} in entries) {
                    }

                    value = '[' + value.join("', '") + ']';
                }

                this.message = this.message.replace("{" + name + "}", value);
            });
        }

    }
}

module.exports = SanitationError;