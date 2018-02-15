// sample print from 10 to 100

/*for(var i=10; i<=100; i++) {
	console.log(i);
}*/

var a = [10,4,2,9,7,3,8,5,0,6,1];
console.log(a);
/*var min = a[0]; // 10

// print every item in this array
for(var i=0; i<a.length; i++) { // 0 1 2 3 4 ..... 8 9 10 11(false)
	if(min > a[i]) { // 10>10(false), 10>4(true), 4>2(true), 2>9(false) ... 2>0(true) ..
		min = a[i]; // 4 2 0
	}
	//console.log(a[i]); // a[i] --> current index value in array a
}

console.log(min)
// whats the least number in this array

// swapping using the temp variable
var b = 20;
var c = 30;
var temp; // undefined
temp = b; // b,temp = 20
b = c; // b=30
c = temp; // c, temp =20 
console.log('b :',b,', c: ',c)*/


for(var j=0; j<a.length; j++) {
	for(var i=0; i<a.length-1; i++) {
		// a[i]// curent index value in array
		// a[i+1] // next value in array
		// if curr value is > next value swap the curr value and next value?
		if(a[i]<a[i+1]) {
			var temp;
			temp = a[i];
			a[i] = a[i+1];
			a[i+1] = temp;
		}
		console.log(a)
	}
	console.log('--------------------------');
}
console.log(a);