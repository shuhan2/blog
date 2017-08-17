var car={
	asd:"red"
};
// var car1 = Object.create(car);
// var car2 = Object.create(car);
// car1.showcolor = 'blue';
car.prototype.showcolor=function(){console.log("asd")};
// car2.showcolor=function(){console.log("asd")};
