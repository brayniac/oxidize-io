import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let result = this.get('store').query('repo', {
      owner: params.owner,
      name: params.name,
    }).then(function(repos) {
      let repo = repos.objectAt(0);
      return repo;
    });
    return result;
  }
});
