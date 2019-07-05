![logo](docs/images/logo/library-genesis@2x.png)

> Convert config into library scaffolding

[![Build Status](https://travis-ci.org/servexyz/library-genesis.svg?branch=master)](https://travis-ci.org/servexyz/library-genesis)

## Install

```
yarn add library-genesis
```

## Use

```js
const { myLibConfig } = require("./path/to/my-config.js");
const { Library } = require("library-genesis");
Library(myLibConfig).generate();
```

> [sample.config.js](./tests/config.sample.js)

---

### Docs

---

* [todo](./docs/todo.md)

  > Tasks bundled by release version

* [library-brainstorm](./docs/library-brainstorm.md)
  > Initial thoughts on config & lib generation

---

### Goals

---

* Enable creation of broad-spectrum modules (helper libs, cli's, ui libs, etc.)
* Address issues presented by boilerplates and toolkits
* Can still be useful after initial creation of project

---

### Related

---

* `library-genesis-cli`

  > [@github](https://github.com/servexyz/library-genesis-cli) | [@npm](https://www.npmjs.com/package/library-genesis-cli)

* `library-genesis-example`

  > [@github](https://github.com/servexyz/library-genesis-example)

* `content-genesis`

  > [@github](https://github.com/servexyz/content-genesis) | [@npm](https://www.npmjs.com/package/content-genesis)

* `file-genesis`

  > [@github](https://github.com/servexyz/file-genesis) | [@npm](https://www.npmjs.com/package/file-genesis)
