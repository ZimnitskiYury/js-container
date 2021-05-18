let arrayExtensionsES5 = {
    array: [],
    chain(inputArray) {
        this.array = inputArray.slice();
        return this;
    },

    take(n) {
        if (n >= this.array.length) {
            return this;
        } else {
            this.array.length = n;
            return this;
        }
    },

    skip(n) {
        for (let i = 0; i < n; i++) {
            this.array.shift();
        }
        return this;
    },

    map(callback) {
        let tempArray = [];
        for (let i = 0; i < this.array.length; i++) {
            tempArray[i] = callback(this.array[i]);
        }
        return this;
    },

    reduce(callback, initialValue = 0) {
        let result = initialValue;
        for (let i = 0; i < this.array.length; i++) {
            result = callback(result, this.array[i]);
        }
        return result;
    },

    filter(callback) {
        let tempArray = [];
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i])) {
                tempArray.push(this.array[i]);
            }
        }
        this.array = tempArray;
        return this;
    },

    foreach(callback) {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] = callback(this.array[i]);
        }
        return this;
    },

    value() {
        return this.array;
    }
}