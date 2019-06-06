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
      path: "foo/baz",
      modules: ["path/to/module/one", "path/to/module/two"]
    }
  ]
};

export { singleB as single, multipleB as multiple };
