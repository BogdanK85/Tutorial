// ====== РОЗРАХУНОК МАСИ ТІЛА ======
// /**
//  * Розраховуємо індекс маси тіла людини
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */
// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// ======= НОМЕРИ ТЕЛЕФОНІВ ====
/**
 * 
//  * @param {Object} obj 
//  */
// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '380974565566,380976541236,380974585274,380984179628'
// });

//=========== ГЛИБОКА ДЕСТРУКТУРИЗАЦІЯ =====
// function getBotReport({ companyName, repairBots, defenceBots }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150,
//     defenceBots: 50
// }));


//===========  ДЕСТРУКТУРИЗАЦІЯ =====
// ФУНКЦІЯ ВИВОДИТЬ РЕПОРТ ПРО КІЛЬКІСТЬ ТОВАРІВ НА СКЛАДІ БУДБ-ЯКОЇ КОМПАНІЇ
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} item in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50
//         }
//     }));

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         }
//     })
// );

// ========= SPREAD ========
// ФУНКЦІЯ ПОВЕРТАЄ НОВИЙ ОБ'ЄКТ КОНТАКТУ З ДОДАНИМИ ВЛАСТИВОСТЯМИ
// ID ТА CREATiD, А ТАКОЖ LIST ЗІ ЗНАЧЕНЯМ "DEFAULT", ЯКЩО В partialContact НЕМАЄ ТАКОЇ ВЛАСТИВОСТІ.
// function createContact(partialContact) {
//     return {
//         id: generateID(),
//         createAt: new Date(),
//         list: "default",
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Manho',
//         email: 'mango@mail.com',
//         list: 'friends',
//     })
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@mail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// ========== ОПЕРАЦІЯ -- ...REST ========
// Напиши функція transformUsername(user) так, щоб вона
// повертала новий об'єкт із властивістю fullName, замість firstName та lastname.

// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
// }
// }
// function transformUsername(user) {
//   const { firstName, lastName, ...otherParams } = user;
//   console.log('Other Params: ', otherParams);
//   const fullName = `${firstName} ${lastName}`;
//
//   return {
//     fullName,
//     ...otherParams
//   }
// }

// console.assertlog(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendsCount: 40,
//     }),
// );

// console.assertlog(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@mail.com',
//         friendsCount: 45,
//     }),
// );

// ====== # Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach ======
// ## Example 1 - Коллбек функції
//
// Напишіть наступні функції:
//
//   - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
// коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
// властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
// консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну
// вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product)
//     console.log(product);
// }

// function logProduct(obj) {
// console.log(`Product ${obj.name}`);
// }
// function logTotalPrice({price, quantity}) {
// console.log(`Total price ${price * quantity}`);
// }
// createProduct({
//     name: 'apple',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: 'lemon',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);


// ## Example 2 - Коллбек функції
//
// Додайте в об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
//   `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// другий та третій - коллбеки.
//
//   Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSuccess в іншому випадку.
//
//   Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// або дорівнює нулю, і onSuccess в іншому випадку.
//
// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`)
//             return;
//         } else if (this.balance < amount) {
//             onError(`Not enough in the account`);
//             return;
//         }

//         this.balance -= amount;
//         onSuccess(`Transaction complete ${amount}, balance ${this.balance}`);
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount <= 0) {
//             onError(`Nice try 😂`);
//             return;
//         }

//         this.balance += amount;
//         onSuccess(`Added ${amount}, balance ${this.balance}`);
//     }
// };

// function handleSuccess(message) {
//     console.log(`✅Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


// ## Example 3 - Коллбек функції
//
// Напишіть функцію `each(array, callback)`, яка першим параметром очікує
// масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.
// function each(numbersArr, callback) {
//   let newArr = [];
//   for (const number of numbersArr) {
//     newArr.push(callback(number));
//   }
//   return newArr;
// }
// function sqrtNumber(numberValue) {
//   return Math.sqrt(numberValue);
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (number) {
//     return number * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (numberValue) {
//     return Math.sqrt(numberValue);
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], sqrtNumber)
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// ## Example 4 - Стрілочні функції
//
// Виконайте рефакторинг коду першої задачі за допомогою стрілочних функцій.
//

