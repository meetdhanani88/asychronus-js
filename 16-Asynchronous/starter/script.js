'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/**************/ /// Get & render Country + neighbour Country using xmlhttprqst////////**************************/

// // get data of country1 using XMLHttpRequest();

// var getcountryandneighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('get', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);

//     //render country1
//     rendercoutry(data);

//     //get neighbour country from country1 data
//     const neighbour = data.borders[0];
//     if (!neighbour) return;

//     // get data of neighbour country using XMLHttpRequest();
//     const request2 = new XMLHttpRequest();
//     request2.open('get', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(request2.responseText);

//       //render neighbour country
//       rendercoutry(data2, 'neighbour');
//     });
//   });
// };
// function rendercoutry(data, classname = ``) {
//   const html = ` <article class="country ${classname}" >
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>POP people</p>
//       <p class="country__row"><span>🗣️</span>LANG</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// }

// getcountryandneighbour('portugal');

/******************/ //Fetch promises///********************/

// function getcountrydata(country) {
//   // country 1

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       const countrydata = data[0];
//       console.log(countrydata);
//       rendercountry(countrydata);

//       // neighbour1 of country 1

//       const neighbour = countrydata.borders;

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour[0]}`);
//     })
//     .then(response => response.json())
//     .then(data => rendercountry(data, 'neighbour'));
// }

// // rendering function
// function rendercountry(data, classname = ``) {
//   const html = ` <article class="country ${classname}" >
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>POP people</p>
//       <p class="country__row"><span>🗣️</span>LANG</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// }

// getcountrydata('germany');

//********** */ making own promise and consuming it**************//

// function wait(sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// }

// wait(1)
//   .then(() => {
//     console.log('waited 1 sec');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('waited 2 sec');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('waited 3 sec');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('waited 4 sec');
//     return wait(1);
//   });

/*************/ //Load image after 2 sec/****************/

// const wait = sec =>
//   new Promise(resolve => {
//     setTimeout(resolve, sec * 1000);
//   });

// const createimage = imgpath =>
//   new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgpath;

//     img.addEventListener('load', () => {
//       document.querySelector('.images').append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', () => {
//       reject(new Error('image not found'));
//     });
//   });

// let curimg;

// //syntax of then////////
// //   " ** " means optional.

// //    .then(function1(**value resturn by resolve){ dothis when resolve done } **,
// //          function2 ( value return by reject){dothis when reject done }**  );

// //    .then( (**value resturn by resolve) => { do this when resolve done } **,
// //           (value return by reject)   => { do this when reject done }**  );

// createimage('img/img-1.jpg')
//   .then(
//     resolve => {
//       curimg = resolve;
//       console.log('image 1 loaded');
//       return wait(2);
//     } /*, (er) =>  console.log(er)*/
//   )
//   .then(() => {
//     curimg.style.display = 'none';
//     return createimage('img/img-2.jpg');
//   })
//   .then(img/* (value of resolve function) */  => {
//     curimg = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     curimg.style.display = 'none';
//   })
//   .catch(reject => console.error(reject));

// /****************/ async await for replacing promises in easy way/********************/

// before async await

// function getcountrydata(country) {
//   // country 1

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       const countrydata = data[0];
//       console.log(countrydata);
//       rendercountry(countrydata);

//       // neighbour1 of country 1

//       const neighbour = countrydata.borders;

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour[0]}`);
//     })
//     .then(response => response.json())
//     .then(data => rendercountry(data, 'neighbour'));
// }
                       //************************************************* */
// after async await

// const getcountryandneighbour = async country => {
//   const response = await fetch(`https://restcountries.com/v2/name/${country}`);
//   const [data] = await response.json();
//   console.log(data);
//   rendercountry(data);
//   const neighbour = data.borders[0];
//   if (!neighbour) return;

//   const neighbourresponce = await fetch(
//     `https://restcountries.com/v2/alpha/${neighbour}`
//   );
//   const dataneighbour = await neighbourresponce.json();
//   console.log(dataneighbour);
//   rendercountry(dataneighbour, 'neighbour');

//   return "how are you";
// };

// const rendercountry = (data, classname = ``) => {
//   const html = ` <article class="country ${classname}" >
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>POP people</p>
//       <p class="country__row"><span>🗣️</span>LANG</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// getcountryandneighbour('germany');

//************** IIFE (Immediately Invoked Function Expression)*******////////

// function Greet() {
//   console.log('Welcome to GFG!');
// }

//  Greet();

// (function () {
//   console.log('Welcome to GFG!');
// })();


//**********how to return value and use async function**************/

// ( async function () {
//   const msg = await getcountryandneighbour('germany');
//   console.log(msg);
// })();

