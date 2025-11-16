const cordinatX = document.querySelector('.cordinatX')
const cordinatY = document.querySelector('.cordinatY')
const cordinatZ = document.querySelector('.cordinatZ')
const magSensorError = document.querySelector('.magSensorError')

// let laSensor = new LinearAccelerationSensor({ frequency: 60 });

// laSensor.addEventListener("reading", (e) => {
//     console.log("Магнитное поле вдоль оси X " + laSensor.x);
//     console.log("Магнитное поле вдоль оси Y " + laSensor.y);
//     console.log("Магнитное поле вдоль оси Z " + laSensor.z);

//     magSensorError.textContent = laSensor

//     cordinatX.textContent = `X: ${laSensor.x}`
//     cordinatY.textContent = `Y: ${laSensor.y}`
//     cordinatZ.textContent = `Z: ${laSensor.z}`
// });

// laSensor.addEventListener("error", (event) => {
//   console.log(event.error.name, event.error.message);
//   magSensorError.textContent = event.error
// });

// laSensor.start();




// let gravitySensor = new GravitySensor({ frequency: 60 });

// gravitySensor.addEventListener("reading", (e) => {
//     console.log(`Gravity along the X-axis ${gravitySensor.x}`);
//     console.log(`Gravity along the Y-axis ${gravitySensor.y}`);
//     console.log(`Gravity along the Z-axis ${gravitySensor.z}`);

//     cordinatX.textContent = `X: ${gravitySensor.x}`
//     cordinatY.textContent = `Y: ${gravitySensor.y}`
//     cordinatZ.textContent = `Z: ${gravitySensor.z}`
// });

// gravitySensor.addEventListener("error", (event) => {
//   console.log(event.error.name, event.error.message);
//   magSensorError.textContent = event.error
// });

// gravitySensor.start();

// function init() {
//     console.log(`Gravity along the X-axis ${gravitySensor.x}`);
//     console.log(`Gravity along the Y-axis ${gravitySensor.y}`);
//     console.log(`Gravity along the Z-axis ${gravitySensor.z}`);

//     cordinatX.textContent = `X: ${gravitySensor.x}`
//     cordinatY.textContent = `Y: ${gravitySensor.y}`
//     cordinatZ.textContent = `Z: ${gravitySensor.z}`
// }



const acl = new Accelerometer({ frequency: 60 });

acl.addEventListener("reading", () => {
    console.log(`Acceleration along the X-axis ${acl.x}`);
    console.log(`Acceleration along the Y-axis ${acl.y}`);
    console.log(`Acceleration along the Z-axis ${acl.z}`);

    cordinatX.textContent = `X: ${acl.x}`
    cordinatY.textContent = `Y: ${acl.y}`
    cordinatZ.textContent = `Z: ${acl.z}`
});

function init() {
    console.log(`Gravity along the X-axis ${acl.x}`);
    console.log(`Gravity along the Y-axis ${acl.y}`);
    console.log(`Gravity along the Z-axis ${acl.z}`);

    cordinatX.textContent = `X: ${acl.x}`
    cordinatY.textContent = `Y: ${acl.y}`
    cordinatZ.textContent = `Z: ${acl.z}`
}

acl.start();



let laSensor = new LinearAccelerationSensor({ frequency: 60 });

laSensor.addEventListener("reading", (e) => {
  console.log(`Linear acceleration along the X-axis ${laSensor.x}`);
  console.log(`Linear acceleration along the Y-axis ${laSensor.y}`);
  console.log(`Linear acceleration along the Z-axis ${laSensor.z}`);
});
laSensor.start();





// let alpha = null
// let beta = null
// let gamma = null

// window.addEventListener("deviceorientation", function(event) {
//     alpha = event.alpha; // Поворот по оси Z
//     beta = event.beta;   // Поворот по оси X
//     gamma = event.gamma; // Поворот по оси Y
//     console.log(`Альфа: ${alpha}, Бета: ${beta}, Гамма: ${gamma}`);

//     cordinatX.textContent = alpha
//     cordinatY.textContent = beta
//     cordinatZ.textContent = gamma
// }, true);

// function init() {
//     alert(`Альфа: ${alpha}, Бета: ${beta}, Гамма: ${gamma}`)
// }