//1 задание

let name = prompt("Ваше имя")
    age = prompt("Возраст")
    city = prompt("Город проживания")
    phone = prompt("Телефон")
    email = prompt("Эл почта")
    company =prompt("Компания")
    
    // prompt(name)
    // prompt(age)
    // prompt(city)
    // prompt(phone)
    // prompt(email)
    // prompt(company)

    result = console.log("Меня зовут " + prompt( name) + ". " + "Мне " + prompt( age) + " лет. " + 
    "Я проживаю в городе " + prompt( city) + " и работаю в компании " + prompt( company) + "."    
    + " Мои контактные данные: " + prompt( phone ) + " " + prompt( email ) + ".");

//2 задание
// let bdate = 2020;
//     bdate1 = bdate - age;

// result = document.write(prompt(name) + 'родился в' + prompt(bdate1) + 'году.');

//3 задание

let str='123456'

    if ((str[0] + str[1] + str[2]) == (str[3] + str[4] + str[5])){
        console.log ('Да')
        } else {
            console.log('Нет')
        }

//4 задание 
let a_ = -5

   if (a_ > 0) {
       console.log('Верно')       
   } else if (a_ < 0){
       console.log('Неверно')
   } 

//5 задание 

let a = 10
    b = 8
    result1 = a + b
    result2 = a - b
    result3 = a * b
    result4 = a / b
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)

    if (a + b > 1){
        console.log(result1 ** 2)
    } else if (a + b < 1){
        console.log ('Неверное значение')
    }

//6 задание

   if (a > 2 && a < 11) {
    console.log('Верно')
   } else {
    console.log('Неверно')
   }

   if (b >= 6 && b < 14) {
    console.log('Верно')
   } else {
    console.log('Неверно')
   }
                    
    
//7 задание 

let n = prompt("Введите число");

switch(true){
    case  n >= 0 && n <= 15:
        console.log('1 четверть');
    break;
    case n >= 16 && n <= 30:
        console.log('2 четверть');
    break;
    case n >= 31 && n <= 45:
        console.log('3 четверть');
    break;
    case n >= 46 && n <= 59:
        console.log('4 четверть');
    break;
    case n >= 60:
        console.log('В часе 60 минут. Введите число от 0 до 59');
    break ;
    default:
        console.log("В часе меньше минут");   
}

//8 задание 

let day = prompt('Введите число')

    if (day > 1 && day <= 10){
        console.log ('1 декада');
    } else if (day > 11 && day <= 20) {
        console.log('2 декада');
    } else if (day > 20 && day <= 31) {
        console.log('3 декада');
    } else if (day < 0 && day > 31) {
        console.log('В месяце 31 день');
    }
    
//9 задание 

let 

