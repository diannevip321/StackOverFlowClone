
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

    


}