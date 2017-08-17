function *main() {
	// body...
	var x = yield "Hello World";
	yield x.toLowerCase()			//error
}
var it = main();

it.next().value;					//Hello World
try{
	it.next(42);
}
catch(err){
	console.log(err);			//TypeError
}