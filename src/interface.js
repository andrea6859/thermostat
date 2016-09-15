$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#power-saving-status').text(thermostat.powersavemode);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $("#temperature-up").on("click", function () {
    thermostat.up();
    updateTemperature();
  });

  $("#temperature-down").on("click", function () {
    thermostat.down();
    updateTemperature();
  });

  $("#temperature-reset").on("click", function () {
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-switch").on("click", function () {
    thermostat.powerSaveSwitch();
    updateTemperature();
  });
});
