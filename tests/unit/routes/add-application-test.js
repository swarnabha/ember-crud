import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-application');
    assert.ok(route);
  });
});
