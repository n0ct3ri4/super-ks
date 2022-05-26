var col = [];

module.exports = class Collection {
  constructor() {
    /**
     * @param {string} key Entry name. (String)
     * @param {any} value Entry value. (Object, Module, Array, etc...)
     */
    this.set = function (key, value) {
      col[key] = value;
    };

    /**
     * @param {string} key Entry name. (String)
     */
    this.get = function (key) {
      return col[key];
    };

    this.first = function () {
      return col[0];
    };

    this.last = function () {
      return col[col.length - 1];
    };

    this.all = function () {
      return col;
    };
  }
};
