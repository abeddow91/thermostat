
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
    expect(thermostat.printTemp()).toEqual("the new temperature is "+thermostat._temperature);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat._minimum).toEqual(10);
  });

  it('won\'t go below the minimum', function() {
    expect(thermostat.down(11)).toEqual('you can\'t go below '+thermostat._minimum);
  });



});
