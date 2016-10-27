
$( document ).ready(function() {

  var thermostat = new Thermostat();

    $('#reset').click(function () {
      thermostat.reset();
      $("#temperature").text(thermostat.currentTemp() + "°C")
    });

    $('#up').click(function () {
      thermostat.up();
      $("#temperature").text(thermostat.currentTemp() + "°C")
    });

    $('#down').click(function () {
      thermostat.down();
      $("#temperature").text(thermostat.currentTemp() + "°C")
    });

    $('#powerSavingOn').click(function () {
      thermostat.powerSavingOn();
      $("#temperature").text(thermostat.currentTemp() + "°C")
    });

    $('#powerSavingOff').click(function () {
      thermostat.powerSavingOff();
    });

    $('#energyMode').click(function () {
      thermostat.currentEnergyUsage();
    });


});
