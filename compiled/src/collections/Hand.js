// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Hand = (function(superClass) {
    extend(Hand, superClass);

    function Hand() {
      return Hand.__super__.constructor.apply(this, arguments);
    }

    Hand.prototype.model = Card;

    Hand.prototype.initialize = function(array, deck, isDealer) {
      this.deck = deck;
      this.isDealer = isDealer;
    };

    Hand.prototype.hit = function() {
      var card;
      card = this.deck.pop();
      this.add(card);
      this.bust();
      return card;
    };

    Hand.prototype.stand = function() {};

    Hand.prototype.bust = function() {
      if (this.scores()[0] > 21) {
        console.log('bust');
        this.trigger('bust');
        return true;
      }
    };

    Hand.prototype.hasAce = function() {
      return this.reduce(function(memo, card) {
        return memo || card.get('value') === 1;
      }, 0);
    };

    Hand.prototype.minScore = function() {
      return this.reduce(function(score, card) {
        return score + (card.get('revealed') ? card.get('value') : 0);
      }, 0);
    };

    Hand.prototype.scores = function() {
      return [this.minScore(), this.minScore() + 10 * this.hasAce()];
    };

    return Hand;

  })(Backbone.Collection);

}).call(this);

//# sourceMappingURL=Hand.js.map
