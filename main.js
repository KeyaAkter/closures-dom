"use strict";

//BASIC DOM MANUPULATIONS

// 1. Selecting elements
// 1st way : getELementByID() -- fast (rarely used)

const title = document.getElementById("main-heading");

console.log(title);

const secondtitle = document.getElementById("second-heading");

console.log(secondtitle);

// 2nd way : getElementByClassName()

const country = document.getElementsByClassName("country");

console.log(country);

// 3rd way : getElemetByTagName()

const input = document.getElementsByTagName("input");

const countryTag = document.getElementsByTagName("li");
console.log(country);

// 4th way : querySelector() -- used most of the cases

const title2 = document.querySelector("#main-heading"); // id(#)

const btn = document.querySelector(".btn"); // class(.)

const h2 = document.querySelector("h2"); // element(tag)

const countryQuery = document.querySelector(".country");

// 5th way : querySelectorAll()

const countryQueryAll = document.querySelector(".country"); // multiple elements of same class

// 2. Styling elements

// 1st style: inline-styles -- rarely used(special case)
const titleStyle = document.querySelector("main-heading");

titleStyle.style.color = "crimson";
titleStyle.style.backgroundColor = "black";
titleStyle.style.fontSize = "3rem";

// 2nd style: external style

const countriesStyle = document.querySelectorAll(".country");

console.log(countriesStyle);

for (let i = 0; i < countriesStyle.length; i++) {
  countriesStyle[i].style.color = "hotpink";
  countriesStyle[i].style.fontSize = "2rem";
}

// 3. Creating elements
const ul = document.querySelector("ul");
console.log(ul);

const li = document.createElement("li");
const li2 = document.createElement("li");
li.innerText = "Japan";
li2.innerText = "Austria";

//append
ul.append(li);
ul.appendChild(li);
ul.insertAdjacentElement("afterbegin", li);
ul.insertAdjacentElement("afterbegin", li2);

// modify text content

const firstCountry = document.querySelector(".country"); //target

firstCountry.textContent = "BD"; // same as innerText
console.log(firstCountry);
console.log(firstCountry.innerText);
console.log(firstCountry.textContent);
console.log(ul.innerHTML);

const containerCreate = document.querySelector(".container");
// console.log(container.innerHTML);
const myCountry = "Bangladesh";
containerCreate.innerHTML = ` <h1 id="main-heading">Countries</h1>
      <h2 id="second-heading">Countries List</h2>

      <ul>
        <li class="country">${myCountry}</li>
        <li class="country">USA</li>
        <li class="country">Canada</li>
        <li class="country">Australia</li>
        <li class="country">Europe</li>
      </ul>

      <input type="text" class="input" />
      <button class="btn">Add Country</button>`;

// adding attribute(setAttribute)

const h1 = document.querySelector("#main-heading");
h1.setAttribute("class", "main-heading"); //set
h1.setAttribute("width", "300px");
console.log(h1.getAttribute("width")); //get

h1.removeAttribute("class"); //remove

//onlyForClass (Adding Attribute)

h1.classList.add("main-heading", "first-country"); //multiple class add

h1.classList.remove("main-heading");

let a = 10;

if (a === 10) h1.classList.toggle("main-heading"); // toggle means add(true) & remove(false)

console.log(h1.classList.contains("main-heading")); // exist or not returning a boolean variable

if (h1.classList.contains("main-heading")) a += 2;
console.log(a);

//remove element

const h2Remove = document.getElementById("second-heading");
h2.remove(); // don't do this

// 4. Node traversals(parent, child search)

const ulNode = document.querySelector("ul");
console.log(ulNode.parentElement); // HTML collections
console.log(ulNode.parentNode);
console.log(ulNode.childNodes);
console.log(ulNode.children); // HTML collections
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastChild);
console.log(ul.lastElementChild);

const h1Node = document.querySelector("main-heading");

console.log(h1Node.nextSibling);
console.log(h1Node.nextElementSibling);
console.log(h1Node.previousSibling);
console.log(h1Node.previousElementSibling); // null

// 5. Event Handlers(Higher order function takes callback function as input)

const btnEvent = document.querySelector(".btn");
const inputEvent = document.querySelector(".input");

const ulEvent = document.querySelector("ul");

btn.addEventListener("click", function () {
  // console.log("clicked");

  const li = document.createElement("li");
  li.classList.add("country");

  li.textContent = input.value; // value always string
  ul.append(li);
  ul.insertAdjacentElement("beforeend", li); //alternate of append
  input.value = "";
});
