import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('cards', {path:'/cards'}, function () {
  });

});

export default Router;
