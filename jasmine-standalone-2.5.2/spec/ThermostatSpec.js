
describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should create thermostat at 20 degrees", function() {
    expect(thermostat._temperature).toEqual(20);
  });

  it('allows you to increase the temperature with up function', function() {
    thermostat.up()
    expect(thermostat._temperature).toBeGreaterThan(20);
  });

  it('allows you to decrease the temperature with down function', function(){
    thermostat.down()
    expect(thermostat._temperature).toBeLessThan(20);
  });

  it('returns the temperature', function(){
    expect(thermostat._currentTemp()).toEqual(thermostat._temperature);
  });

  it('won\'t go below the minimum', function() {
    thermostat._temperature = 10;
    expect(function() {
      thermostat.down()}).toThrow("minimum temperature reached");
      expect(thermostat._currentTemp()).not.toBe(9);
  });

  it('has a maximum temperature of 25 degrees in power saving mode', function(){
    thermostat._temperature = 25;
    expect(function() {
      thermostat.up()}).toThrow("maximum temperature reached");
      expect(thermostat._currentTemp()).not.toBe(26);
  });

  it('resets the temperature to 20', function() {
    thermostat._temperature = 27;
    thermostat.reset();
    expect(thermostat._currentTemp()).toEqual(20);
  });

  it('has low usage when temperature below 18', function() {
    thermostat._temperature = 16;
    thermostat._energyUsage();
    expect(thermostat.currentEnergyUsage()).toEqual("low usage");
  });

});
