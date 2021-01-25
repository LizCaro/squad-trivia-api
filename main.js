import Method from './classes/Method.js';
import request from './classes/request.js';
import UI from './classes/UI.js';

const form = document.querySelector('#form-questions');//
const finishForm = document.querySelector('#question-container');
const nextQuestions = document.querySelector('#next-questions')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    request.getQuestions()
      .then(response => response.json())
      .then(data => {
        UI.getElements(data.results)
        Method.getCorrects(data.results)
      })
});

request.getCategories()
  .then(response => response.json())
  .then(data => UI.printCategories(data.trivia_categories))

// =========== Events ===========
nextQuestions.addEventListener('click', () => {
  UI.nextQuestion()
})