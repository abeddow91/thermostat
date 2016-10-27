function Thermostat() {
  this.INITIAL_TEMPERATURE = 20
  this.MINUMUM = 10
  this.MAXIMUM_SAVING_TEMP = 25
  this.MAXIMIM_TEMP = 32
  this.energyUsageMode = "medium usage"
  this._temperature = this.INITIAL_TEMPERATURE
  this._currentMaximum = this.MAXIMUM_SAVING_TEMP
  this.powerSavingMode = true
}

Thermostat.prototype.up = function(increase) {
  if (this._temperature === this._currentMaximum) {
    throw "maximum temperature reached";
  }
  this._temperature += increase;
};

Thermostat.prototype.down = function(decrease) {
  if(this._temperature - decrease < this.MINUMUM) {
    return('you can\'t go below ' + this.MINIMUM);
  } else {
    this._temperature -= decrease;
  };
};


Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this._currentMaximum = this.MAXIMUM_SAVING_TEMP;
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this._currentMaximum = this.MAXIMUM_TEMP;
}

Thermostat.prototype.powerSaving = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.INITIAL_TEMPERATURE;
};

Thermostat.prototype._energyUsage = function() {
  if (this._currentTemp() < 18) {
    this.energyUsageMode = "low usage";
  } else if ((this._currentTemp() >=18)&&(this._currentTemp() < 25)) {
    this.energyUsageMode = "medium usage";
  } else {
    this.energyUsageMode = "high usage";
  };
};

Thermostat.prototype.currentEnergyUsage = function() {
  return this.energyUsageMode
}

Thermostat.prototype._currentTemp = function() {
  return this._temperature;
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
