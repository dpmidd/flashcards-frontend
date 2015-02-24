import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newCard: function () {
      alert('Called!');
      var title = this.get('cardTitle')
      var back = this.get('cardBack')
      var card = this.store.createRecord('card', {title: title, back: back});
      this.set('cardTitle', '');
      this.set('postTitle', '');
      card.save();
    }
  }
});
