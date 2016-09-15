function Thermostat(){'use strict';

this.temperature = 20;
this.mintemp = 10;
this.powersavemode = true;
this.maxtemp = {true: 25, false: 32};
this.defaulttemperature = 20;
this.mediumusagetemp = 18;

Thermostat.prototype.up = function() {
  if (this.temperature >= this.maxtemp[this.powersavemode])
  {throw new Error("temperature cannot go above" + " " + this.maxtemp[this.powersavemode] + "C");
}
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.temperature == this.mintemp)
  {throw new Error('temperature cannot go below 10C');
}
  this.temperature -= 1;
};

Thermostat.prototype.powerSaveSwitch = function () {
  this.powersavemode = !this.powersavemode;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.defaulttemperature;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < this.mediumusagetemp) {
   return "low-usage";
 }
  if (this.temperature >= this.mediumusagetemp && this.temperature <= this.maxtemp[true]){
   return "medium-usage";
}
   return "high-usage";
 };

}
