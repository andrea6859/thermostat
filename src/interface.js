$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8f01d60ae9cfeccc3b8feee74f0a4c0c&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
});

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });
});

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
