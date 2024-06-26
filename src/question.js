import model from "./model.js";
import { createAskQuestionButton } from "./index.js";
import { answerForm } from "./index.js";
import { getTimeString } from "./Utilities.js";


export default class Question {
    // model;
    static qid = 1;
    title = "";
    text = "";
    tagId = [];
    askedBy = "";
    askDate = new Date();
    ansIds = [];     //orginally andId
    views = 0;



    // constructor 
    constructor(model, title, text, tagId, askedBy) {
        // this.model = model;
        this.title = title;
        this.text = text;
        this.tagId = tagId;
        this.askedBy = askedBy;
        this.qid = 'q' + Question.qid++;
    }

    createQuestionBox = () => {
        const div = document.createElement("div");
        div.classList = "questionBox";

        const divLeft = document.createElement("div");
        divLeft.classList = "questionNumAnsViews";
        const p1 = document.createElement("p");
        p1.textContent = this.ansIds.length + " answers";
        divLeft.append(p1);
        div.appendChild(divLeft);
        const p2 = document.createElement("p");
        p2.textContent = this.views + " views";
        divLeft.append(p2);
        div.appendChild(divLeft);

        const divCenter = document.createElement("div");
        divCenter.classList = "questionTitleTags";
        const title = document.createElement("h4");
        title.textContent = this.title;
        title.onclick = () => {
            this.views++;
            const mainPage = document.getElementById("main");
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }
            mainPage.appendChild(this.createQuestionPage());
            


        }
        divCenter.appendChild(title);
        const divTags = document.createElement("div");
        const tags = model.getTagsByIds(this.tagId);
        tags.forEach((tags) => {
            const button = document.createElement("button");
            button.textContent = tags.name;
            divCenter.appendChild(button);
        })
        divCenter.appendChild(divTags);
        div.appendChild(divCenter);

        const divRight = document.createElement("div");
        divRight.classList = "questionUsernameTime";
        const p3 = document.createElement("p");
        p3.textContent = getTimeString(new Date(), this.askedBy, this.askDate);
        divRight.appendChild(p3);
        div.appendChild(divRight);

        return div;

    }

    // getTimeString = (currentTime) => {  
    //     // const currentTime = new Date();
    //     const elapasedTimeSeconds = Math.floor((currentTime.getTime() - this.askDate.getTime()) / 1000);
    //     const elapasedTimeMinutes = Math.floor(elapasedTimeSeconds / 60);
    //     const elapasedTimeHours = Math.floor(elapasedTimeMinutes / 60);
    //     const elapasedTimeDays = Math.floor(elapasedTimeHours / 24);
    //     const elapsedTimeYears = Math.floor(elapasedTimeDays / 365);

    //     console.log(elapasedTimeSeconds);
    //     console.log(elapasedTimeMinutes);

    //     if (elapasedTimeMinutes === 0) {
    //         return `${this.askedBy} asked ${elapasedTimeSeconds} seconds ago.`
    //     }
    //     else if (elapasedTimeHours === 0) {
    //         return `${this.askedBy} asked ${elapasedTimeMinutes} minutes ago.`
    //     }
    //     else if (elapasedTimeDays === 0) {
    //         return `${this.askedBy} asked ${elapasedTimeHours} hours ago.`
    //     }
    //     else if (elapsedTimeYears === 0) {
    //         const month = this.askDate.toLocaleString('default', { month: 'short' });
    //         const day = this.askDate.getDate();
    //         const hours = this.askDate.getHours();
    //         const mins = this.askDate.getMinutes();

    //         if (hours < 10 && mins < 10) {
    //             return `${this.askedBy} asked ${month} ${day} at 0${hours}:0${mins}.`
    //         }
    //         else if (hours < 10) {
    //             return `${this.askedBy} asked ${month} ${day} at 0${hours}:${mins}.`
    //         }
    //         else if (mins < 10) {
    //             return `${this.askedBy} asked ${month} ${day} at ${hours}:0${mins}.`
    //         }
    //         else {
    //             return `${this.askedBy} asked ${month} ${day} at ${hours}:${mins}.`
    //         }



    //     }
    //     else if (elapsedTimeYears >= 1) {
    //         const year = this.askDate.getFullYear();
    //         const month = this.askDate.toLocaleString('default', { month: 'short' });
    //         const day = this.askDate.getDate();
    //         const hours = this.askDate.getHours();
    //         const mins = this.askDate.getMinutes();

    //         if (hours < 10 && mins < 10) {
    //             return `${this.askedBy} asked ${month} ${day}, ${year} at 0${hours}:0${mins}.`
    //         }
    //         else if (hours < 10) {
    //             return `${this.askedBy} asked ${month} ${day}, ${year} at 0${hours}:${mins}.`
    //         }
    //         else if (mins < 10) {
    //             return `${this.askedBy} asked ${month} ${day}, ${year} at ${hours}:0${mins}.`
    //         }
    //         else {
    //             return `${this.askedBy} asked ${month} ${day}, ${year} at ${hours}:${mins}.`
    //         }

    //     }

    //     return "Hello Peets";
    // }

    createQuestionPage = () => {
        const questionPage = document.createElement("div");
        questionPage.classList = "questionPage"
        const questionHeader = document.createElement("div");
        questionHeader.classList = "questionHeader"
        const questionHeaderR1 = document.createElement("div");
        questionHeaderR1.classList = "questionHeaderR1"
        const numAnswers = document.createElement("p");
        numAnswers.textContent = this.ansIds.length + " answers";
        questionHeaderR1.appendChild(numAnswers);
        const title = document.createElement("h3");
        title.textContent = this.title;
        questionHeaderR1.appendChild(title);
        // const askQuestion = document.createElement("button");
        // askQuestion.id = "ask_question";
        // askQuestion.textContent = "Ask Question";
        questionHeaderR1.appendChild(createAskQuestionButton());
        questionHeader.appendChild(questionHeaderR1);
        const questionHeaderR2 = document.createElement("div");
        questionHeaderR2.classList = "questionHeaderR2"
        const numViews = document.createElement("p");
        numViews.textContent = this.views + " views";
        questionHeaderR2.appendChild(numViews);
        const textBody = document.createElement("p");
        textBody.textContent = this.text;
        questionHeaderR2.appendChild(textBody);
        const date = document.createElement("p");
        date.textContent = getTimeString(new Date(), this.askedBy, this.askDate);
        questionHeaderR2.appendChild(date);
        questionHeader.appendChild(questionHeaderR2);
        questionPage.appendChild(questionHeader);


        const questionAnswers = document.createElement("div");
        questionAnswers.classList = "questionAnswers"
        const answers = model.getAnswersByAnsIds(this.ansIds);
        answers.forEach((answer) => questionAnswers.appendChild(answer.createAnswerBox()));
        questionPage.appendChild(questionAnswers);

        const postAnswer = document.createElement("div");
        const postAnswerButton = document.createElement("button");
        postAnswerButton.textContent = "Answer Question";
        postAnswerButton.classList = "postAnswer"
        postAnswerButton.addEventListener("click", () => {
            const mainPage = document.getElementById("main");
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }
            mainPage.appendChild(answerForm(this));
        })
        postAnswer.appendChild(postAnswerButton);
        

        questionPage.appendChild(postAnswer);

        return questionPage;





    }

}
