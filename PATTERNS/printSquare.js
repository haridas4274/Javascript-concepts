// Loop size times.
// Each line is a repetition of stars equal to size.
function printSquare(size) {
    for (let i = 0; i < size; i++) {
      let line = ' *  '.repeat(size);
      console.log(line);
    }
  }
  printSquare(5);

// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
