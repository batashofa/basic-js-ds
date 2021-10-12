const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
     constructor() {
         this.stack = [];
     }
  push(element) {
         this.stack.push(element);
  }

  pop() {
         let res;
      if (this.stack.length === 0) {
          res = undefined;
      } else{
          res = this.stack.pop();
      }
      return res;
  }

  peek() {
      return this.stack[this.stack.length - 1];
  }
}
