function Controller(){
	this.errors = [];
}
Controller.prototype.showDialog= function(title,msg){
	//
};
Controller.prototype.success = function(msg){
	this.showDialog("Success",msg);
};
Controller.prototype.failure = function(err){
	this.errors.push(err);
	this.showDialog("Error",err);
};
//子类
function LoginController(){
	Controller.call(this);
}
//子类关联父类
LoginController.prototype = Object.create(Controller.prototype);
LoginController.prototype.getUser = function(){
	return document.getElementById("login_username").value;
};
LoginController.prototype.getPassword = function(){
	return document.getElementById("login_password").value;
};
LoginController.prototype.validateEntry = function(user,pw){
	user = user||this.getUser();
	pw = pw||this.getPassword();
	if (!) {}
}
