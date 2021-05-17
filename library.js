function take(array, n) {
    if (n >= array.length) {
        return array;
    } else {
        return array.slice(0, n);
    }
}

function skip(array, n) {
    return array.slice(n, array.length)
}

function map(array, callback) {
    return array.map(callback);
}

function reduce(array, callback, initialValue = 0) {
    return array.reduce(callback, initialValue);
}

function filter(array, callback) {
    return array.filter(callback);
}

function foreach(array, callback) {
    return array.forEach(callback);
}