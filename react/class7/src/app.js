import deepFreeze from 'deep-freeze';
import axios from 'axios';

let a = {
	name : 'John',
	age : 26, 
	address : {
		street : '4 ny plaza',
		city : 'NY'
	}
}
// make it immutable
deepFreeze(a);
//
// a.address.city = 'New York';

// make deep copy
let b = Object.assign({},a);

//b.age = 24; // 

console.log(a);
console.log(b);
// shallow comparison is also false
console.log(a===b);

// pure function
function add(a,b) {
	// not modiying any arguments, no ajax calls
	return a+b;
}

// impure function
function add(a,b) {

	// make ajax call or db operations
	axios.get();
	return a+b;
}

// impure function
function func1(arr) {
	// we have modified a argument
	arr.push(2);
}

// impure function
function func2(arr) {
	// we have modified a argument
	arr[0]= 2;
	return arr
}


// pure function
function func2(arr) {
	// we made a deep copy of the array
	var result = Array.from(arr);
	// we have not modified the original arr argument
	result[0] = 2;
	return arr
}