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
})({"modules/async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = deleteTodo;
exports.getAllTodos = getAllTodos;
exports.getAllUsers = getAllUsers;

// Async functions
function getAllTodos() {
  // try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
  //     const data = response.json();
  //     return data;
  // } catch (error) {
  //     alertError(error);
  // }
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=15').then(function (response) {
    return response.json();
  });
}

;

function getAllUsers() {
  // try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = response.json();
  //     return data;
  // } catch (error) {
  //     alertError(error);
  // }
  return fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    return response.json();
  });
}

; // export async function createTodo(todo) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//             method: 'POST',
//             body: JSON.stringify(todo),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const newTodo = await response.json();
//         printTodo(newTodo);
//     } catch (error) {
//         alertError(error);
//     }
// }
// export async function toggleTodoComplete(todoId, completed) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
//             method: 'PATCH',
//             body: JSON.stringify({completed}),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         const data = await response.json();
//         console.log(data);
//         if (!response.ok) {
//             throw new Error('Failer to connect with server! Please try later');
//         }
//     } catch (error) {
//         alertError(error);
//     }
// }

function deleteTodo(todoId) {
  // try {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
  //         method: 'DELETE',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //     });
  //     if (response.ok) {
  //         removeTodo(todoId);
  //     } else {
  //         throw new Error('Failer to connect with server! Please try later');
  //     }
  // } catch (error) {
  //     alertError(error);
  // }
  return fetch("https://jsonplaceholder.typicode.com/todos/".concat(todoId), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    if (response.ok) {
      // removeTodo(todoId);
      return true;
    } else {
      throw new Error('Failer to connect with server! Please try later');
    }
  });
}
},{}],"modules/basic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserOption = createUserOption;
exports.printTodo = printTodo;

var _async = require("./async");

// Basic logic about rendering items of list todo
function getUserName(users, userId) {
  var user = users.find(function (u) {
    return u.id === userId;
  });
  return user.name;
}

function handleTodoChange() {
  var todoId = this.parentElement.dataset.id;
  var completed = this.checked;
  (0, _async.toggleTodoComplete)(todoId, completed);
}

function printTodo(todoList, users, todos, _ref) {
  var id = _ref.id,
      userId = _ref.userId,
      title = _ref.title,
      completed = _ref.completed;

  function handleClose() {
    var todoId = this.parentElement.dataset.id;
    (0, _async.deleteTodo)(todoId).then(function () {
      removeTodo(todoId);
    });
  }

  function removeTodo(todoId) {
    todos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    var todo = todoList.querySelector("[data-id=\"".concat(todoId, "\"]"));
    todo.querySelector('input').removeEventListener('click', handleTodoChange);
    todo.querySelector('.close').removeEventListener('click', handleClose);
    todo.remove();
  }

  var li = document.createElement('li');
  li.className = 'todo-item';
  li.dataset.id = id;
  li.innerHTML = "<span>".concat(title, " <i>by</i> <b>").concat(getUserName(users, userId), "</b></span>");
  var status = document.createElement('input');
  status.type = 'checkbox';
  status.checked = completed;
  status.addEventListener('change', handleTodoChange);
  var close = document.createElement('span');
  close.innerHTML = '&times;';
  close.className = 'close';
  close.addEventListener('click', handleClose);
  li.prepend(status);
  li.append(close);
  todoList.prepend(li);
}

function createUserOption(userSelect, user) {
  var option = document.createElement('option');
  option.value = user.id;
  option.innerText = user.name;
  userSelect.append(option);
}

function alertError(error) {
  alert(error.message);
}
},{"./async":"modules/async.js"}],"modules/event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClose = handleClose;
exports.handleSubmit = handleSubmit;
exports.handleTodoChange = handleTodoChange;
exports.initApp = initApp;

var _async = require("./async");

