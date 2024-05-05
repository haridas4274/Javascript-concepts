//Asynchronous JavaScript:

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // Output: Data fetched successfully
    })
    .catch(error => {
        console.error(error);
    });