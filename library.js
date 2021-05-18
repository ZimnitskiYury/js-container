export let arrayExtensions = {
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
    this.array = this.array.map(callback);
    return this;
  },

  reduce(callback, initialValue = 0) {
    this.array = this.array.reduce(callback, initialValue);
  },

  filter(callback) {
    this.array = this.array.filter(callback);
    return this;
  },

  foreach(callback) {
    this.array = this.array.forEach(callback);
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
