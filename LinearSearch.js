const prompt = require("prompt-sync")();
const input = parseInt(prompt("Length of array:"));
let arr1=[];
for( let i=0;i<input;i++)
{
    let num = parseInt(prompt("Enter the element:"));
    arr1.unshift(num)
}
const findNum= parseInt(prompt("Enter the number for searching:"))
let pos;
for(i=0;i<input;i++){
    if(arr1[i]===findNum){
            pos=i;
            break;
    }
    else{
        pos=-1;
    }
}
if(pos !==-1){
    console.log(`element found at postion: ${pos}`);
}
else{
    console.log("Element not found");
}
