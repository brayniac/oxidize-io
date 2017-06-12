import DS from 'ember-data';

export default DS.Model.extend({
  rep: DS.attr(),
  label: DS.attr(),
  status: DS.attr(),
});
