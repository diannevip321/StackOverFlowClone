export default class Question{
  static qid = 1;
  title = "title";
  text = "text";
  tagId = ["tag1"];
  askedBy = "John Doe";
  askDate = new Date();
  andId = ['a1'];
  views = 0;



  // constructor 
  constructor(title, text, tagId, askedBy){
    this.title = title;
    this.text = text;
    this.tagId = tagId;
    this.askedBy = askedBy; 
    this.qid = Question.qid++;
  }

  
}
