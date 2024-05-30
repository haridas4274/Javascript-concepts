// Loop from height down to 1.
// Calculate leading spaces as height - i.
// Calculate stars as 2 * i - 1.
function printInvertedPyramid(height) {
    for (let i = height; i >= 1; i--) {
      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars + spaces);
    }
  }
  
  printInvertedPyramid(5);

//   *********
//    *******
//     *****
//      ***
//       *