// Stack

class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // Correctly initialize this.next to null
    }
  }

  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    // Add a node to the stack
    push(value) {
      let node = new Node(value);
      if (this.size === 0) {
        this.first = node;
        this.last = node;
      } else {
        let currFirst = this.first;
        this.first = node;
        this.first.next = currFirst;
      }
      return ++this.size; // Correctly increment the size and return it
    }
  
    // Remove a node from the stack
    pop() {
      if (this.size === 0) {
        return null;
      }
      let temp = this.first;
      if (this.size === 1) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value; // Return the value of the popped node
    }
  }

  const stack = new Stack(); // Create a new instance of the Stack class
  stack.push("google");      // Push 'google' onto the stack
  stack.push("instagram");   // Push 'instagram' onto the stack
  stack.push("youtube");     // Push 'youtube' onto the stack
  console.log(stack);        // Log the current stack: google -> instagram -> youtube
  
  console.log(stack.pop());  // Remove and return the last element added to the stack: 'youtube'
  console.log(stack);        // Log the current stack: google -> instagram
  
  console.log(stack.pop());  // Remove and return the last element added to the stack: 'instagram'
  console.log(stack);        // Log the current stack: google
  
  console.log(stack.pop());  // Remove and return the last element added to the stack: 'google'
  console.log(stack);        // Log the current stack: (empty stack)
  
  console.log(stack.pop());  // Try to pop from an empty stack: null


// Queue


  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    // Add a node to the end of the queue
    enqueue(value) {
      let node = new Node(value);
      if (this.size === 0) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      return ++this.size; // Correctly increment the size and return it
    }
  
    // Remove a node from the front of the queue
    dequeue() {
      if (this.size === 0) {
        return null;
      }
      let temp = this.first;
      if (this.size === 1) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value; // Return the value of the dequeued node
    }
  }

  
  const queue = new Queue(); // Create a new instance of the Queue class
  queue.enqueue("google");      // Enqueue 'google' to the queue
  queue.enqueue("instagram");   // Enqueue 'instagram' to the queue
  queue.enqueue("youtube");     // Enqueue 'youtube' to the queue
  console.log(queue);           // Log the current queue: google -> instagram -> youtube
  
  console.log(queue.dequeue()); // Dequeue and return the first element: 'google'
  console.log(queue);           // Log the current queue: instagram -> youtube
  
  console.log(queue.dequeue()); // Dequeue and return the first element: 'instagram'
  console.log(queue);           // Log the current queue: youtube
  
  console.log(queue.dequeue()); // Dequeue and return the first element: 'youtube'
  console.log(queue);           // Log the current queue: (empty queue)
  
  console.log(queue.dequeue()); // Try to dequeue from an empty queue: null
  