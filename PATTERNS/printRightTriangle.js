// Loop through each level.
// Print stars directly, with each row having an increasing number of stars.

function printRightTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let stars = '*'.repeat(i);
      console.log(stars);
    }
  }
  
  printRightTriangle(5);