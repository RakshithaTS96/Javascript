let courses = ["HTML", "CSS", "JavaScript", "React"];

//Array Length
console.log(courses.length);

// Joining the array elements
console.log(courses.join(' |  '));

//Declare three arrays
let arr1 = [11, 12, 13];
let arr2 = [14, 15, 16];
let arr3 = [17, 18, 19];

let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

// Array delete operator
let array = [1, 2, 3, 4, 5];

delete array[2];
console.log(array); 

// Array.push() Method
let fruits = ['apple', 'banana', 'mango'];

let newLength = fruits.push('orange');
console.log(fruits); 

//Array.pop() Method
let numbers = [10, 20, 30, 40, 50];

let removedElement = numbers.pop();

console.log(numbers); 
console.log(removedElement); 

// Array.splice() Method
let example = [10, 20, 30, 40, 50];

let removedElements = example.splice(2, 1);

console.log(example); 
console.log(removedElements); 

// Array reverse method
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

let reversedNames = names.reverse();

console.log(names);







