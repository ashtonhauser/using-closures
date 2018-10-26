var countdownGenerator = function (x) {
  return function downByOne() {
    if (x > 0) {
      console.log("T-minus " + x + "...");
    }
    if (x === 0) {
      console.log("Blast Off!");
    }
    if (x < 0) {
      console.log("Rockets already gone, bub!");
    }
    x--;
  };
};

var countdown = countdownGenerator(9);
countdown();
countdown();
countdown(); // T-minus 3...
countdown();
countdown(); // T-minus 3...
countdown(); // console.log(countdown);
countdown(); // console.log(countdown);
countdown(); // console.log(countdown);
countdown(); // console.log(countdown);
countdown();
countdown();  // console.log(countdown);// Rockets already gone, bub!
