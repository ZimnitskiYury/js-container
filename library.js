let arrayExtensions = {
  funcArray: [],
  tempArray: [],
  chain(inputArray) {
    arrayExtensions.tempArray = inputArray.slice();
    arrayExtensions.funcArray = [];
    return new Proxy(arrayExtensions, {
      get: function (target, propKey, receiver) {
        if (propKey == "value") {
          return function () {
            for (let item of target.funcArray) {
              let func = item.func;
              let args = Array.from(item.args);
              args.unshift(target.tempArray);
              target.tempArray = func.apply(target, args);
            }
            return target.tempArray;
          };
        } else {
          let propValue = target[propKey];
          if (typeof propValue != "function") {
            return propValue;
          } else {
            return function () {
              target.funcArray.push({
                func: propValue,
                args: arguments,
              });
              return this;
            };
          }
        }
      },
    });
  },

  take(array, n) {
    return array.slice(0, n);
  },

  skip(array, n) {
    return array.slice(n);
  },

  map(array, callback) {
    return array.map(callback);
  },

  reduce(array, callback, initialValue = 0) {
    return array.reduce(callback, initialValue);
  },

  filter(array, callback) {
    return array.filter(callback);
  },

  foreach(array, callback) {
    array.forEach(callback);
  },
};
