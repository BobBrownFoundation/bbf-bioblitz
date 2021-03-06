import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | person with remove', function() {
  setupComponentTest('person-with-remove', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#person-with-remove}}
    //     template content
    //   {{/person-with-remove}}
    // `);

    this.render(hbs`{{person-with-remove}}`);
    expect(this.$()).to.have.length(1);
  });
});
