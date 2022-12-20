//calculator
let a = parseFloat(prompt('Enter first number'));
let b = parseFloat(prompt('Enter second number'));
let result = 0;
let action = prompt('Enter operation, for example + - / *');
switch(action){
   case '+': result = a + b;
   break;
   case '-': result = a - b;
   break;
   case '*': result = a * b;
   break;
   case '/': {
      if(b == 0){
         alert('Divide by zero is not possible');        
         result = 'not calculate';
         break;
      } else{
         result = a / b;
         break;
      }
   }    
}
console.log('Result of operation is ', result);

// even number
for(let i = 0; i <=20; i++ ){
   if(!(i & 1) == 1) console.log(i);  
}

// loop for two number
let firstNumber = parseInt(prompt('Enter first number'));
let secondNumber = parseInt(prompt('Enter second number'));
let arithmeticPp = 0;
if(firstNumber < secondNumber){
   for(firstNumber; firstNumber <=secondNumber; firstNumber++){
      arithmeticPp +=firstNumber;
   }
   console.log('Arithmetic progression is ', arithmeticPp);
} else console.log('First number has to be less then number two');

//loop decrease
let firstNumberLoop = parseInt(prompt('Enter first number'));
let secondNumberLoop = parseInt(prompt('Enter second number'));
for(secondNumberLoop; secondNumberLoop >= firstNumberLoop; secondNumberLoop--){
   console.log('i = ', secondNumberLoop);
}

// drow figure
let width = parseInt(prompt('Input width'));
let heigth = parseInt(prompt('Input heigth'));
let symbol = '';
for(let j = 0; j < width; j++){   
   symbol += '*';
}
for(let i = 0; i < heigth; i++){
   console.log(symbol);
}

// authorization
let loginWord = prompt('Input your login');
let password = prompt('Input your password');
if(loginWord == '12345' && password == '12345') {
   console.log('Вітаємо в системі');
} else console.log ('Пароль логін не вірні');

// average value
let one = parseFloat(prompt('Input first number'));
let two = parseFloat(prompt('Input second number'));
let three = parseFloat(prompt('Input third number'));
console.log('Average value is ',(one + + two + three) / 3);

// age of user
let age = parseInt(prompt('Enter your age'));
console.log(age > 18 ? true: false);

// planets of our solar system
let planet = prompt('Enter name of planet. Possible name are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune').toLowerCase();
switch(planet){
   case 'mercury': console.log('Mercury');
   break;
   case 'venus': console.log('Venus');
   break;
   case 'earth': console.log('Earth');
   break;
   case 'mars': console.log('Mars');
   break;
   case 'jupiter': console.log('Jupiter');
   break;
   case 'saturn': console.log('Saturn');
   break;
   case 'uranus': console.log('Uranus');
   break;
   case 'neptune': console.log('Neptune');
   break;
   default: console.log('There is not such planet in our solar system');
   break;
}

// my personal discount
let amount = parseInt(prompt('Enter amount'));
let discOne = 0.03;
let discTwo = 0.05;
let discThree = 0.07;
let myPersonalDiscount = 0;
if(amount > 0 && amount < 100) {
   myPersonalDiscount = amount * discOne;
   console.log('Your disconut is ', myPersonalDiscount);
} else if(amount >= 100 && amount < 3000) {
   myPersonalDiscount = amount * discTwo;
   console.log('Your disconut is ', myPersonalDiscount);
} else if(amount >= 3000 && amount < 10000) {
   myPersonalDiscount = amount * discThree;
   console.log('Your disconut is ', myPersonalDiscount);
} else {
   console.log('У вас нема знижки до сплати число яке було введене');
}

// sound of animal
let soundOfAnimal = prompt('Enter name of animal');
switch(soundOfAnimal.toLowerCase()) {
   case 'cat': console.log('Мяу. Муррррр');
   break;
   case 'dog': console.log('Гав-гав!');
   break;
   case 'cow': console.log('МУУУУ');
   break;
   default: console.log('cant identify the animal');
}

// triangle, romb


let heightTwo = parseInt(prompt('Enter height of triangle'));
let space = ' ';
let ostrix = '*';

console.log('triangle');

for(let i = 0; i < heightTwo; i++){
let outp = '';
for(let j = i; j < heightTwo - 1; j++) {   
   outp += space;   
}
for(let l= 1; l < (i *2) + 1; l++){ 
   outp += ostrix;
}
console.log(outp + ostrix); 
}

console.log('rhombus');
for(let i = 0; i < heightTwo; i++){
   let outp = '';
   for(let j = i; j < heightTwo - 1; j++) {   
      outp += space;   
   }
   for(let l= 1; l < (i *2) + 1; l++){ 
      outp += ostrix;
   }
   console.log(outp + ostrix); 
   }
   //---------------------------------
   for(let i = heightTwo; i > 1; i--){
      let outp = '';
      for(let j = heightTwo - i + 1; j > 0 ; j--) {   
         outp += space;   
      }   

      for(let l= ((i-1) *2) - 2; l > 0; l--){ 
    
         outp += ostrix;
      }
      console.log(outp + ostrix); 
      }








