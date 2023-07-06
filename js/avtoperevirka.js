//====== task 1 ======   join
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   const normalisedTitle = title.toLowerCase();
//   const words = normalisedTitle.split(" ");
//   const slug = words.join('-');
  
//   return slug;
// }

//====== task 2 ======   slice
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

//====== task 3 ======  concat ==
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);


//====== task 4 ======
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
// const words = message.split(" ");
//   const wordScore = words.length;
//   const total = wordScore * pricePerWord;
//   return total;
// }

//====== task 5 ======
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
// let newArr = firstArray.concat(secondArray);

//   if (newArr.length > maxLength) {
//     return newArr.slice(0, maxLength);
//   } return newArr;
//   }

//====== task 6 ======  сума чисел функція через FOR
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
//function calculateTotal(number) {
// let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
// return total;
  
//   // Change code above this line
// }

//====== task 7 ======

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

//const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//====== task  ======8 ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.
//function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }

//====== task  ====== ЗАДАЧА 9: ПОШУК НАЙДОВШОГО СЛОВА
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.
// const string = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// function findLongestWord(string) {
//     let longestWord = "";
//     const newString = string.split(" ");
//     for (let i = 0; i < newString.length; i += 1) {
//         const thisWord = newString[i];
//         if (thisWord.length > newString.length) {
//             longestWord = thisWord;
//         }
//     }
 
//     return longestWord;

// }
// console.table(string);

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

//====== task  ====== ЗАДАЧА 9: push

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1)
//         numbers.push(i);
//     return numbers;
// }

//====== task  ====== ЗАДАЧА 10: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел
// (параметр numbers) і повертає новий масив, в якому будуть тільки ті
// елементи масиву numbers, які більші за значення параметра value(число).

// function filterArray(number, value) {
//     let arr = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             arr.push(numbers[i]);
//         }
//     }
//     return arr;
// }

//====== task  ====== ЗАДАЧА 11: Метод includes
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     const hasFruit = fruits.includes(fruit);
//     if (hasFruit) {
//         return true;
//     }
//     return false;
// }

//====== task  ====== ЗАДАЧА 12:  СПІЛЬНІ ЕЛЕМЕНТИ
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//     const uniqueElements = [];
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             uniqueElements.push(element);
//         }
//     }
//     return uniqueElements;
// }

//====== task  ====== ЗАДАЧА 13:  FOR  === FOR OF ===
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// === BEFORE =====   FOR

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     return total;
// }

// ===== AFTER ======= for of
// function culculateTotalPrice(order) {
//     let total = 0;
//     for (part of order) {
//         total += part;
//     }
    
//     return total;
// }

//====== task  ====== ЗАДАЧА 14: === ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

//  Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.
// ======= ДО===============

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];


//     for (let i = 0; i < numbers.length; i += 1) {
//         const number = numbers[i];

//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }

// =============== ПІСЛЯ ===============

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     for (const number of numbers) {
//         if (value < number) {
//             filteredNumbers.push(number);
//         }
//     }
    
//     return filteredNumbers;
// }

//====== task  ====== ЗАДАЧА 15: === ПАРНІ ЧИСЛА
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(atart, end) {
//     let result = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

//====== task  ====== ЗАДАЧА 16: === переривання циклу з брейк ===

// Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок за його тілом.

// У прикладі шукаємо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

//====== task  ====== ЗАДАЧА 17: === переривання циклу і функції не з брейк, а з ретурн ===

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }


//====== task  ====== ЗАДАЧА 32: ФУНКЦІЯ INCLUDES()
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
// =================
// function includes(array, value) {
//     for (let part of array) {
//         if (part === value) {
//             return true;
//         }
//     }
//     return false;
// }
// ===================
// function includes(array, valuy) {
//     for (let element of array) {
//         if (element === value) {
//             return true;
//         }
//     }
//     return false;
// }
// const person = {
//   firstName: "John",
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName)

// ======= ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//     let propCount = 0;

//     const keys = Object.keys(object)
//     for (key of keys) {
//         propCount += 1;
//     }
//     return propCount;
// }

// / ======= ЗАДАЧА. ПІДРАХУНОК
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.values(apartment);
// const values = Object.values(apartment);

// for (key of keys) {
//     console.log(keys[values])
// }

// ============ ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ =======
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const keys = Object.keys(salaries);
//     const values = Object.values(salaries);
//     for (const salary of Object.values(salaries)) {
//         totalSalary += salary;
//     }
//     return totalSalary;
// }

