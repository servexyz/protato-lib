!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("chalk")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChalkColor=f,t.printMirror=function(e,t,r,n){var i,o,c,u;i=Object.keys(e)[0],o=(0,a.default)(n)?"object"==s(Object.values(e)[0])?JSON.stringify(Object.values(e)[0],null,2):Object.values(e)[0]:n;c=f(t),u=f(r),l("".concat(c(i),": ").concat(u(o)))},t.printLine=d,t.pathsExistProm=function(e,t){return new Promise((r=u(regeneratorRuntime.mark(function r(a,o){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!Array.isArray(e)){r.next=5;break}e.map(function(){var e=u(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.access(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),r.next=7;break;case 5:return r.next=7,i.default.access(e);case 7:a([!0].concat(function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(c=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),o("".concat(n.default.red(t),": \n ").concat(n.default.grey(r.t0)));case 13:case"end":return r.stop()}var c},r,null,[[0,10]])})),function(e,t){return r.apply(this,arguments)}));var r},t.pathsExistSync=function(e){return p.apply(this,arguments)};var n=o(r(0)),a=o(r(4)),i=o(r(8));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r,n,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){c(i,n,a,o,u,"next",e)}function u(e){c(i,n,a,o,u,"throw",e)}o(void 0)})}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=console.log;function f(e){switch(e.toLowerCase()){case"red":return n.default.red;case"orange":return n.default.orange;case"yellow":return n.default.yellow;case"green":return n.default.green;case"blue":return n.default.blue;case"magenta":return n.default.magenta;case"cyan":return n.default.cyan;case"white":return n.default.white;case"grey":return n.default.grey;case"redBright":return n.default.redBright;case"greenBright":return n.default.greenBright;case"yellowBright":return n.default.yellowBright;case"blueBright":return n.default.blueBright;case"magentaBright":return n.default.magentaBright;case"cyanBright":return n.default.cyanBright;case"whiteBright":return n.default.whiteBright;default:return n.default.white}}function d(e){var t=function(e){if("object"===s(e)){var t=e.color,r=void 0===t?"white":t,n=e.length,a=void 0===n?59:n,i=e.character,o=void 0===i?"-":i,c=e.quantity;return["object",{color:r,length:a,character:o,quantity:void 0===c?1:c}]}if("string"==typeof e)return["string",e]}(e);if("object"==t[0])var r=t[1],n=r.color,a=r.length,i=r.character,o=r.quantity;else"string"==t[0]&&(n=t[1],a=59,i="-",o=1);for(var c=i.repeat(a),u=f(n),d=0;d<o;d++)l(u(c))}function p(){return(p=u(regeneratorRuntime.mark(function e(t){var r,a,o,c,u,f,p,h,g=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=g.length>1&&void 0!==g[1]?g[1]:"Path did not exist",!Array.isArray(t)){e.next=37;break}a=t.flatMap(function(e){return"object"==s(e)?Object.values(e).map(function(e){return e}):e}),o=!0,c=!1,u=void 0,e.prev=6,f=a[Symbol.iterator]();case 8:if(o=(p=f.next()).done){e.next=21;break}return h=p.value,e.prev=10,e.next=13,i.default.access(h);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),l("".concat(n.default.red("Array of paths failed")," ").concat(d("red")," ").concat(n.default.red(r)," \n ").concat(n.default.grey(e.t0)));case 18:o=!0,e.next=8;break;case 21:e.next=27;break;case 23:e.prev=23,e.t1=e.catch(6),c=!0,u=e.t1;case 27:e.prev=27,e.prev=28,o||null==f.return||f.return();case 30:if(e.prev=30,!c){e.next=33;break}throw u;case 33:return e.finish(30);case 34:return e.finish(27);case 35:e.next=48;break;case 37:if("string"!=typeof t){e.next=48;break}return e.prev=38,e.next=41,i.default.access(t);case 41:e.next=48;break;case 43:e.prev=43,e.t2=e.catch(38),d("red"),l("".concat(n.default.red("Single string failed")," \n").concat(n.default.red(r)," \n ").concat(n.default.grey(e.t2))),d("red");case 48:case"end":return e.stop()}},e,null,[[6,23,27,35],[10,15],[28,,30,34],[38,43]])}))).apply(this,arguments)}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("tacker")},function(e,t){e.exports=require("is-empty")},function(e,t,r){e.exports=r(6)},function(e,t,r){"use strict";var n,a=r(7),i=r(9),o=(r(1),r(15)),c=(n=o)&&n.__esModule?n:{default:n};r(16)();console.log;var u=(0,a.getWatcherConfig)(c.default);(0,i.initWatcher)(u).getDirectories()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWatcherConfig=t.PTOParser=void 0;var n=c(r(2)),a=c(r(0)),i=r(3),o=r(1);function c(e){return e&&e.__esModule?e:{default:e}}var u=console.log;function s(e){var t=e.parent,r=e.children;return(0,i.printLine)("yellow"),u("".concat(a.default.yellow("parent")," and ").concat(a.default.yellow("children")," objects were both found")),(0,i.printMirror)({parent:t},"yellow","grey"),(0,i.printMirror)({children:r},"yellow","grey"),(0,i.printLine)("yellow"),this.watcher={targets:void 0,options:void 0,parent:t},this.config=e,this.config.children=e.children,this}s.prototype.getWatcherTargets=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.children).map(function(e){var t=e.dir,r=e.src,a=process.env.configRootDir||process.cwd(),i=n.default.join(a,t,r),c=n.default.join(a,t,"package.json"),u=[i,c];return(0,o.pathsExistSync)(u,"getWatcherTargets' directory and package path check"),{childDirPath:i,childPackagePath:c}});return this.watcher.targets=e,void 0!==this.watcher.targets?((0,i.printLine)("yellow"),u("".concat(a.default.yellow("watcher targets")," are defined \n")),(0,i.printMirror)({targets:e},"yellow","grey"),(0,i.printLine)("yellow",null,null,2)):((0,i.printLine)("red"),(0,i.printMirror)({targets:e},"red","white"),(0,i.printLine)("red")),this},s.prototype.getWatcherOptions=function(){var e=[];return(0,i.printLine)("green"),this.config.children.map(function(t){var r,a,c=t.dir;(0,i.printMirror)({dir:c},"green","grey"),e.push((r=c,a=n.default.join(r,"node_modules"),(0,o.pathsExistSync)(a,"getWatcherOptions -> getChildNodeModulesPath() path check"),a))}),(0,i.printLine)({character:".",color:"green"}),(0,i.printMirror)({childrenDirectoriesToIgnore:e},"green","grey"),(0,i.printLine)("green"),this.watcher.options={cwd:process.env.configRootDir||process.cwd(),ignored:["node_modules/**/*"].concat(e),ignoreInitial:!0,ignorePermissionErrors:!0,followSymlinks:!0},this},t.PTOParser=s,t.getWatcherConfig=function(e){var t=new s(e);t.getWatcherTargets().getWatcherOptions();var r=t.watcher,n=r.targets,o=r.options,c=r.parent;return(0,i.printLine)("yellow"),(0,i.printMirror)({targets:n},"yellow","grey"),u("".concat(a.default.yellow("options"),": ").concat(a.default.grey(JSON.stringify(o,null,2)))),(0,i.printLine)("yellow"),{parent:c,targets:n,options:o}}},function(e,t){e.exports=require("fs-extra")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PTOWatcher=s,t.initWatcher=function(e){var t=new s(e);return t.getDirectories().createWatcher(),t};var n,a=r(10),i=(n=a)&&n.__esModule?n:{default:n},o=r(1),c=r(11);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}process.env.configRootDir||process.cwd();function s(e){return(0,o.printMirror)({oWatcherConfig:e},"blue","grey"),(0,o.pathsExistSync)(e.targets),this.parent=e.parent,this.targets=e.targets,this.options=e.options,this.directoriesToWatch=[],this.packagesToWatch=[],this}s.prototype.getDirectories=function(){var e=this,t=this.targets;return(0,o.printLine)("blue"),t.map(function(t){var r=t.childDirPath,n=t.childPackagePath;(0,o.printMirror)({childDirPath:r},"blue","grey"),(0,o.printMirror)({childPackagePath:n},"blue","grey"),e.directoriesToWatch.push(r),e.packagesToWatch.push(n)}),(0,o.printLine)("blue"),this},s.prototype.createWatcher=function(){var e,t=this,r=this.directoriesToWatch,n=this.options;if((0,o.pathsExistSync)(r),(0,o.printMirror)({directoriesToWatch:r},"blue","grey"),r.length>0&&(e=i.default.watch(r[0],function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}({},n))),r.length>1)for(var a=1;a<r.length;a++)e.add(r[a]);e.on("change",function(e){(0,o.printMirror)({modifiedChildPath:e},"green","grey"),(0,c.linker)(e,t.parent.dir)})}},function(e,t){e.exports=require("chokidar")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linker=function(e,t){return d.apply(this,arguments)};var n=s(r(0)),a=s(r(2)),i=s(r(4)),o=s(r(12)),c=s(r(13)),u=r(3);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,n,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}var f=console.log;function d(){var e;return e=regeneratorRuntime.mark(function e(t,s){var l,d,p,h,g,y,v,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!(0,i.default)(t)|!(0,i.default)(s))){e.next=44;break}return(0,u.printMirror)({szModifiedFilePath:t},"magenta","grey"),(0,u.printMirror)({szParentDirPath:s},"magenta","grey"),e.prev=3,e.next=6,(0,o.default)(t);case 6:return h=e.sent,(0,u.printLine)("blue"),(0,u.printMirror)({modifiedRootDir:h},"magenta","green"),g=a.default.join(h,"package.json"),(0,u.printMirror)({modifiedPkgPath:g},"magenta","green"),y=r(14)(g),v=y.name,p=v,(0,u.printMirror)({childModuleName:p},"blue","grey"),(0,u.printLine)("blue"),e.next=17,(0,c.default)("cd ".concat(h," && yalc publish"));case 17:l=e.sent,(0,u.printLine)("green"),f("childData: ".concat(JSON.stringify(l,null,2))),(0,u.printLine)("green"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),f("".concat(n.default.red("'yalc publish' failed"),"\n").concat(n.default.grey(e.t0)));case 26:return e.prev=26,e.next=29,(0,o.default)(s);case 29:return b=e.sent,(0,u.printMirror)({parentRootDir:b},"magenta","green"),e.next=33,(0,c.default)("cd ".concat(b," && yalc link ").concat(p));case 33:d=e.sent,(0,u.printLine)("yellow"),f("parentData: ".concat(JSON.stringify(d,null,2))),(0,u.printLine)("yellow"),e.next=42;break;case 39:e.prev=39,e.t1=e.catch(26),f("".concat(n.default.red("yalc add ".concat(p," in ").concat(n.default.yellow(parentRootDir)," failed")),"\n").concat(n.default.grey(e.t1)));case 42:e.next=47;break;case 44:(0,u.printLine)("green"),f("parentDirectory not set"),(0,u.printLine)("green");case 47:return e.abrupt("return",this);case 48:case"end":return e.stop()}},e,this,[[3,23],[26,39]])}),(d=function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){l(i,n,a,o,c,"next",e)}function c(e){l(i,n,a,o,c,"throw",e)}o(void 0)})}).apply(this,arguments)}},function(e,t){e.exports=require("pkg-dir")},function(e,t){e.exports=require("await-exec")},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=14},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={parent:{dir:"sandbox/node-starter"},children:[{dir:"sandbox/npm-starter-sample-module",src:"src"},{dir:"sandbox/library-genesis",src:"src"}]}},function(e,t){e.exports=require("log-process-errors")}]));
//# sourceMappingURL=main.js.map