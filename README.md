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

## Benchmarks

```
raynos at raynos-SVS15127PXB  ~/projects/collect-parallel on master*
$ node benchmark/set-immediate-fan-out.js --runs 100000
runParallel { mean: 56.67311,
  stdDev: 219.1085508109455,
  median: 48,
  mode: [ 47 ],
  variance: 48008.557038498264 }
async { mean: 29.10518,
  stdDev: 190.286886537419,
  median: 25,
  mode: [ 25 ],
  variance: 36209.099188159424 }
collectParallel { mean: 22.65887,
  stdDev: 127.14602424553848,
  median: 17,
  mode: [ 16 ],
  variance: 16166.111481437905 }
fastparallel { mean: 23.23379,
  stdDev: 132.8003565943979,
  median: 18,
  mode: [ 17 ],
  variance: 17635.93471158303 }
raynos at raynos-SVS15127PXB  ~/projects/collect-parallel on master*
$ node benchmark/next-tick-fan-out.js --runs 100000
runParallel { mean: 34.58816,
  stdDev: 194.56837840805773,
  median: 27,
  mode: [ 27 ],
  variance: 37856.85387635324 }
async { mean: 22.62546,
  stdDev: 202.66048956950078,
  median: 16,
  mode: [ 15 ],
  variance: 41071.27403252868 }
collectParallel { mean: 17.66156,
  stdDev: 109.16621762706687,
  median: 14,
  mode: [ 14 ],
  variance: 11917.263070997089 }
fastparallel { mean: 18.53812,
  stdDev: 129.40402235199886,
  median: 15,
  mode: [ 14 ],
  variance: 16745.401000875598 }
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
