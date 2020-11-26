//ДЗ_6

//1 задание
console.log(`---Задание 1---`);

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/gi,'!'));

//2 задание
console.log(`---Задание 2---`);

let date = '2025-12-31';
    b = date.replace(/[-]/g, '/');
    c = b.replace(/(2025)(12)(31)/, '$3/$2/$1') 
console.log(b.replace(/(2025)(\/)(12)(\/)(31)/, '$5/$3/$1'))

//3 задание
console.log(`---Задание 3---`);

let str_3 = 'Я учу Javascript!';
console.log('String: ')
console.log(str_3.substring(2,16))
console.log('Substr: ')
console.log(str_3.substr(2,14))
console.log('Slice: ')
console.log(str_3.slice(2,16));

//4 задание

console.log(`---Задание 4---`);

let arr_4 = [4,2,5,19,13,0,10];
    sum = 0;
    for (i=0;i<arr_4.length; i++) {
        sum += Math.pow(arr_4[i], 3);
    }
    let c_3 = Math.sqrt(sum)
console.log(`Сумма кубов массива равна ${sum}`);
console.log(`Квадратный корень равен ${c_3}`);

//5 задание 
console.log(`---Задание 5---`);

function value(a,b) {
   let c = a - b;
    return Math.abs(c);
}
console.log(value(6,1))

//6 задание
console.log(`---Задание 6---`);

let fulldate = new Date();
function date_6(n) {
    if ( n > 0 && n < 10){
        return '0' + n;
    }else return n
}
console.log(`${date_6(fulldate.getHours())}:${date_6(fulldate.getMinutes())}:${date_6(fulldate.getSeconds())}
${date_6(fulldate.getDate())}.${fulldate.getMonth() +1}.${fulldate.getFullYear()}`);

//7 задание
console.log(`---Задание 7---`);
function check(number) {
    if(/^[+]\d{3}\s?-?\(?\d{2}\)?\s?-?\d{3}\s?-?\d{2}\s?-?\d{2}$/.test(number)) {
        return true
    } else {
        return false
    }
}
console.log(check('+375299998457'))