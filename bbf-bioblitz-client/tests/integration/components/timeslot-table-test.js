import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | timeslot table', function() {
  setupComponentTest('timeslot-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#timeslot-table}}
    //     template content
    //   {{/timeslot-table}}
    // `);

    this.render(hbs`{{timeslot-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
