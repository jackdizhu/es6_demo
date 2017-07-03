
import {test1} from './test1.js';

class index extends test1 {
    // 函数名 跟 父类 相同(会覆盖父类 同名方法)
    // constructor() {
    //     console.log('this is constructor2');
    // }
    index(){
        console.log('index');
    }
}

export {index}
