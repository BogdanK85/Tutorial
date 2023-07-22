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

// +++++++Перевір++++++++++++++

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

// switch (password) {
//     case "Я головний":
//         alert("Добрий день");
//         break;
//     default:
//         alert("Я вас не знаю");
// }
// }


// =================== МАСИВИ ================
// Вступ
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// console.log(friends[0]);
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// friends[1] = 'Banan';
// friends[3] = 'Pomidor'
// console.table(friends);

 
// ====== Складні типи =====

// const a = [1, 2, 3];
// const a = b;

// console.log(a, a);
// console.log(b, b);
// a[0] = 500;
// console.log('a', a);
// console.log('b', b);
// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

// ====== for . ... .. for of ===========

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
// }

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += ' Wow';
// }
// console.table(friends);

// ==== for of======
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//     console.log(friend);
// }


// =======ПРИКЛАДИ=======

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i];
//     // total = total + cart[i];
// }
// console.log('Total:', total);

// ==== for of=====

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total);

// ======Добавити 20% до зарплати========

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.2);
// }
// console.log(cart);

// Напиши скрипт який підраховує суму всіх парних чисел===
// 1. змінна тотал
// 3, перебрати масив
// 3, на кожній ітераціїї перевірити на парність
// 4, якща парне дадаємо до тоталу

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         console.log('Парне!!!');
//         total += numbers[i];
//     }
// }
// console.log('Total:', total);

//  ==== через for of =======
     
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 === 0) {
//         console.log(`${number} - Парне!!!`);
//         total += number;
//     }
// }
// console.log('Total:', total);

// ====== continue ======
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 !== 0) {
//         console.log('Цю ітерацію потрібно пропустити', number);
//         continue;
//     }
//       console.log(`${number} - Парне!!!`);
//         total += number;
// }
// console.log('Total:', total);

// ===== ВИБРАТИ НАЙМЕНШЕ ЧИСЛО ===========
// const numbers = [51, 18, 13, 24, 6, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);

// ===== Написати скрипт, який обєднує всі елементи масива в один рядок====

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

// console.log(string);
// ===  Метод --- JOIN ====
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const string = friends.join(',-$$$ ');
// console.log(string);

// Напиши скрипт який замінює регістр кожного символу на протилежний ==
// === Класичний метод ==
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('Ця буква в нижньому регістрі!!! -', letter);

//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('Ця буква в верхньому регістрі!!! - ', letter);
//         invertedString += letter.toLowerCase();
//     }
// }

// тернарний спосіб ==

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('invertedString: ', invertedString);

//===SLUG в URL ===

// const title = 'Top 10 benefits of React framework';

// const normalisedTitle = title.toLowerCase();
// console.log(normalisedTitle);

// const words = normalisedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// === Все обєднати у метод ВИКЛИКИ + всі 3 методи в один ==
    
// const title = 'Top 10 benefits of React framework';
// // const normalisedTitle = title.toLowerCase();
// // const words = normalisedTitle.split(' ');
// // const slug = words.join('-');
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

//========== напиши скрипт який рахує суму двох масивів ===
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// ===== Метод Splise() ====
// == Видаленння обєкта==== метод IndexOf
// const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
// const cardToRemove = 'Картка-3';
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// ===== Метод Splise() ====
//===== Додавання обєкта по індексу Incert
// const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
// const cardToInsert = 'Картка-6';
// cards.splise(index, 0, cardToInsert);
// console.table(cards);

// ===== Метод Splise() ====
//===== ОНОВЛЕННЯ - Заміна обєкта по індексу
// const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
// const cardToUpdate = Картка-3';
// cards.splice(3, 1, 555);
// console.table(cards);

// const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
// const cardToUpdate = Картка-3';
// const index = cards.indexOf(cardToUpdate);
// cards.splise(index, 1, 'Оновлена картка - 4');
// console.table(cards);


// ============ ПОШУК ЛОГІНУ ============
// const logins = ['kiwi123', 'mango123', 'poly123', 'orange123'];
// const finfLogin = function (allLogins, loginToFind) {
//     let message = `User ${loginToFind} not found`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `User ${loginToFind} is find`;

//             return messgage;
//         }
//     }
//     return message;
// }

// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'kiwi123'));
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'orange123'));

// ============ СКОРОЧЕННЯ ==============
// const logins = ['kiwi123', 'mango123', 'poly123', 'orange123'];
// const finfLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return = `User ${loginToFind} is find`;
//         }
//     }

//     return `User ${loginToFind} not found`;
// }
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'kiwi123'));
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'orange123'));


// ====== ЗАПИС ЧЕРЕЗ ТЕРНАРНИЙ ВАРІАНТ ===
// const logins = ['kiwi123', 'mango123', 'poly123', 'orange123'];
// const finfLogin = function (allLogins, loginToFind) {
//     const message = allLogins.includes(loginToFind)
//     ? `User ${loginToFind} is find`
//     : `User ${loginToFind} not found`;

//     return message;
// }
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'kiwi123'));
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'orange123'));

// ======== СКОРОЧЕНИЙ ТЕРНАРНИЙ ЗАПИС ======

// const logins = ['kiwi123', 'mango123', 'poly123', 'orange123'];
// const finfLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//     ? `User ${loginToFind} is find`
//     : `User ${loginToFind} not found`;
// }
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'kiwi123'));
// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'orange123'));

// =============ФУНКЦІЯ ЯКА ДОДАЄ РІЗНУ КІЛЬКІСТЬ ЧИСЕЛ == через АРГУМЕНТ

// const add = function (...args) {
//     console.localStorage(args);
//     let total = 0;

