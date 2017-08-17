var p = new Promise(function(resolve,reject){
	reject("Oops");
});

var p2 = p.then(
	function fulfilled(){
		//永远不会到达这里
	}
	//假定的拒绝处理函数，如果省略或者传染任何非函数值
	//function(err){
	//   throw err
	// }
);

//