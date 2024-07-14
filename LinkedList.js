class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a node at the end of the list
    add(data) {
      let newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Insert a node at a specific index
    insertAt(data, index) {
      if (index < 0 || index > this.size) {
        console.log("Invalid index");
        return;
      }
      let newNode = new Node(data);
      let current = this.head;
      let previous;
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        current = this.head;
        let count = 0;
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
        newNode.next = current;
        previous.next = newNode;
      }
      this.size++;
    }
  
    // Remove a node from a specific index
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        console.log("Invalid index");
        return null;
      }
      let current = this.head;
      let previous = null;
      let count = 0;
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
        previous.next = current.next;
      }
      this.size--;
      return current.data;
    }
  
    // Remove a node by value
    removeElement(data) {
      let current = this.head;
      let previous = null;
      while (current !== null) {
        if (current.data === data) {
          if (previous === null) {
            this.head = current.next;
          } else {
            previous.next = current.next;
          }
          this.size--;
          return current.data;
        }
        previous = current;
        current = current.next;
      }
      return -1;
    }
  
    // Find the index of a node with given data
    indexOf(data) {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        if (current.data === data) {
          return count;
        }
        count++;
        current = current.next;
      }
      return -1;
    }
  
    // Check if the list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the list
    sizeOfList() {
      return this.size;
    }
  
    // Print the list
    printList() {
      let current = this.head;
      let list = [];
      while (current !== null) {
        list.push(current.data);
        current = current.next;
      }
      console.log(list.join(" -> "));
    }
  }
  
  // Example usage
  let linkedList = new LinkedList();
  linkedList.add(10);
  linkedList.add(20);
  linkedList.add(30);
  linkedList.printList(); // Output: 10 -> 20 -> 30
  
  linkedList.insertAt(15, 1);
  linkedList.printList(); // Output: 10 -> 15 -> 20 -> 30
  
  linkedList.removeFrom(2);
  linkedList.printList(); // Output: 10 -> 15 -> 30
  
  console.log(linkedList.indexOf(15)); // Output: 1
  
  console.log(linkedList.isEmpty()); // Output: false
  
  console.log(linkedList.sizeOfList()); // Output: 3
  
