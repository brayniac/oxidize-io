import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  name: DS.attr(),
  overall: DS.attr(),
  stable: DS.attr(),
  beta: DS.attr(),
  nightly: DS.attr(),
  style: DS.attr(),
  lint: DS.attr(),
  fuzz: DS.attr(),
  aarch64_unknown_linux_gnu: DS.attr(),
  aarch64_unknown_linux_gnu_stable: DS.attr(),
  aarch64_unknown_linux_gnu_beta: DS.attr(),
  aarch64_unknown_linux_gnu_nightly: DS.attr(),
  arm_unknown_linux_gnueabi: DS.attr(),
  arm_unknown_linux_gnueabi_stable: DS.attr(),
  arm_unknown_linux_gnueabi_beta: DS.attr(),
  arm_unknown_linux_gnueabi_nightly: DS.attr(),
  arm_unknown_linux_gnueabihf: DS.attr(),
  arm_unknown_linux_gnueabihf_stable: DS.attr(),
  arm_unknown_linux_gnueabihf_beta: DS.attr(),
  arm_unknown_linux_gnueabihf_nightly: DS.attr(),
  armv7_unknown_linux_gnueabihf: DS.attr(),
  armv7_unknown_linux_gnueabihf_stable: DS.attr(),
  armv7_unknown_linux_gnueabihf_beta: DS.attr(),
  armv7_unknown_linux_gnueabihf_nightly: DS.attr(),
  i686_unknown_linux_gnu: DS.attr(),
  i686_unknown_linux_gnu_stable: DS.attr(),
  i686_unknown_linux_gnu_beta: DS.attr(),
  i686_unknown_linux_gnu_nightly: DS.attr(),
  i686_unknown_linux_musl: DS.attr(),
  i686_unknown_linux_musl_stable: DS.attr(),
  i686_unknown_linux_musl_beta: DS.attr(),
  i686_unknown_linux_musl_nightly: DS.attr(),
  x8664_unknown_linux_gnu: DS.attr(),
  x8664_unknown_linux_gnu_stable: DS.attr(),
  x8664_unknown_linux_gnu_beta: DS.attr(),
  x8664_unknown_linux_gnu_nightly: DS.attr(),
  x8664_unknown_linux_musl: DS.attr(),
  x8664_unknown_linux_musl_stable: DS.attr(),
  x8664_unknown_linux_musl_beta: DS.attr(),
  x8664_unknown_linux_musl_nightly: DS.attr(),
});
