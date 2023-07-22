// =============== ЗАДАЧА ===========
// ПОТРІБНО створити функцію яка буде формувати чергу в магазіні.
// 1. перший параметр масив, кількість елементів - це кількість покупців, значення елементу масиву це час який покупець витратить на касі.\
// 2. параметр це кількість кас
// повертає обєкт де ключ це номер каси, -- значення це час черги на касі.AbortController

// function func(arr, kase) {
//     const obj = {};

//     for (let i = 1; i <= kase; i += 1) {
//         obj[i] = 0;  // ключ - номер каси
//     }
//     console.log(obj);
//     arr.forEach(bayer => {
//         const values = Object.values(obj);
//         const minValue = Math.min(...values);
//         const currentKase = values.indexOf(minValue) + 1;
//         obj[currentKase] += bayer;
//     });

//     return obj;
// }

// console.log(func([12, 3, 5, 6, 2,15, 7], 4));


//=================================================================
