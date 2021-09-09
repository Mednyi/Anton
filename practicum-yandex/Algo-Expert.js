// First task


const array = [3,5,-4,8,11,1,-1,6];
const targetSum = 10;

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        for (let  j = i + 1;  j < array.length;  j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]]      
            }
        }
    }
    return []
  // Write your code here.
}


//  Secod task

function isValidSubsequence(array, sequence) {
    let j = 0;
    for (let i = 0; i < array.length; i++)  {
        if (sequence[j] === array[i]) {
            j++;
        }
    }
  // Write your code here.
  return j === sequence.length;

}


const array = [5,1,22,25,6,-1,8,10]

const sequence = [1,6,-1,10]


