const accelerationX = document.querySelector('.accelerationX')
const accelerationY = document.querySelector('.accelerationY')
const accelerationZ = document.querySelector('.accelerationZ')

const gravityX = document.querySelector('.gravityX')
const gravityY = document.querySelector('.gravityY')
const gravityZ = document.querySelector('.gravityZ')

const gyroscopeX = document.querySelector('.gyroscopeX')
const gyroscopeY = document.querySelector('.gyroscopeY')
const gyroscopeZ = document.querySelector('.gyroscopeZ')

const laSensorX = document.querySelector('.laSensorX')
const laSensorY = document.querySelector('.laSensorY')
const laSensorZ = document.querySelector('.laSensorZ')

const magSensorX = document.querySelector('.magSensorX')
const magSensorY = document.querySelector('.magSensorY')
const magSensorZ = document.querySelector('.magSensorZ')




const acl = new Accelerometer({ frequency: 60 });

acl.addEventListener("reading", () => {
  accelerationX.textContent = `Acceleration X ${acl.x}`;
  accelerationY.textContent = `Acceleration Y ${acl.y}`;
  accelerationZ.textContent = `Acceleration Z ${acl.z}`;
});

acl.start();




let gravitySensor = new GravitySensor({ frequency: 60 });

gravitySensor.addEventListener("reading", (e) => {
  gravityX.textContent = `Gravity X ${gravitySensor.x}`;
  gravityY.textContent = `Gravity Y ${gravitySensor.y}`;
  gravityZ.textContent = `Gravity Z ${gravitySensor.z}`;
});

gravitySensor.start();




let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  gyroscopeX.textContent = `Gyroscope X ${gyroscope.x}`;
  gyroscopeY.textContent = `Gyroscope Y ${gyroscope.y}`;
  gyroscopeZ.textContent = `Gyroscope Z ${gyroscope.z}`;
});

gyroscope.start();




let laSensor = new LinearAccelerationSensor({ frequency: 60 });

laSensor.addEventListener("reading", (e) => {
  laSensorX.textContent = `LinearAccelerationSensor X ${laSensor.x}`;
  laSensorY.textContent = `LinearAccelerationSensor Y ${laSensor.y}`;
  laSensorZ.textContent = `LinearAccelerationSensor Z ${laSensor.z}`;
});
laSensor.start();




let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  magSensorX.textContent = `Magnetometer X ${magSensor.x}`;
  magSensorY.textContent = `Magnetometer Y ${magSensor.y}`;
  magSensorZ.textContent = `Magnetometer Z ${magSensor.z}`;
});
magSensor.start();