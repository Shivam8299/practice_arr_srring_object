const input = require("readline-sync")
let array = input.question("Enter the length of array : ")
let newArr = [];
    for(let i=0; i<array; i++){
        newArr.push(input.question("number :-"));
    }

    const maxNum = (num)=>{
        return num.reduce((pre, cur)=>{
            return pre>cur?pre:cur
        })
    }
    const minNum = (num)=>{
        return num.reduce((pre,current)=>{
            return current>pre? pre:current
        })
    }
    console.log(maxNum(newArr))
    console.log(minNum(newArr))
