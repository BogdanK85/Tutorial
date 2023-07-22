//================== =   createElement ===============

// const colors = [
//     {
//         label: "red",
//         color: "#FF0000",
//     },
//     {
//         label: "green",
//         color: "#00FF00",
//     },
//     {
//         label: "blue",
//         color: "#0000FF",
//     },
//     {
//         label: "yellow",
//         color: "#FFFF00",
//     },

// ];

// const btnElementArr = colors.map((buttonData) => {
//     const btnElement = document.createElement('button');
//     btnElement.textContent = buttonData.label;
//     btnElement.style.color = buttonData.color;
//     const containerElement = document.createElement('div');
//     containerElement.append(btnElement);
//     containerElement.style.marginBottom = '10px';
//     return containerElement;
// })
// console.log(btnElementArr);
// document.body.append(...btnElementArr)

//=============== СТВОРИТИ СПИСОК ТЕХНОЛОГІЙ D in JS=========
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const itemsArr = technologies.map((technology) => {
//   return `<li>${technology}</li>`
// })
// console.log(itemsArr);
// const listElement = `<ul>${itemsArr.join('')}</ul>`;
// document.body.insertAdjacentHTML('beforeend', listElement)


//================== 3 =============
// const article = {
//     title: 'Michael Legrand',
//     image: {
//         src: 'https://google.com',
//         desc: 'mG'
//     },
//     intro: 'MG',
//     facts: {
//         label: 'here Mg',
//         items: [
//             'he 1',
//             'he 2',
//             'he 3',
//             'he 4',
//             'he 5',
//             'he 6',
//             'he 7',
//         ]

//     },
//     quote: {
//         text: 'he 12v32fg3g',
//         author: ' Michael Legrand'
//     }
// }
// const titleElement = `<h1 id="title">${article.title}</h1>`;

// const imgElement = `
// <figure id="img-div">
// <img id="image" src="${article.image.src}"
// alt="${article.image.desc}">
// <figcaption id="img-captiom>${article.image.desc}</figcaption>
// </figure>
// `;
// const introElement = `<div id="intro">
// <p>${article.intro}</p>
// </div>`;

// const listTitleElement = `<p>${article.facts.label}</u></p>`;

// const factsArr = article.facts.items.map((fact) => {
//     return `<li>${fact}</li>`
// });

// const quoteElement = `<blockquote id="quote">
// <p>${article.quote.text}</p>
// <cite>${article.quote.author}</cite>
// </blockquote>`;

// const mainElement = `
// <main id="main">
// ${titleElement}
// ${imgElement}
// <article id="tribute-info">
// ${introElement}
// ${listTitleElement}
// <ul>
// ${factsArr.join('')}
// </ul>
// ${quoteElement}
// </article>
// </main>
// `;

// document.body.insertAdjacentHTML('afterbegin', mainElement)
//===================================================================

// const title = document.querySelector(".js-title");
// const title1 = document.querySelector(".js-title1");
// const title2 = document.querySelector(".js-title2");
// title.addEventListener("click", onClick);
// title1.addEventListener("click", onClick);
// title2.addEventListener("click", onClick);

// const maxLength = 13;
// const totalLength = maxLength + 3;

// function onClick(event) {
//     const title = event.currentTarget;
//     const str = title.textContent.slice(0, maxLength);

//     if (title.textContent.length > totalLength) {
//         const remainder = title.textContent.slice(maxLength);
//         title.setAttribute("data-title", remainder);
//         title.textContent = str + "...";
//     } else {
//         const remainder = title.dataset.title;
//         if (remainder) {
//             title.textContent = str + remainder;
//             //getAttribute
//         }
//     }
// }

// const userName = document.querySelector('.js-input');

// userName.addEventListener('input', onInput);

// function onInput(evt) {
//     console.dir(evt.currentTarget.value);
// }

// const userName = document.querySelector('.js-input');

// userName.addEventListener('input', onInput);
// userName.addEventListener('change', onInput);

// function onInput(evt) {
//     console.dir(evt.currentTarget.value);
// }

// const formEl = document.querySelector('.js-form')
// formEl.addEventListener('submit', onSubmit)

// function onSubmit(evt) {
//     evt.preventDefault();

//     const { userAge, userEmail, userName } = evt.currentTarget.elements;
//     // console.dir(userName.value);
//     // console.dir(userEmail.value);
//     // console.dir(userAge.value);

//     const data = {
//         name: userName.value,
//         email: userEmail.value,
//         age: userAge.value,
//     };

//     console.log(data);
// }


// const container = document.querySelector('.js-container')
// document.addEventListener("keydown", onKey)

// function onKey(evt) {
//     console.log(evt.code);
//     if (evt.code === 'Escape' || evt.code === 'Enter') {
//         container.classList.toggle('tog')
//     }
// }


// const cars = [
//     {
//         id: 1,
//         car: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://media.istockphoto.com/id/1274643657/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BD%D1%8C-%D1%82%D0%B5%D1%81%D1%82-%D0%B4%D1%80%D0%B0%D0%B9%D0%B2%D1%83-volvo-xc60.jpg?s=612x612&w=0&k=20&c=sq0RT3DM80hPggaDoM4HKU1VhEkXSW0Bq-sq-YsRQnE="
//     },
//     {
//         id: 2,
//         car: "Honda",
//         type: "Accord",
//         price: 8000,
//         img: "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Honda%20Accord%20Touring%20Red%20Front%20View.jpg"
//     },
//     {
//         id: 3,
//         car: "Audi",
//         type: "A7",
//         price: 9000,
//         img: "https://media.ed.edmunds-media.com/audi/a7/2021/oem/2021_audi_a7_sedan_prestige-55-tfsi-e-quattro_rq_oem_3_815.jpg"
//     },
//     {
//         id: 4,
//         car: "Bmw",
//         type: "X7",
//         price: 10000,
//         img: "https://cdn4.riastatic.com/photosnew/auto/photo/bmw_x7__493607429f.jpg"
//     },
//     {
//         id: 5,
//         car: "Hyunday",
//         type: "Tucson",
//         price: 8000,
//         img: "https://infocity.tech/wp-content/uploads/2021/12/Hyundai-Tucson-XRT-2022.jpg"
//     },
// ];
// // ======  1  ЗАРЕНДИРИТИ АВТО ======
// const list = document.querySelector('.js-list');

// const markup = cars.map(({ id, car, type, price, img }) => `
//     <li data-id="${id}">
//         <img src="${img}" alt="${car}" width="200">
//         <h2>${car}</h2>
//         <h3>${type}</h3>
//         <p>${price}</p>
//     </li>`
// ).join('');

// list.insertAdjacentHTML("beforeend", markup)
// console.log(markup);


//===== ПОШУК АВТО =====
// const list = document.querySelector('.js-list');
// const form = document.querySelector('.js-search-form');
// form.addEventListener("submit", onSearch)

// function createMarkup(arr) {
//     return arr
//     .map(({ id, car, type, price, img }) => `
//     <li data-id="${id}">
//         <img src="${img}" alt="${car}" width="200">
//         <h2>${car}</h2>
//         <h3>${type}</h3>
//         <p>${price}</p>
//     </li>`
// ).join('');
// }


// list.insertAdjacentHTML("beforeend", createMarkup(cars))
// // console.log(markup);

// function onSearch(evt) {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const { query, select } = form.elements;

//     const searchCars = cars.filter(
//         (item) =>
//             item[select.value].toLowerCase() === query.value.trim().toLowerCase()
//     );

//     list.innerHTML = createMarkup(searchCars)
//   //  console.log(searchCars);
//     // console.dir(query.value);
//     // console.dir(select.value);

// }

//========== ПРАКТИКА З МЕНТОРОМ +=====
// Кнопка "Приховати" скриває текст і замінює назву кнопки на "Розкрити",
//     про повторному натисканні текст знову стає доступним і кнопка набуває
// початкового виглядую

// const refs = {
//     taskTitle: document.querySelector(".taskTitle"),
//     passwordButton: document.querySelector("#passwordButton"),
// };

// refs.passwordButton.addEventListener('click', onPasswordButtonClick);

// function onPasswordButtonClick(event) {
//     if (refs.passwordButton.textContent === "Скрити") {
//         refs.passwordButton.textContent = "Розкрити";
//         refs.taskTitle.style.display = "none";
//     } else {
//         refs.passwordButton.textContent "Скрити";
//         refs.taskTitle.style.display = "block";
//     }
// }

//=============================================== 2

//Натискання на кнопку "SHOW ME" має виводити значення з поля введення
  //  (дивитись в HTML)

// const refs = {
//     tascTitle: document.querySelector('.taskTitle'),
//     alertInput: document.querySelector('#alertInput'),
//     alertButton: document.querySelector('#alertButton')
// }
  
// refs.alertButton.addEventListener('click', onAlertButtonClick);

// function onAlertButtonClick(event) {
//     const inputValue = refs.alertInput.value
//     refs.tascTitle.textContent = inputValue
//     refs.alertInput.value = ""
// }