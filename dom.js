"use strict";

// DOM MANUPULATIONS

// 1. Selecting Elements(how an element can be selected from DOM tree)

// Method:1 => getElementById() -- fastest than other selections but rarely used
const firstTitleId = document.getElementById("main-heading");
console.log(firstTitleId);

const secondTitleId = document.getElementById("second-heading");
console.log(secondTitleId);

// Method:2 => getElementByClassName()
const countryClass = document.getElementsByClassName("country");
console.log(countryClass);

// Method:3 => getElementByTagName()
const inputTag = document.getElementsByTagName("input");
console.log(inputTag);

const contryLiTag = document.getElementsByTagName("li");
console.log(contryLiTag);

// Method:4 => querySelector() -- mostly used
const titleId = document.querySelector("#main-heading"); // #Id
console.log(titleId);

const btnClass = document.querySelector(".btn"); // .Class
console.log(btnClass);

const secondTitleTag = document.querySelector("h2"); // Tag
console.log(secondTitleTag);

const countryOne = document.querySelector(".country"); // class
console.log(countryOne);

// Method:5 => querySelectorAll() -- used most of the cases
const countryAll = document.querySelectorAll(".country"); // select all the elements of the class named "country"
console.log(countryAll); // shows a NodeList

// querySelectorAll shows a NodeList that resembles an array

// 2. Styling Elements

// Method:1 => inline styles(rarely used)
titleId.style.color = "crimson";
titleId.style.backgroundColor = "black";
titleId.style.fontSize = "3rem";

countryOne.style.backgroundColor = "red";

//countryAll.style.color = "skyblue";  it'll produce a "typeError" because here "country" is a class of several components and here countryAll is a "NodeList" which holds all the components of the class "country" and that resembles an "Array". Because of this, we must use a loop to select each element of all the class named "country" and apply style to it.

// Method:2 => NodeList(multiple elements of same class) styles, look like an array

const countries = document.querySelectorAll(".country"); // targetting all the class named "country"
console.log(countries);
for (let i = 0; i < countries.length; i++) {
  countries[i].style.color = "mediumturquoise";
  countries[i].style.fontSize = "2rem";
}

// 3. Creating Elements

// taget a component(tag) inner which you want to add an element
const ul = document.querySelector("ul"); // targetting "ul" tag
console.log(ul);

//create an element and store it to a variable
const li1 = document.createElement("li"); // create an element inside the "ul" tag
const li2 = document.createElement("li");

//add text content to the newly created element
li1.textContent = "Japan"; // add text content to the "li" tag
// li.innerText = "Japan";
li2.textContent = "Italy";

// append that element inside the "ul" tag

ul.insertAdjacentElement("beforeend", li1); // using insertAdjacentElement(), we can declare a position("beforebegin", "afterbegin", "beforeend", "afterend") where we want to append an element
ul.insertAdjacentElement("beforeend", li2);
console.log(ul);
//ul.append(li);
// ul.appendChild(li);

//modify text content

const firstCountry = document.querySelector(".country");
firstCountry.textContent = "BD";
console.log(firstCountry);
console.log(firstCountry.textContent); // BD
console.log(ul.innerHTML); // shows all the "li" tags(innerHTML) inside ul

const container = document.querySelector(".container");
console.log(container.innerHTML); // shows innerHTML of container as text

const myCountry = "Bangladesh";

container.innerHTML = `
<h1 id="main-heading">Countries</h1>
      <h2 id="second-heading">Countries List</h2>

      <ul>
        <li class="country">${myCountry}</li>
        <li class="country">USA</li>
        <li class="country">Canada</li>
        <li class="country">Australia</li>
        <li class="country">Europe</li>
      </ul>

      <input type="text" class="input" />
      <button class="btn">Add Country</button>
`;

// set attribute

const h1 = document.querySelector("#main-heading");
h1.setAttribute("class", "main-headline");
h1.setAttribute("width", "300px");

// get attribute

console.log(h1.getAttribute("width"));

// remove attribute

h1.removeAttribute("class");
h1.removeAttribute("width");

// set,get,remove,toggle attribute only for class

h1.classList.add("main-headline");
h1.classList.add("first-country");

h1.classList.add("headline", "country-headline");

h1.classList.remove("country-headline");

const a = 10;

if (a === 10) h1.classList.toggle("main-heading"); // toggle means add or remove class depending on a condition

// 4. Node Traversals

// 5. Event Handlers

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ulTag = document.querySelector("ul");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.classList.add("country");
  li.textContent = input.value; // always string

  // ul.append(li);
  ul.insertAdjacentElement("beforeend", li);
});
