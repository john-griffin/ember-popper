import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-popper', 'Integration | Component | renderInPlace', {
  integration: true
});

test('false: renders in the body', function(assert) {
  this.render(hbs`
    <div>
      {{#ember-popper popperClass='hello' renderInPlace=false}}
        template block text
      {{/ember-popper}}
    </div>
  `);

  let popper = document.querySelector('.hello');

  // Sanity check
  assert.equal(popper.innerHTML.trim(), 'template block text');
  assert.ok(popper.hasAttribute('x-placement'));

  assert.equal(popper.parentElement, document.body);
});

test('false with an explicit popperContainer: renders in the popperContainer', function(assert) {
  this.render(hbs`
    <div class='poppers-plz'>
    </div>

    <div>
      {{#ember-popper popperClass='hello' popperContainer='.poppers-plz' renderInPlace=false}}
        template block text
      {{/ember-popper}}
    </div>
  `);

  let popper = document.querySelector('.hello');

  // Sanity check
  assert.equal(popper.innerHTML.trim(), 'template block text');
  assert.ok(popper.hasAttribute('x-placement'));

  assert.equal(popper.parentElement, document.querySelector('.poppers-plz'));
});

test('true: renders in place', function(assert) {
  this.render(hbs`
    <div class='parent'>
      {{#ember-popper popperClass='hello' renderInPlace=true}}
        template block text
      {{/ember-popper}}
    </div>
  `);

  let popper = document.querySelector('.hello');

  // Sanity check
  assert.equal(popper.innerHTML.trim(), 'template block text');
  assert.ok(popper.hasAttribute('x-placement'));

  assert.equal(popper.parentElement, document.querySelector('.parent'));
});