// const createProduct = (partialProduct, callback) => {
//   const newProductObj = {
//     id: Date.now(),
//     ...product
//   }

//   callback(newProductObj);
// }
// const createProduct = (partialProduct, callback) => callback({
//     id: Date.now(),
//     ...partialProduct
//   });

// const logProduct = (product) => {
//     console.log(product);
// }
// const logProduct = product => console.log(product.name);

// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }

// const logTotalPrice = product => console.log(product.price * product.quantity);
// const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);

// ## Example 5 - Стрілочні функції
//
// Виконайте рефакторинг коду задачі 2 за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`)
//             return;
//         } else if (this.balance < amount) {
//             onError(`Not enough in the account`);
//             return;
//         }

//         this.balance -= amount;
//         onSuccess(`Transaction complete ${amount}, balance ${this.balance}`);
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount <= 0) {
//             onError(`Nice try 😂`);
//             return;
//         }

//         this.balance += amount;
//         onSuccess(`Added ${amount}, balance ${this.balance}`);
//     }
// };

// const handleSuccess = message => console.log(`✅Success! ${message}`);

// const handleError = message => console.log(`❌Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ## Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду задачі 3 за допомогою стрілочних функцій.
// //

// function each(numbersArr, callback) {
//   let newArr = [];
//   for (const number of numbersArr) {
//     newArr.push(callback(number));
//   }
//   return newArr;
// }
// function sqrtNumber(numberValue) {
//   return Math.sqrt(numberValue);
// }

// console.log(each([64, 49, 36, 25, 16], number => number * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], numberValue => Math.sqrt(numberValue);));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));


// ## Example 7 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${1 + 1} - ${items[i]}`);
//     }
// }

// const logItems = arr => arr.forEach((item, index) => console.log(`${index + 1} - ${item}`));

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## Example 8 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// function calculateAverage(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i += 1) {
//         total += args[i];
//     }
//     returntotal / args.length;
// }

// const calculateAverage = (...arr) => {
//     let total = 0;
//     arr.forEach(value => total += value)

//     return total / arr.length
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(17, 43, 2, 8, 36));




// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//
//   nameList.forEach((name, index) => {
//     console.log(`${name}: ${phoneList[index]}`);
//   })
// }
//
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
//



//===========  МЕТОДИ ПЕРЕБОРУ ========
// ========= МЕТОД   SORT  =======
// МУТУЄ ВИХІДНИЙ МАСИВ

// const sortByAscendingAmount = cars => cars.sort((a, b) => a.price - b.price); ===== мутує!

//=============  SORT у зростаючому порядку =========

// const sortByAscendingAmount = cars => [...cars].sort(({ price: a }, { price: b }) => a - b);
// console.log(sortByAscendingAmount(cars));


//=============  SORT у спадаючому порядку =========

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);
// console.log(sortByDescendingPrice(cars));


//=============  SORT у алфавітному порядку та у зворотному порядку в залежності від параметра order =========

// const sortByModel = (cars, order) => {
//     if (order === 'asc') {
//         return [...cars].sort((a, b) =>a.model.localeCompare(b.model))
//     } else {
//         return [...cars].sort((a, b) => b.model.localeCompare(a.model))
//     }
// }

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// const sortByModel = (cars, order) => [...cars].sort(({ model: a }, { model: b }) => order === 'asc' ? a.localeCompare(b) : b.localeCompare(a));
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

//============ REDUCE =========

// const getTotalAmount = cars => cars.reduce((acc, { amount }) => acc + amount, 0);
// console.log(getTotalAmount(cars));

//============ ланцюжки методів =========
// функція повертає масив моделей авто, але тільки тих, які зараз на розпродажі

// const getModelOnSale = cars => cars.filter(({ onSale }) => onSale).map(({ model }) => model);
// const getModelOnSale = cars => cars.filter(({ onSale }) => onSale).map(({ marke, model }) => `${marke} ${model}`);

// console.log(getModelOnSale(cars));

//============ ланцюжки методів =========

// Нехай функція повертає масив авто на розпродажі, відсортованих за зростанням ціни

// const getSortedCarsOnSale = cars => cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);
// console.log(getSortedCarsOnSale(cars));


