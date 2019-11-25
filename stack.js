class Stack{
    constructor(...items){
        this.stack = [...items];
    }
    push(...items){
        this.stack.push(...items);
    }
    pop(){
        this.stack.pop();
    }
    display(){
        console.log(stack);
    }
}

const stack = new Stack(4,5);
stack.push(1,2,3);
stack.pop();
stack.pop();
stack.push(1,2,3);
stack.push();
stack.display();