import { Stack } from './stack.js'
import {Queue} from './queue.js'

const stack1 = new Stack();
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(6);
stack1.push(7);
console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());