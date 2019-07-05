# Todo

## v0.5.0

* [x] `src` New config finalized
* [x] `src` Parse function

  * [x] `src` Import file-genesis
  * [x] `test` Recurses w/o call stack err
  * [x] `src` Spawn files

* [x] `docs` Add docs section in readme
* [x] `docs` Add goal section in readme
* [x] `test` Add .travis.yml config
* [x] `docs` Remove keys section (outdated now)
* [x] `src` Remove cruft code
* [x] `src` Expose API

  * [x] `test` Create test for API

## v0.6.0

* [ ] Add local/remote parsing to template source
* [ ] Consider changing "file" in config to "plain" so that it matches file-generator

## Icebox

* [ ] Eventually, I would like parser to work with a config that looks like this:

```js
const config = {
  directory: "/path/to/library",
  children: [
    {
      directory: "/path/to/library/directory0",
      children: [
        { file: "file0A.ext", type: "plain", content: "Hello, file0A" },
        { file: "file0B.ext", type: "plain", content: "Hello, file0B" },
        {
          directory: "directory1",
          children: [
            { file: "file1A.ext", type: "plain", content: "Hello, file1A" },
            { file: "file1B.ext", type: "plain", content: "Hello, file1B" }
          ]
        },
        {
          directory: "directory2",
          children: [
            { file: "file2A.ext", type: "plain", content: "Hello, file2A" },
            { file: "file2B.ext", type: "plain", content: "Hello, file2B" }
          ]
        }
      ]
    },
    {
      directory: "directory0z",
      children: [
        { file: "file0Az.ext", type: "plain", content: "Hello, file0Az" },
        { file: "file0Bz.ext", type: "plain", content: "Hello, file0Bz" },
        {
          directory: "directory1z",
          children: [
            { file: "file1Az.ext", type: "plain", content: "Hello, file1Az" },
            { file: "file1Bz.ext", type: "plain", content: "Hello, file1Bz" }
          ]
        },
        {
          directory: "directory2z",
          children: [
            { file: "file2Az.ext", type: "plain", content: "Hello, file2Az" },
            { file: "file2Bz.ext", type: "plain", content: "Hello, file2Bz" }
          ]
        }
      ]
    }
  ]
};
```

Originally I tried doing this but I failed to find an elegant solution and gave up. What I like about this approach is that the directory nesting is implicit / visually declarative.
