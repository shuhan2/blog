var gimmeSomething = (function(){
	var nextVal;
	return function(){
		if (nextVal == undefined) {
			nextVal = 1;
		}
		else{
			nextVal = nextVal+6;
		}
		return nextVal;
	}
})();

var something = (function)