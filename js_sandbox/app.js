const firstName = 'William';
const lastName = 'johnson';
const age = 36;


let val;

val = firstName + lastName;

//concatenation
val = firstName + ' ' + lastName;

//approved
val = 'Brad ';
val += 'traversy';


val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping
val = "That's awesome,I cant wait";

//length
val = firstName.length

//concat
val = firstName.concat('  ',lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexof()
val = firstName.indexOf('V');
val = firstName.lastIndexOf('B');

// charAt()
val = firstName.charAt('2');
//get last char
val = firstName.charAt();(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3); 
var str=' hgfhfjfj   Brad jhgjyggiugigk';
var tags='hgk,uhluhl'


//split()
val = str.split('');
val = tags.split(',');

//replace()
val = str.replace('Brad','Jack');

console.log(val);
