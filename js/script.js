 /*
 //1 задание 
console.log(`---Задание 1---`)
  let a = 1;
 while(a <= 50) {
     console.log(a);
     a++;
 }

 for(a = 35; a >= 8; a--) {
     console.log(a);
 } 

 //2 задание
 console.log(`---Задание 2---`)
a = 89;
while (a>=8) {
    console.log(a);
    a--;
}


 //3 задание 

 console.log(`---Задание 3---`)

  let sum = 0;
 for( let c = 0; c <= 100; c++) {
     sum += c;
     
 } 
 console.log(`Сумма чисел от 0 до 100 = ` + sum);

 //4 задание

 console.log(`---Задание 4---`)
 a = 5;
 sum = 0;
 for( let i = 1; i <= 5; i++) {
     sum = 0;
     for( let j = 1; j <= i; j++) {
         sum +=j;
     }
   
     console.log(`Sum ` + i + ` = ` + sum);
 }

*/
/*
 //5 задание   
 console.log(`---Задание 5---`)
 let e = 7;
 while (e<=56) {
     e++;
     if (e%2==0) 
        (console.log(e));
     
 }
 for( e = 7; e <=56; e++) {
     if (e%2==0) 
         console.log(e)
     
 }
*/


 //задание 6
/*
console.log(`---Задание 6---`)
 let d = 10;
 for(let f = 2; f<=d; f++) {
     sum=0;
     console.log(`Таблица умножения для числа  ${f}`)
     for (let j = 1; j <= d; j++) {
         sum = f * j;
         console.log(`${f} * ${j} = ${sum}`);
     }
 } 
*/

/*
 //задание 7
 console.log(`---Задание 7---`)

 for (let n = 1000, num = 1; n >50; num++) {
     n /= 2;
     if (n<50) (
         console.log(`Результат деления: ${n}`),
         console.log(`Количество итераций: ${num}`)
     ) 
 }
*/


 
//8 задание
console.log(`---Задание 8---`)

 let sum = 0;
     count = 0;
     avg = 0;

 while (true) {
     let value = prompt('Введите  число');
     if (value == "0" || value == ''){
         break;
     }else if(!+value){
         console.log('Ошибка'); 
         break
     }else{
         count++;
         sum += +value;
         console.log(`Сумма на шаге ${count} = ${sum}`)
     }
 }

/*
// avg = sum / count
// console.log(`Итог ${sum} и среднее ${avg}`);

//9 задание
 let number = '',
     max,
     min,
     counter = 0; 
     str= '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    
 for(let i=0;; i++){
     if(str[i] != ' ' && str[i] != undefined){
         number  += str[i];
     } else {
         console.log(number);
     }
     if (counter == 0){
         max = +number;
         min = +number;
/    }
     counter++;

         max = (max < +number) ? +number :max;
         min = (min > +number) ? +number :min;
             
     }
 console.log(max);
 console.log(min);


let str= '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    value = 0;
    number = '';

for(it of str){
    value++;
}

console.log(value);

for(let i = 0; i <= value+1; i++) {
    if(str[i] != ' ' && str[i] != undefined){
               number  += str[i];
            } else {
                console.log(number);
                number= '';
}
}*/