# collect-parallel

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

Run N things in parallel and collect results

## Example

```js
var collectParallel = require("collect-parallel/array");

collectParallel([
    50,
    100,
    200
], function doTimer(value, i, callback) {
    setTimeout(onTimer, value);

    function onTimer() {
        callback(null, value);
    }
}, function onResults(err, results) {
    // err is always `null`
    // results is an array;
    // it contains `Result()` objects with `err` and `value`
    console.log(results[1].value);
});
```

## Example object

```js
var collectParallelObject = require("collect-parallel/object");

collectParallelObject({
    50: 50,
    100: 100,
    200: 200
}, function doTimer(value, i, callback) {
    setTimeout(onTimer, value);

    function onTimer() {
        callback(null, value);
    }
}, function onResults(err, results) {
    // err is always `null`
    // results is an object;
    // it contains `Result()` objects with `err` and `value`
    console.log(results['100'].value);
});
```

## Installation

`npm install collect-parallel`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licensed

  [build-png]: https://secure.travis-ci.org/Raynos/collect-parallel.png
  [build]: https://travis-ci.org/Raynos/collect-parallel
  [cover-png]: https://coveralls.io/repos/Raynos/collect-parallel/badge.png
  [cover]: https://coveralls.io/r/Raynos/collect-parallel
  [dep-png]: https://david-dm.org/Raynos/collect-parallel.png
  [dep]: https://david-dm.org/Raynos/collect-parallel
  [npm-png]: https://nodei.co/npm/collect-parallel.png?stars&downloads
  [npm]: https://nodei.co/npm/collect-parallel
