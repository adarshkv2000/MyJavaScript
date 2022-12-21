const prompt = require("prompt-sync")();
let a=parseInt(prompt("Enter the size of array:"));
const arr1=[]
for(let i=0;i<a;i++){
    const num=parseInt(prompt("Enter the element:"));
    arr1.push(num);
}
console.log(arr1)
for(let i=0;i<a-1;i++){
    pos=i
    for(let j=i;j<a;j++){
        if(arr1[i]>arr1[j]){
            pos=j;
        }
    }
    if(pos !== i){
        temp=arr1[i];
        arr1[i]=arr1[pos];
        arr1[pos]=temp;
    }
}

console.log(`Sorted Array is : ${arr1}`)
