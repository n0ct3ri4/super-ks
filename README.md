# Super KS | **First release!**

> KaliScripter alternative for advanced users.

## Get Started

First, install SuperKS.

```
npm i superks
```

Then, import it into your project.

```js
const ks = require("superks");
```

Also, you can import it like this :

```js
const { Collection: col, Events: ev, Express: app } = require("superks");
```

## KS::Collections

With the collections, you can assign a value to a key (_name_) and use it everywhere in your code.

```js
// Assign a value to a key...
ks.Collection.set("mod", require("./modules/yourModule.js"));
```

```js
// Now use it in different contexts!
console.log(ks.Collection.get("mod"));
ks.Collection.get("mod").run(args);
```

## KS::Events

With the events listener and emitter, you can emit or listen a specific signal.

```js
// Listen a specific event.
ks.Events.on("test", (args) => {
  console.log(args.name);
  console.log(args.state);
});
```

```js
// Emit a specific event.
ks.Events.emit("test", { name: "test", state: "Testing..." });
```

```yaml
# Output

test
Testing...
```

## KS::Express

With Express, you can easily make a simple webserver with two lines only!

> WARNING! On Linux, you should be on Super-User (`sudo`) mode.

```js
// Turn on the webserver...
ks.Express.listen(80, "127.0.0.1");
```

```js
// Listen to a specific path...
ks.Express.addPage("/", `${__dirname}/src/index.html`);
```

## KS::HTTP

HTTP allows you to get the raw-content of a web page.

```js
console.log(ks.HTTP.rawContent("https://google.com", 80, "/"));
```

# Credits

- **Collections** are based on `discord.js` library.
- The **webserver** is based on `express` module.
- **Events manager** is based on `events` module.
- **HTTP/s** is based on `http` module.
