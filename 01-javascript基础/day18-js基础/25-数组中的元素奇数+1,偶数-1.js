// 25.已知arr数组内容[1, 3, 5, 8, 10, 11, 16],编码实现：数组中所有奇数加1,偶数-1,最后打印数组内容

// 步骤
// 1. 声明一个数组
var arr = [1, 3, 5, 8, 10, 11, 16];
// 2. 循环遍历数组
for (var i = 0; i < arr.length; i++) {
    // 3. 判断是奇数还是偶数
    if (arr[i] % 2 == 0) {
        // 3.1 如果是偶数就让值-1 
        arr[i] -= 1;
    } else {
        // 3.2 如果是奇数就让值+1 
        arr[i] += 1;
    }
}
console.log(arr);