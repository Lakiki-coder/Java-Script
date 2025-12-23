function createCar(fuelEfficiency = 15) {
  let fuelLevel = 0;
  const maxFuel = 50;
  let running = false;

  return {
    start() {
      running = true;
    },
    stop() {
      running = false;
    },
    refuel(liters) {
      fuelLevel = Math.min(fuelLevel + liters, maxFuel);
    },
    drive(distance) {
      if (!running) throw new Error('Car must be started');
      const fuelNeeded = distance / fuelEfficiency;
      if (fuelNeeded > fuelLevel) throw new Error('Not enough fuel');
      fuelLevel -= fuelNeeded;
    },
    getFuelLevel() {
      return fuelLevel;
    },
    isRunning() {
      return running;
    }
  };
}

module.exports = createCar;