function invokeFunctions(...functionsAndArgs) {
    return functionsAndArgs.map(([fn, ...args]) => fn(...args));
}

// Example usage:
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

const result = invokeFunctions(
    [add, 5, 3],       
    [subtract, 10, 4],  
    [multiply, 7, 2]    )

console.log(result); 
