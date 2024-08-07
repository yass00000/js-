export default class stack {
    constructor () {
        this.items = [];
    }

    push(item){
    this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    peek() {
        if (this.items.length ==0){
            return null;
    }
    
    return this.items[this.items.length - 1];
}
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
}