'use strict';
var Rx = require(__dirname);

var marbleTesting = require('./spec/helpers/marble-testing');

global.rxTestScheduler = new Rx.TestScheduler(marbleTesting.assertDeepEqual);

function it(callback) {
  callback();
}

it.asDiagram = function asDiagram() {
  return function (spec, callback) {
    callback();
  }
};

module.exports = {
  require: {
    '@reactivex/rxjs': Rx
  },

  globals: {
    hot: marbleTesting.hot,
    cold: marbleTesting.cold,
    expectObservable: marbleTesting.expectObservable,
    expectSubscriptions: marbleTesting.expectSubscriptions,
    assertDeepEqual: marbleTesting.assertDeepEqual,
    Observable: Rx.Observable,
    someObservable: Rx.Observable.range(1, 10),
    it: it
  },

  babel: {
    stage: 0
  }
};