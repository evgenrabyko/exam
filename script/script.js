document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = 'New html document';


//посмотреть в консоли отображение lang


let lang = document.createElement('lang');
lang.setAttribute('lang','en');
document.head.appendChild(lang);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(lang)
console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

h1.style.cssText = 'font-Family: Arvo, sans-serif; text-shadow: 0px 4px 4px #212121; font-size: 36px; text-align: center; font-Weight: 400'

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '

p.style.cssText = 'font-Family: Open Sans, sans-serif; color: #9FA3A7; text-shadow: 4px 4px 4px; text-Align: center; font-Size: 14px'

document.body.appendChild(h1);
document.body.appendChild(p);

let div1 = document.createElement('div');
document.body.appendChild(div1);

div1.style.display = 'flex'
div1.style.justifyContent = 'center'
div1.style.textAlign = 'center';
div1.style.marginTop = '55px'




//div_left

let divLeft = document.createElement('div');
div1.appendChild(divLeft);
divLeft.style.border = '1px solid #9FA3A7'
divLeft.style.width = '400px'
divLeft.style.height = '480px'

let p_div_left1 = document.createElement('p');
p_div_left1.innerHTML = 'freelancer'
divLeft.appendChild(p_div_left1);

p_div_left1.style.cssText = 'font-Family: Montserrat, sans-serif; font-Size: 12px; color: #9FA3A7; text-Transform: uppercase; font-Weight: bold'

p_div_left1.style.paddingTop = '80px'


let h2_div_left = document.createElement('h2');
h2_div_left.innerHTML = 'Initially <br>designed to '
divLeft.appendChild(h2_div_left)

h2_div_left.style.cssText = 'font-Family: Arvo, sans-serif; font-weight: 400; font-Size: 36px';

h2_div_left.style.paddingTop = '20px';




let p_div_left2 = document.createElement('p');
p_div_left2.innerHTML = 'But I must explain to you how all this <br>mistaken idea of denouncing '
divLeft.appendChild(p_div_left2);

p_div_left2.style.cssText = 'font-Family: Open Sans, sans-serif; color: #9FA3A7; line-height: 20px'

let button_div_left = document.createElement('button')
button_div_left.innerHTML = 'Start here'
divLeft.appendChild(button_div_left)

button_div_left.style.cssText = 'text-Transform: uppercase; font-size: 14px; font-Weight: bold; outline: none; cursor: pointer'

button_div_left.style.width = '150px';
button_div_left.style.height = '50px';
button_div_left.style.borderRadius = '50px';
button_div_left.style.background = '#fff';
button_div_left.style.border = '3px solid yellow';
button_div_left.style.marginTop = '45px'




//div_right

let divRight = document.createElement('div');
div1.appendChild(divRight);

divRight.style.backgroundColor="#8F75BE"

divRight.style.border = '1px solid #8F75BE'
divRight.style.width = '400px'
divRight.style.height = '480px'

let p_div_Right1 = document.createElement('p');
p_div_Right1.innerHTML = 'Studio'
divRight.appendChild(p_div_Right1);

p_div_Right1.style.cssText = 'font-Family: Montserrat, sans-serif; font-Size: 12px; color: #FFC80A; text-Transform: uppercase; font-Weight: bold'

p_div_Right1.style.paddingTop = '80px'

let h2_div_Right = document.createElement('h2');
h2_div_Right.innerHTML = 'Initially <br>designed to '
divRight.appendChild(h2_div_Right)

h2_div_Right.style.cssText = 'font-Family: Arvo, sans-serif; font-weight: 400; font-Size: 36px; color: #fff';

h2_div_Right.style.paddingTop = '20px';


let p_div_Right2 = document.createElement('p');
p_div_Right2.innerHTML = 'But I must explain to you how all this <br>mistaken idea of denouncing '
divRight.appendChild(p_div_Right2);

p_div_Right2.style.cssText = 'font-Family: Open Sans, sans-serif; color: #fff; line-height: 20px'

let button_div_Right = document.createElement('button')
button_div_Right.innerHTML = 'Start here'
divRight.appendChild(button_div_Right)

button_div_Right.style.cssText = 'text-Transform: uppercase; font-size: 14px; font-Weight: bold; color: #fff; outline: none; cursor: pointer'

button_div_Right.style.width = '150px';
button_div_Right.style.height = '50px';
button_div_Right.style.borderRadius = '50px';
button_div_Right.style.background = '#8F75BE';
button_div_Right.style.border = '3px solid yellow';
button_div_Right.style.marginTop = '45px'