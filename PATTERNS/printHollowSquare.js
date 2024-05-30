// First and last lines are filled with stars.
// Middle lines have stars at the beginning and end, with spaces in between.
function printHollowSquare(size) {
    for (let i = 0; i < size; i++) {
      if (i === 0 || i === size - 1) {
        console.log('*'.repeat(size));
      } else {
        console.log('*' + ' '.repeat(size - 2) + '*');
      }
    }
  }
  
  printHollowSquare(5);

// *****
// *   *
// *   *
// *   *
// *****