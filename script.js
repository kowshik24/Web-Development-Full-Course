// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcious",
    value: Number(prompt("Degree Celcious: ")),
  };

  //console.log(measurement);
  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  //console.log(typeof measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};

console.log(measureKelvin());
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecust = function (arr) {
  let str = "...";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }

  console.log(str);
};

printForecust(data1);
printForecust(data2);
