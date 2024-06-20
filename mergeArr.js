let num1 = [1,4,7,9,6,3,6];
let num2 = [7,8,9,7,64,7];
let newArr = num1.concat(num2);

let sortedArr = newArr.sort(function(a,b){
    return a-b;
})
console.log(sortedArr)