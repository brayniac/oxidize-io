import { test } from 'qunit';
import moduleForAcceptance from 'oxidize-io/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-repos');

test('should show repos as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/repos', 'should redirect automatically');
  });
});

test('should link to information about oxidize.io', function (assert) {
  visit('/');
  click('a:contains("about")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should list covered repos', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
