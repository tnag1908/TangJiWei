// 9.定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
// 步骤
// 1.声明一个数组
var arr = [1, 3, 4, 7, 8];
// 2. 声明一个变量 计数
var num=0;
// 3. 循环遍历数组
for(var i=0;i<arr.length;i++){
    // 4. 判断下标与对应的值是不是偶数
    if(i%2==0&&arr[i]%2==0){
        // 4/1如果是就人计数变量+1
        num+=1;
        // 4.2 打印元素
        console.log(arr[i]);
    }
}
// 5 打印个数
console.log(num);