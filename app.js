"use strict";

// masala 1
// function sum(x, y) {
//     console.log(x + y);
// }

// sum(-3, -6);

// masala 2

// function toSekund(minutes) {
//     console.log(60 * minutes);
// }

// toSekund(1);

// masala 3

// function nextInteger(int) {
//     console.log(int + 1);
// }
// nextInteger(-3);

// masala 4
// function uchburchkYuzi(asos, balandlik) {
//     console.log(`${(asos * balandlik) / 2}`);
// }
// uchburchkYuzi(10, 5);

// masala 5
// function ageToDays(age) {
//     console.log(`${age * 365} kun`);
// }
// ageToDays(65);

// masala 6
// function cub(int) {
//     console.log(`${int ** 3}`);
// }
// cub(10);

// masala 7
// function firstElement(arr) {
//     console.log(arr[0]);
// }
// firstElement([1, 2, 3]);
// firstElement([80, 10, 5]);
// firstElement([-500, 0, 50]);

// masala 8
// function power(x, y) {
//     console.log(`${x * y}`);
// }
// power(230, 10);
// power(110, 3);
// power(480, 20);

// masala 9
// function hourToSekund(hour) {
//     console.log(`${hour * 3600} sekund`);
// }
// hourToSekund(2);
// hourToSekund(10);
// hourToSekund(24);

// masala 10
// function uchinchiTomon(tomon1, tomon2) {
//     console.log(`${tomon1 + tomon2 - 1}`);
// }
// uchinchiTomon(8, 10);
// uchinchiTomon(5, 7);
// uchinchiTomon(9, 2);

// masala 11
// function qoldiq(son1, son2) {
//     console.log(`${son1 % son2}`);
// }
// qoldiq(1, 3);
// qoldiq(3, 4);
// qoldiq(-9, 45);
// qoldiq(5, 5);

// masala 12
// function tortburchakYuzasi(boyi, eni) {
// console.log(`${boyi * eni}`);
// }
// let tor = +prompt("To'rtburchakning bo'yi va enini uzunliklarini kiriting");
// let tor2 = +prompt("To'rtburchakning bo'yi va enini uzunliklarini kiriting");
// tortburchakYuzasi(tor, tor2);
// tortburchakYuzasi(20, 10);
// tortburchakYuzasi(2, 9);

// masala 13

// masala 14
// function kvadrat(x) {
//     console.log(`${x ** 2}`);
// }
// let kvadrat1 = +prompt("Istalgan son kiriting");
// kvadrat(kvadrat1);

// masala 15
// function noldan(raqam) {
//     if (raqam <= 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// let zero = +prompt("Son kiriting");
// noldan(zero);

// masala 16
// function ichkiBurchaklar(n) {
//     console.log(`${(n - 2) * 180}`);
// }
// let gradus = +prompt("Burchaklar soninin kiriting");
// ichkiBurchaklar(gradus);

// masala 17
// function ochkolar(x, y) {
//     console.log(`${x * 2 + y * 3}`);
// }
// let result = +prompt("Ikki ochkoli to'plar soni");
// let result1 = +prompt("Uch ochkoli to'plar soni");
// ochkolar(result, result1);

// masala 18
// function addString(a) {
//     console.log(a.concat("Edabit"));
// }
// let nameString = prompt("SO'Z kiriting");
// addString(nameString);

// masala 19
// function ikkitaSon(x, y) {
//     if (x + y < 100) {
//         console.log(true, x + y);
//     } else {
//         console.log(false, x + y);
//     }
// }
// let yigindi = +prompt("Birinchi Son kiriting");
// let yigindi2 = +prompt("Ikkinchi Son kiriting");

// ikkitaSon(yigindi, yigindi2);

// masala 20
// function printArray(a) {
//     let addArray = [];
//     for (let i = 1; i <= a; i++) {
//         addArray++;
//         console.log(Array(addArray));
//     }
// }
// printArray(2);

// masala 21
// function oyoqlar(tovuq, qoy, sigir) {
//     console.log(`${tovuq * 2 + qoy * 4 + sigir * 4}`);
// }
// oyoqlar(4, 5, 10);
// oyoqlar(1, 2, 3);
// oyoqlar(5, 2, 8);

// masala 22
// function operator(a, b) {
//     console.log(a && b);
// }
// operator(true, false);
// operator(true, true);
// operator(false, true);
// operator(false, false);

// masala 23
// function tengMi(x, y) {
//     if (x === y) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// let firstNumber = +prompt("Birinchi soni kiriting");
// let seconNumber = +prompt("Ikkinchi soni kiriting");
// tengMi(firstNumber, seconNumber);

// masala 24
// function futbolOchko(yutishlar, durrang, maglubiyatlar) {
//     console.log(`${yutishlar * 3 + durrang * 1 + maglubiyatlar * 0} ochko`);
// }
// let yutishlar = +prompt("Yutishlar sonini kiriting");
// let durranglar = +prompt("Durranglar sonini kiriting");
// let maglubiyatlar = +prompt("Maglubiyatlar sonini kiriting");
// futbolOchko(yutishlar, durranglar, maglubiyatlar);