// ============ ЗАДАЧА:  =======
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ==== ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrise(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             console.log(product.name)
//             return product.price;
//         } else {
//             console.log('null');
//         }
//     }
//     return null;
// }

// ============= ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scaner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let propValues = [];
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             propValues.push(product([propName]));
//         }
//     } return propValues;
// }

// ===== ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;

//     for (i = 0; i < products.length; i += 1) {
//         const product = products[i]
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity
//             return totalPrice;
//         }
//     }
//     return 0;
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;

//     for (const product of products) {
//         if (product.name = productName) {
//             totalPrice = product.price * product.quantity
//         }
        
//     } return totalPrice;
// }

// ==== задача TOTAL    ОПЕРАЦІЯ ...REST   31 =========
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.
// function add(...args) {
//     const totalArgs = 0;
//     for (let i = 0; i < args.length; i += 1) {
//         totalArgs += args[i];
//     }
//     return totalArgs;
// }


// ==== задача TOTAL    ОПЕРАЦІЯ ...REST  32 =========
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(someArgs, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > someArgs) {
//             total += arg;
//         }
//     } return total;
// }

// ==== задача ЗАДАЧА. МАСИВ ЗБІГІВ    ОПЕРАЦІЯ ...REST  33 =========
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// function findMatches(firstArg, ...secondArg) {
//     const matches = [];

//     for (const number of firstArgs) {
//         if (secondArg.includes(number)) {
//             matches.push(number)
//         }
//     } return matches;
// }

// ==== задача ЗАДАЧА. додавання методів  34 =========
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//     books: ["The last kingdom", "The guardians of dream"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding $ {bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updatingBook(oldName, newName) {
//         retirn`Updating old book ${oldBook} to new book ${newBook}`;
//     }
// };

// ==== задача ЗАДАЧА.    35 =========
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

//   for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//           console.log(this.books);
//       }
// }
    
// const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName)
//  console.log(this.books);

// for (const book of this.books) {
//     if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName)
//         console.log(this.books);
//     }
// }

// this.books.splice(this.books.indexOf(oldName), 1, newName);

// ==== задача ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ 37 =========.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],

//     getPotions(potions) {
//         return this.potions
//     }
// }

// ==== задача ЗАДАЧА. ДОДАЄМО НОВЕ ЗІЛЛЯ  38 =========.
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         this.potions.push(potionName)
//     },
// };

// ========== ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ 39 ===============
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         this.potions.splice(this.potions.indexOf(potionName), 1)
//     },
// };

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         for (potion of potions) {
//             if (potion === potionName) {
//                 this.potions.splice(this.potion.indexOf(potion), 1)
//             }
//         }
//     },
// };



// ========== ЗАДАЧА: ОНОВЛЮЄМО  ЗІЛЛЯ 40 ===============
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//       for (const potion of potions) {
//           if (potion === oldName) {
//               this.potions.splice(this.potion.indexOf(potion), 1, newName);
//         }
//     }
//   },
// };

// ========== ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР 41 ===============
//  Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(const potion of this.potions){
//       if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`; }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const {potions}=this;
//     for(let i=0; i<potions.length; i+=1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//       for (let i = 0; i < this.potions.length; i+=1) {
//         const potion = this.potions[i];
//         if(potion.name === oldName) {
//           potion.name = newName;
//         }
//       }
//     },
// };


// ==============  МОДУЛЬ 4 =============
// ========== ЗАВДАННЯ 4 =========
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (!this.pizzas.includes(pizzaName)) {
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         } return onSuccess(pizzaName)
//     }
// }
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ========== ЗАВДАННЯ 5 =========
//     Before ========
//  for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

 
//   orderedItems.forEach(function(item, idx) {
//     totalPrice += item;
//   })

//   // Change code above this line
//   return totalPrice;
// }
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     //   // Change code below this line
//     orderedItems.forEach(function (item, index) {
//         totalPrice += orderedItems[index]
//     });
//     return totalPrice;
// }

// ========== ЗАВДАННЯ  6  =========
//    Before ========
 // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

//   function filterArray(numbers, value) {
//     const filteredNumbers = [];
      
//       numbers.forEach(function (number) {
//           if (number > value) {
//              filterArray.push(number)
//          }
//      })
//         return filteredNumbers;
// }

// ========== ЗАВДАННЯ   7   ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ  =========
//    Before ========
 // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//     firstArray.forEach(function(elementArr) {
//         if (secondArray.includes(elementArr)) {
//           commonElements.push(elementArr)
//       }
//   })

//   return commonElements;
//   // Change code above this line
// }

// // ========== ЗАВДАННЯ   10   ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ  =========
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach( item => totalPrice += item);

//   return totalPrice;
// }

// ========== ЗАВДАННЯ   10 Чиста функція (pure function) ==========
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
  
// for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }

// function changeEven(numbers, value) {
//     const newArr = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             number = number + value
//         } newArr.push(number)
//     });
//     return newArr;
// }

// ========== ЗАВДАННЯ   14 =======
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);

// ========== ЗАВДАННЯ   15   MAP   =======
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// // ========== ЗАВДАННЯ   16   flatMap   =======
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// ========== ЗАВДАННЯ   17   MAP   =======
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// const getUserNames = users => {
//     return users.map(user => user.name)
// };

// ========== ЗАВДАННЯ   18   MAP   =======
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = users => {
//     return users.map(user => user.email)
// };

// ========== ЗАВДАННЯ   19   filter   =======
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив
// парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних.
// Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNunbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// ========== ЗАВДАННЯ   20   filter   =======
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index);

// ========== ЗАВДАННЯ   21   filter   =======
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ========== ЗАВДАННЯ   22   filter   =======
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// ========== ЗАВДАННЯ   23   filter   =======
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age < maxAge)

// ========== ЗАВДАННЯ   24   filter   =======

// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// ========== ЗАВДАННЯ   25   filter   =======

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     const someFriends = allFriendf.filter((friend, idx, arr) => arr.indexOf(friend) === idx);
    
//     return someFriends;
// }

// ========== ЗАВДАННЯ   26   filter   =======

// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.
// const getActiveUsers = (users) => users.filter(user => user.isActive);

// ============= АБО ========
// const getActiveUsers = (users) => {
//     return users.filter({isActive} => isActive)};

// ========== ЗАВДАННЯ   27   filter   =======
// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.
// const getInactiveUsers = (users) => users.filter(user => !user.isActive);
// const getInactiveUsers = (users) => {
//     return users.filter({ isActive } => !isActive);
// }

// ========== ЗАВДАННЯ   29   find   =======
// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.tiile === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// ========== ЗАВДАННЯ   30   every   =======

//Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// const getUserWithEmail = (user, email) => users.find(user => user.email === email);

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2!== 0);


