'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function compareNumbers(a, b) {
  return a - b;
}

function getSecondLargest(nums) {
    nums.sort(compareNumbers);
    const max = nums[nums.length-1];
    // return max;
    let i = nums.length-1
    for(i; i>=0; i--){
        if (nums[i] != max){
            return nums[i]
        }
    }
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
