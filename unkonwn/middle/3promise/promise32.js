var p3 = new Promise(function(reaolve,reject){
	resolve('B');
});
var p1=new Promise(function(resolve,reject){
	resolve(p3);
})
p2 =new Promise(function(resolve,reject){
	resolve('A');
});
p1.then(function(v){
	console.log(v);
})
p2.then(function(v){
	console.log(v);
})

//AB