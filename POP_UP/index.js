

//simple
    function promptUser(request, callback) {
        var userInput = prompt(request);
        callback(userInput);
    }

    function mainFunction() {
        var data = "Hi, what is your name?";
        promptUser(data, function(response) {
            alert("Hello, " + response + "!");
        });
    }
    mainFunction();
