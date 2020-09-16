export default class News {
    public title: string;
    public description: string;
    public date :string
    public imageURL : string;


    constructor(title :string,description :string,date :string ,imageURL :string){

        this.title = title;
        this.description = description;
        this.date = date;
        this.imageURL = imageURL;
    }
}