// const container = document.querySelector(".js-container");

// container.addEventListener("clicl", onClick);
// function onClick(event) {
//     if (!event.target.classList.contains("js-box")) {
//         return;
//     }
//     console.log(event.target.dataset.color);
//     console.log(event.currentTarget);
// }

//==============================
// ===================== ХРЕСТИКИ - НУЛИКИ ===============
// const container = document.querySelector(".js-content");
// const nameWinner = document.querySelector(".js-winner");
// let player = "X";
// let historyX = [];
// let historyO = [];
// const wins = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];

// function createMarkup() {
//     let markup = "";
//     for (let i = 1; i < 10; i += 1) {
//         markup += `<div class="item js-item" data-id="${i}"></div>`;
//     }
//     container.innerHTML = markup;
// }
// createMarkup();

// container.addEventListener("click", onClick);

// function onClick(event) {
//     const { target } = event;
//     if (!target.classList.contains("js-item") || target.textContent) {
//         return;
//     }
//     const isEndGame = historyO.length + historyX.length === 9;
//     const id = Number(target.dataset.id);
//     let result = false;

//     if (player === "X") {
//         historyX.push(id);
//         result = isWinner(historyX);
//     } else {
//         historyO.pusg(id);
//         result.isWinner(historyO);
//     }
    
//     target.textContent = player;

//     if (result) {
//         nameWinner.textContent = `Winner ${player} 😎`;
//         resetGame();
//         return;
//     } else if (isEndGame) {
//         console.log(`Try agein 😱`);
//         resetGame();
//         return;
//     }
//     player = player === "X" ? "O" : "X";
// }

// function isWinner(arr) {
//     return wins.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//     createMarkup();
//     historyX = [];
//     historyO = [];
//     player = "X";
// }
//  ======== ДЛЯ HTML ==========
//  <h1 class="winner js-winner"></h1>
// <div class="container js-container">
//      <div class="content js-content"></div>
//  </div>


//=============== ПІДКЛЮЧЕННЯ БІБЛІОТЕКИ ===========
//  ================ in HTML ===========
//<script src="jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
//<ul class="js-container"></ul>

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

// const container = document.querySelector(".js-container");
// const markup = cars.map(({ img, car, id }) =>
//     `<li data-car-id="${id}" class="js-target js-card">
//     <img class="js-target" src="${img}" alt="${car}" width="200">
//     <h2 class="js-target">${car}</h2></li>`
// );
// container.insertAdjacentHTML('beforeend', markup.join(''));
// container.addEventListener('click', onClick)

// function onClick(event) {
//     const { target } = event;
//     if (!event.target.classList.contains("js-target")) {
//         return;
//     }
//     const carId = target.dataset.carId ?? target.closest('.js-card').dataset.carId;
//     const currentItem = cars.find(({ id }) => id === Number(carId));
//     console.log(currentItem);
    
//     const instance = basicLightbox.create(`
//     <div class="bg">
//         <img src="${currentItem.img}" width="300" alt="${currentItem.car}">
//         <h2>${currentItem.car}</h2>
//         <h3>${currentItem.type}</h3>
//         <p>${currentItem.price}</p>
//     </div>
// `)
//     instance.show();
// }


//================================================ TROTLE   ==   DEBOUNCE ============
// const input = document.querySelector(".js-input");
// // input.addEventListener("input", _.throttle(onSearch, 600, {
// //     leading: true,
// //     trailing: true
// // }));

// const PASSWORD_LENGTH = 7;
// input.addEventListener('input', _.debounce(onSearch, 900, ));

// function onSearch(event) {
//     console.log(event.target.value);
//     if (event.target.value.trim().length < PASSWORD_LENGTH) {
//         event.target.classList.remove("valid");
//         event.target.classList.add("invalid");
//     } else {
//         event.target.classList.remove("invalid");
//         event.target.classList.add("valid");
//     }
// }
//==================================  loading="lazy"   ============================
// const list = document.querySelector(".js-list");
// const markup = cats.map(cat => `<li>
// <img src="#{cat}" loading="lazy" alt="cat" width="660">
// <p>lorem ipsum</p>
// </li>`).join('');

// list.insertAdjacentHTML('beforeend', markup);
//========================================================================

// ==================== СТВОРИТИ МУТОВАНИЙ МАСИВ ===========
// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// },
// ]

// function sortProduct(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         // console.log('поточний', arr[i]);
//         for (let j = i + 1; j < arr.length; j += 1) {
//             //console.log('наступний', arr[j]);
//             if (arr[i].id === arr[j].id) {
//                 arr[i].qty += arr[j].qty;
//                 arr.splice(j, 1);
//                 j -= 1;
//             }
//         }
//     }
// }
// sortProduct(products);
// console.log(products);

//==========================================
// const arr = ["abc", "bac", "foo", "bca", "cab", "cba"];

// for (let i = 0; i < Array.length; i += 1) {
//     const result = arr[i].split("").every((item) => {
//         for (let j = 0; j < arr.length; j += 1) {
//             if (i !== j) {
//                 if (!arr[j].includes(item)) {
//                     return true;
//                 } else {
//                     return false
//                 }
//             }
//         }
//     });
//     if (result) {
//         return arr[i]
//     }
// }
// ============ Gpt   ==========
// const arr = ["abc", "bac", "foo", "bca", "cab", "cba"];
// let uniqueString = null;

// for (let str of arr) {
//     let isUnique = true;
//     for (let i = 0; i < str.length; i += 1) {
//         if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//             isUnique = false;
//             break;
//         }
//     }
//     if (isUnique) {
//         uniqueString = str;
//         break;
//     }
// }

// console.log(uniqueString);
 //==========
// function findUniq(arr) {
//     return arr.find((current, i) => {
//         return current
//             .split("")
//             .every(
//                 (item) => arr.some((nextWord, j) => i !== j ?
//                     !nextWord.includes(iten) : false)
//         )
//         arr.reduce((acc, nextWord, j) =>
//         i !== j ? (acc = !nextWord.includes(iten) : false))
//      })
//  }

// function onPictureClick(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     const pictureInModal = basicLightbox.create(
//         `<img src="${event.target.dataset.source}" width="1200" height="800">`
//         // {
//         //     onShow:(document.addEventListener('keyup', onEscapeClose))
//         // }
//     );
//     pictureInModal.show();

//     galleryElem.addEventListener('keydown', event => {
//         if (event.code === "Escape") {
//             pictureInModal.close()
//         }
//     })
// }