import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  classNames: ['select-expand-button'],
  person: null,
  availableSurveyslots: [],
  selectedSurveyslot: null,
  assignDisabled: Ember.computed.empty('selectedSurveyslot'),
  showing: false,

  surveySlotLabel( surveyslot ) {
    return surveyslot.get('survey.name') + ' at ' + surveyslot.get('location.name') + ' on ' + surveyslot.get('timeslot.name');
  },

  updateSurveySlots() {
    return this.findAvailableSurveyslots()
      .then( (ps) => {
        this.set('availableSurveyslots', ps);
      } );
  },

  didReceiveAttrs() {
    this._super(...arguments);
    return this.updateSurveySlots();
  },

  findAvailableSurveyslots() {
    let store = this.get('store');
    function excludeExisting( [ rs, existing ] ) {
      let result = rs;
      existing.forEach( (s) => {
        result = result.reject( (r)=> r.get('id') === s.get('surveyslot.id') );
      });
      return result;
    }

    return Ember.RSVP.Promise.all( [
      store.findAll('surveyslot'),
      this.get('person.participatingIn') ] )
        .then( excludeExisting );
  },


  actions: {
    setSelection( s ) {
      this.set('selectedSurveyslot', s );
    },
    expand() {
      this.updateSurveySlots()
        .then( () => this.set('showing', true) );
    },
    collapse() {
      this.set('showing', false);
    },
    selectSurveyslot() {
      let participant = this.get('store').createRecord('participant', {
          person: this.get('person'),
          surveyslot: this.get('selectedSurveyslot')
      });
      
      participant.save()
        .then( () => this.set('showing', false) )
        .catch(
            () => {
              this.get('store').unloadRecord(participant);
              this.get('dialog').alert('assign-participant-error');
            }

          );
    }
  }
});
