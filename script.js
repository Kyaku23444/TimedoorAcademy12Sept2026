function square(side) {
  area = side * side;
  circum = 4 * side;
  document.write(`Area: ${area}`);
  document.write(`Circum: ${circum}`);
}

function rectangle(x, y) {
  area = x * y;
  circum = 2 * (x + y);
  document.write(`Area: ${area}`);
  document.write(`Circum: ${circum}`);
}
