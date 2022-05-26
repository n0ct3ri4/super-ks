const http = require("http");
const https = require("https");

module.exports = class HTTP {
  constructor() {
    /**
     * Get the Raw-Content of a website.
     * @param {string} url Request URL.
     * @param {number} port Request Port. Default = 80.
     * @param {string} path URL Path. (/auth, /test, etc...)
     */
    this.rawContent = function (url, port, path) {
      if (url.startsWith("http://")) {
        http
          .request(
            { host: url.slice(7), port: port || 80, path: path || "/" },
            (res) => {
              res.on("data", (chunk) => {
                return chunk.toString();
              });

              res.on("error", (err) => {
                throw err;
              });

              res.on("close", () => {
                console.info(`Connection closed! (${url})`);
              });
            }
          )
          .end();
      } else if (url.startsWith("https://")) {
        https
          .request(
            { host: url.slice(8), port: port || 80, path: path || "/" },
            (res) => {
              res.on("data", (chunk) => {
                return chunk.toString();
              });

              res.on("error", (err) => {
                throw err;
              });

              res.on("close", () => {
                console.info(`Connection closed! (${url})`);
              });
            }
          )
          .end();
      } else {
        console.warn("Please specify HTTP or HTTPS protocol!");
      }
    };
  }
};
