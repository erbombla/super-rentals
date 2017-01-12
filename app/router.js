import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('announcement');
  this.route('admin');
  this.route('rental', {path: '/rental/:rental_id'}); 
});

export default Router;
