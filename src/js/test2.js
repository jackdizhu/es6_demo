
import {test1} from './test1.js';

class index extends test1 {
    // 函数名 跟 父类 相同(会覆盖父类 同名方法)
    // constructor() {
    //     console.log('this is constructor2');
    // }
    index(){
        console.log('index');
    }
    test2(...arg){
        //  参数加 ... 表示多个参数 => 11 "aaa" "log01"
        console.log(...arg,'log01');
        // 参数不加 ... 表示一个数组参数 => [11, "aaa"] "log02"
        console.log(arg,'log02');
    }
}

export {index}
