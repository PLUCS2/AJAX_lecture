/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/gifomatic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/gifomatic.js":
/*!*******************************!*\
  !*** ./frontend/gifomatic.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const appendGif = gifUrl => {\n//   $(\".gif-display\").empty();\n//   $(\".gif-display\").append($(`<img class=\"gif\" src=${gifUrl} />`));\n// };\n\n// const postMessage = message => {\n//   $('.messages').text(message);\n// };\n\nconst newGifAJAX = queryString => {\n  return $.ajax({\n    method: 'GET',\n    url: `https://api.giphy.com/v1/gifs/random?tag=${queryString}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,\n  });\n};\n\nconst setEventHandlers = () => {\n  $('#new-gif-form').on('submit', e => {\n    e.preventDefault();\n    fetchNewGif();\n  });\n\n  // $(\"#save-gif-form\").on(\"submit\", e => {\n  //   e.preventDefault();\n  //   saveGif();\n  // });\n  //\n  // $(\"#old-gif-form\").on(\"submit\", e => {\n  //   e.preventDefault();\n  //   fetchSavedGif();\n  // });\n  //\n  // $(\"#callback-hell-form\").on(\"submit\", e => {\n  //   e.preventDefault();\n  //   callbackHell();\n  // })\n  // $(\".clear\").on(\"click\", () => {\n  //   $(\".gif-display\").empty();\n  //   $(\".messages\").empty();\n  // });\n};\n\n$(() => {\n  setEventHandlers();\n});\n\n// ------------- GIF ACTIONS - fetchNew, save, and fetchSaved ---------------\n\nconst fetchNewGif = () => {\n  const $input = $('#new-gif-query');\n  const queryString = $input.val();\n  $input.val('');\n\n  // TODO: Initiate AJAX call to GIPHY API, take response and put on the DOM\n};\n\n// const saveGif = e => {\n//   const $input = $(\"#save-gif-title\");\n//   const title = $input.val();\n//   $input.val(\"\");\n//   const gif = {\n//     title: title,\n//     url: $(\".gif-display > img\").attr('src')\n//   };\n//\n//   // TODO: Initiate AJAX request to Rails backend, give a message if successful\n// };\n//\n// const fetchSavedGif = () => {\n//   const $input = $(\"#old-gif-query\");\n//   const title = $input.val();\n//   $input.val(\"\");\n//\n//   // TODO: Initate AJAX request to Rails backend, add gif to the DOM if successful\n// };\n\n// ------------- CALLBACK HELL ---------------\n\n// const callbackHell = () => {\n//   const $input = $('#callback-hell-query');\n//   const title = $input.val();\n//   $input.val('');\n//   return $.ajax({\n//     method: 'GET',\n//     url: `/gifs/${title}`,\n//     dataType: 'json',\n//     success: gif => {\n//       // gif exists in DB\n//       appendGif(gif.url);\n//     },\n//     error: response => {\n//       // gif doesn't exist\n//       postMessage(`${response.responseJSON[0]} Fetching new gif...`);\n//       return $.ajax({\n//         method: 'GET',\n//         url: `https://api.giphy.com/v1/gifs/random?tag=${title}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,\n//         success: (\n//           gif // giphy call is successful\n//         ) => {\n//           const url = gif.data.image_url;\n//           appendGif(url);\n//           gif = { title: title, url: url };\n//           return $.ajax({\n//             // save gif to db\n//             method: 'POST',\n//             url: '/gifs',\n//             data: {\n//               gif: gif,\n//             },\n//             success: savedGif => {\n//               postMessage('Successfully saved!');\n//             },\n//           });\n//         },\n//       });\n//     },\n//   });\n// };\n\n\n//# sourceURL=webpack:///./frontend/gifomatic.js?");

/***/ })

/******/ });