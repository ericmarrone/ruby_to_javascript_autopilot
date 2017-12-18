var apples = 14;
console.log(apples);

console.log("I have " + apples + " apples.");

var materials = ['wood', 'metal', 'stone']

var words = {
  elephant: "The world's largest land mammal.",
  school: 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'
};

var num = 16;
if (num > 16) {
  console.log(num + ' is greather than 10');
}else if (num === 10) {
  console.log(num + ' is exactly 10.');
}else {
  console.log(num + ' must be less than 10');
}

for (var i = 1; i <= 10; i++) {
  console.log('Doing the same thing over and over.');
}

var base = 5;

for (var i = 1; i <= 20; i++) {
  console.log(i + base);
}

var total = 0

for (var i = 1; i <= 100; i++) {
  var total = total + i;
}

console.log(total);

for (var height = 3; height <= 15; height++) {
  if (height > 9) {
    console.log('You can get on the rollercoaster!');
  }else
    console.log('You are too short to ride the rollercaster.');
}

var containers = ['purse', 'wallet', 'backback']

for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

var helloWorld = console.log('Hello world!')
helloWorld

function add(firstNum, secondNum) {
  return firstNum + secondNum
}

var amount = add(5, 7)
console.log(amount);
