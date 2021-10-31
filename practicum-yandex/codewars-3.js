// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// describe( "maxSequence", function(){
//   it("should work on an empty array",function(){
//     Test.assertEquals(maxSequence([]), 0);
//   });
//   it("should work on the example",function(){
//     Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//   });
// });

var maxSequence = function(arr){
  // ...
}



// Create a function that accepts dimensions, of Rows x Columns, as parameters 
// in order to create a multiplication table sized according to the given dimensions. 
// **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number 
// in its first row times the number in its first column.

let matrix = []

function multiplicationTable(row,col){
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; i++) {
      matrix[i][j] = (i + 1) * (j + 1)
    }
  }
  return matrix;
}

multiplicationTable(2, 2);