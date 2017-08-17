foo:for (var i = 0; i < 4; i++) {
	for(var j=0;j<4;j++){
		if (j==i) {
			//继续外层循环
			continue foo;
		}
		//跳过奇数
		if ((j*i)%2 ==1) {
			//继续内层循环
			continue ;
		}
		console.log(i,j);
	}
}
/*1 0
  2 0
  2 1
  3 0
  3 2
*/
foo:for (var i = 0; i < 4; i++) {
	for(var j=0;j<4;j++){
		
		if ((j*i)>=3) {
			console.log('stopping',i,j);
			break foo;				//跳出foo所在的循环块
		}
		console.log(i,j);
	}
}
/*
0 0
0 1
0 2
0 3
1 0 
1 1
1 2
stopping 1 3
*/
foo:for (var i = 0; i < 4; i++) {
	for(var j=0;j<4;j++){
		
		if ((j*i)>=3) {
			console.log('stopping',i,j);
			break ;				//跳出foo所在的循环块
		}
		console.log(i,j);
	}
}


/*
0 0
0 1
0 2
0 3
1 0
1 1
1 2
stopping 1 3
2 0
2 1
stopping 2 2
3 0
stopping 3 1
*/
