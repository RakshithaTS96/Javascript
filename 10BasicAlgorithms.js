// 1. Reverse a String, 
// 2. Palindrome Checker, 
// 3. Factorial Calculation, 
// 4. Fibonacci Sequence, 
// 5. Find the Longest Word,
// 6. Title Case a Sentence, 
// 7. Find the Largest Number in an Array, 
// 8. Check for Prime Numbers, 
// 9. Count Characters in a String in javascript,
// 10. Binary Search

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // Output: "olleh"
  

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
console.log(factorial(5)); // Output: 120
  

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n + 1);
  }
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"


function titleCase(sentence) {
    return sentence.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
console.log(titleCase("I'm a little tea pot")); // Output: "I'm A Little Tea Pot"


function findLargestNumber(arr) {
    return Math.max(...arr);
  }
console.log(findLargestNumber([10, 5, 100, 2, 1000])); // Output: 1000


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
console.log(isPrime(29)); // Output: true


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
console.log(isPrime(29)); // Output: true


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1; // Target not found
  }
  
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 7)); // Output: 6
console.log(binarySearch(sortedArray, 11)); // Output: -1
  
  
  
  

  

  