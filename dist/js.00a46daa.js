// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
console.log('Hallo'); //* 1. Creating tree elements
// let treeOne = document.createElement('div');
// let treeTwo = document.createElement('div');
// let treeThree = document.createElement('div');
//* 2. Adding classes for tree elements
// treeOne.setAttribute('class', 'tree-1');
// treeTwo.setAttribute('class', 'tree-2');
// treeThree.setAttribute('class', 'tree-3');
//* 3. & 4. Appending tree elements to body

var body = document.querySelector('body'); // document.body.append(treeOne, treeTwo, treeThree);
//* 5. Creating a function that generates trees
// function generateTree(className) {
//     let tree = document.createElement('div');
//     tree.setAttribute('class', `${className}`);
//     document.body.append(tree);
// }
// generateTree('tree-1')
// generateTree('tree-2')
// generateTree('tree-3')
//* 6. Adding x and y values to change the position of each tree
// function generateTree(className, x, y) {
//     let tree = document.createElement('div');
//     tree.setAttribute('class', `${className}`);
//     document.body.append(tree);
//     tree.style.left = x;
//     tree.style.top = y;
// }
// generateTree('tree-1', '100px', '200px')
// generateTree('tree-2', '300px', '500px')
// generateTree('tree-3', '600px', '100px')
//* 7. Creating random coordinates according
// function generateTree(className, x, y) {
//     let tree = document.createElement('div');
//     tree.setAttribute('class', `${className}`);
//     document.body.append(tree);
//     tree.style.left = x;
//     tree.style.top = y;
// }
// generateTree('tree-1', `${(Math.random())*(document.body.clientWidth)}px`, `${(Math.random())*(document.body.clientHeight)}px`)
// generateTree('tree-2', `${(Math.random())*(document.body.clientWidth)}px`, `${(Math.random())*(document.body.clientHeight)}px`)
// generateTree('tree-3', `${(Math.random())*(document.body.clientWidth)}px`, `${(Math.random())*(document.body.clientHeight)}px`)
//* 8. Generating random trees at random positions

function generateTree() {
  var tree = document.createElement('div');
  tree.setAttribute('class', "tree-".concat(Math.ceil(Math.random() * 3)));
  document.body.append(tree);
  tree.style.left = "".concat(Math.ceil(Math.random() * window.innerWidth), "px"); // console.log(`${Math.ceil(Math.random()*document.body.clientWidth)}px`);

  tree.style.top = "".concat(Math.ceil(Math.random() * window.innerHeight), "px");
} // generateTree()
// generateTree()
// generateTree()
// generateTree()
// generateTree()
// generateTree(`'tree-${Math.ceil(Math.random()*3)}'`)
// console.log(`'tree-${Math.ceil(Math.random()*3)}'`);
//* 9. Generating random trees at random positions using a for loop


for (var i = 0; i < 50; i++) {
  generateTree();
} //* Bonus: Adding Insects


function generateMosquito() {
  var mosquito = document.createElement('div');
  mosquito.setAttribute('class', 'mosquito');
  document.body.append(mosquito);
  mosquito.style.left = "".concat(Math.floor(Math.random() * window.innerWidth), "px"); // console.log(`${Math.ceil(Math.random()*(document.body.clientWidth))}px`);
  //  console.log(`${Math.ceil(Math.random()*(document.body.clientHeight))}px`);

  mosquito.style.top = "".concat(Math.floor(Math.random() * window.innerHeight + 200), "px");
}

for (var _i = 0; _i < 50; _i++) {
  generateMosquito();
} // //! Extra


var mosquitos = document.querySelectorAll('.mosquito');
console.log(mosquitos);
var mosquitoArray = Array.from(mosquitos); //* Adding an animation to each mosquito

mosquitoArray.forEach(function (mosquito) {
  return mosquito.animate([// keyframes
  {
    transform: 'translateY(-0px)'
  }, {
    transform: 'translateY(-2000px)'
  } // this makes the mosquito faster
  ], {
    // timing options
    duration: 30000 //   iterations: Infinity

  });
}); //* Adding a counter to the website
//* Adding a click event to each mosquito

var counterDiv = document.querySelector('#counter');
var counter = document.createElement('p');
counter.setAttribute('id', 'counterContent');
counter.innerHTML = '0';
var clicks = 0;
counterDiv.appendChild(counter); // console.log(counter.innerHTML);

mosquitoArray.forEach(function (mosquito) {
  return mosquito.addEventListener('click', function () {
    clapSound.play();
    mosquito.remove();
    clicks += 1;
    console.log(clicks);
    counter.innerHTML = "".concat(clicks, "/50");
    console.log('removed mosquito');
  });
}); // * Adding sound effect

var clapSound = new Audio('./audio/mixkit-one-clap-481.wav');
console.log(clapSound); // clap.addEventListener("canplaythrough", event => {
//   /* the audio is now playable; play it if permissions allow */
//   // clap.play();
// });
// let easy = 700
// let medium = 1300
// let difficult = 2000
//* Adding 'play again' button

var refreshBtn = document.querySelector('#refreshBtn');
refreshBtn.addEventListener('click', function () {
  window.location.reload();
});

function playSwarmSound() {
  var swarmSound = new Audio('./audio/PXL4BA8-mosquito-swarm.mp3');
  swarmSound.play();
}

playSwarmSound();
setTimeout(function () {
  window.location.reload();
  alert("Yay, you caught ".concat(clicks, " mosquitoes in 15 seconds! Do you want to play again?"));
}, 15000);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45921" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map