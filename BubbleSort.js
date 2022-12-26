n=[1001,1005,2000,1010,1003,1101];
m=['20k','25k','30k','35k','40k','45k'];
console.log(`Before Sorting Employee_id : ${n} \n Before Sorting Salary : ${m} `)
for( let i=0; i<n.length;i++){
    for(let j=0;j<n.length-i-1;j++){
        if( n[j] > n[j+1]){
            let temp=n[j];
            n[j]=n[j+1];
            n[j+1]=temp;
            temp=m[j];
            m[j]=m[j+1];
            m[j+1]=temp;
        }
    }
}
console.log(`After Sorting Employee_id : ${n} \n After Sorting Salary : ${m} `)