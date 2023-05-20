// let pricePerItem = 2000;
// pricePerItem = 1500;
// let productName = "Droid";
// productName = "Repair droid";

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// const stars = 5;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 130;
//         break;
//     default:
//         console.log("немає такої кількості зірок");
// }
// console.log(price);


// const a = 10;
// if (a === 10) {
//     console.log('вірно')
// } else

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const nun = 1;
// let result = "";
// switch (nun) {
//     case 1:
//         result = "зима";
//         break;
//     case 2:
//         result = "весна";
//         break;
//     case 3:
//         result = "Літо";
//         break;
//     case 4:
//         result = "Осінь";
//         break;
//     default:
//         result: "введіть значення віл 1 до 4"
// }
// console.log(result)

//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?");
// console.log(answer);
// if (answer === `ECMAScript`) {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }


// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// const answer = prompt('введіть кількість хвилин');
// const hours = Math.floor(answer / 60);
// // console.log(hours);
// const hoursModified = String(hours).padStart(2, 0);
// console.log(hoursModified);
// const minutes = answer % 60;
// console.log(minutes);
// const minutesModified = String(hours).padStart(2, 0);
// console.log(`${ hoursModified }:${minutesModified}`);


//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 50;
// const min = 10;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) { total += i };
// }
// console.log(total);

// total = total + i;
// total += i;


//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const login = prompt('введіть логін');
// console.log(login);

// if (login === "Адмін") {
//     const password = prompt('введіть пароль');
//     if (password === "Я головний") {
//         alert("Добрий день!")
//     } else {
//         alert("Невірний пароль!");
//     }
// } else if (!login) {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }

// Виконання через SWITCH

// const login = prompt('введіть логін');
// console.log(login);

// let password;

// switch (login) {
//     case "Адмін":
//         password = password = prompt('введіть пароль');
//         break;
//     case null:
//     case "" :
//         alert("Скасовано");
//         break;
//     default:
//         alert("Я вас не знаю");
// }

// switch (password) {
//     case "Я головний":
//         alert("Добрий день");
//         break;
//     default:
//         alert("Я вас не знаю");
// }


