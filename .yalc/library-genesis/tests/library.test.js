const log = console.log;
const { con } = require("./config.sample.js");
import test from "ava";

/*
  Config test below ( should ) work. 
  Commented because obnoxious to see every time.
*/
// test("Print config", () => {
//   const { Library } = require("../src/library.js");
//   Library(con).printConfig();
// });

test("Parse config", t => {
  const { Library } = require("../src/library.js");
  Library(con).generate();
  t.pass();
});

test("API is imported", t => {
  const { Library } = require("../index.js");
  Library(con).generate();
  t.pass();
});
