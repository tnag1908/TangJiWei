// 30.左奇右偶
//     10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列,所有的奇数保存到数组左边,所有的偶数保存到数组右边。

// 步骤 
// 1. 声明一个数组
var arr=[26,67,49,38,52,66,7,71,56,87];
// 2. 声明一个空数组
var newarr=[];
// 3. 循环遍历数组
for(var i=0;i<arr.length;i++){
    // 4. 判断是奇数还是偶数
    if(arr[i]%2==0){
        // 4.1 如果是偶数 就添加在右边 也就是从后面添加
        newarr.push(arr[i])
    }else{
        // 4.1 如果是奇数 就添加在左边 也就是从前面添加
        newarr.unshift(arr[i])
    }
}
console.log(newarr);