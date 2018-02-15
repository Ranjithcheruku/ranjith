//addition
var a =1+2;
console.log(a;
console.log(type of a );
var b= 'hi'+'hello';
console.log(b);
console.log(type of b);
varc='1'+2;
console.log(c);
console.log(type of c);



//substraction-- the result can on;y in the number

var d=1-2;
console.log(d;
console.log(type of d);
var e ='hi'-'hello';
console.log(e);//NaN
Console.log(type of e);
var f = '1'-2;//string-number--> can this string be converted to be a number
--yes
console.log(f);
console.log(type of f);

//multiplication

var g =1*2;
console.log(g);
console.log(type of g);
var h ='hi'*'hello';
console.log(h);//NaN
console.log(type of h);
var i ='1'*2; // string-number -->can this string be converted to be a number  --yes
console .lof(i);
console/log(type of i);




console.log('----------')
console,log(Number.isfinite(infinity));
console.log(Number.isfinite(NaN));
console.log(Number.isfinite(1));


console.log ('-----------------')
console.log(Number.isInteger(12.2))
console.log(Number.isInteger(14))



console.log('--------------')
console.log(Number.isNaN(NaN))
console.log(Number.isNaN('Hello'))
console.log(Number.isNaN(22))


console.log('----------------')
console.log(number.isSafeinteger(9007199254740990))
console.log(number.issafeInteger(9007199254740992))
console.log(number.isSafeInteger(1))

console.log('--------------')
var k= 77.1234
console.log(k.toExponenetial())
console.log(k.toExponential(1))
console.log(k.toExponential(7))
console.log(k.toExponential(3))

console.log('-----------')
var k = 77.1234
console.log(k.toFixed())
console.log(k.toFixed(1))
console.log(k.toFixed(7))
console.log(k.toFixed(3))

console.log('-----------')
var numobj  = 5.123456;

console.log(numobj.toprecision());   //logs '5.123456'
console.log(numobj.toprcision(5));   //logs '5.1235'
console.log(numobj.toprecision(2));  //logs   '5.1'
console.log(numobj.toprecision(1));   //logs   '5' 

numObj = 0.00123

console.log (numObj.tpprecision());   //logs  'o.000123'
console.log(numobj.toprecision(5));    // logs   '0.00012300'
console.log(numObj.toprecision(2));    //  logs  '0.0012'
console.log(numobj.toprecision(1));   //logs  '0.0001'

console.log('-----------------------')
var num =255;
console.log(num.tostring(2));  // binary
console.log(num.tostring(8);  //octal
console.log(num.tostring(10));  // decimal
console.log(num.tostring(16));   //hexa decimal





























