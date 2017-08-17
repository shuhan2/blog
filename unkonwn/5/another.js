var anotherObject = {
	a:[1,2,3]
};
var myObject = Object.create(anotherObject);
myObject.a.push(4);
anotherObject.a;		//[1, 2, 3, 4]