class MyArray{
    constructor(){
        this.length=0;
        for (let i = 0; i < arguments.length; i++) {
            this.push(arguments[i]);
            
        }
    }
}