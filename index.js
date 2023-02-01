// sum of all numbers in array in anonymous function
var res = function (marks) {
    let sum = 0;
  for (let mark of marks) {
    sum = sum + mark;
  }
  return sum;
  }
  console.log(res([10,20,30,40,50]));
  
  // print odd numbers in array using arrow function
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
  let odds = arr.filter(n => n%2)
  console.log(odds)
  
  
  // print sum of all numbers in array using arrow function
  var numbers = [3, 5, 7, 2];
  var sum = numbers.reduce((x, y) => x + y);
  console.log(sum);
  
  // return all prime numbers in array using arrow function
  var arr1 = [1,2,3,4,5,6,7,8,9,10,11];
  const res1 = arr1.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  });
  console.log(res1);
  
  // return all the palindromes in array using arrow function
  let palindromeArray = (arr2) => {
    let isPalindrome = true;
    for(let i = 0; i < arr2.length / 2; i++) {
        if(arr2[i] !== arr2[arr2.length-i-1]){
          isPalindrome = false; 
          break;
        }
    }
    return isPalindrome;
  }
  console.log(palindromeArray([1,2,2,1]));
  