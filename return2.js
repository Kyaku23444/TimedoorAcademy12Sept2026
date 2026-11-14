function cmMeterConversion(cm) {
    let m = cm * 0.01;
    return `${cm} cm is ${m} m`;
}

console.log(cmMeterConversion(100));

function cmKilometerConversion(cm) {
    let km = cm * 0.00001;
    return `${cm} cm is ${km} km`;
}

console.log(cmKilometerConversion(100000));

function cmMilimeterConversion(cm) {
    let mm = cm * 10;
    return `${cm} cm is ${mm} mm`;
}

console.log(cmMilimeterConversion(10));
