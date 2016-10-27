function Thermostat() {
  this._temperature = 20
  this._minimum = 10
}

Thermostat.prototype.up = function(increase) {
  this._temperature += increase;
};

Thermostat.prototype.down = function(decrease) {
  if(this._temperature - decrease < this._minimum) {
    return('you can\'t go below ' + this._minimum);
  } else {
    this._temperature -= decrease;
  };
};

Thermostat.prototype.printTemp = function() {
  return('the new temperature is '+ this._temperature);
};

// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
//
//
//
// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };
