 # Data Sanitizers
 
[![Build Status](https://travis-ci.com/c-butcher/data-sanitizers.svg?branch=master)](https://travis-ci.com/c-butcher/data-sanitizers)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://travis-ci.com/c-butcher/data-validators)

 ```javascript
/**
* Glues array values together */
let result = Sanitizer.clean([1,2,3], 'string', {
    glue: '-'
});

/**
* Turns objects into JSON. */
let result = Sanitizer.clean({ Hello: "World" }, 'string');
```