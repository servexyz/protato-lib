!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("tacker")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pathsExistProm=function(e,t){return new Promise((r=u(regeneratorRuntime.mark(function r(o,a){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!Array.isArray(e)){r.next=5;break}e.map(function(){var e=u(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.access(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),r.next=7;break;case 5:return r.next=7,i.default.access(e);case 7:o([!0].concat(function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(c=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),a("".concat(n.default.red(t),": \n ").concat(n.default.grey(r.t0)));case 13:case"end":return r.stop()}var c},r,null,[[0,10]])})),function(e,t){return r.apply(this,arguments)}));var r},t.pathsExistSync=function(e){return l.apply(this,arguments)};var n=o(r(1)),i=o(r(7));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){c(o,n,i,a,u,"next",e)}function u(e){c(o,n,i,a,u,"throw",e)}a(void 0)})}}var s=console.log;function l(){return(l=u(regeneratorRuntime.mark(function e(t){var r,o,c,u,l,p,f,d,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:"Path did not exist",!Array.isArray(t)){e.next=37;break}o=t.flatMap(function(e){return"object"==a(e)?Object.values(e).map(function(e){return e}):e}),c=!0,u=!1,l=void 0,e.prev=6,p=o[Symbol.iterator]();case 8:if(c=(f=p.next()).done){e.next=21;break}return d=f.value,e.prev=10,e.next=13,i.default.access(d);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),s("".concat(n.default.red("Array of paths failed")," ").concat(printLine("red")," ").concat(n.default.red(r)," \n ").concat(n.default.grey(e.t0)));case 18:c=!0,e.next=8;break;case 21:e.next=27;break;case 23:e.prev=23,e.t1=e.catch(6),u=!0,l=e.t1;case 27:e.prev=27,e.prev=28,c||null==p.return||p.return();case 30:if(e.prev=30,!u){e.next=33;break}throw l;case 33:return e.finish(30);case 34:return e.finish(27);case 35:e.next=48;break;case 37:if("string"!=typeof t){e.next=48;break}return e.prev=38,e.next=41,i.default.access(t);case 41:e.next=48;break;case 43:e.prev=43,e.t2=e.catch(38),printLine("red"),s("".concat(n.default.red("Single string failed")," \n").concat(n.default.red(r)," \n ").concat(n.default.grey(e.t2))),printLine("red");case 48:case"end":return e.stop()}},e,null,[[6,23,27,35],[10,15],[28,,30,34],[38,43]])}))).apply(this,arguments)}},function(e,t,r){e.exports=r(5)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:process.env.configRootDir||process.cwd(),t=(0,a.getWatcherConfig)(o.default.join(e,".protato.js"));(0,c.initWatcher)(t).getDirectories()};var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n},a=r(6),c=r(8);console.log},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWatcherConfig=t.PTOParser=void 0;var n=c(r(0)),i=c(r(1)),o=r(2),a=r(3);function c(e){return e&&e.__esModule?e:{default:e}}var u=console.log;function s(e){var t=e.parent,r=e.children;return(0,o.printLine)("yellow"),u("".concat(i.default.yellow("parent")," and ").concat(i.default.yellow("children")," objects were both found")),(0,o.printMirror)({parent:t},"yellow","grey"),(0,o.printMirror)({children:r},"yellow","grey"),(0,o.printLine)("yellow"),this.watcher={targets:void 0,options:void 0,parent:t},this.config=e,this.config.children=e.children,this}s.prototype.getWatcherTargets=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.children,t=e.map(function(e){var t=e.dir,r=e.src,i=process.env.configRootDir||process.cwd(),o=n.default.join(i,t,r),c=n.default.join(i,t,"package.json"),u=[o,c];return(0,a.pathsExistSync)(u,"getWatcherTargets' directory and package path check"),{childDirPath:o,childPackagePath:c}});return this.watcher.targets=t,void 0!==this.watcher.targets?((0,o.printLine)("yellow"),u("".concat(i.default.yellow("watcher targets")," are defined \n")),(0,o.printMirror)({targets:t},"yellow","grey"),(0,o.printLine)("yellow",null,null,2)):((0,o.printLine)("red"),(0,o.printMirror)({targets:t},"red","white"),(0,o.printLine)("red")),this},s.prototype.getWatcherOptions=function(){var e=[];return(0,o.printLine)("green"),this.config.children.map(function(t){var r,i,c=t.dir;(0,o.printMirror)({dir:c},"green","grey"),e.push((r=c,i=n.default.join(r,"node_modules"),(0,a.pathsExistSync)(i,"getWatcherOptions -> getChildNodeModulesPath() path check"),i))}),(0,o.printLine)({character:".",color:"green"}),(0,o.printMirror)({childrenDirectoriesToIgnore:e},"green","grey"),(0,o.printLine)("green"),this.watcher.options={cwd:process.env.configRootDir||process.cwd(),ignored:["node_modules/**/*"].concat(e),ignoreInitial:!0,ignorePermissionErrors:!0,followSymlinks:!0},this},t.PTOParser=s,t.getWatcherConfig=function(e){var t=new s(e);t.getWatcherTargets().getWatcherOptions();var r=t.watcher,n=r.targets,a=r.options,c=r.parent;return(0,o.printLine)("yellow"),(0,o.printMirror)({targets:n},"yellow","grey"),u("".concat(i.default.yellow("options"),": ").concat(i.default.grey(JSON.stringify(a,null,2)))),(0,o.printLine)("yellow"),{parent:c,targets:n,options:a}}},function(e,t){e.exports=require("fs-extra")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PTOWatcher=l,t.initWatcher=function(e){var t=new l(e);return t.getDirectories().createWatcher(),t};var n,i=r(9),o=(n=i)&&n.__esModule?n:{default:n},a=r(3),c=r(10);function u(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}process.env.configRootDir||process.cwd();function l(e){return(0,a.printMirror)({oWatcherConfig:e},"blue","grey"),(0,a.pathsExistSync)(e.targets),this.parent=e.parent,this.targets=e.targets,this.options=e.options,this.directoriesToWatch=[],this.packagesToWatch=[],this}l.prototype.getDirectories=function(){var e=this,t=this.targets;return(0,a.printLine)("blue"),t.map(function(t){var r=t.childDirPath,n=t.childPackagePath;(0,a.printMirror)({childDirPath:r},"blue","grey"),(0,a.printMirror)({childPackagePath:n},"blue","grey"),e.directoriesToWatch.push(r),e.packagesToWatch.push(n)}),(0,a.printLine)("blue"),this},l.prototype.createWatcher=function(){var e,t=this,r=this.directoriesToWatch,n=this.options;if((0,a.pathsExistSync)(r),(0,a.printMirror)({directoriesToWatch:r},"blue","grey"),r.length>0&&(e=o.default.watch(r[0],function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},n))),r.length>1)for(var i=1;i<r.length;i++)e.add(r[i]);e.on("change",function(e){(0,a.printMirror)({modifiedChildPath:e},"green","grey"),(0,c.linker)(e,t.parent.dir)})}},function(e,t){e.exports=require("chokidar")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linker=function(e,t){return f.apply(this,arguments)};var n=s(r(1)),i=s(r(0)),o=s(r(11)),a=s(r(12)),c=s(r(13)),u=r(2);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}var p=console.log;function f(){var e;return e=regeneratorRuntime.mark(function e(t,s){var l,f,d,h,g,y,v,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!(0,o.default)(t)|!(0,o.default)(s))){e.next=44;break}return(0,u.printMirror)({szModifiedFilePath:t},"magenta","grey"),(0,u.printMirror)({szParentDirPath:s},"magenta","grey"),e.prev=3,e.next=6,(0,a.default)(t);case 6:return h=e.sent,(0,u.printLine)("blue"),(0,u.printMirror)({modifiedRootDir:h},"magenta","green"),g=i.default.join(h,"package.json"),(0,u.printMirror)({modifiedPkgPath:g},"magenta","green"),y=r(14)(g),v=y.name,d=v,(0,u.printMirror)({childModuleName:d},"blue","grey"),(0,u.printLine)("blue"),e.next=17,(0,c.default)("cd ".concat(h," && yalc publish"));case 17:l=e.sent,(0,u.printLine)("green"),p("childData: ".concat(JSON.stringify(l,null,2))),(0,u.printLine)("green"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),p("".concat(n.default.red("'yalc publish' failed"),"\n").concat(n.default.grey(e.t0)));case 26:return e.prev=26,e.next=29,(0,a.default)(s);case 29:return b=e.sent,(0,u.printMirror)({parentRootDir:b},"magenta","green"),e.next=33,(0,c.default)("cd ".concat(b," && yalc link ").concat(d));case 33:f=e.sent,(0,u.printLine)("yellow"),p("parentData: ".concat(JSON.stringify(f,null,2))),(0,u.printLine)("yellow"),e.next=42;break;case 39:e.prev=39,e.t1=e.catch(26),p("".concat(n.default.red("yalc add ".concat(d," in ").concat(n.default.yellow(parentRootDir)," failed")),"\n").concat(n.default.grey(e.t1)));case 42:e.next=47;break;case 44:(0,u.printLine)("green"),p("parentDirectory not set"),(0,u.printLine)("green");case 47:return e.abrupt("return",this);case 48:case"end":return e.stop()}},e,this,[[3,23],[26,39]])}),(f=function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){l(o,n,i,a,c,"next",e)}function c(e){l(o,n,i,a,c,"throw",e)}a(void 0)})}).apply(this,arguments)}},function(e,t){e.exports=require("is-empty")},function(e,t){e.exports=require("pkg-dir")},function(e,t){e.exports=require("await-exec")},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=14}]));
//# sourceMappingURL=main.js.map