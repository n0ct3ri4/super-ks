const e = require("events");
const events = new e();

module.exports = class Events {
  constructor() {
    /**
     * Handle a specific event.
     * @param {string} eventName Name of the event you want to handle.
     * @param {(args: any[])} listener Callback function.
     */
    this.on = function (eventName, listener) {
      return events.on(eventName, listener);
    };

    /**
     * Emit a specific event.
     * @param {string} eventName Name of the event you want to emit.
     * @param {any} args Some values. (Object, Module, Arrays, etc...)
     */
    this.emit = function (eventName, args) {
      return events.emit(eventName, args);
    };
  }
};
