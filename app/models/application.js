import DS from 'ember-data';
// import { validator, buildValidations } from 'ember-cp-validations';

// const Validations = buildValidations({
//   name: validator('presence', true),

//   phone: validator('presence', true),

//   // email: [
//   //   validator('presence', true),
//   //   validator('format', { type: 'email' })
//   // ],

//   age: [
//     validator('presence', true),
//     validator('length', {
//       min: 1,
//       max: 3
//     })
//   ]
// });


export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('string'),
  phone: DS.attr('string')
});
