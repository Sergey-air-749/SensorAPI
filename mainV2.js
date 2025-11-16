window.addEventListener("deviceorientation", function(event) {
  let alpha = event.alpha; // Поворот по оси Z
  let beta = event.beta;   // Поворот по оси X
  let gamma = event.gamma; // Поворот по оси Y
  console.log(`Альфа: ${alpha}, Бета: ${beta}, Гамма: ${gamma}`);
}, true);