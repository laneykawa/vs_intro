function addition(a, b) {
	return a + b
}

function triArea(base, height) {
	return (base * height) / 2
}

// 2/09/2020 Warmup

function lessThan100(a, b) {
	if (a + b < 100)
		return true
	else return false
}

// 2/11/2020 Warmup, get first value

function getFirstValue(arr) {
	return arr[0];
}

// 2/12/2020 Warmup
function findPerimeter(height, width) {
	return (2 * height) + (2 * width)	
}

function squared(b) {
	return Math.pow(b,2);
}

function howManySeconds(hours) {
	return hours * 60 * 60
}

//2/18/2020
function lessThan100(a, b) {
	if (a + b < 100)
		return true
	else return false
}

//2/23/2020
function isSameNum(num1, num2) {
	return num1 === num2
}

// 3/5/2020 
 function convert(hours, minutes) {
	return (hours * 60 * 60) + (minutes * 60)
}

// 4/1/2020 Destructuring Arrays
const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]
console.log(a)
console.log(b)