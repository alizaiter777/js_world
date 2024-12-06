

let input = prompt("Enter a list of integers:");
let nums = input.split(" ").map(Number);

let even = [];
let odd = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) { 
        even.push(nums[i]);  
    } else {                 
        odd.push(nums[i]);   
    }
}

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
