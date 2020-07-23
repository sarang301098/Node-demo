var count = function(arr){
    return 'This is have '+arr.length+' elements.';
}

var add = function(a, b){
    return `Sum of the two num is : ${a+b}`;
}

var pi = 3.142;

// module.exports.count = count;
// module.exports.add = add;
// module.exports.pi = pi;

module.exports = {
    count: count,
    add: add,
    pi: pi
}