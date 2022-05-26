const app = require("express")();
const c = require("colors/safe");
const fs = require("fs");

module.exports = class Express {
  constructor() {
    /**
     * Express-Based webserver.
     * @param {number} port Webserver Port.
     * @param {string} hostname Webserver Hostname.
     */
    this.listen = function (port, hostname) {
      app.listen(port, hostname, () => {
        console.log(
          `${c.grey("[")}${c.green("INFO")}${c.grey("]")} ${c.italic(
            `Listening on ${c.yellow(hostname)}${c.magenta(":")}${c.yellow(
              port
            )}`
          )}`
        );
      });
    };

    /**
     *
     * @param {string} url URL Path.
     * @param {fs.PathLike} file Path to a file. Supported formats : JSON, HTML.
     */
    this.addPage = function (url, file) {
      app.get(url, (req, res) => {
        if (fs.existsSync(file)) {
          if (file.endsWith(".html") || file.endsWith(".htm")) {
            res.setHeader("Content-Type", "text/html");
            res.send(fs.readFileSync(file, "utf-8"));
            res.end(() => {
              console.log(
                `${c.grey("[")}${c.green("INFO")}${c.grey("]")} ${c.italic(
                  `Request => ${req.socket.remoteAddress}:${req.socket.remotePort}`
                )}`
              );
            });
          } else if (file.endsWith(".json")) {
            res.setHeader("Content-Type", "application/json");
            res.send(fs.readFileSync(file, "utf-8"));
            res.end(() => {
              console.log(
                `${c.grey("[")}${c.green("INFO")}${c.grey("]")} ${c.italic(
                  `Request => ${req.socket.remoteAddress}:${req.socket.remotePort}`
                )}`
              );
            });
          } else {
            res.send(fs.readFileSync(file, "utf-8"));
            console.log(
              `${c.grey("[")}${c.red("ERROR")}${c.grey("]")} ${c.italic(
                `Unsupported file format! (KS::Express)`
              )}`
            );
            process.exit(1);
          }
        } else {
          console.log(
            `${c.grey("[")}${c.red("ERROR")}${c.grey("]")} ${c.italic(
              `Unknown file, exiting program. (KS::Express)`
            )}`
          );
          process.exit(1);
        }
      });
    };
  }
};
