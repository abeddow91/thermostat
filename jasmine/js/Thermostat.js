function Thermostat() {
  this.INITIAL_TEMPERATURE = 20
  this.MINIMUM = 10
  this.MAXIMUM_SAVING_TEMP = 25
  this.MAXIMUM_TEMP = 32
  this.energyUsageMode = "medium_usage"
  this._temperature = this.INITIAL_TEMPERATURE
  this._currentMaximum = this.MAXIMUM_SAVING_TEMP
  this.powerSavingMode = true
}

Thermostat.prototype.up = function() {
  if (this._temperature === this._currentMaximum) {
    throw "maximum temperature reached";
  }
  this._temperature++;
};

Thermostat.prototype.down = function() {
  if (this._temperature === this.MINIMUM) {
    throw "minimum temperature reached";
  }
    this._temperature--;
};


Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this._currentMaximum = this.MAXIMUM_SAVING_TEMP;
  this._decreaseMaxTemp();
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this._currentMaximum = this.MAXIMUM_TEMP;
};

Thermostat.prototype.powerSaving = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.INITIAL_TEMPERATURE;
};

Thermostat.prototype._energyUsage = function() {
  if (this._currentTemp() < 18) {
    this.energyUsageMode = "low_usage";
  } else if ((this._currentTemp() >=18)&&(this._currentTemp() < 25)) {
    this.energyUsageMode = "medium_usage";
  } else {
    this.energyUsageMode = "high_usage";
  };
};

Thermostat.prototype.currentEnergyUsage = function() {
  return this.energyUsageMode
};

Thermostat.prototype.currentTemp = function() {
  return this._temperature;
};

Thermostat.prototype._decreaseMaxTemp = function () {
  if (this._temperature > this._currentMaximum) {
    this._temperature = this._currentMaximum;
  }
};
