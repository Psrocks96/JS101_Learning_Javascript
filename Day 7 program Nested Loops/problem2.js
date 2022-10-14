let limit=15;
for(let i=1;i<=limit;i++){
  let c=0;
  for(let j=1;j<=i;j++){
    if(i%j==0){
      c++;
    }
  }
  if(c==2){
    console.log(i);
  }
}