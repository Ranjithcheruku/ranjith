Array.prototype.myConcat = function (inpArr) {
	var currArr = this;
	console.log ('inpArr: ', inpArr);
	console.log('currArr:  ', currArr);
	var result  = [];
	for (var i=0; i<currArr.length; i++) {
	//console.log(currArr[i]);
	result.push(currArr[i]); // add a new item at the end of the array
	}
	for(var i=0; i<inpArr.length;i++) {
	     //console.log(inpArr[i]) ;
	      result.push(inpArr[i]);
    }
    return result;
}
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
var arr3 = arr1.myConcat(arr2); // [1,2,3,4,5,6,7,8]
console.log(arr3)