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
    this.array = map(this.array, callback);
    return this;
  },

  reduce(callback, initialValue) {
    return reduce(this.array, callback, initialValue);
  },

  filter(callback) {
    return filter(this.array, callback);
  },

  foreach(callback) {
    foreach(this.array, callback);
  },
  value() {
    return this.array;
  },
};

function take(array, n) {
  return array.slice(0, n);
}

function skip(array, n) {
  return array.slice(n);
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
  array.forEach(callback);
}