var _basic = require("./basic");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Event logic
function initApp(userSelect, todoList, todos, users) {
  Promise.all([(0, _async.getAllTodos)(), (0, _async.getAllUsers)()]).then(function (values) {
    var _values = _slicedToArray(values, 2);

    todos = _values[0];
    users = _values[1];
    console.log(values); // Отправить в разметку

    todos.forEach(function (todo) {
      return (0, _basic.printTodo)(todoList, users, todos, todo);
    });
    users.forEach(function (user) {
      return (0, _basic.createUserOption)(userSelect, user);
    });
  });
}

function handleSubmit(event) {
  event.preventDefault();
  createTodo({
    userId: Number(form.user.value),
    title: form.todo.value,
    completed: false
  });
}

function handleTodoChange() {
  var todoId = this.parentElement.dataset.id;
  var completed = this.checked;
  toggleTodoComplete(todoId, completed);
}

function handleClose() {
  var todoId = this.parentElement.dataset.id;
  deleteTodo(todoId);
}
},{"./async":"modules/async.js","./basic":"modules/basic.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _event = require("./modules/event");

// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/users
// Globals
var todoList = document.getElementById('todo-list');
var userSelect = document.getElementById('user-todo');
var form = document.querySelector('form');
var todos = [];
var users = []; // Attach events

document.addEventListener('DOMContentLoaded', function () {
  return (0, _event.initApp)(userSelect, todoList, todos, users);
});
form.addEventListener('submit', _event.handleSubmit); // // Basic logic about rendering items of list todo
// function getUserName(userId) {
//     const user = users.find(u => u.id === userId);
//     return user.name;
// }
// function printTodo({id, userId, title, completed}) {
//     const li = document.createElement('li');
//     li.className = 'todo-item';
//     li.dataset.id = id;
//     li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`;
//     const status = document.createElement('input');
//     status.type = 'checkbox';
//     status.checked = completed;
//     status.addEventListener('change', handleTodoChange);
//     const close = document.createElement('span');
//     close.innerHTML = '&times;';
//     close.className = 'close';
//     close.addEventListener('click', handleClose);
//     li.prepend(status);
//     li.append(close);
//     todoList.prepend(li);
// }
// function createUserOption(user) {
//     const option = document.createElement('option');
//     option.value = user.id;
//     option.innerText = user.name;
//     userSelect.append(option);
// }
// function removeTodo(todoId) {
//     todos = todos.filter(todo => todo.id !== todoId);
//     const todo = todoList.querySelector(`[data-id="${todoId}"]`);
//     todo.querySelector('input').removeEventListener('click', handleTodoChange);
//     todo.querySelector('.close').removeEventListener('click', handleClose);
//     todo.remove();
// }
// function alertError(error) {
//     alert(error.message);
// }
// // Event logic
// function initApp() {
//     Promise.all([getAllTodos(), getAllUsers()]).then(values => {
//         [todos, users] = values;
//         // Отправить в разметку
//         todos.forEach(todo => printTodo(todo));
//         users.forEach(user => createUserOption(user));
//     })
// }
// function handleSubmit(event) {
//     event.preventDefault();
//     createTodo({
//         userId: Number(form.user.value),
//         title: form.todo.value,
//         completed: false,
//     })
// }
// // Async functions
// async function getAllTodos() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
//         const data = response.json();
//         return data;
//     } catch (error) {
//         alertError(error);
//     }
// };
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = response.json();
//         return data;
//     } catch (error) {
//         alertError(error);
//     }
// };
// async function createTodo(todo) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//             method: 'POST',
//             body: JSON.stringify(todo),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const newTodo = await response.json();
//         printTodo(newTodo);
//     } catch (error) {
//         alertError(error);
//     }
// }
// async function toggleTodoComplete(todoId, completed) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
//             method: 'PATCH',
//             body: JSON.stringify({completed}),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         const data = await response.json();
//         console.log(data);
//         if (!response.ok) {
//             throw new Error('Failer to connect with server! Please try later');
//         }
//     } catch (error) {
//         alertError(error);
//     }
// }
// async function deleteTodo(todoId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         if (response.ok) {
//             removeTodo(todoId);
//         } else {
//             throw new Error('Failer to connect with server! Please try later');
//         }
//     } catch (error) {
//         alertError(error);
//     }
// }
},{"./modules/event":"modules/event.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52374" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map