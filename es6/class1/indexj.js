console.log( 'hello wrld');

(function) {
	var a =5;
	console.log(a);
})();

{
	let b = 4;
	var c = 3;
	console.log(b);
	function add(a,b) {
		return a+b;
	}

}
console.log(c);

const pi = 3.16;
console.log(pi);

let multiply = (a,b) => a*b;

console.log('multiplication of 4 & 5 is :', multiply(4,5));

let square = (a) => a*a;
console.log('the 6 square is :', square(6));

//lexicle 

let obj = {
	fruits : ['apple','mango','banana','pineapple'],
	func1 : function () {
		var a = 20;
		this.fruits.forEach((item)=>{
			console.log(a)
			this.func2(item);
		});
	
  },
  func2: function(param) {
	console.log(param)
  }
}
