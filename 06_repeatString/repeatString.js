const repeatString = function(str,num) {
    if (num<0) return 'ERROR';
    let x='';
    for (i=0; i<num;i++){
        x += str;
    }
    return x;
};

repeatString('hello',10)
// Do not edit below this line
module.exports = repeatString;
