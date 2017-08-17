function add(a){

    var sum = 0;
    sum += a; 
    
    return function temp(b) { 
    
        if (arguments.length === 0) {
            return sum;
        } else {
            sum= sum+ b;
            return temp;
        }
    }
}

add(2)(3)(4)(5)(); //14

//通用的currying
 var curring = function(fn){
        var _args = [];
        return function cb(){

            if(arguments.length === 0) {
                return fn.apply(this, _args);
            }

            Array.prototype.push.apply(_args, [].slice.call(arguments));

            return cb;
        }


    }

    var multi = function(){

        var total = 0;
        var argsArray = Array.prototype.slice.call(arguments);
            argsArray.forEach(function(item){
                total += item;
            })

        return total
    };

    var calc = curring(multi);

    calc(1,2)(3)(4,5,6);			//不计算
console.log(calc()); 				//空白调用时真正计算

// currying 应用：提高通用性？？？？？？
function currying(fn) {
            var slice = Array.prototype.slice,
            __args = slice.call(arguments, 1);
            return function () {
                var __inargs = slice.call(arguments);
                return fn.apply(null, __args.concat(__inargs));
            };
        }

function square(i) {
    return i * i;
}

function double(i) {
    return i *= 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

var mapSQ = currying(map, square);
mapSQ([1, 2, 3, 4, 5]); //[1, 4, 9, 16, 25]


var mapDB = currying(map, double);
mapDB([1, 2, 3, 4, 5]); //[2, 4, 6, 8, 10]