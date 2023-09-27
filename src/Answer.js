
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
        divAnswerBox.classList = "answeBox"
        const divAnswerText = document.createElement("div");
        const answerText = document.createElement("p")
        answerText.id = "answerText";
        divAnswerText.appendChild(answerText);

        divAnswerBox.appendChild(divAnswerText);

        const divAnswerUsernameDate = document.createElement("div");
        divAnswerBox.appendChild(divAnswerUsernameDate);


    }

    


}