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
  path: "foo/bar",
  modules: ["path/to/module/one", "path/to/module/two"]
};
const multipleB = {
  environments: [
    {
      path: "foo/bar",
      modules: ["path/to/module/one", "path/to/module/two"]
    },
    {
      path: "foo/bazzz",
      modules: ["path/to/module/three", "path/to/module/four"]
    }
  ]
};

export { singleB as single, multipleB as multiple };
