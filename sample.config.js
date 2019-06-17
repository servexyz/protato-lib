//Option B is better
const singleA = {
  environment: {
    path: "foo/bar",
    modules: ["path/to/module/one", "path/to/module/two"]
  }
};
const multipleA = {
  environments: [
    {
      environment: {
        path: "foo/bar",
        modules: ["path/to/module/one", "path/to/module/two"]
      }
    },
    {
      environment: {
        path: "foo/baz",
        modules: ["path/to/module/one", "path/to/module/two"]
      }
    }
  ]
};

//TODO: Consider renaming "path" to "parent" and "modules" to "children"
//? Why: Both "path" and "modules" list paths. Currently, one describes form and another, function
const singleB = {
  parent: "sandbox/node-starter",
  children: "sandbox/npm-starter-sample-module"
};
const multipleB = {
  environments: [
    {
      parent: "foo/bar",
      children: ["path/to/module/one", "path/to/module/two"]
    },
    {
      parent: "foo/bazzz",
      children: ["path/to/module/three", "path/to/module/four"]
    }
  ]
};
const config = {
  parent: "sandbox/node-starter",
  children: "sandbox/npm-starter-sample-module"
};

export { singleB as single, multipleB as multiple };

export { config };
