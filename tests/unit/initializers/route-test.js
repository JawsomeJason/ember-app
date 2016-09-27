import Ember from 'ember';
import RouteInitializer from 'client/initializers/route';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | route', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  RouteInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
