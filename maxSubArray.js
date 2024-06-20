const input = require("readline-sync");
let array = [];
let sum=0;
let num = input.question().split(",")
for(let i=0; i<num.length; i++){
    array.push(Number(num[i]))
}


for(let i=0; i<array.length; i++){
    for(let j=i; j<array.length; j++){
        let cur_sum=0;
        let arr1=[]
       for(let k=i; k<=j; k++){
            cur_sum+=array[k]
            arr1.push(array[k])
        }
        console.log(arr1)
        if(cur_sum>sum){
            sum=cur_sum;

        }
    }
}
console.log(sum)


