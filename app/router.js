import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('repos', function() {
    this.route('show', { path: '/:owner/:name' });
  });
  this.route('builds', function() {
    this.route('show', { path: '/:id' });
  });
});

export default Router;
