// Loop through each level of the pyramid.
// Calculate leading spaces as height - i.
// Calculate the number of stars as 2 * i - 1.
// Print each line with spaces, stars, and trailing spaces (for better visualization).

function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars + spaces);
    }
  }
  
  printPyramid(5);

//    *
//   ***
//  *****
// *******
//*********
