$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#city').text("london");

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8f01d60ae9cfeccc3b8feee74f0a4c0c&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
});

$('#current-city').change(function() {
  displayWeather();
});

function displayWeather() {
  var city = $('#current-city').val();
  var url  = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var apiKey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + city + apiKey + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  });
  $('#city').text(city);
}

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#power-saving-status').text(thermostat.powersavemode);
    // $('#temperature').attr('class', thermostat.energyUsage());
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
