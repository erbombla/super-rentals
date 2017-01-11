import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('announcement-tile.js', 'Integration | Component | announcement tile.js', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{announcement-tile.js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#announcement-tile.js}}
      template block text
    {{/announcement-tile.js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
