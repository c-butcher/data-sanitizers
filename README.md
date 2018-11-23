 # Open Data Sanitizers
 
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