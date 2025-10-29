const fibonacci = function(n) {
    // Convert string to number if needed
    if (typeof n === 'string') {
        n = parseInt(n);
    }
    if (n == 0) return 0;

    // Validate: must be a finite number greater than 0
    if (typeof n !== 'number' || !Number.isFinite(n) || n <= 0) {
        return 'OOPS';
    }

    let start = 0;
    let end = 1;
    let temp;

    for(let i=1; i<=n;i++) {
        temp = start;
        start = end;
        end = temp + end;
    }

    return start;
};




//console.log(fibonacci(5))

// Do not edit below this line
module.exports = fibonacci;
