// const app = require("express")();
// const port = process.env.PORT || 5000;
// const hostname = process.env.HOST || "localhost";
// const colors = require("colors/safe");
// const fs = require("fs");

// app.get("/", (req, res) => {
//   if (req) {
//     res.send(fs.readFileSync("./package.json", "utf-8"));
//   } else {
//     throw new Error("Unknow type of request.");
//   }
// });

// app.listen(port, hostname, () =>
//   console.log(
//     `Server is up and running on ${colors.green(hostname)}:${colors.green(
//       port
//     )}`
//   )
// );

const classes = {
  Events: require("./classes/Events"),
  Collection: require("./classes/Collection"),
  Express: require("./classes/Express"),
  HTTP: require("./classes/HTTP"),
};

module.exports = {
  Events: new classes.Events(),
  Collection: new classes.Collection(),
  Express: new classes.Express(),
  HTTP: new classes.HTTP(),
};
