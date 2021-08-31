// To get more practice with first-class functions, this lesson has three tests to pass that require you to write the following functions in the index.js file:

// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
// The returnsANamedFunction function should:

// take no arguments
// return a named function
// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function


function receivesAFunction(callback) {
    callback()
        return "test"
    
}

function returnsANamedFunction(){
    return function test() {
        
    }

}

function returnsAnAnonymousFunction(){
    return function(){}
}