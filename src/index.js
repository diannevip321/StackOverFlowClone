import Model from "./model.js";
import Question from "./Question.js";
import model from "./model.js";
import Answer from "./Answer.js";



window.onload = function () {

    const mainPage = document.getElementById("main");
    while (mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
    }
    mainPage.appendChild(allQuestionsHeader());


    //Creating event listners for questions, tags
    document.getElementById("questions").onclick = function () {
        console.log("Questions clicked");
        const mainPage = document.getElementById("main");
        while (mainPage.firstChild) {
            mainPage.removeChild(mainPage.firstChild);
        }
        mainPage.appendChild(allQuestionsHeader());




    };


    document.getElementById("tags").onclick = function () {
        console.log("Tags clicked");
        const tag_page = document.getElementById("main");

        while (tag_page.firstChild) {
            tag_page.removeChild(tag_page.firstChild);
        }

        // map() returns an array of tag divs
        // for each() iterates through the array of tag divs
        const tags = model.data.tags.map((tag) => tag.createTagBox()).forEach((tagBox) => tag_page.appendChild(tagBox));


    }


};

function allQuestionsHeader() {
    const divHeader = document.createElement("main");
    divHeader.id = "questionHeader";
    const divR1 = document.createElement("div");
    divR1.classList = "main-R1";
    const h3 = document.createElement("h3")
    h3.id = "title-All_Questions";
    h3.textContent = "All Questions";
    divR1.appendChild(h3);
    // const button1 = document.createElement("button");
    // button1.id = "ask_question";
    // button1.textContent = "Ask Question";
    // button1.onclick = askQuestionForm;
    divR1.appendChild(createAskQuestionButton());  
    divHeader.appendChild(divR1);

    const divR2 = document.createElement("div");
    divR2.classList = "main-R2"
    const p = document.createElement("p");
    p.textContent = model.data.questions.length+" questions";
    divR2.appendChild(p);
    const divThree = document.createElement("div");
    divThree.id = "three_buttons";
    const button2 = document.createElement("button");
    button2.id = "newest";
    button2.textContent = "Newest";
    button2.classList = "three-buttons";
    button2.onclick = sortbyNewest;  //newest button on question page
    divThree.appendChild(button2);
    const button3 = document.createElement("button");
    button3.id = "active";
    button3.textContent = "Active";
    button3.classList = "three-buttons";
    divThree.appendChild(button3);
    const button4 = document.createElement("button");
    button4.id = "unanswered";
    button4.textContent = "Unanswered";
    button4.classList = "three-buttons";
    divThree.appendChild(button4);

    divR2.appendChild(divThree);
    divHeader.appendChild(divR2);

    

    model.data.questions.forEach((question) => {
        divHeader.appendChild(question.createQuestionBox());

    })

    // document.getElementById("newest").onclick = sortbyNewest;

    return divHeader;

    // tags.forEach((tags) => {
    //     const button = document.createElement("button");
    //     button.textContent = tags.name;
    //     divCenter.appendChild(button);
    // })


}

// Adding new HTML form when ask question is clicked to replace home screen
function askQuestionForm() {
    console.log("Ask Question Clicked");
    // const ask_question = document.getElementById("main");

    // while (ask_question.firstChild) {
    //     ask_question.removeChild(ask_question.firstChild);
    // }

    // Question Form Creation
    const ask_question_form = document.createElement("form");
    ask_question_form.id = "ask_question_form";

    createFieldForm(
        ask_question_form,
        "label01",
        "Question Title*",
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
        "Question Text*",
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
        "Tags*",
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
        "Username*",
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
    // ask_question.appendChild(ask_question_form);




    ask_question_form.addEventListener("submit", createAskQuestion());
    return ask_question_form

}

// method to create form html
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

function createAskQuestion() {
    return (event) => {
        event.preventDefault();
        const title = document.getElementById("qform_title").value;
        const text = document.getElementById("qform_text").value;
        const tags = document.getElementById("qform_tags").value.split(" ").map((tag) => {
            return tag.toLowerCase()
        }).filter((tag) => {
            return tag !== ""
        });
        const username = document.getElementById("qform_username").value;

        const unique_tags = new Set(tags);
        const tag_ids = model.getTagIds(Array.from(unique_tags));

        const question = new Question(model, title, text, tag_ids, username);
        model.data.questions.push(question);      
    } 
}

export function createAskQuestionButton() {
    const askQuestion = document.createElement("button");
    askQuestion.id = "ask_question";
    askQuestion.textContent = "Ask Question";
    askQuestion.onclick = () => {
        const mainPage = document.getElementById("main");
        while (mainPage.firstChild) {
            mainPage.removeChild(mainPage.firstChild);
        }
        mainPage.appendChild(askQuestionForm());
    }
    return askQuestion

}

export function answerForm(question) {
    const answerForm = document.createElement("form");
    answerForm.id = "answerForm";

    createFieldForm(
        answerForm,
        "usernameLabel",
        "Username*",
        "",
        "usernameInput",
        "text",
        "",
        "",
        ""
    )

    createFieldForm(
        answerForm,
        "answerTextLabel",
        "Answer Text*",
        "",
        "answerTextInput",
        "text",
        "",
        "",
        ""
    )

    

    const answerSubmit = document.createElement("input");
    answerSubmit.id = "answerSubmit";
    answerSubmit.type = "submit";
    answerSubmit.value = "Post Answer";
    answerForm.appendChild(answerSubmit);

    answerForm.addEventListener("submit", createAnswer(question));
    return answerForm;


}

function createAnswer(question) {
    return (event) => {
        event.preventDefault();
        const username = document.getElementById("usernameInput").value;
        const answerText = document.getElementById("answerTextInput").value;
        const answer = new Answer(answerText,username);
        question.ansIds.push(answer.aid);
        model.data.answers.push(answer);
        console.log(model);
    }
    



    
}

// function assigned to newest 
function sortbyNewest() {
    model.data.questions.sort((a, b) => a.askDate - b.askDate).reverse();
    console.log(model.data.questions);
    const mainPage = document.getElementById("main");
    while (mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
    }
    mainPage.appendChild(allQuestionsHeader());

}


