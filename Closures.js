
function outerFunction() {
    let outerVariable = 'I am from outer function';
    return function innerFunction() {
        console.log(outerVariable);
    };
}

let innerFunc = outerFunction(); //outer function returns function
innerFunc(); //assign function to inner function