'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    this.tickets = [];
  }

  push(element) {
    this.tickets.push(element);
  }

  pop() {
    return this.tickets.pop();
  }

  peek() {
    return this.tickets[this.tickets.length -1];
  }

  isEmpty() {
    return this.tickets.length === 0;
  }

  size() {
    return this.tickets.length
  }

  toString() {
    return this.tickets.toString();
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();
// pushed 3 elements
actionHistory.push("Opened Ticket #101");
actionHistory.push("Assigned Ticket #101");
actionHistory.push("Closed Ticket #101");

// displayed
console.log("Top Action: " , actionHistory.peek());
console.log("Undo Action: " , actionHistory.pop());
console.log("Remaining Actions: " , actionHistory.toString());
console.log("Stack Size: " , actionHistory.size());
// part A Done

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    this.tickets = [];
  }

  enqueue(element) {
    this.tickets.push(element);
  }

  dequeue() {
    return this.tickets.shift();
  }

  front() {
    return this.tickets[0];
  }

  isEmpty() {
    return this.tickets.length === 0;
  }

  size() {
    return this.tickets.length;
  }

  toString() {
    return this.tickets.join(", ");
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// enqueue all
waitingRequests.enqueue("Ticket #201 - Password Reset")
waitingRequests.enqueue("Ticket #202 - No Internet");
waitingRequests.enqueue("Ticket #203 - Printer Problem");
waitingRequests.enqueue("Ticket #204 - Software Installation");

console.log("Next Request: ", waitingRequests.front());
console.log("Processed: " , waitingRequests.dequeue());
console.log("Processed: ", waitingRequests.dequeue());
console.log("Remaining Requests: " ,waitingRequests.toString());
console.log("Queue Size: " ,waitingRequests.size());
// part b done


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    this.tickets = [];
  }

  enqueue(request, priority) {
    const newTicket = { request, priority};
    let added = false;

for (let i = 0; i < this.tickets.length; i++) {
  if (newTicket.priority < this.tickets[i].priority) {
    this.tickets.splice(i, 0, newTicket);
    added = true;
    break;
  }
}
    if (!added) {
      this.tickets.push(newTicket);
    }
  }

  dequeue() {

    return this.tickets.shift();
  }

  size() {
    return this.tickets.length;
  }

print() {
  this.tickets.forEach(item => {
    console.log(`${item.request}, Priority ${item.priority}`);
  });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();
// enqueud all
urgentRequests.enqueue("Ticket #301 - Install Browser", 3);
urgentRequests.enqueue("Ticket #302 - Server Offline", 1);
urgentRequests.enqueue("Ticket #303 - Faculty PC Failure", 2);
urgentRequests.enqueue("Ticket #304 - Internet Laboratory Down", 1);

// initial order
console.log("Initial Priority Order:");
urgentRequests.print();

// first request
const processedRequest = urgentRequests.dequeue();
console.log('Processed Priority Request: ', `${processedRequest.request}, Priority ${processedRequest.priority}`);

// remaining request
console.log("Remaining Priority Requests:");
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    this.element = element; 
    this.next = null;       
  }
}

class LinkedList {
  constructor() {
    this.length = 0; 
    this.head = null; 
  }

  append(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node; 
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next; 
      }
      current.next = node; 
    }
    this.length++;
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false; // invalid position
    }
    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node; 
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      previous.next = node; 
    }
    this.length++;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null; 
    }
    let current = this.head;

    if (position === 0) {
      this.head = current.next; 
    } else {
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next; 
    }
    this.length--;
    return current.element;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.element === element) {
        return index; // found it
      }
      current = current.next;
      index++;
    }
    return -1; 
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index); 
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }
    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

console.log('\nPART D: COMPLETED REQUESTS');

completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// 4: Insert at position 0
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// 5: Insert at the end (use current size as position)
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// 6: Display complete list
console.log('Complete List:', completedRequests.toString());

// 7: Find index
console.log('Index of Ticket #402:', completedRequests.indexOf('Ticket #402 - Printer Connected'));

// 8: Remove at position 1
console.log('Removed at Position 1:', completedRequests.removeAt(1));

// 9: Remove by value
console.log('Removed by Value:', completedRequests.remove('Ticket #403 - Antivirus Updated'));

// 10: Final list and size
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());