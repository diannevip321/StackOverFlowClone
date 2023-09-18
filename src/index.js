import Model from "./model.js";
import Question from "./question.js";

window.onload = function () {
  // fill me with relevant code

  //creating main instance of model object
  const model = new Model();

  //Creating event listners for questions, tags, ask_question
  document.getElementById("questions").onclick = function () {
    console.log("Questions clicked");
  };

  document.getElementById("tags").onclick = function () {
    console.log("Tags clicked");
  };


  // Adding new HTML form when ask question is clicked to replace home screen
  document.getElementById("ask_question").onclick = function () {
    // document.getElementById("ask_question").textContent = "question asked";
    const table_mainR2C2 = document.getElementById("table_mainR2C2");

    while(table_mainR2C2.firstChild){
      table_mainR2C2.removeChild(table_mainR2C2.firstChild);
    }

    const form_html = ` <form id="ask_question_form" >
    <label for="qform_title">
      <p id="qTitle">
        Question Title <br>
        Limit Title to 100 characters or less
      </p>               
    </label>
    <input type="text" id="qform_title" value="Enter Title.."><br><br>
    <label for="qform_text">
      <p id="qText">
        Question Text <br>
        Add Details
      </p>
    </label>
    <input type="text" id="qform_text" value="Enter Question.."><br><br>

    <label for="qform_tags">
      <p id="qTags">
        Tags <br>
        Add Keywords separated by whitespace
      </p>
    </label>
    <input type="text" id="qform_tags" class="tags" value="Enter Tags.." ><br><br>
    <label for="qform_username">
      <p id="qUsername">
        Username 
      </p>
    </label>
    <input type="text" id="qform_username" class="username" value="Enter Username.."><br><br><br>
    <input type="submit" id="qform_submit" value="Post Question">
  </form> `;
    table_mainR2C2.insertAdjacentHTML("afterbegin", form_html);
  };

  // method to creaete an instace of the model specifically for the ask-question form
  // method pushes the form data into the model
  function askQuestion(event) {
    console.log(document.getElementById("qform_title").value);
    console.log(document.getElementById("qform_text").value);
    console.log(document.getElementById("qform_tags").value);
    console.log(document.getElementById("qform_username").value);
    console.log(Date.now());

    // Creating a new question instance
    const question = new Question(
      document.getElementById("qform_title").value,
      document.getElementById("qform_text").value,
      document.getElementById("qform_tags").value,
      document.getElementById("qform_username").value
    );
    // Below, .questions is an array which is why we can use the push method
    model.data.questions.push(question);
    console.log(model);

    event.preventDefault();
  }

  const ask_question_form = document.getElementById("ask_question_form");
  // We have a form and we want to know when the form is submitted
  // For this, we can listen to the submit event on the form
  // We can also add a custom listener/handler for the event like below-askQuestion as one of the arguements
  ask_question_form.addEventListener("submit", askQuestion);
};
