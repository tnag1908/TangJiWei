// 13.定义2个长度为5的字符串数组arrA和arrB,arrA包含元素["a","b","c","d","e"];
// 遍历arrA中的所有元素并按逆序存储在数组arrB中,并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素,arrB的结果如下,var arrB = ["e","d","c","b","a"]
// 步骤
// 1. 声明一个数组
var arrA=["a","b","c","d","e"];
// 2 .声明一个空数组
var arrB=[];
// 3. 倒叙变量数组
for(var i=arrA.length-1;i>=0;i--){
    // 4. 将倒叙遍历的数组添加就新数组中
    arrB.push(arrA[i]);
}
console.log(arrB);  