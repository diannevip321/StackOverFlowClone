import model from "./model.js";
import {allQuestionsHeader} from "./index.js"
export default class Tag {
    // Data Fields
    static tid = 1;
    tid;
    name = "";
    count = 1;

    // Constructor
    constructor(name) {
        this.tid = "t" + Tag.tid++;
        this.name = name;
    }


    createTagBox = () => {
        const div = document.createElement("div");
        div.classList = "tagbox";
        const a = document.createElement("a");
        a.textContent = this.name;
        div.appendChild(a);
        a.addEventListener("click", () => {
            
            const mainPage = document.getElementById("main");
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }
            mainPage.appendChild(allQuestionsHeader(this.name +" Questions", model.getQuestionsByTagId(this.tid)));

        })

        const p = document.createElement("p");
        p.textContent = this.count;
        div.appendChild(p);
        return div;

    }
}
