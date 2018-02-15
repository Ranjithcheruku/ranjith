// addition
var a = 1+2;
console.log(a);
console.log(typeof a);
var b = 'hi'+'hello';
console.log(b);
console.log(typeof b);
var c = '1'+ 2;
console.log(c);
console.log(typeof c);

// subtraction -- the result can only be a Number

var d = 1-2;
console.log(d);
console.log(typeof d);
var e = 'hi'-'hello';
console.log(e); // NaN
console.log(typeof e);
var f = '1'- 2; // String - Number --> can this string be converted to be a number -- yes
console.log(f);
console.log(typeof f);

// multiplcation

var g = 1*2;
console.log(g);
console.log(typeof g);
var h = 'hi'*'hello';
console.log(h); // NaN
console.log(typeof h);
var i = '1'* 2; // String - Number --> can this string be converted to be a number -- yes
console.log(i);
console.log(typeof i);

console.log('---------------------')
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(1));

console.log('---------------------')
console.log(Number.isInteger(12.2))
console.log(Number.isInteger(14))

console.log('---------------------')
console.log(Number.isNaN(NaN))
console.log(Number.isNaN("Hello"))
console.log(Number.isNaN(22))



console.log('---------------------')
console.log(Number.isSafeInteger(9007199254740990))
console.log(Number.isSafeInteger(9007199254740992))
console.log(Number.isSafeInteger(1))

console.log('---------------------')

var k = 77.1234
console.log(k.toExponential())
console.log(k.toExponential(1))
console.log(k.toExponential(7))
console.log(k.toExponential(3))

console.log('---------------------')
var k = 77.1234
console.log(k.toFixed())
console.log(k.toFixed(1))
console.log(k.toFixed(7))
console.log(k.toFixed(3))

console.log('---------------------')
var numObj = 5.123456;

console.log(numObj.toPrecision());    // logs '5.123456'
console.log(numObj.toPrecision(5));   // logs '5.1235'
console.log(numObj.toPrecision(2));   // logs '5.1'
console.log(numObj.toPrecision(1));   // logs '5'

numObj = 0.000123

console.log(numObj.toPrecision());    // logs '0.000123'
console.log(numObj.toPrecision(5));   // logs '0.00012300'
console.log(numObj.toPrecision(2));   // logs '0.00012'
console.log(numObj.toPrecision(1));   // logs '0.0001' 

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'

console.log('---------------------')
var num = 255;
console.log(num.toString(2)); // binary
console.log(num.toString(8)); // octal
console.log(num.toString(10)); // decimal
console.log(num.toString(16)); // hexa decimal