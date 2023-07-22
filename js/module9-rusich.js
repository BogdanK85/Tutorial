//============ ВИВЕСТИ ПОТОЧНИЙ ЧАС, МІСЯЦЬ, ДАТУ

// const date = new Date();
// console.log(date);
// console.log(date.getMonth());
// const nameOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
// console.log(nameOfMonth[date.getMonth()]);

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвег', 'П`ятниця', 'Субота'];
// console.log(arrDay[date.getDay()]);

// console.log(date.getDay());
// const currentDate = Date.now();
// console.log(currentDate);

//============================ РЕКЛАМА ЗНИКНЕ ЧЕРЕЗ =====================
// const box = document.querySelector(".js-box");
// const titleTimer = document.querySelector(".js-timer");
// let counter = 11;
// setTimeout(() => {
//     box.style.display = "block";

//     const id = setInterval(() => {
//         counter -= 1;
//         titleTimer.textContent = counter;

//         if (counter === 0) {
//             clearInterval(id);
//             titleTimer.textContent = "X";
//             titleTimer.addEventListener('click', onClick);
//         }
//     }, 1000);
// }, 5000);

// function onClick() {
//     box.style.display = "none"
// }

//========================== КАЛЕНДАР + ГОДИННИК =============
// const day = document.querySelector('.date-day');
// const date = document.querySelector('.date');
// const month = document.querySelector('.date-month');
// const year = document.querySelector('.date-year');
// const digitalClock = document.querySelector('.digital-clock');
// const arrowSecond = document.querySelector('.clock-seconds__arrow');
// const arrowMinutes = document.querySelector('.clock-minutes__arrow');
// const arrowHours = document.querySelector('.clock-hours__arrow')

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвег', 'П`ятниця', 'Субота'];
// const nameOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// setInterval(() => {
//     const currenTime = new Date();
//     const currentDay = arrDay[currenTime.getDay()];
//     const currenDate = currenTime.getDate();
//     const currentMonth = nameOfMonth[currenTime.getMonth()];
//     const currentYear = currenTime.getFullYear();
//     const currenHour = currenTime.getHours();
//     const currenMinutes = currenTime.getMinutes();
//     const currenSeconds = currenTime.getSeconds();

//     const changeSeconds = (360 / 60) * currenSeconds;
//     const changeMinutes = (360 / 60) * currenMinutes;
//     const changeHours = (360 / 12) * currenHour + (360 /12 / 60) * currenMinutes;

//     const formatTime = `${currenHour.toString().padStart(2, '0')}
//     : ${currenMinutes.toString().padStart(2, '0')}
//     : ${currenSeconds.toString().padStart(2, '0')}`
//     console.log(currenHour);

//     day.textContent = currentDay;
//     date.textContent = currenDate;
//     month.textContent = currentMonth;
//     year.textContent = currentYear;
//     digitalClock.textContent = `Поточний час: ${formatTime}`;
//     arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
//     arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
//     arrowHours.style.transform = `rotate(${changeHours}deg)`;
// }, 1000);

//console.log(currenDate);

//=========================== зворотній відлік  (ДЗ-2)===========
// const targetDate = new Date(19 / 6 / 2023);

// setInterval(() => {
//     const currentDate = new Date();

//     console.log(convertMs(targetDate - currentDate));
// }, 1000)

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


//================================= LOTTO  ==============================
//============== method 1 ===============
// const start = document.querySelector('.js-start');
// const container = document.querySelector('.js-container');


// start.addEventListener('click', onStart);

// function onStart() {
//     const result = [];
//     [...container.children].forEach((box) => box.textContent = "");
//     [...container.children].forEach((box, i) => {
//         createPromise(i)
//             .then((smile) => {
//                 box.textContent = smile;
//                 result.push('1');
//             })
//             .catch((smile) => (box.textContent = smile))
//             .finally(() => {
//                 setTimeout(() => {
//                     if (i === container.children.length - 1) {
//                         if (!result.length || result / length === 3) {
//                             alert('Winner')
//                         } else {
//                             alert('Lost money')
//                         }
//                     }
//                 }, 700);
//             });
//     });
// }

// function createPromise(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if (random > 0.7) {
//                 resolve('🤑');
//             } else {
//                 reject('🥵');
//             }
//         }, 1000 * delay)
//     });
// }

//===================== method 2  allSettled  =========================
// const start = document.querySelector('.js-start');
// const container = document.querySelector('.js-container');

// start.addEventListener('click', onStart);

// function onStart() {
//     let counter = 0;

//     [...container.children].forEach((box) => (box.textContent = ""));
    
//     const promises = [...container.children].map((_, i) => createPromise(i));
    
//     Promise.allSettled(promises).then((items) => {
//             items.forEach((item, i) => {
//                 setTimeout(() => {
//                     if (item.status === "fulfilled") {
//                         counter += 1;
//                     }
//                     container.children[i].textContent = item.value || item.reason;

//                     if (container.children.length - 1 === i) {
//                         setTimeout(() => {
//                             if (counter === container.children.length || !counter) {
//                                 alert("WINNER");
//                             } else {
//                                 alert("Lost money");
//                             }
//                         }, 500);
//                     }
//                 }, i * 1000);
//             });
//         });
// }

// function createPromise() {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();
//         if (random > 0.7) {
//             resolve('🤑');
//         } else {
//             reject('🥵');
//         }
//     });
// }