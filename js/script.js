/*
//задание 1 
console.log(`---Задание 1---`)

let arr = [1, 2, 3, 4, 5];
for (i = 0; i <=arr.length; i++) {
    console.log([i])
}
*/
/*
//задание 2
console.log(`---Задание 2---`)

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0 && arr2[i] < -3 && arr2[i] > -10);
    console.log(arr2[i]);
}
*/
/*
//задание 3
console.log(`---Задание 3---`)

let st = 23,
    result = 0,
    arr3 = [];
for (st = 23; st >=23 && st <=57; st++) {
    arr3.push(st);
    result += st;
}    console.log(arr3);
console.log(`Сумма элементов массива = ${result}`)

console.log(`---Задание 3.1---`)
while(st >=23 && st <=57) {
    st++
    arr3.push(st)
} console.log(arr3);
*/


/*
//задание 4
console.log(`---Задание 4---`);

let arr4 = ['10','20','30','50','235','3000'];
for (i = 0; i < arr4.length; i++){
    let z = arr4[i];
    if (z[0]==1 || z[0]==2 || z[0]==5){
    console.log(`Нужные значения ${z}`);
} else {
    console.log('Нет нужных значений');
}
*/
/*
//задание 5 
console.log(`---Задание 5---`);

let arr5 = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
for (i=0; i<arr5.length; i++) {
    let f = arr5[i];
    if(f == 'СБ' || f == 'ВС'){
        document.write(`<strong>${f}</strong>`);
    }else {
        console.log(f);
    }
}

*/
/*
//задание 6 
console.log(`---Задание 6---`);
let arr6 = [`12442`, `454764`,`654657`,`474`,`447`,`457`];
arr6.push('hello');
console.log(arr6.length);
console.log(arr6)
*/



/*
//задание 7 
console.log(`---Задание 7---`);
let arr7 = [];
while (true) {
    let a = prompt('Введите несколько чисел');
    arr7.push(a);
    if (a == '' || a == isNaN || a == '  '){
        break;
    }
}console.log(arr7);
console.log(arr7.sort());
*/


/*
//задание 8 
console.log(`---Задание 8---`);

let arr8 = [12, false, `Текст`, 4, 2, -5, 0];
arr8.reverse;
console.log(arr8);
*/
/*
//задание 9 
console.log(`---Задание 9---`);

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let summ = 0;
for(i=0;;i++) {
    if (i > arr9.length){
        break;
    }
    if (arr9[i] == undefined) {
        summ +=1;
    }
} console.log(`Количество = ` + summ);
console.log(arr9);
*/

/*
// задание 11

let height = 10;

for(let i= 1; i <= height; i++){
        for(let k = 1; k <= height - i; k++){
            document.write('&ensp;');
        }
        for(let j = 1; j <= 2*i-1; j++){
        document.write('*');
    }   document.write('<br>');
}
*/