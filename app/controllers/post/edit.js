import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    editCard: function(card) {
      var title = this.get('cardTitle');
      var back = this.get('cardBack');
      card.set('cardTitle', title);
      card.set('cardBack', back);
      card.save();
      this.transitionToRoute('cards');
    }
  }
});
