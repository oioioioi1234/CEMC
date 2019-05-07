var apple3 = parseInt(prompt('Three pointers scored by Team Apple')) * 3;
var apple2 = parseInt(prompt('Two pointers scored by Team Apple')) * 2;
var apple1 = parseInt(prompt('Free throws scored by Team Apple'));
var banana3 = parseInt(prompt('Three pointers scored by Team Banana')) * 3;
var banana2 = parseInt(prompt('Two pointers scored by Team Banana')) * 2;
var banana1 = parseInt(prompt('Free throws scored by Team Banana'));

var apple = apple3 + apple2 + apple1;
var banana = banana3 + banana2 + banana1;

if (apple > banana) {
  console.log('A');
} if else (banana > apple) {
  console.log('B');
} else {
  console.log('T');
}