//     for (const arg of args) {
//         total += AbstractRange;
//     }

//     return total;
// };

// console.localStorage(add(1, 2, 3));
// console.localStorage(add(1, 2, 3, 4, 5, 6));

// ======= ФУНКЦІЯ -- ФІЛЬТР -- ВИБРАЄ ОДИНАКОВІ ЕЛЕМЕНТИ ====

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);

//             console.log(`${element} є всюди`);
//         }
//     }
//     return uniqueElements;
// }

// console.log(filterNumbers([1, 2, 3, 4, 15], 6, 2, 10, 15, 25));
// console.log(filterNumbers([1, 36, 43, 4, 55], 36, 50, 55, 75));
// console.log(filterNumbers([1, 255, 32, 43, 157, 65], 101, 157, 255));

// ============== ТЕМА ОБЄКТИ =======
// ========= ЗАДАЧА 3 ========

// ======== УМОВА ============

// const stones = [{
//         name: 'Смарагд Діамант Сапфір Щебінь',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Щебінь',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let result = 0;
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             result = stone.price * stone.quantity;
//             break;
//         }
          
//         console.log(stone.name);
//     }
//     return result;
// }
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
          
//         console.log(stone.name);
//     }
// }


// ============ БАНК - ОНЛАЙН ========
/*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
// Object.freeze(Transaction)
// const account = {
//     // Поточний баланс рахунку
//     balance: 0,
//     // Історія транзакцій
//     transactions: [],
    
//     /*
// //    * Метод створює та повертає об'єкт транзакції.
// //    * Приймає суму та тип транзакції.
// //    */
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     /*
// //    * Метод, що відповідає за додавання суми до балансу.
// //    * Приймає суму транзакції.
// //    * Викликає createTransaction для створення об'єкта транзакції
// //    * після чого додає його до історії транзакцій
// //    */
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount,
//             Transaction.DEPOSIT)
//         // console.log(item);
//         this.balance += amount
//         this.transactions.push(item)
//     },

//     withdraw(amount) {
//         if (amount < this.balance || amount <= 0) {
//             return 'недостатньо коштів'
//         }
//     }

//     /*
//     //    * Метод, що відповідає за зняття суми з балансу.
//     //    * Приймає суму транзакції.
//     //    * Викликає createTransaction для створення об'єкта транзакції
//     //    * після чого додає його до історії транзакцій.
//     //    *
//     //    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//     //    * про те, що зняття такої суми не можливе, недостатньо коштів.
//     //    */

// };
// account.deposit(1);
// account.deposit(1151);
// account.deposit(123);
// console.log(account);




// Реалізуйте result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;
// // const result = [...a, ...c, ...b];
// const result = a.concat(c, ...b)
// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// // Реалізуйте result
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// // const newArr = a.slise(0, 3)
// // const result = [...a.splise(0, 3), ...a.splise(0, 3), ...a.splise(-2) ];

// const result = [...a];
// result.splice(3, 3 ...result.splice(3, 0));
// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]




// Реалізуйте функцію, яка розгладить масив:


// const arr = [1, 2, [3, 4], [5, 6], 7];

// function foo(param) {

//       const newArr = [];
// for (const element of param) {
//     if (Array.isArray(element)) {
//         newArr.push(...element)
//     } else {
//         newArr.push(element)
//     }
//     }
//     return newArr;
//   }


// // console.log(newArr);


// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]


// Напиши функцію, яка повертає останній символ стрічки
// function getLastCharacter(text) {
//     return text[text.length - 1];
// }

// console.log(getLastCharacter("321433530")); // 0




// Реалізуй функцію, яка приймає тип String або Number і повертає масив з протилежним типом даних:

// function convert(...param) {
//     const newArray = [];
//     for (let i = 0; i < param.length; i += 1) {
//         if (typeof param[i] === "string") {
//             newArray.push(Number(param[i]));
//         } else {
//             newArray.push(String(param[i]));
//         }
//     }
//     return newArray;
// }

// console.log(convert('1', 2, 3, '4')); // [1, '2', '3', 4]

//============== ПРАКТИКА З МЕНТОРОМ 17,06, 23 ==========
// function letMeSeeYourName(callback) {
//     const userName = promt(`введіть ваше ім'я`)
//     if (!userName) {
//        return console.log(`Ви не ввели ім'я`);
//     }
//     callback(userName);
// }

// function greed(name) {
//     console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greed)


// ..===========
// const models = vihecals.map(vihecal => vihecal.model)
// console.log(models);

// const models = vihecals.map({model} => model)

//===================
// const avalableModels = (cars, amount) => cars.filter(car => car.amount > amount).map(car => car.model)
// console.log(avalableModels)
// avalableModels(vihecles, 10) .


// function playerSaveCurrentTimeInStorage(data) {
//     const currentTime = data.seconds;
//         localStorage.setItem('videoplayer-current-time', currentTime)
// }
// const throttleSaveCurrentTime = throttle(playerSaveCurrentTimeInStorage, 1000);
// const savedCurrentTime = localStorage.getItem('videoplayer-current-time')

// player.setCurrentTime(savedCurrentTime)
// player.on('timeupdate', throttleSaveCurrentTime)

// const inframe = document.querySelector('inframe');
// const player = new Player(inframe);

// function playerSaveCurrentTime(data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', currentTime);
// }

// const throttleSaveCurrentTime = throttle(playerSaveCurrentTime, 1000)
// const savedCurrentTime = localStorage.getItem('videoplayer-current-time')

// player.setCurrentTime(savedCurrentTime);
// player.on('timeupdate', throttleSaveCurrentTime);

