
//  1 === отримати 2 цифрових значення і вивести результат математичнихх операцій в console.===
let numberOne = prompt('Input first number');
let numberTwo = prompt('Input second number');
let result = numberOne + numberTwo;
console.log('Summ is', result);
result = numberOne - numberTwo;
console.log('Diff is', result);
result = numberOne * numberTwo;
console.log('Multiplication is', result);
result = numberOne / numberTwo;
console.log('Divide is', result);

//2  === oтримати 2 текстових значення і вивсести за допомогою document .write  "User name: FirstVar  User last name SecondVar " ( firstVar, secondVar значення які отримали ) 
let firstVar = prompt('Input user name');
let secondVar = prompt('Input user lastname');
document.write('"User name: ', firstVar, '23  User last name: ', secondVar, '"');

// 3  === отримати текстове  значення і виконати перевіку: якщо  uk повернути true, якщо ru  повернути false
let langSelect = prompt('Enter ru or uk');
if(langSelect =='uk'){
   document.write('true');
   console.log('true');
} else if(langSelect == 'ru') {
   document.write('false');
   console.log('false');
} else{
   document.write('You not enter ru either uk');
   console.log('You not enter ru either uk');
}

// 4  === oтримати 2 числових значення якщо перше більше 20 а друге більше 30 то вивстести true, якщо одна з умов не відповідає вивсести false. Переменные уже объявлены, переиспользую их:

numberOne = prompt('Input first number');
numberTwo = prompt('Input second number');
if( numberOne > 20  && numberTwo > 30){
   console.log('Result is true');
} else{
   console.log('Result is false');
}




 


