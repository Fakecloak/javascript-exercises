
const fibonacci = function(n) {
    let start = 0;
    let end =1;
    let result = [];
    let temp;
    while(start<n){
        result.push(start);
        temp = start;
        start = end;
        end = temp + end;
    }
    return result;
};

//console.log(fibonacci(5))

// Do not edit below this line
module.exports = fibonacci;
