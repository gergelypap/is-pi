# π?

Determines whether something is equal to PI or not.

## Installation

* Per project: `npm i is-pi --save`
* Globally: `npm i -g is-pi`

## Usage

```javascript
  var isPI = require('is-pi');
  console.log(isPI(3.14)); 		// true
  console.log(isPI('unicorn')); // false
```

## Tests

`npm test`

## Why?

Of course this is not serious. After a guy broke npm builds worldwide by removing his packages ([see his rant](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.iyjyv79zz)), people started to create useless and tiny npm modules as a joke, such as [is-thirteen](https://github.com/jezen/is-thirteen) or [noop3](https://github.com/sindresorhus/noop3).
