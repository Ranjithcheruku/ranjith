var a = [];
var b = new Array();
console.log(a);
console.log(b);
var c = [1,2,3,4,5,6,7];
console.log(c);
var d = [23, 'hello', true, undefined, null, {}, [1,2,3], function(a,b){return a*b;}]
console.log(d);
var e = new Array(1,2,3,4,5,6,7);
console.log(e);
var f = new Array(23, 'hello', true, undefined, null, {}, [1,2,3], function(a,b){return a*b;})
console.log(f);
var g = new Array(5); // an array of length 5 is created
console.log(g)
console.log(typeof a);
console.log(Array.isArray(a));
console.log('---------------------')
console.log(Array.from('Hi every one!'))

function multiply(a,b) {
	var arg =  Array.from(arguments)
	console.log(arguments);
	var arg2 =arg.concat([1,2]);
	console.log(arg2);
	return a*b
}
multiply(5,6,7,8);

var h = ['hi', 'hello'];
var j = ['how', 'are'];
var k = ['you', 'doing'];
var i = h.concat(j,k);
console.log(i);
var m = i.entries();
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);


