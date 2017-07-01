
import {test1} from './test1.js';

class index extends test1 {
    // 继承不能写 构造函数
    // constructor() {
    //     console.log('this is constructor2');
    // }
    index(){
        console.log('index');
    }
}

export {index}
