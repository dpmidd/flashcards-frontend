import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    editCard: function(card) {
      var title = this.get('title');
      var back = this.get('back');
      card.set('title', title);
      card.set('back', back);
      card.save();
      this.transitionToRoute('cards');
    }

  }
});
