document.addEventListener('DOMContentLoaded', () => {



const title = document.querySelector('h1');
title.textContent = 'JS says Hello World';

// getting items by id
const idParagraph = document.querySelector('#welcome-paragraph');

// getting all list elements
const listItems = document.querySelectorAll('li');
console.log(listItems);
// modify things
const redistItem = document.querySelector('li.red');
redistItem.textContent = 'RED!';

redistItem.classList.add('bold');
// create new elements

const newListItem = document.createElement('li');
newListItem.textContent = 'Purple';
newListItem.classList.add('purple');
const list = document.querySelector('ul');
list.appendChild(newListItem);

// new header item attached to div element 
const newHeaderItem = document.createElement('h2');
newHeaderItem.textContent = 'A new JS header';
newHeaderItem.classList.add('black');
newHeaderItem.classList.add('header2');
const header2 = document.querySelector('div');
header2.appendChild(newHeaderItem);



})
