function mixin(souruceObj,targetObj){
	for(var key in souruceObj){
		//只会在不存在的情况下复制
		if (!(key in targetObj)) {
			targetObj[key] = souruceObj[key];
		}
	}
	return targetObj;
}

var Vehicle = {
	engines: 1,
	ignition:function(){
		console.log("Turning on my engine.")
	},
	drive:function(){
		this.ignition();
		console.log("Steering and moving forward")
	}
};

var Car = mixin(Vehicle,{
	wheels :4,
	drive:function(){
		Vehicle.drive.call(this);
		this.ignition();
		console.log("Rolling on all"+this.wheels+" wheels!" +this.engines+" engines");
	}
});