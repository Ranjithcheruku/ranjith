var obj = {
	name : 'john',
	age : 23,
	salary : 250000
};
object.freeze(obj);

function Employee  (na, ag)  {
	this.name = name;
	this.age = ag;
}
Employee.prototype.getName = function()   {
	return this.name;
}
Employee.prototype.setName  = function(param) {
	this.name = param;
}

function person (na,ag)   {
	this.name  = name;
	this.age = ag;
}
var a {
      getName  : function()  {
                 return this.name;
      },
      setName  : function(param) {
                this.name = param;
      }
}
person.prototype = a;

var p1 = new person ('Ram', 21) ;



     var e1  = new Employee('sam', 27);
     var e2  = new Employee('sam', 27);
     console.log(Object.is(e1,e1));
     console.log(Object.isExtensible(obj));
     console.log(Object.isExtensible(e1));
     object.seal(e1)
     console.log(Object.isExtensible(e1));
     //console.log(Object.getprototypeOf (e1))

     console.log(a.isprototypeOf)(p1))

