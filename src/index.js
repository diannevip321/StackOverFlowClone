import Model from "./model.js";
import Question from "./question.js";

window.onload = function () {
  // fill me with relevant code
  document.getElementById("questions").onclick = function () {
    console.log("Questions clicked");
  };

  document.getElementById("tags").onclick = function () {
    console.log("Tags clicked");
  };

  document.getElementById("ask_question").onclick = function () {
    console.log("Ask question clicked");
  };

  // method to creaete an instace of the model specifically for the ask-question form
  // method pushes the form data into the model
  function askQuestion(event) {
    console.log(document.getElementById("qform_title").value);
    console.log(document.getElementById("qform_text").value);
    console.log(document.getElementById("qform_tags").value);
    console.log(document.getElementById("qform_username").value);
    console.log(Date.now());

    const model = new Model();
    model.data.questions.push(
      {
        askedBy: document.getElementById("qform_username").value,
        askDate: new Date(Date.now()),
        title: document.getElementById("qform_title").value,
        text: document.getElementById("qform_text").value
      }
    );
    console.log(model.data.questions);

    event.preventDefault();
  }

  const ask_question_form = document.getElementById("ask_question_form");
  ask_question_form.addEventListener("submit", askQuestion);
};
