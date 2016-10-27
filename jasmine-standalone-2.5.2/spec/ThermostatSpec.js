
describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should create thermostat at 20 degrees", function() {
    expect(thermostat._temperature).toEqual(20);
  });

  it('allows you to increase the temperature with up function', function() {
    thermostat.up(20)
    expect(thermostat._temperature).toBeGreaterThan(20);
  });

  it('allows you to decrease the temperature with down function', function(){
    thermostat.down(10)
    expect(thermostat._temperature).toBeLessThan(20);
  });

  it('returns the temperature', function(){
    expect(thermostat._currentTemp()).toEqual(thermostat._temperature);
  });

  it('won\'t go below the minimum', function() {
    expect(thermostat.down(11)).toEqual('you can\'t go below '+thermostat._minimum);
  });
  it('has a maximum temperature of 25 degrees in power saving mode', function(){
    thermostat._temperature = 25;
    expect(function() {
      thermostat.up(5)}).toThrow("maximum temperature reached");
      expect(thermostat._currentTemp()).not.toBe(30);
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
