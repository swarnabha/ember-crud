import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /application', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('h2').hasText('Welcome to ember crud');

    assert.dom('.nav-item a.add').hasText('Add Application');
    await click('.nav-item a.add');
    assert.equal(currentURL(), '/add-application');

    assert.dom('.nav-item a.list').hasText('Application List');
    await click('.nav-item a.add');
    assert.equal(currentURL(), '/add-application');

  });

  test('visiting /add-application', async function(assert) {
    await visit('/add-application');

    assert.equal(currentURL(), '/add-application');
    assert.dom('h2').hasText('Add application');

  });

  test('visiting /application-list', async function(assert) {
    await visit('/application-list');

    assert.equal(currentURL(), '/application-list');
    assert.dom('h2').hasText('List Application');
    
  });



});
