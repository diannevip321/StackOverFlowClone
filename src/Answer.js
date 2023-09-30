import { getTimeString } from "./Utilities.js";
export default class Answer{
    
    static aid = 1;
    text = "";
    ansBy = "";
    ansDate = new Date();


    constructor(text, ansBy){
        this.text = text;
        this.ansBy = ansBy;
        this.aid =  'a' + Answer.aid++;
    }

    createAnswerBox = () => {
        const divAnswerBox = document.createElement("div");
        divAnswerBox.classList = "answerBox"
        const divAnswerText = document.createElement("div");
        const answerText = document.createElement("p")
        answerText.classList = "answerText";
        answerText.textContent = this.text;
        divAnswerText.appendChild(answerText);
        divAnswerBox.appendChild(divAnswerText);



        const divAnswerUsernameDate = document.createElement("div");
        const userName = document.createElement("p");
        userName.classList = "ansUserName";
        userName.textContent = this.ansBy;
        divAnswerUsernameDate.appendChild(userName);
        const ansDate = document.createElement("p");
        ansDate.classList = "ansDate";
        ansDate.textContent = getTimeString(new Date(), "", this.ansDate, "answered")
        divAnswerUsernameDate.appendChild(ansDate);

        
        divAnswerBox.appendChild(divAnswerUsernameDate);
        return divAnswerBox;


    }

    


}