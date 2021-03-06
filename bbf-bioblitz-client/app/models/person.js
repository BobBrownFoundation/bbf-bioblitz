import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  team: DS.belongsTo('team'),
  /*capabilities: DS.hasMany('role'),*/
  participatingIn: DS.hasMany('participant'),
  occupySlot: Ember.computed( 'team.name',function() {
    let team = this.get('team.name');
    return ( team !== "Survey Leader" )
       && ( team !== "Survey Assistant" )
       && ( team !== "Organiser" );
  }),
  name: Ember.computed('firstName', 'lastName', {
    get() {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    },
    set(key, value) {
      var [firstName, ...lastNames] = value.split(/\s+/);
      this.set('firstName', firstName);
      this.set('lastName',  lastNames.join(' '));
      return value;
    }
  })
});
