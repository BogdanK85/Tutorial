//============== TASK 1 ==============
// const categoriesList = document.querySelectorAll('.items');
// const totalItems = categoriesList.length
// console.log(`Number of Category: ${totalItems}`);

// categoriesList.forEach(category => {
//     const categoryName = category.querySelector('h2').textContent;
//     console.log(`Category: ${categoryName}`);
//     const categoryElements = category.querySelectorAll('li').length;
//     console.log(`Category: ${categoryElements}`);
// });
// const categoriesList = document.querySelector('.items');
// console.log(`Number of categories: ${categoriesList.children.length}`);
// [...categoriesList.children].forEach((category) => {
//     console.log(`Category: ${category.firstElementChild.textContent}`);
//     console.log(`Elements: ${category.lastElementChild.children.length}`);
// })

//============== TASK 2 ==============

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const dishElementsArr = ingredients.map((ingredient) => {
//     const li = document.createElement('li');
//     li.textContent = `${ingredient}`;
//     li.classList.add('item');
//     return li;
// });

// const ulElementsArr = document.querySelector('ul');
// ulElementsArr.append(...dishElementsArr)
// console.log(ulElementsArr);

//============== TASK 3 ==============
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const ulList = document.querySelector('.gallery');
// const galleryItem = ({ urt, alt }) => `<li class="gallery-element"><img class="gallery-img" src="${url}" alt="${alt}"></li>`;
// const galleryList = images.map(galleryItem).join('');
// ulList.insertAdjacentHTML('beforeend', galleryList)
// console.log(ulList);

//============== TASK 4 ==============


// let counterValue = 0;
// const buttonDecrement = document.querySelector('[data-action="decrement"]');
// const buttonIncrement = document.querySelector('[data-action"increment"]');
// const valueElem = document.querySelector('#value');

// buttonDecrement.addEventListener('click', () => {
//     counterValue -= 1;
//     valueElem.textContent = counterValue;
// });
// buttonIncrement.addEventListener('click', () => {
//     counterValue += 1;
//     valueElem.textContent = counterValue;
// });

//============== TASK 5 ==============
// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");

// textInput.addEventListener('input', handlerEvent => {
//     if (textInput.value === "") {
//         textOutput.textContent = "ANONIMUS"
//     } else {
//         textOutput.textContent = handlerEvent.currentTarget.value
//     }
// })

//============== TASK 6 ==============
// const validInput = document.querySelector('#vaildation-input');
// validInput.addEventListener('blur', inputBlurHandler)

// function inputBlurHandler(event) {
//     const sumElements = event.target.value.length
//     const maxSumElements = validInput.getAttribute("datd-length")
//     validInput.classList.remove("invalid")
//     validInput.classList.remove("valid")
//     if (sumElements > 0) {
//         if (sumElements != maxSumElements) {
//             validInput.classList.add("invalid")
//             return;
//         }
//         validInput.classList.add("valid")
//     }
// }

//============== TASK 7 ==============
// const inputControler = document.querySelector("#font-size-control");
// const spanText = document.querySelector("#text");
// inputControler.addEventListener("input", sizeRemover)

// spanText.style.fontSize = `${inputControler.value}px`;

// function sizeRemover(event) {
//     spanText.style.fontSize = `${event.target.value}px`
// }

//============== TASK 8 ==============

// const formElem = document.querySelector("login-form");

// formElem.addEventListener('submit', onForm)

// function onForm(event) {
//     event.preventDefault()
//     const userEmail = formElem.elements.email;
//     const userPassword = formElem.elements.password;

//     if (userEmail.value === "" || userPassword.value === "") {
//         alert("Заповніть усі поля!")
//         return;
//     }

//     const dataInput = {
//         email: userEmail.email,
//         password: userPassword.password
//     }

//     console.log(dataInput);
//     formElem.reset();
// }

//============== TASK 9 ==============

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const btnChangeColor = document.querySelector('.change-color')
// const spanColorTitle = document.querySelector('.color')

// btnChangeColor.addEventListener('click', onClickChangeColor)

// function onClickChangeColor(event) {
//     const diferentColor = getRandomHexColor();
//     spanColorTItle.textContent = diferentColor;
//     document.body.style.backgroundColor = diferentColor;
// }

//=================================== TASK 2 HW-8 ============
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

// ====================== HW 9 Task 1 ============
// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');

// let intervalChangeColor;

// startBtn.addEventListener('click', onStartBtnChangeColor);
// stopBtn.setAttribute('disablet', true)

// functoin onStartBtnChangeColor() {
//     startBtn.disablet = true;
//     stopBtn.disablet = false;
//     intervalChangeColor = setInterval(changeRandomBodyColor, 1000)
// }

// stopBtn.addEventListener('click', onStopBtnChangeColor);

// function onStopBtnChangeColor() {
//     stopBtn.disablet = true;
//     startBtn.disablet = false;
//     clearInterval(intervalChangeColor);
// }

// function changeRandomBodyColor() {
//     const colorOfBody = document.body;
//     const randomHexBody = getRandomHexColor();
//     colorOfBody.style.backgroundColor = randomHexBody;
// }

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// =====================================================================//
// =============================== HW 9 task 2 ============================//
// const inputElems = document.querySelector('#datetime-picker');
// const startTimerBtn = document.querySelector('[data-start]');
// const daysElems = document.querySelector('[data-days]');
// const hoursElem = document.querySelector('[data-hours]');
// const minutesElems = document.querySelector('[data-minutes]');
// const secondsElems = document.querySelector('[data-seconds]');

// startTimerBtn.disabled = true;
// let startTimer = false;

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         const validTime = selectedDates[0] > new Date();
//         if (!validDate || startTimer) {
//             startTimerBtn.disabled = true;

//             if (!validTime) {
//                 window.alert("please choose a date in the future");
//             }
//         } else {
//             startTimerBtn.disabled = false;
//             startTimerBtn.addEventListener('click', onStartTimerBtnClick)
//         }
//     }
// }

// const flatPickrElem = flatpickr(inputElems, options);

// function onStartTimerBtnClick() {
//     startTimerBtn.disabled = true;
//     startedTimer = true;
//     const choicedDates = flatPickrElem.selectedDates[0];
//     const interval = setInterval(() => {
//         const currentDate = new Date();
//         overTime = choicedDates - currentDate;

//         if (overTime > 0) {
//             showUpdateTimer(overTime)
//             startTimerBtn.removeEventListener('click', onStartTimerBtnClick)
//         } else {
//             clearInterval(interval);
//             startedTimer = false;
//         }
//     }, 1000)
// }

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

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

// function showUpdateTimer(time) {
//     const { days, hours, minutes, seconds } = convertMs(time);
//     daysElems.textContent = addLeadingZero(days);
//     hoursElem.textContent = addLeadingZero(hours);
//     minutesElems.textContent = addLeadingZero(minutes);
//     secondsElems.textContent = addLeadingZero(seconds);
// }

//======================================= HW 9 TASK 3 =====================
const formPromis = document.querySelector('.form');
formPromis.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shoudResolve = Math.random() > 0.3;
            if (shoudResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay)
    })
}

function onSubmitForm(event) {
    event.preventDefault();
    const { elements: { delay, step, amount } } = event.currentTarget;
    const currentAmount = Number(amount.value);
    const currentStep = Number(delay.value);
    let currentDelay = Number(delay.velue);

    for (let i = 1; i < currentAmount; i += 1) {
        const promise = createPromise(i, currentDelay);
        inputPromise(promise);
        currentDelay += currentStep;
    }
}

function inputPromise(promise) {
    promise.then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
    })
        .catch(({ position, delay }) => {
            console.log(`Rejected promise ${position} in ${delay}ms`);
        });
}