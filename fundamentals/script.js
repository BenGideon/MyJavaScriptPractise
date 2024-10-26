// /* Write your code below. Good luck! 🙂 */

// //CHALLENGE #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     const ans = this.mass / (this.height * this.height);
//     this.bmi = ans;
//     return ans;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     const ans = this.mass / (this.height * this.height);
//     this.bmi = ans;
//     return ans;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// // Challenge #4
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
// const tips = new Array();
// const totals = new Array();

// for (let i = 0; i < bills.length; i++) {
//   tips[i] = calcTip(bills[i]);
//   totals[i] = bills[i] + tips[i];
// }

// console.log(tips, totals);

// const calcAverage = function (bills) {
//   let sum = 0;

//   for (let i = 0; i < bills.length; i++) {
//     sum = sum + bills[i];
//   }

//   return sum / bills.length;
// };

// console.log(calcAverage(bills));

// Challenge 0

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example:
// [17, 21, 23] will print "... 17 degrees C in 1 days ... 21 degrees C in 2 days ... 23 degrees C in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Test Data 1 : [17, 21, 23]
// Test Data 2 : [12, 5, -5, 0, 4]

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degrees C in ${i + 1} days ... `;
  }
  console.log("..." + str);
};

printForecast(data1);
printForecast(data2);
