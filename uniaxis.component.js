/**
 * Created by Budda on 01/06/2014.
 * Twitter @BuddaBoy
 */

/*
 * Controls to only allow 4-directions of movement (no diagonals).
 * The entity can only move in 1 direction at a time.
 */
Crafty.c('UniAxis', {

  init: function () {
    this.requires("Multiway");
  },

  uniaxis: function (speed) {
    this.multiway(speed, {
      UP_ARROW: -90,
      DOWN_ARROW: 90,
      RIGHT_ARROW: 0,
      LEFT_ARROW: 180,
      W: -90,
      S: 90,
      D: 0,
      A: 180,
      Z: -90,
      Q: 180
    });

    this.unbind('EnterFrame', this._enterframe);
    this.bind('EnterFrame', function () {
      if (this.disableControls) return;

      if (this._movement.x !== 0) {
        this.x += this._movement.x;
        this.trigger('Moved', {
          x: this.x - this._movement.x,
          y: this.y
        });
      } else if (this._movement.y !== 0) {
        this.y += this._movement.y;
        this.trigger('Moved', {
          x: this.x,
          y: this.y - this._movement.y
        });
      }
    });

    return this;
  }
});
