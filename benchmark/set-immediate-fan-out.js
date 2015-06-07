'use strict';

var setImmediate = require('timers').setImmediate;

var async = require('async');
var runParallel = require('run-parallel');
var collectParallel = require('../array.js');
var fastparallel = require('fastparallel');

var asyncBenchRunner = require('./async-bench.js');

var fastParallelInstance = fastparallel({
    results: true
});

asyncBenchRunner({
    'runParallel': function testAsync(cb) {
        var tasks = [1, 2, 3, 4, 5];
        var funcs = [];
        for (var i = 0; i < tasks.length; i++) {
            funcs.push(doubleAsyncThunk(tasks[i]));
        }

        runParallel(funcs, cb);
    },
    'async': function testAsync(cb) {
        var tasks = [1, 2, 3, 4, 5];
        async.map(tasks, doubleAsync, cb);
    },
    'collectParallel': function testAsync(cb) {
        var tasks = [1, 2, 3, 4, 5];
        collectParallel(tasks, doubleAsyncCollect, cb);
    },
    'fastparallel': function testAsync(cb) {
        var tasks = [1, 2, 3, 4, 5];

        fastParallelInstance(null, doubleAsync, tasks, cb);
    }
});

function doubleAsyncThunk(n) {
    return function thunk(callback) {
        doubleAsync(n, callback);
    };
}

function doubleAsync(n, callback) {
    setImmediate(onTick);

    function onTick() {
        callback(null, n * 2);
    }
}

function doubleAsyncCollect(n, index, callback) {
    setImmediate(onTick);

    function onTick() {
        callback(null, n * 2);
    }
}
