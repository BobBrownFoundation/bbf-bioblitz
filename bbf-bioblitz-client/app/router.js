import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('import');
  this.route('roles');
  this.route('surveys');
  this.route('teams');
  this.route('timeslots');
  this.route('people');
  this.route('participants');
  this.route('surveyslots');
  this.route('sites');
  this.route('survey', { path: '/survey/:survey_id'});
  this.route('surveyslot', { path: '/surveyslot/:surveyslot_id' } );
  this.route('person', { path: '/person/:person_id' } );

  this.route('report', function() {
    this.route('transport-report');
    this.route('travel');
    this.route('survey');
  });
  this.route('reports');
});

export default Router;
