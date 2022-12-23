//Пример 1
let num = 5;
if(num === 5){
    console.log(true)
}else{
    console.log(false)
}

//Пример 2
let number = 100;
if(number > 0 && number <= 10){
    console.log('1 подъезд')
}else if(number > 10 && number <=20){
    console.log('2 подъезд')
}else if(number > 20 && number <=30){
    console.log('3 подъезд')
}else{
    console.log('нет такой квартиры')
}

//Пример 3
let i = 10;
while(i <= 10){
    console.log(i);
    i++;
}

//Пример 4
let arr = [1,2,3];
for(let i = 0; i < arr.length; i++){
console.log(arr[i]);
}

//Пример 5
let result = 1;
let arr2 = [2,3,4,5];
for(let i = 0; i < arr2.length; i++){
    result = result * arr2[i];
}
console.log(result);


//Задание 1
console.log('Задание 1');
console.log();
let minute = 44;
if(minute >= 0 && minute <= 14){
    console.log('1 четверть')
}else if(minute >= 14 && minute <= 29){
    console.log('2 четверть')
}else if(minute >= 29 && minute <= 44){
    console.log('3 четверть')
}else{
    console.log('4 четверть')
}


//Задание 2
console.log('Задание 2');
console.log();
let lang = 'eng';
let array = [];
if(lang === 'ru'){
    array.push('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс')
}else{
    array.push('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn')
}
console.log(array)

//Задание 3
let count = 0;
number = prompt('Введите число')
for(let i = 0; i < number.length; i++){
    count++;
}
if(number >= 0){
    alert('Число ' + number + ' положительное и состоит из ' + count + '-х знаков')
}else{
    count--;
    alert('Число ' + number + ' отрицательное и состоит из ' + count + '-х знаков')
}

//Задание 4
console.log('Задание 4');
console.log();
let red = 'no';
let yellow = 'yes';
if(yellow === 'no' && red === 'no'){
    console.log('Горит зелёный свет, можно переходить')
}else{
    console.log('Дождитесь зелёного сигнала светофора')
};

//Задание 5
console.log('Задание 5');
console.log();
for(let i = 1; i <= 12; i++){
    console.log(i);
}

//Задание 6
console.log('Задание 6');
console.log();
for(let i = 5; i <= 13; i++){
    console.log(i);
}

//Задание 7
console.log('Задание 7');
console.log();
for(let i = 0; i <= 16; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};


//Задание 8
let result3 = 0;
let arr3 = [2,5,8,3,6];
for(let i = 0; i < arr3.length; i++){
    result3 = result3 + arr3[i];
}
console.log('Задание 8');
console.log();
console.log(result3);
