//ДЗ_5 


/*
//1 задание 

function result_1 (a,b,c){
    let res_1 = (a-b)/c;
    console.log(res);
} 
result_1(3,1,3)
    

//2 задание

function result_2 (numb1){
    let res_2 = Math.cbrt(numb1);
    let res_2_1 = Math.sqrt(res_2);
    console.log(res_2 , res_2_1);
        
}
result_2(64);

// 3 задание

function result(max, min) {
    if (max > min ||  max == min) {
        console.log(max)        
    } else {console.log(`Первое число должно быть больше`)}
}

result(8,8);


//4 задание под ?


//5 задание
function isEven(f) {
    if (f%2==0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(7));

//6 задание

let array_6 = [],
    array_6_1 = [1,2,3,4,5,6,7,8,9,10];
function pushing() {
    for (i=0; i<array_6_1.length; i++) {
        if (isEven(array_6_1[i]) == true){
            array_6.push(array_6_1[i]);
        }
    }
    return array_6
}
console.log(pushing());

//7 задача 

function pyram(h) {
    for (i=1; i<=h;i++){
        for(k=1;k<=i;k++) {
            document.write(arguments.length > 1 ? arguments[1] : i);

        }document.write('<br>');
    }
}
pyram(55, '$')


//8 задание

function house(h) {
    for(i=0; i<=h; i++){
        for (let j=1; j <= h-i; j++){
            document.write(`&ensp;`);
        }
        for(k=1; k<=i*2-1;k++) {
            document.write('*');
        } document.write('<br>');
    }

    for(i=h; i>=0; i--){
         for (let j=1; j <= h-i; j++){
             document.write(`&ensp;`);
        }
        for(let k=1; k<=i*2-1;k++) {
        document.write('*');
    } document.write('<br>');
}
} 
house(+prompt('Введите количество рядов'))


//9 задание

function fibonachi(n) {
    if(n==0 || n==1){
        return n;
    } else {
        return fibonachi(n-1)+fibonachi(n-2);
    }
}
console.log(fibonachi(10));

function createArray() {
    let arr = [];
    for(let i = 0;; i++){
        if(fibonachi(i) < 1000) {
            arr.push(fibonachi(i));
        }
        else return arr;
        
    }
}

console.log(createArray());

//10 задание



function getNumber(number){
    number = String(number);
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        sum += +number [i];
    } 
    if(sum > 9) return getNumber(sum);
    else {
        return sum;
    }


}
console.log(getNumber(14));


//11 задание

let arr = [1,2,5,6, false];

function printArray(array){
    if(array.length >= 1){
        document.write(array.shift());
        return printArray(array);
    }
}

printArray(arr);


//12 задание

function info(firstname, lastname, middlename, number) {
    let str= `* Домашняя работа: "Функции" *`,
    str1 = `* Выполнил: студент гр. ${number} *`,
    str2 = `* ${lastname} ${firstname} ${middlename} *`,
    arr = [str,str1,str2],
    max = 0;
    star = '*'

    for(let i = 0; i < arr.length; i++){
        
        max = (max < arr[i].length) ? arr[i].length : max;

    }
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < max; j++){
            if(arr[i].length < max) {
                arr[i] += " "
            
        }else if (arr[i].length == max){
            arr[i] += '*'
        }
    }
}
}

for(let i = 0; i <= max; i++){
    star += '*'
}
info('Иванов' , 'Иван' , 'Иванович' , 'FE106');

console.log(star)
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
*/