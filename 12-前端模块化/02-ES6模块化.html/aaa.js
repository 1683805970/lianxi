let name = '小明'
let age = 18
let flag = true

function sum(num1,num2) {
    return num1 + num2
}

//1.导出方式一
export {
    flag , sum
}

//2.导出方式二
export let num141 = 1000;
export let height = 1.88;

// 3.导出函数/类
export function mul(num1,num2){
    return num1 + num2
}

export class person{
    run() {
        console.log('呵呵哈哈哈！');
    }
}

