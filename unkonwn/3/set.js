var obj = {
	get a(){
		return this._a_;
	},
	set a(val){
		this._a_ = val*2
	}
};
obj.a =2;
obj.a;			//4