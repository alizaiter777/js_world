
const input=prompt("Enter a number");
let a=0
let b=1
for(let i=0;i<input;i++){
   c=a+b
   a=b
   b=c
   console.log(c);
}