import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  name: DS.attr(),
  status: DS.attr(),
  rustfmt: DS.attr(),
  clippy: DS.attr(),
  builds: DS.hasMany('build'),
});
