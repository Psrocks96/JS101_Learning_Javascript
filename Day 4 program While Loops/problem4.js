let s=1;
let e=100;
let i=s;
let sum=0;
let count=0;
while (i<=e){
  if (i%2==0){
    sum=sum+i;
    count+=1
  }
  i++;
}
console.log("The average is", sum/count);