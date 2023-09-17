import Model from './model.js';
import Question from './question.js';

window.onload = function() {
  // fill me with relevant code
  document.getElementById('questions').onclick = function() {
    console.log('Questions clicked');
  };

  document.getElementById('tags').onclick = function() {
    console.log('Tags clicked');
  };
  
  document.getElementById('ask_question').onclick = function() {
    console.log('Ask question clicked');
  };

  function askQuestion(event) {
    console.log(document.getElementById('fname').value);
    console.log(document.getElementById('lname').value);
    console.log(Date.now());

    //creating an instance of the model
    const model = new Model();
    model.data.questions.push({askedBy: document.getElementById('fname').value, askDate: new Date(Date.now())} );
    console.log(model.data.questions);
    

    event.preventDefault();
    
  }

  
  
  
}
