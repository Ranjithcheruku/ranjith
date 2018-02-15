debugger;
String.prototype.myIndexOf = function(char) {
	var str = this;
	for(var i=0; i<str.length; i++) {
		if(str.charAt(i)== char) {
			return i; // when a match is found we are stopping the program and return the value
		}
	}
	return -1;
};

String.prototype.myLastIndexOf = function(char) {
	var str = this;
	var result =-1;
	for(var i=0; i<str.length; i++) {
		if(str.charAt(i)== char) {
			result = i; // when a match is found we are assigning index to result 
		}
	}
	return result;
};

String.prototype.myIncludes = function(char) {
	var str = this;
	for(var i=0; i<str.length; i++) {
		for(var j=0; j<char.length; j++) {
			if(str.charAt(i+j)== char.charAt(j)) {
				if(j == char.length-1) { // all the character in the char are sequenctial this condition will be true
					return true;
				}
			} else {
				break;
			}
		}
	}
	return false;
};

String.prototype.myLowerCase = function() {
	var str = this;
	var result = ''
	for(var i=0; i<str.length; i++) {
		if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 ) { // if its an upper case value convert to lower case and add to the string
			// its a capital letter
			result = result + String.fromCharCode(str.charCodeAt(i) + 32);
		} else { // if  its not upper case value add that directly
			result = result + str.charAt(i);
		}
	}
	return result;
};

String.prototype.mySlice = function(firstIndex, lastIndex) {
	var str = this;
	var result = ''
	for(var i=firstIndex; i<lastIndex; i++) {
		result = result + str.charAt(i);
	}
	return result;
};

var a = 'Hello FEDERAL SOFT';
var name = "RANJITH";
var js = "JavaScript";
/*console.log(a.myIndexOf('l'));
console.log(a.myLastIndexOf('l'));
console.log(a.myIncludes('l'));
console.log(a.myLowerCase());
console.log(name.myLowerCase());
console.log(js.myLowerCase());
console.log(a.mySlice(8,20));*/
console.log(a.myIncludes('0'));