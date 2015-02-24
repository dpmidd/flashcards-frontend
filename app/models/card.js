import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  back: DS.attr('string')
});
