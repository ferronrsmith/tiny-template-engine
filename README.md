# String.format function for JavaScript & a JS tiny templating engine
A simple `String.format` function for JavaScript and a very tiny templating engine for JavaScript

## String.format

```javascript
"{0} is dead, but {1} is alive! {0}".format("FLASH", "HTML5")
// return FLASH is dead, but HTML5 is alive! FLASH
``` 

## JS Tiny Templating engine

```javascript
"Hello {who}!".t({ who : 'JavaScript'});
 // return Hello JavaScript!
 
 "Hello {who}! It's {time} ms since epoch".t({who : 'JavaScript', time : 'today'});
 // return Hello JavaScript! It's today ms since epoch
```

### JS Tiny Templating engine tricks
Additional tips for using the templating engine.

```javascript
// any amount of object literal can be passed in as param to the function
"Hello {who}! It's {time} ms since {current} epoch".t({who : 'JavaScript', time : 'today'}, {current: 'multi'}); 

// return Hello JavaScript! It's today ms since multi epoch
```


>> NB: An object literal containing different type of object can be passed in and the function is able to transpose and replace. Please note this is a simple templating engine


[![Build Status](https://travis-ci.org/ferronrsmith/tiny-template-engine.png?branch=master)](https://travis-ci.org/ferronrsmith/tiny-template-engine)

[![Coverage Status](https://coveralls.io/repos/ferronrsmith/tiny-template-engine/badge.png?branch=master)](https://coveralls.io/r/ferronrsmith/tiny-template-engine?branch=master)