const log = console.log;
const chalk = require("chalk");
const { File } = require("file-genesis");
const path = require("path");

var Library = config => {
  return {
    printConfig: () => {
      let keys = Object.keys(config);
      let values = Object.values(config);
      let entries = Object.entries(config);
      log(`Config type: ${chalk.magenta(typeof config)}`);
      log(`Config is Array? ${chalk.magenta(Array.isArray(config))}`);
      log(`Raw Config \n${chalk.yellow(JSON.stringify(config, null, 2))}`);
      log(`${chalk.bold("Keys")}: \n ${chalk.yellow(keys)} \n `);
      log(
        `${chalk.bold("Values")}: \n ${chalk.blue(
          JSON.stringify(values, null, 2)
        )} \n `
      );
      log(`${chalk.bold("Entries")}: \n ${chalk.green(entries)} \n `);
    },
    generate: function() {
      config.files.map(f => {
        switch (f.type) {
          case "file":
            return this.genFile(f);
          case "symlink":
            return this.genSymlink(f);
          case "template":
            return this.genTemplate(f);
        }
      });
    },
    genFile: function(file) {
      let f = file;
      File(f.dest).plain(f.content);
    },
    genSymlink: function(file) {
      let f = file;
      File(f.dest).symlink(f.content.original);
    },
    genTemplate: function(file) {
      let f = file;
      File(f.dest).template(f.content.original, f.content.variables);
    }
  };
};
module.exports = {
  Library
};
