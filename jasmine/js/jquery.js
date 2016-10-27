
$( document ).ready(function() {

  var thermostat = new Thermostat();

    $('#reset').click(function () {
      thermostat.reset();
      $("#temperature").text(thermostat.currentTemp() + "°C")
      $(".box").css("background-color","black");
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
        $('body').css("background-color","grey");
    });

    $('#powerSavingOff').click(function () {
      thermostat.powerSavingOff();
      $('body').css("background-color","grey");
    });

    $('#energyMode').click(function () {
      thermostat.currentEnergyUsage();
    });

    function updateTemp(){
      $("#temperature").attr("class",thermostat.energyUsageMode());
    };

});
