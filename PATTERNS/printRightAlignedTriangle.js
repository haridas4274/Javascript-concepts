// Use a loop to iterate through each level of the triangle.
// Calculate leading spaces as height - i.
// Calculate the number of stars as i.
// Print each line with spaces followed by stars.

function printRightAlignedTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(i);
      console.log(spaces + stars);
    }
  }
  
  printRightAlignedTriangle(5);


//     *
//    **
//   ***
//  **** 
// *****