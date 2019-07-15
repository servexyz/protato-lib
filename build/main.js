!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("tacker")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs-extra")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pathsExistAsync=function(e,t){return new Promise((r=s(regeneratorRuntime.mark(function r(o,a){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!Array.isArray(e)){r.next=6;break}e.map(function(){var e=s(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.access(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),o([!0].concat(function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(c=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())),r.next=9;break;case 6:return r.next=8,i.default.access(e);case 8:o([!0,e]);case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),a("".concat(n.default.red(t),": \n ").concat(n.default.grey(r.t0)));case 14:case"end":return r.stop()}var c},r,null,[[0,11]])})),function(e,t){return r.apply(this,arguments)}));var r},t.pathsExistSync=function(e){return p.apply(this,arguments)};var n=a(r(1)),i=a(r(3)),o=r(0);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){u(o,n,i,a,c,"next",e)}function c(e){u(o,n,i,a,c,"throw",e)}a(void 0)})}}var l=console.log;function p(){return(p=s(regeneratorRuntime.mark(function e(t){var r,a,u,s,p,f,d,h,g=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=g.length>1&&void 0!==g[1]?g[1]:"Path did not exist",!Array.isArray(t)){e.next=37;break}a=t.map(function(e){return"object"==c(e)?Object.values(e).map(function(e){return e}):e}),u=!0,s=!1,p=void 0,e.prev=6,f=a[Symbol.iterator]();case 8:if(u=(d=f.next()).done){e.next=21;break}return h=d.value,e.prev=10,e.next=13,i.default.access(h);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),l("".concat(n.default.red("Array of paths failed")," ").concat((0,o.printLine)("red")," ").concat(n.default.red(r)," \n ").concat(n.default.grey(e.t0)));case 18:u=!0,e.next=8;break;case 21:e.next=27;break;case 23:e.prev=23,e.t1=e.catch(6),s=!0,p=e.t1;case 27:e.prev=27,e.prev=28,u||null==f.return||f.return();case 30:if(e.prev=30,!s){e.next=33;break}throw p;case 33:return e.finish(30);case 34:return e.finish(27);case 35:e.next=48;break;case 37:if("string"!=typeof t){e.next=48;break}return e.prev=38,e.next=41,i.default.access(t);case 41:e.next=48;break;case 43:e.prev=43,e.t2=e.catch(38),(0,o.printLine)("red"),l("".concat(n.default.red("Single string failed")," \n").concat(n.default.red(r)," \n ").concat(n.default.grey(e.t2))),(0,o.printLine)("red");case 48:case"end":return e.stop()}},e,null,[[6,23,27,35],[10,15],[28,,30,34],[38,43]])}))).apply(this,arguments)}},function(e,t){e.exports=require("is-empty")},function(e,t,r){e.exports=r(7)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(){return f.apply(this,arguments)};var n=l(r(2)),i=l(r(5)),o=l(r(3)),a=r(8),c=r(9),u=r(0),s=r(4);l(r(1));function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}console.log;function f(){var e;return e=regeneratorRuntime.mark(function e(){var t,r,l,p,f,d,h,g=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.length>0&&void 0!==g[0]?g[0]:process.env.configRootDir||process.cwd(),r=g.length>1?g[1]:void 0,(0,i.default)(r)){e.next=9;break}(0,u.printLine)("cyan"),(0,u.printMirror)({oConfigOverride:r},"cyan","grey"),(0,u.printLine)("cyan"),l=r,e.next=21;break;case 9:return p=n.default.resolve(t,".protato.json"),(0,u.printLine)("cyan"),(0,u.printMirror)({protatoPath:p},"cyan","grey"),e.next=14,o.default.readJson(p);case 14:return l=e.sent,e.next=17,(0,s.pathsExistAsync)(p,".protato.json config not found");case 17:f=e.sent,d=f[0],(0,u.printMirror)({protatoPathFlag:d},"cyan","grey"),(0,u.printLine)("cyan");case 21:h=(0,a.getWatcherConfig)(l),(0,c.initWatcher)(h).getDirectories();case 24:case"end":return e.stop()}},e)}),(f=function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){p(o,n,i,a,c,"next",e)}function c(e){p(o,n,i,a,c,"throw",e)}a(void 0)})}).apply(this,arguments)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWatcherConfig=t.PTOParser=void 0;var n=c(r(2)),i=c(r(1)),o=r(0),a=r(4);function c(e){return e&&e.__esModule?e:{default:e}}var u=console.log;function s(e){var t=e.parent,r=e.children;return(0,o.printLine)("yellow"),u("".concat(i.default.yellow("parent")," and ").concat(i.default.yellow("children")," objects were both found")),(0,o.printMirror)({parent:t},"yellow","grey"),(0,o.printMirror)({children:r},"yellow","grey"),(0,o.printLine)("yellow"),this.watcher={targets:void 0,options:void 0,parent:t},this.config=e,this.config.children=e.children,this}s.prototype.getWatcherTargets=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config.children,t=e.map(function(e){var t=e.dir,r=e.src,i=process.env.configRootDir||process.cwd(),c=n.default.join(i,t,r),u=n.default.join(i,t,"package.json");(0,o.printLine)("magenta"),(0,o.printMirror)({childDirPath:c},"magenta","grey"),(0,o.printMirror)({childPackagePath:u},"magenta","grey"),(0,o.printLine)("magenta");var s=[c,u];return(0,a.pathsExistSync)(s,"getWatcherTargets' directory and package path check"),{childDirPath:c,childPackagePath:u}});return this.watcher.targets=t,void 0!==this.watcher.targets?((0,o.printLine)("yellow"),u("".concat(i.default.yellow("watcher targets")," are defined \n")),(0,o.printMirror)({targets:t},"yellow","grey"),(0,o.printLine)("yellow",null,null,2)):((0,o.printLine)("red"),(0,o.printMirror)({targets:t},"red","white"),(0,o.printLine)("red")),this},s.prototype.getWatcherOptions=function(){var e=[];return(0,o.printLine)("green"),this.config.children.map(function(t){var r,i,c=t.dir;(0,o.printMirror)({dir:c},"green","grey"),e.push((r=c,i=n.default.join(r,"node_modules"),(0,a.pathsExistSync)(i,"getWatcherOptions -> getChildNodeModulesPath() path check"),i))}),(0,o.printLine)({character:".",color:"green"}),(0,o.printMirror)({childrenDirectoriesToIgnore:e},"green","grey"),(0,o.printLine)("green"),this.watcher.options={cwd:process.env.configRootDir||process.cwd(),ignored:["node_modules/**/*"].concat(e),ignoreInitial:!0,ignorePermissionErrors:!0,followSymlinks:!0},this},t.PTOParser=s,t.getWatcherConfig=function(e){var t=new s(e);t.getWatcherTargets().getWatcherOptions();var r=t.watcher,n=r.targets,a=r.options,c=r.parent;return(0,o.printLine)("yellow"),(0,o.printMirror)({targets:n},"yellow","grey"),u("".concat(i.default.yellow("options"),": ").concat(i.default.grey(JSON.stringify(a,null,2)))),(0,o.printLine)("yellow"),{parent:c,targets:n,options:a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PTOWatcher=p,t.initWatcher=function(e){var t=new p(e);return t.getDirectories().createWatcher(),t};var n,i=r(10),o=(n=i)&&n.__esModule?n:{default:n},a=r(4),c=r(0),u=r(11);function s(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}process.env.configRootDir||process.cwd();function p(e){return(0,c.printMirror)({oWatcherConfig:e},"blue","grey"),(0,a.pathsExistSync)(e.targets),this.parent=e.parent,this.targets=e.targets,this.options=e.options,this.directoriesToWatch=[],this.packagesToWatch=[],this}p.prototype.getDirectories=function(){var e=this,t=this.targets;return(0,c.printLine)("blue"),t.map(function(t){var r=t.childDirPath,n=t.childPackagePath;(0,c.printMirror)({childDirPath:r},"blue","grey"),(0,c.printMirror)({childPackagePath:n},"blue","grey"),e.directoriesToWatch.push(r),e.packagesToWatch.push(n)}),(0,c.printLine)("blue"),this},p.prototype.createWatcher=function(){var e,t=this,r=this.directoriesToWatch,n=this.options;if((0,a.pathsExistSync)(r),(0,c.printMirror)({directoriesToWatch:r},"blue","grey"),r.length>0&&(e=o.default.watch(r[0],function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},n))),r.length>1)for(var i=1;i<r.length;i++)e.add(r[i]);e.on("change",function(e){(0,c.printMirror)({modifiedChildPath:e},"green","grey"),(0,u.linker)(e,t.parent.dir)})}},function(e,t){e.exports=require("chokidar")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linker=function(e,t){return d.apply(this,arguments)};var n=l(r(1)),i=l(r(2)),o=l(r(5)),a=l(r(12)),c=l(r(13)),u=l(r(3)),s=r(0);function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}var f=console.log;function d(){var e;return e=regeneratorRuntime.mark(function e(t,r){var l,p,d,h,g,y,v,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!(0,o.default)(t)|!(0,o.default)(r))){e.next=47;break}return(0,s.printMirror)({szModifiedFilePath:t},"magenta","grey"),(0,s.printMirror)({szParentDirPath:r},"magenta","grey"),e.prev=3,e.next=6,(0,a.default)(t);case 6:return h=e.sent,(0,s.printLine)("blue"),(0,s.printMirror)({modifiedRootDir:h},"magenta","green"),g=i.default.join(h,"package.json"),(0,s.printMirror)({modifiedPkgPath:g},"magenta","green"),e.next=13,u.default.readJson(g);case 13:return y=e.sent,v=y.name,d=v,(0,s.printMirror)({childModuleName:d},"blue","grey"),(0,s.printLine)("blue"),e.next=20,(0,c.default)("cd ".concat(h," && yalc publish"));case 20:l=e.sent,(0,s.printLine)("green"),f("childData: ".concat(JSON.stringify(l,null,2))),(0,s.printLine)("green"),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(3),f("".concat(n.default.red("'yalc publish' failed"),"\n").concat(n.default.grey(e.t0)));case 29:return e.prev=29,e.next=32,(0,a.default)(r);case 32:return b=e.sent,(0,s.printMirror)({parentRootDir:b},"magenta","green"),e.next=36,(0,c.default)("cd ".concat(b," && yalc link ").concat(d));case 36:p=e.sent,(0,s.printLine)("yellow"),f("parentData: ".concat(JSON.stringify(p,null,2))),(0,s.printLine)("yellow"),e.next=45;break;case 42:e.prev=42,e.t1=e.catch(29),f("".concat(n.default.red("yalc add ".concat(d," in ").concat(n.default.yellow(parentRootDir)," failed")),"\n").concat(n.default.grey(e.t1)));case 45:e.next=50;break;case 47:(0,s.printLine)("green"),f("parentDirectory not set"),(0,s.printLine)("green");case 50:return e.abrupt("return",this);case 51:case"end":return e.stop()}},e,this,[[3,26],[29,42]])}),(d=function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){p(o,n,i,a,c,"next",e)}function c(e){p(o,n,i,a,c,"throw",e)}a(void 0)})}).apply(this,arguments)}},function(e,t){e.exports=require("pkg-dir")},function(e,t){e.exports=require("await-exec")}]));
//# sourceMappingURL=main.js.map