let arrayExtensions = {
    array: [],
    chain(inputArray) {
        this.array = inputArray.slice();
        return this;
    },

    take(n) {
        if (n >= this.array.length) {
            return this;
        } else {
            this.array = this.array.slice(0, n);
            return this;
        }
    },

    skip(n) {
        this.array = this.array.slice(n, array.length);
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
    }
}