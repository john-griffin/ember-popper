import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('ember-popper', 'Integration | Component | attributes', {
  integration: true
});

test('id is bound correctly', function(assert) {
  this.render(hbs`
    <div class='parent' style='position: fixed; bottom: 0; height: 100px; width: 100%;'>
      {{#ember-popper placement='top' id='foo'}}
        test
      {{/ember-popper}}
    </div>
  `);

  assert.ok(find('#foo'), 'id attribute bound correctly');
});

test('class is bound correctly', function(assert) {
  this.render(hbs`
    <div class='parent' style='position: fixed; bottom: 0; height: 100px; width: 100%;'>
      {{#ember-popper placement='top' class='foo'}}
        test
      {{/ember-popper}}
    </div>
  `);

  assert.ok(find('.foo'), 'class attribute bound correctly');
});

test('role is bound correctly', function(assert) {
  this.render(hbs`
    <div class='parent' style='position: fixed; bottom: 0; height: 100px; width: 100%;'>
      {{#ember-popper id='foo' placement='top' ariaRole='tooltip'}}
        test
      {{/ember-popper}}
    </div>
  `);

  assert.equal(find('#foo').getAttribute('role'), 'tooltip', 'role attribute bound correctly');
});
