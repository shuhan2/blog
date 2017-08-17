// jsonwebtoken
var jwt = require('jsonwebtoken');
let token = function(key){
	key = key||'shuhan';
	return{
		// jwt.sign(payload, secretOrPrivateKey, [options, callback])
		//create
		createToken:function(obj,term){
			var tok = jwt.sign(obj,key,{
				 'expiresIn':term
			})
			return tok;
		},
		validToken:function(obj,tok){
			/*
			jwt.verify(token, 'wrong-secret', function(err, decoded) {
		  // err 
		  // decoded undefined 
		});
			*/
			var flag = true;
			try {
		 		 let decoded = jwt.verify(tok, key);
		 		 // console.log(decoded);
		 		 for(option in obj){
		 		 	if (obj[option] != decoded[option]) {
		 		 		flag = false;
		 		 	}
		 		 }
			} 
			catch(err) {
		  	// err 
		  	console.log('token failed',err)
		  	flag = false;
			}
			finally{
				console.log(flag);
				return flag;
			}
		}
	}
}

//return token
module.exports = token;