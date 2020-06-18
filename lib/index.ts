export class Ping{
    private readonly msg: string;
    constructor(msg: string) {
        this.msg = msg;
    }
    public ping(){
        console.log(this.msg);
    }
}