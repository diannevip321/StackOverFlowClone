export default class Question {
    model;
    static qid = 1;
    title = "title";
    text = "text";
    tagId = ["tag1"];
    askedBy = "John Doe";
    askDate = new Date();
    andId = ['a1'];
    views = 0;



    // constructor 
    constructor(model, title, text, tagId, askedBy) {
        this.model = model;
        this.title = title;
        this.text = text;
        this.tagId = tagId;
        this.askedBy = askedBy;
        this.qid = Question.qid++;
    }

    // createQuestionBox = () => {
    //     const div = document.createElement("div");
    //     const tagNames = this.model.data.tags.
    //     // div.classList = "tagbox";
    //     // const a = document.createElement("a");
    //     // a.textContent = this.name;
    //     // div.appendChild(a);
    //     // const p = document.createElement("p");
    //     // p.textContent = this.count;
    //     // div.appendChild(p);
    //     return div;


    // }



}
