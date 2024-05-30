// Similar to the diamond, but handle middle spaces for the hollow part.
function printHollowDiamond(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      if (i === 1) {
        console.log(spaces + '*');
      } else {
        let middleSpaces = ' '.repeat(2 * i - 3);
        console.log(spaces + '*' + middleSpaces + '*');
      }
    }
    for (let i = height - 1; i >= 1; i--) {
      let spaces = ' '.repeat(height - i);
      if (i === 1) {
        console.log(spaces + '*');
      } else {
        let middleSpaces = ' '.repeat(2 * i - 3);
        console.log(spaces + '*' + middleSpaces + '*');
      }
    }
  }
  
  printHollowDiamond(5);
  

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
