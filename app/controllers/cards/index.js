import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    newCard: function () {
      var title = this.get('cardTitle');
      var back = this.get('cardBack');
      var card = this.store.createRecord('card', {title: title, back: back});
      this.set('cardTitle', '');
      this.set('cardBack', '');
      card.save();
    },
    deleteCard: function(card) {
      card.destroyRecord();
      this.transitionToRoute('cards');
    }
  }
});
