//传统的JavaScript类Vehicle
function Vehicle(){
	this.engines = 1;
}

Vehicle.prototype.ignition = function(){
	console.log("Turning on my engine.")
};
Vehicle.prototype.drive =function(){
	this.ignition();
	console.log("Steering and moving forward")
};
//寄生类Car
function Car(){
	var car = new Vehicle();
	car.wheels = 4;
	//保存到Vehicle::drive()的特殊引用
	var vehDrive = car.drive;
	//重写Vehicle::drive()
	car.drive = function(){
		vehDrive.call(this);
		console.log("Rolling on all " + this.wheels +" wheels!")
	};
	return car;
}
var myCar = new Car();
myCar.drive();
//Turning on my engine.
// Steering and moving forwar
// Rolling on all 4 wheels!