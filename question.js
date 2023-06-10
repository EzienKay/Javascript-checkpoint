//Create a function that takes two numbers as arguments and returns their sum.

function addition(a, b) {
	return a + b
}

//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
  	let sum = 0;
 	 for (let i = 1; i <= num; i++) {
    	sum += i;
  	}
  return sum;
}

//Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
		let ans = (base * height)
		return ans /= 2;
}

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
		let ans = side1 + side2
		return ans -= 1;
}

// a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
	return () => str 
}

//Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

function makePlusFunction(baseNum) {
	return (plusFive) => plusFive + baseNum
}

//Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
	let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}

//Write a function that returns an anonymous function, which adds n to its input

function addsNum(n) {
	return (input) => input + n;
}