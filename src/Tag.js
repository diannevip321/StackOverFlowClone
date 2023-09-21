export default class Tag{
    // Data Fields
    static tid = 1;
    tid;
    name = "Jane Doe";
    count = 1;


    // Constructor
    constructor(name){
        
        this.tid = 't'+Tag.tid++;
        this.name = name;

    }

}