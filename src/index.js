import Model from "./model.js";
import Question from "./Question.js";

window.onload = function () {
    //creating main instance of model object
    const model = new Model();

    //Creating event listners for questions, tags, ask_question
    document.getElementById("questions").onclick = function () {
        console.log("Questions clicked");
    };

    document.getElementById("tags").onclick = function () {
        console.log("Tags clicked");
    };

    document.getElementById("tags").onclick = function () {
        const tag_page = document.getElementById("main");

        while (tag_page.firstChild) {
           tag_page.removeChild(tag_page.firstChild);
        }

        // map() returns an array of tag divs
        // for each() iterates through the array of tag divs
        const tags = model.data.tags.map((tag) => createTagBox(tag)).forEach((tagBox) => tag_page.appendChild(tagBox));

    
    }

    function createTagBox(tag){
        const div = document.createElement("div");
        div.classList = "tagbox";
        const a = document.createElement("a");
        a.textContent = tag.name;
        div.appendChild(a);
        const p = document.createElement("p");
        p.textContent = tag.count;
        div.appendChild(p);
        return div;

    }

    // Adding new HTML form when ask question is clicked to replace home screen
    document.getElementById("ask_question").onclick = function () {
        console.log("Ask Question Clicked");
        const ask_question = document.getElementById("main");

        while (ask_question.firstChild) {
            ask_question.removeChild(ask_question.firstChild);
        }

        // Question Form Creation
        const ask_question_form = document.createElement("form");
        ask_question_form.id = "ask_question_form";

        createFieldForm(
            ask_question_form,
            "label01",
            "Question Title",
            "Limit title to a 100 characters or less",
            "qform_title",
            "text",
            "Enter Title...",
            "p1title",
            "p2title"
        );

        createFieldForm(
            ask_question_form,
            "label02",
            "Question Text",
            "Add details",
            "qform_text",
            "text",
            "Enter Text...",
            "p1text",
            "p2text"
        );

        createFieldForm(
            ask_question_form,
            "label03",
            "Tags",
            "Add keywords separated by whitespace",
            "qform_tags",
            "text",
            "Enter Tags...",
            "p1tags",
            "p2tags"
        );

        createFieldForm(
            ask_question_form,
            "label04",
            "Username",
            "",
            "qform_username",
            "text",
            "Enter Username...",
            "p1username",
            "p2username"
        );

        
        const qform_submit = document.createElement("input");
        qform_submit.id = "qform_submit";
        qform_submit.type = "submit";
        qform_submit.value = "Post Question";
        ask_question_form.appendChild(qform_submit);
        ask_question.appendChild(ask_question_form);




        ask_question_form.addEventListener("submit", askQuestion);

    }


    function createFieldForm(
        form,
        lid,
        lcontent1,
        lcontent2,
        iid,
        itype,
        ivalue,
        p1id,
        p2id) {
        const br = document.createElement("br");

        const label = document.createElement("label");
        label.id = lid;
        label.for = iid;
        form.appendChild(label);

        const p1 = document.createElement("p");
        p1.id = p1id;
        p1.textContent = lcontent1;
        p1.append(br);
        label.appendChild(p1);

        const p2 = document.createElement("p");
        p2.id = p2id;
        p2.textContent = lcontent2;
        label.appendChild(p2);

        const input = document.createElement("input");
        input.id = iid;
        input.type = itype;
        input.value = ivalue;
        form.appendChild(input);
    }


    // method pushes the form data into the model
    function askQuestion(event) {
        const title = document.getElementById("qform_title").value;
        const text = document.getElementById("qform_text").value;
        const tags = document.getElementById("qform_tags").value.split(" ").map((tag) => tag.toLowerCase());       
        const username = document.getElementById("qform_username").value;

        // Creating a new question instance
        const tag_ids = model.getTagIds(tags);

        const question = new Question(title, text, tag_ids, username);

        // Below, .questions is an array which is why we can use the push method
        model.data.questions.push(question);
        console.log(model);



        event.preventDefault();
    }
};
