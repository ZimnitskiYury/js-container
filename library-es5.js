let arrayExtensionsES5 = {
  array: [],
  chain(inputArray) {
    this.array = inputArray.slice();
    return this;
  },

  take(n) {
    this.array = take(this.array, n);
    return this;
  },

  skip(n) {
    this.array = skip(this.array, n);
    return this;
  },

  map(callback) {
    return map(this.array, callback);
  },

  reduce(callback, initialValue) {
    return reduce(this.array, callback, initialValue);
  },

  filter(callback) {
    return filter(this.array, callback);
  },

  foreach(callback) {
    this.array = foreach(this.array, callback);
    return this;
  },

  value() {
    return this.array;
  },
};

function take(array, n) {
  let tempArray = [];

  if (n > 0) {
    for (let i = 0; i < array.length; i++) {
      if (i == n) {
        break;
      }
      tempArray.push(array[i]);
    }
  }

  return tempArray;
}

function skip(array, n) {
  let tempArray = [];

  if (n < array.length) {
    for (let i = n; i < array.length; i++) {
      tempArray.push(array[i]);
    }
  }

  return tempArray;
}

function map(array, callback) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray[i] = callback(array[i]);
  }

  return tempArray;
}

function reduce(array, callback, initialValue) {
  // if initialValaue undefined it will get the value 0
  initialValue = initialValue || 0;

  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }

  return initialValue;
}

function filter(array, callback) {
  let tempArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      tempArray.push(array[i]);
    }
  }

  return tempArray;
}

function foreach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
  return array;
}
