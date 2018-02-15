var obj = {
	name : 'john', 
	age : 23, 
	salary : 250000
}; 
Object.freeze(obj);

function Employee (na, ag) {
	this.name = name;
	this.age = ag;
}
Employee.prototype.getName = function() {
	return this.name;
}
Employee.prototype.setName = function(param) {
	this.name = param;
}

function Person (na, ag) {
	this.name = name;
	this.age = ag;
}
var a = {
	getName : function() {
		return this.name;
	}, 
	setName : function(param) {
		this.name = param;
	}
}

Person.prototype = a;

var p1 = new Person('Ram', 21);



var e1 = new Employee('Sam', 27);
var e2 = new Employee('Sam', 27);
console.log(Object.is(e1,e1));
console.log(Object.isExtensible(obj));
console.log(Object.isExtensible(e1));
Object.seal(e1)
console.log(Object.isExtensible(e1));
//console.log(Object.getPrototypeOf(e1))

console.log(a.isPrototypeOf(p1))






