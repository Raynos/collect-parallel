'use strict';

var Result = require('rezult');

module.exports = collectParallel;

function collectParallel(tasks, iteratee, callback) {
    var context = new ParallelContext([], tasks.length, callback);

    if (context.counter === 0) {
        callback(null, context.results);
        return;
    }

    for (var i = 0; i < tasks.length; i++) {
        iteratee(tasks[i], i, insertResult(context, i));
    }
}

function insertResult(context, resultKey) {
    return callback;

    function callback(err, result) {
        context.storeResult(resultKey, err, result);
    }
}

function ParallelContext(results, counter, callback) {
    this.results = results;
    this.counter = counter;
    this.callback = callback;
}

ParallelContext.prototype.storeResult =
function storeResult(resultKey, err, result) {
    var self = this;

    self.results[resultKey] = new Result(err, result);

    if (--self.counter === 0) {
        return self.callback(null, self.results);
    }
};
