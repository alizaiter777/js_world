

const input=prompt("Enter number of rows : ");
for(let i=0;i<input;i++){
    for(let j=0;j<input-i-1;j++){
        console.log("",end="");
    }
    for(let k=0;k<2*i+1;k++) {
        console.log("*",end="")
    print()    
    }   
    
}

for(let i=0;i<input;i--){
    for(let j=0;j<input-i-1;j++){
        console.log("",end="");
    }
    for(let k=0;k<2*i+1;k++) {
        console.log("*",end="")
    print()    
    } 
}