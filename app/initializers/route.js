import Ember from 'ember';

var alreadyRun = false;
var { EQCSS } = window;

export function initialize(/* application */) {
  if (!alreadyRun) { 
    Ember.Route.reopen({
      actions: {
        didTransition: function(transition) {
          this._super(transition);
          EQCSS.apply();
        }
      }
    }); 
  }

  alreadyRun = true;
}

export default {
  name: 'route',
  initialize
};
