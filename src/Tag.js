export default class Tag {
    // Data Fields
    static tid = 1;
    tid;
    name = "Jane Doe";
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
        const p = document.createElement("p");
        p.textContent = this.count;
        div.appendChild(p);
        return div;

    }
}
