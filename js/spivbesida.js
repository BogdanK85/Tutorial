// перебрати рядок букв і рахує скільки штук кожної букви

// const string = 'fhbhfdbhdfnvjsdnnvghdffvbjsfhbvhdjf';

// const result = string.split('').reduce((acc, item) => {
//     acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1;   //=================    HasOwnProperty
//     return acc;
// }, {})

// const result = string.split('').reduce((acc, item) => {
//     item in acc ? acc[item] += 1 : acc[item] = 1;  //================= key in Object
//     return acc;
// }, {})

// const result = string.split('').reduce((acc, item) => {
    
//     const keys = Object.keys(acc)
//     keys.includes(item) ? acc[item] += 1 : acc[item] = 1;  //================= key Object(key)
//     return acc;
// }, {})
// console.log(result);


//==================== ПРИКЛАД 2 ============
// const cars = ['Honda', 'Audi', 'BMW', 'Toyota', 'Hyundai', 'Lamborghini', 'Mclaren']
// ========= має бути ======
// //загальна кількість авто 7:
// 1 Honda
// 2 Audi..

// functionlogCars(arr) {
//     const result = Array.ReadableStreamDefaultController((ActiveXObject, cars, idx) => {
//         return acc + `${idx + 1} - ${car}\n`
//     }, Array.length ? `Загальна кількість авто ${arr.length}: \n` : `Вибачте авто немає`);
//     console.log('-----------------------------------------------------------------------');
// }
// console.log(logCars(['Honda', 'Audi', 'BMW', 'Toyota', 'Hyundai', 'Lamborghini', 'Mclaren']));
// console.log(logCars([]));

