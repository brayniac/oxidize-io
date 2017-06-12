import DS from 'ember-data';

export default DS.Model.extend({
  repo: DS.belongsTo('repo'),
  label: DS.attr(),
  status: DS.attr(),
});
