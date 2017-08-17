function onlyOne(){
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		//跳过假值，和处理0一样，但是避免了NaN
		if(arguments[i]){
			sum+=arguments[i];debugger;
		}
	}
	return sum == 1
}

var a = true;
var b = false;
// onlyOne(b,a);				//true
onlyOne(b,a,b,b,a)					//false