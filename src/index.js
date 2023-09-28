import Model from "./model.js";
import Question from "./Question.js";
import model from "./model.js";
import Answer from "./Answer.js";



window.onload = function () {
    const mainPage = document.getElementById("main");
    while (mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
    }
    mainPage.appendChild(allQuestionsHeader("All Questions", model.data.questions));

    //Creating event listners for questions, tags
    document.getElementById("questions").onclick = function () {
        console.log("Questions clicked");
        const mainPage = document.getElementById("main");
        while (mainPage.firstChild) {
            mainPage.removeChild(mainPage.firstChild);
        }
        mainPage.appendChild(allQuestionsHeader("All Questions", model.data.questions));
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
    document.getElementById("searchbox").addEventListener("keypress", search);
};

export function allQuestionsHeader(pageTitle, questions) {
    const divHeader = document.createElement("main");
    divHeader.id = "questionHeader";
    const divR1 = document.createElement("div");
    divR1.classList = "main-R1";
    const h3 = document.createElement("h3")
    h3.id = "title-All_Questions";
    h3.textContent = pageTitle;  
    divR1.appendChild(h3);
    divR1.appendChild(createAskQuestionButton());
    divHeader.appendChild(divR1);

    const divR2 = document.createElement("div");
    divR2.classList = "main-R2"
    const p = document.createElement("p");
    p.textContent = questions.length + " questions";
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



    // model.data.questions.forEach((question) => {
    //     divHeader.appendChild(question.createQuestionBox());

    // })

    questions.forEach((question) => {
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
        "",
        "p1title",
        "p2title",
        "errorTitle",
        ""
    );

    createFieldForm(
        ask_question_form,
        "label02",
        "Question Text*",
        "Add details",
        "qform_text",
        "text",
        "",
        "p1text",
        "p2text",
        "errorText",
        ""
    );

    createFieldForm(
        ask_question_form,
        "label03",
        "Tags*",
        "Add keywords separated by whitespace",
        "qform_tags",
        "text",
        "",
        "p1tags",
        "p2tags",
        "errorTags",
        ""
    );

    createFieldForm(
        ask_question_form,
        "label04",
        "Username*",
        "",
        "qform_username",
        "text",
        "",
        "p1username",
        "p2username",
        "errorUsername",
        ""
    );


    const qform_submit = document.createElement("input");
    qform_submit.id = "qform_submit";
    qform_submit.type = "submit";
    qform_submit.value = "Post Question";
    ask_question_form.appendChild(qform_submit);
    // ask_question.appendChild(ask_question_form);




    ask_question_form.addEventListener("submit", createAskQuestion());
    return ask_question_form;

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
    p2id,
    errorId,
    errorContent) {
    const br = document.createElement("br");

    const label = document.createElement("label");
    label.id = lid;
    label.for = iid;
    form.appendChild(label);

    const p1 = document.createElement("p");
    p1.id = p1id;
    p1.textContent = lcontent1;
    p1.classList = "formTitle"
    p1.append(br);
    label.appendChild(p1);

    const p2 = document.createElement("p");
    p2.id = p2id;
    p2.textContent = lcontent2;
    p2.classList = "formHelperText"
    label.appendChild(p2);



    const input = document.createElement("input");
    input.id = iid;
    input.type = itype;
    input.value = ivalue;
    input.classList = "formInput"
    form.appendChild(input);

    const error = document.createElement("p");
    error.id = errorId;
    error.textContent = errorContent;
    error.classList = "formErrorText"
    form.appendChild(error);

}

function createAskQuestion() {
    return (event) => {
        event.preventDefault();
        const title = document.getElementById("qform_title").value;
        const validTitle = !(title.trim().length > 100 || title.trim() === "")
        if (title.trim().length > 100) {
            document.getElementById("errorTitle").textContent = "Title cannot be more than 100 characters"
        }
        if (title.trim() === "") {
            document.getElementById("errorTitle").textContent = "Title cannot be empty"
        }

        const text = document.getElementById("qform_text").value;
        const validText = !(text.trim() === "")
        if (text.trim() === "") {
            document.getElementById("errorText").textContent = "Text cannot be empty"
        }

        const tags = document.getElementById("qform_tags").value.split(" ").map((tag) => {
            return tag.toLowerCase()
        }).filter((tag) => {
            return tag !== ""
        });
        const validTags = !(tags.length > 5 || tags.filter((tag) => tag.length > 10).length !== 0 || tags.length === 0)
        if (tags.length > 5) {
            document.getElementById("errorTags").textContent = "No. of tags cannot exceed 5"
        }
        if (tags.filter((tag) => tag.length > 10).length !== 0) {
            document.getElementById("errorTags").textContent = "Each tag length cannot exceed 10 characters"
        }
        if (tags.length === 0) {
            document.getElementById("errorTags").textContent = "Must have at least 1 tag"
        }

        const username = document.getElementById("qform_username").value;
        const validUsername = !(username.trim() === "")
        if (username.trim() === "") {
            document.getElementById("errorUsername").textContent = "Username cannot be empty"
        }

        if (validTitle && validText && validTags && validUsername) {

            const unique_tags = new Set(tags);
            const tag_ids = model.getTagIds(Array.from(unique_tags));

            const question = new Question(model, title, text, tag_ids, username);
            model.data.questions.push(question);
            const mainPage = document.getElementById("main");
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }
            mainPage.appendChild(allQuestionsHeader("All Questions", model.data.questions));


        }
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
        "",
        "errorAnsName",
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
        "",
        "errorAnsText",
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
        if (username.trim() === "") {
            document.getElementById("errorAnsName").textContent = "Username cannot be empty";
        }
        const answerText = document.getElementById("answerTextInput").value;
        if (answerText.trim() === "") {
            document.getElementById("errorAnsText").textContent = "Text cannot be empty";
        }
        if (username.trim() !== "" && answerText.trim() !== "") {
            const answer = new Answer(answerText, username);
            question.ansIds.push(answer.aid);
            model.data.answers.push(answer);
            console.log(model);
        }
    }

}

function sortbyNewest() {
    model.data.questions.sort((a, b) => a.askDate - b.askDate).reverse();
    console.log(model.data.questions);
    const mainPage = document.getElementById("main");
    while (mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
    }
    mainPage.appendChild(allQuestionsHeader("All Questions", model.data.questions));

}

function search(event) {
    const searchText = document.getElementById("searchbox").value;

    let tags = searchText.match(/\[([^\]]+)\]/g)
    tags = (tags !== null) ? tags.map(char => char.slice(1, -1)) : []
    const questions = searchText.split(/\[[^\]]+\]/g).filter(Boolean).map((q) => q.trim().split(" ")).flat().filter(Boolean);
    //.filter((q) => q.trim()).map((q) => q.toLowerCase());


    // console.log(tags)
    // console.log(questions)

    const questionMatch = []   //array of question objects


    const questionObjects = model.data.questions;
    questionObjects.map((q) => {
        const title = q.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim().toLowerCase().split(" ")
        const text = q.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim().toLowerCase().split(" ")
        questions.map((q0) => {
            if (title.includes(q0) || text.includes(q0)) {
                questionMatch.push(q)
            }
        })
    })


    questionObjects.map((q) => {
        const tagIds = q.tagId;
        const tagObjects = model.getTagsByIds(tagIds)
        tags.map((t) => {
            tagObjects.map((tO) => {
                if (tO.name === t) {
                    questionMatch.push(q);
                }
            })

        })
    })

    const uniqueSet = new Set(questionMatch)
    const uniqueQuestionMatch = Array.from(uniqueSet);

    console.log(uniqueQuestionMatch)

    const mainPage = document.getElementById("main");
    while (mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
    }
    mainPage.appendChild(allQuestionsHeader("Search Results", uniqueQuestionMatch));





}

function createSearchPage() {

}

