const removeFromArray = function(array, ...removal) {
    return array.filter(x=> !removal.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
