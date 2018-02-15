function seven () {
return 7;
}

function times (callback) {
	var val = callback(); // val --> 7
	return function  () {
	    return{
	        val: val,
	        operations: '*'
	    };
	};
}


function five (callback){
var obj  = callback();
var a = obj ['val'];
var b = obj ['operation']
var c = 5;
return eval (a+b+c) ;
}
console.log(five(times(seven))) ;
// seven -- reference
// times -- executed

//
// five // function reference
// five() // executed function