// masala 25
// function sekundlar(soat, minut) {
//     console.log(`${soat * 3600 + minut * 60} sekund`);
// }

// let soat = +prompt("Soatni kiriting");
// let minut = +prompt("Minutni kiriting");
// sekundlar(soat, minut);

// masala 26
// function equel(fun) {
//     if (fun === 7) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// equel(4);
// equel(8);
// equel(7);

// masala 27
// function tengMi(x, y) {
//     if (x === y) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// let checkEquality = prompt("Istalagan turdagi qiymatni kiriting");
// let checkEquality2 = prompt("Istalagan turdagi qiymatni kiriting");
// tengMi(checkEquality, checkEquality2);

// masala 28
// function booleanToString(bool) {
//     console.log(bool.trim(""));
// }
// booleanToString(true);

// masala 29

// const getRectArea = (arrowFun) => {
//     return arrowFun;
// };

// let arroWFunction = prompt("Son yoki harif kiriting");
// console.log(getRectArea(arroWFunction));

// masala 30
// function frameSoni(minut, frame) {
//     console.log(minut * 60 * frame);
// }
// let minut = prompt("minut kiriting");
// let frame = prompt("frame kiriting");
// frameSoni(minut, frame);

// masala 32
// function teng10(str1, str2) {
//     if (str1 == 10 || str2 == 10 || str1 + str2 == 10) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// let num1 = +prompt("Birinchi sonni kiriting");
// let num2 = +prompt("Ikkinchi sonni kiriting");
// teng10(num1, num2);

// masala 33
// function litrMasofa(km) {
//     console.log(km * 10);
// }
// let litrmasofa = +prompt("Km ni kiriting");
// litrMasofa(litrmasofa);

// masala 34
// function big(x, y) {
//     if (x > y) {
//         console.log(x);
//     } else if (x < y) {
//         console.log(y);
//     }
// }
// let x = +prompt("Birinchi sonni kiriting");
// let y = +prompt("Ikkinchi sonni kiriting");
// big(x, y);

// masala 35
// function arr(x, y) {
//     return [x, y];
// }
// console.log(arr(1, 2));
// console.log(arr(164556, 28));
// console.log(arr("Hello", "World"));

// masala 36
// function tengStrings(str1, str2) {
//     if (str1.length == str2.length) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// let str1 = prompt("Birinchi stringni kiriting");
// let str2 = prompt("Ikkinchi stringni kiriting");
// tengStrings(str1, str2);

// masala 37
// function boshStr(str) {
//     if (String(str.length) == 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// let str = prompt("String kiriting");
// boshStr(str);

// masala 38
// function bolinsin5(son) {
//     if (son % 5 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let son = +prompt("Son kiriting");
// console.log(bolinsin5(son));

// masala 39
// function bolinsin100(son) {
//     if (son % 100 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let son = +prompt("Son kiriting");
// console.log(bolinsin100(son));

// masala 40
// function countChars(str) {
//     // Agar string bo'sh bo'lsa 0 qaytarib qo'yamiz
//     if (str === "") {
//         return 0;
//     } else {
//         let remainingChars = str.slice(1);
//         return 1 + countChars(remainingChars);
//     }
// }

// console.log(countChars("hello"));

// masala 41
// function bolinsin(x, y) {
//     if (x > !y && x % y == 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// let x = +prompt("Birinchi sonni kiriting");
// let y = +prompt("Ikkinchi sonni kiriting");
// bolinsin(x, y);

// masala 42
// function raqam(str) {
//     return +str;
// }
// console.log(raqam("4"));

// masala 43
// function tortYuzi(a, b) {
//     if (a > 0 && b > 0) {
//         console.log(a * b);
//     } else {
//         console.log(-1);
//     }
// }
// tortYuzi(3, 4);
// tortYuzi(10, 11);
// tortYuzi(-1, 5);

// masala 44
// function ismFam(ism, familiya) {
//     return ism + ", " + familiya;
// }
// console.log(ismFam("John", "Doe"));

// masala 45
// function bug(bool) {
//     if (bool == true) {
//         console.log("Sad days");
//     } else {
//         console.log("It is a good day!");
//     }
// }
// bug(true);
// bug(false);

// 46-masala
// function removeElement(array, num) {
//   for (let i = 1; i <= num; i++) {
//     array.shift();
//   }
//   console.log(array);
// }
// removeElement([1, 2, 3], 1);
// removeElement([1, 2, 3], 3);
// removeElement([1, 2, 3], 0);

// 47-masala

// let voteCount = {
//   upvotes: 0,
//   downvotes: 0,
// };

// function calculateVotes() {
//   return voteCount.upvotes - voteCount.downvotes;
// }
// voteCount.upvotes = 10;
// voteCount.downvotes = 5;
// console.log(calculateVotes());
// voteCount.upvotes = 10;
// voteCount.downvotes = 15;
// console.log(calculateVotes());

// 48-masala

// function negativeOfnumber(n) {
//   if (n > 0) {
//     console.log(-n);
//   } else {
//     console.log(n);
//   }
// }
// negativeOfnumber(4);
// negativeOfnumber(-4);
