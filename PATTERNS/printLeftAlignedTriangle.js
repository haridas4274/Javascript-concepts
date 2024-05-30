// Loop through each level of the triangle.
// Calculate the number of stars as i.
// Print the stars directly, without leading spaces.

function printLeftAlignedTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let stars = '*'.repeat(i);
      console.log(stars);
    }
  }
  
  printLeftAlignedTriangle(5);
  
// *
// **
// ***
// ****
// *****