do {
  operation = prompt('What operation are you going to do: + - * /?')
} while(operation !=="+" && operation !=="-" && operation !=="*" && operation !=="/" );

do {
  numOperands = parseInt(prompt('How many operands are you going to use?').replaceAll(" ",""));
  if(numOperands <= 1 || numOperands > 7){
    alert(`Try again.Your operand has to be more than 1 and less than 7.`); 
  }
} while(numOperands <= 1 || numOperands >= 7 || numOperands === isNaN)

output = 0;
for(i = 1; i <= numOperands; i++) {
  do {
    operand = parseInt(prompt(`Enter your operand ${i}`).replaceAll(" ",""));
  } while(isNaN(operand))
if(i === 1) output = operand;
switch(operation) {
  case "+":
    output += operand;
    break;
  case "-":
    output = i === 1 ? operand : output - operand;
    break;
  case "*":
    if(i === 1) output =1; 
    output *= operand;
    break;
  case "/":
    output = i === 1 ? operand : output / operand;
    break;
  }
}
alert(`You get ${output}`); 

/* Саш, а ось такий варіант частинки може бути чи забагато всього? 

operation = false;
while (!operation) {
 question = prompt('What operation are you going to do?');
 if(question === "+" || question === "-" || question === "*" || question === "/") {
operation = true;
} else {
  alert ('Try again,for example: + - * /');
 }
} 

number = false;
while(!number){
  numOperands = parseInt(prompt('How many operands are you going to use?’));
  if(numOperands >= 2 && numOperands <= 7){
    number = true;
  } else if(numOperands <= 2){
    alert ('Try again.Your operand has to be more than 1'); 
  } else if(numOperands > 7){
    alert ('Try again.Your operand has to be less than 7');
  } else {
    alert ('Sorry! Try again.');
  }
}
*/



  