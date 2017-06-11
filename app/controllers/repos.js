import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterRepo(param) {
      if (param !== '') {
        return this.get('store').query('repo', { name: param });
      } else {
        return this.get('store').findAll('repo');
      }
    }
  }
});
