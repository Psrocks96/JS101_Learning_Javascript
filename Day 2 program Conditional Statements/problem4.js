let storedUser="abc@gmail.com";
let storedPass="123xyz";
let user="abc@gmail.com";
let pass="12 3xyz";
if (storedUser==user){
if(storedPass==pass){
console.log("Login Successful");
}else{
console.log("Wrong Password");
}
}else{
console.log("Incorrect username");
}