
import {test1} from './test1.js';

class index extends test1 {
    // 定义 跟父类 同名方法 会产生覆盖
    // constructor() {
    //     console.log('this is constructor2');
    // }
    index(){
        console.log('index');
    }
}

export {index}
