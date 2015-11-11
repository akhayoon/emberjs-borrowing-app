import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel(){
      console.log('action bubbled up to edit route');
      return true;
    }
  }
});
