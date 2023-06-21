// function squareOfNumber(number){
//   let square = (number * number);
//   return square; 
// }

// console.log(squareOfNumber(0.6));

// readPermissions = 1;
// writePermissions = 2;
// executePermissions = 4;
// let myPermissions = 0;

// myPermissions = readPermissions & writePermissions & executePermissions;

// console.log(myPermissions);

function checkTime(number){
  if (number >= 6 && number <= 12){
    console.log('Good Morning')

  } else if (number > 12 && number <= 24){
    console.log('Good Afternoon')
  } else console.log("Try again later")
  
} 

console.log(checkTime(12));