let str="Iron man is my favorite superhuro";
let c=0;
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    c++;    
  }
}
if(str.length!=0){
  console.log("Number of words in string are",c+1);
}else{
  console.log("Number of words in string are 0");
}

