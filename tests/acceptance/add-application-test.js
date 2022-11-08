import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /add-application', async function(assert) {
    await visit('/add-application');

    assert.equal(currentURL(), '/add-application');
  });

  test('should add new application', async function(assert) {
    await visit('/add-application');
    await fillIn('[data-test-field="Name"]', 'Swarnabha paul');
    await click('[data-test-button="Save"]');
    assert.dom('[data-test-post-title]').hasText('My new post');
  });

});
