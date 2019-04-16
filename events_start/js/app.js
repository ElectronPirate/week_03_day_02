document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  // What is dispatching the event - document, button.
  // Name of event - click, submit, change
  // behaviour - funnction
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    console.log('button has been clicked');
    const resultParag = document.querySelector('#button-result');
    resultParag.textContent = 'That button has definitely been clicked';
  })

  // Modifying input element:
  const input = document.querySelector('#input');
  input.addEventListener('input', (event) => {

    // 1. get the value of Input

const inputtedText = event.target.value;
    // 2. update the paragraph with textContent
const resultParag = document.querySelector('#input-result');
resultParag.textContent = `You typed: ${inputtedText}`;

});
// Modifying select drop down arrow:

const select = document.querySelector('#select');
select.addEventListener('change', (event) => {
  const selected = event.target.value;
  const selectParag = document.querySelector('#select-result');
  selectParag.textContent = `You selected ${selected}`;
});

// Modifying forms:

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const first = event.target.first_name.value;
  const last = event.target.last_name.value;

  const formParag = document.querySelector('#form-result');
  formParag.textContent = `Your name is: ${first} ${last}`;

})


});