// ========== ЗАВДАННЯ   31   every   =======

// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
// const isEveryUserActive = (users) => users.every(user => user.isActive);

// ========== ЗАВДАННЯ   32   some   =======
//Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// ========== ЗАВДАННЯ   33   some   =======
//Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.
// const isAnyUserActive = (users) => users.some(user => user.isActive);

// ========== ЗАВДАННЯ   34   reduce   =======
//Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((prevTime, times) => {
//     return prevTime + times;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// ========== ЗАВДАННЯ   35   reduce   =======
//
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((gameTotal, play) => {
//     return gameTotal + (play.playtime / play.gamesPlayed);
// }, 0);

// ========== ЗАВДАННЯ   36   reduce   =======
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.

// const calculateTotalBalance = (users) => users.reduce((total, { balance }) {
//     return total + balance;
// }, 0)

// const calculateTotalBalance = (users) => users.reduce((total, user), => {
//     return total + user.balance;
// } 0)

// ========== ЗАВДАННЯ   37   reduce   =======
//Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// const getTotalFriendCount = users => users.reduce((total, user) => {
//     return total + user.friend.length
// }, 0)

// ========== ЗАВДАННЯ   38   sort   =======

//Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// ========== ЗАВДАННЯ   39   sort   =======

//Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням.Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDatesa].sort((a, b) => b - a);

// ========== ЗАВДАННЯ   40   sort   =======
//Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ========== ЗАВДАННЯ   41   sort   =======
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating -b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// ========== ЗАВДАННЯ   42   sort   =======
//Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу(властивість balance).
//const sortByAscendingBalance = users => [...users].sort((a, b) => a.balance - b.balance);


// ========== ЗАВДАННЯ   43   sort   =======
//Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

//const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length)

// ========== ЗАВДАННЯ   44   sort   =======
//Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));

// ========== ЗАВДАННЯ   45   ланцюжки методів   =======
//Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter((book, idx, arr) => book.rating >= MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((a, b) => a.localeCompare(b));

// ========== ЗАВДАННЯ   46   ланцюжки методів   =======
//Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

//const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)

// ========== ЗАВДАННЯ   47   ланцюжки методів   =======
//Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// const getSortedFriends = users => {
//     return [...users].flatMap(user => user.friends)
//         .filter((person, idx, arr) => arr.indexOf(person) === idx)
//         .sort((a, b) => a.localeCompare(b))
// }

// ========== ЗАВДАННЯ   48   ланцюжки методів   =======
//Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.
// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.balance).reduce((acc, person) => acc += person, 0)
// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.balance).reduce((acc, person) => acc += person, 0)


