const Car = require('./src/CarFuelSystem')

describe('test for car fuel system', () => {

  test('Car can be started', () => {
    let car = Car(15);
    car.start();
    expect(car.isRunning()).toBe(true);
  });

  test('Car can be stopped', () => {
    let car = Car(15);
    car.start();
    car.stop();
    expect(car.isRunning()).toBe(false);
  });

  test('Car can be refueled up to max capacity', () => {
    let car = Car(15);
    car.refuel(30);
    expect(car.getFuelLevel()).toBe(30);
    car.refuel(25); 
    expect(car.getFuelLevel()).toBe(50);
  });

  test('Car can be driven and fuel is consumed', () => {
   let car = Car(15);
    car.refuel(20);
    car.start();
    car.drive(60); 
    expect(car.getFuelLevel()).toBeCloseTo(16);
  });

  test('Driving more than available fuel throws error', () => {
    let car = Car(15);
    car.refuel(5);
    car.start();
    expect(() => car.drive(100)).toThrow('Not enough fuel');
  });

  test('Car state: current fuel and running state', () => {
    let car = Car(15);
    car.refuel(10);
    expect(car.getFuelLevel()).toBe(10);
    expect(car.isRunning()).toBe(false);
    car.start();
    expect(car.isRunning()).toBe(true);
  });
});