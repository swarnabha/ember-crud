import DS from 'ember-data';
export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  phone: DS.attr('string'),
  email: DS.attr('string')
});
