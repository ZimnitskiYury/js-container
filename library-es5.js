var arrayExtensionsES5 = {
  chain(array) {
    return {
      take(n) {
        array = arrayExtensionsES5.take(array, n);
        return this;
      },
      skip(n) {
        array = arrayExtensionsES5.skip(array, n);
        return this;
      },
      map(callback) {
        array = arrayExtensionsES5.map(array, callback);
        return this;
      },
      reduce(callback, initialValue) {
        return arrayExtensionsES5.reduce(array, callback, initialValue);
      },
      filter(callback) {
        return arrayExtensionsES5.filter(array, callback);
      },

      foreach(callback) {
        array = arrayExtensionsES5.foreach(array, callback);
        return this;
      },
      value() {
        return array;
      },
    };
  },

  take(array, n) {
    var tempArray = [];

    if (n > 0) {
      for (let i = 0; i < array.length; i++) {
        if (i == n) {
          break;
        }
        tempArray.push(array[i]);
      }
    }

    return tempArray;
  },
  skip(array, n) {
    var tempArray = [];

    if (n < array.length) {
      for (let i = n; i < array.length; i++) {
        tempArray.push(array[i]);
      }
    }

    return tempArray;
  },
  map(array, callback) {
    var tempArray = [];
    for (let i = 0; i < array.length; i++) {
      tempArray[i] = callback(array[i]);
    }

    return tempArray;
  },
  reduce(array, callback, initialValue) {
    // if initialValaue undefined it will get the value 0
    initialValue = initialValue || 0;

    for (let i = 0; i < array.length; i++) {
      initialValue = callback(initialValue, array[i]);
    }

    return initialValue;
  },
  filter(array, callback) {
    var tempArray = [];

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        tempArray.push(array[i]);
      }
    }

    return tempArray;
  },
  foreach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  },
};
