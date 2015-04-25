'use strict';

var test = require('tape');
var setTimeout = require('timers').setTimeout;

var collectParallel = require('../array.js');
var collectParallelObject = require('../object.js');

test('collectParallel is a function', function t(assert) {
    assert.equal(typeof collectParallel, 'function');
    assert.end();
});

test('collecting timers in parallel', function t(assert) {
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
        assert.ifError(err);
        assert.deepEqual(results, [
            {
                err: null, value: 50
            },
            {
                err: null, value: 100
            },
            {
                err: null, value: 200
            }
        ]);
        assert.end();
    });
});

test('collecting timers in parallel', function t(assert) {
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
        assert.ifError(err);
        assert.deepEqual(results, {
            50: {
                err: null, value: 50
            },
            100: {
                err: null, value: 100
            },
            200: {
                err: null, value: 200
            }
        });
        assert.end();
    });
});
