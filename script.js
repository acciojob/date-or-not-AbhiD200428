var isDate = function (input) {
  const date = new Date(value);
  return date instanceof Date && !isNaN(date.valueOf());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
