(function () {
    var o = {};
    Object.defineProperties(o,{
        "a": {
            value:1,
            writable:true,//可写
            configurable:false,//不可配置
            enumerable:true
            //enumerable 默认为 false 不可枚举
        },
        "b":{
            get :function(){
                return this.a;
            },
            configurable:false
        }
    });
    // console.log(o.a);   //1
    // o.a = 2;            //修改值成功,writable 为 true
    // console.log(o.a);   //2
     Object.defineProperty(o,"a",{value:3});//同样为修改值成功
    console.log(o.a);   //3
    for(var item in o){ //遍历所有可枚举属性包括继承的属性
        console.log(item);
    }

    //a????????????
    //将其属性 b 的属性描述符从存取描述符重新配置为数据描述符
    // Object.defineProperty(o,"b",{value:3});//抛出异常,因为 configurable 为 false
})();