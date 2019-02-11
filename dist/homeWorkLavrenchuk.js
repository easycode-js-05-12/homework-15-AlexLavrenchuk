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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// -------------------------- Home work ------------------------ //\n// ------------------------ Lavrenchuk ------------------------- //\n// -------------------------- ФИО ------------------------------ //\nvar form = document.forms['form'];\nvar select = document.querySelector('.add__type');\nvar inputDescription = document.querySelector('.add__description');\nvar inputValue = document.querySelector('.add__value');\nvar button = document.querySelector('.add__btn');\nvar incomeList = document.querySelector('.income__list');\nvar expensesList = document.querySelector('.expenses__list');\nvar incomeView = document.querySelector('.budget__income--value');\nvar expensesView = document.querySelector('.budget__expenses--value');\nvar incomeArr = [];\nvar expensesArr = [];\nvar income = 0;\nvar expenses = 0; //---------------\n\n/**\r\n * @docs addIncome - recording and withdrawal of income\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\nvar addIncome = function addIncome(description, value) {\n  var plus = {\n    description: description,\n    value: value\n  };\n  income += +value;\n  incomeView.textContent = \"+ \".concat(income);\n  incomeArr.push(plus);\n  addMarkupIncomeView(description, value);\n};\n/**\r\n * @dosc addMarkupIncomeView - add to page\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\n\nvar addMarkupIncomeView = function addMarkupIncomeView(description, value) {\n  var markup = markupIncome(description, value);\n  incomeList.insertAdjacentHTML('beforeend', markup);\n};\n/**\r\n * @docs markupIncome - creating markup with the necessary parameters\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\n\nvar markupIncome = function markupIncome(description, value) {\n  return \"\\n    <div class=\\\"item clearfix\\\">\\n        <div class=\\\"item__description\\\">\".concat(description, \"</div>\\n        <div class=\\\"right clearfix\\\">\\n            <div class=\\\"item__value\\\">\").concat(value, \"</div>\\n            <div class=\\\"item__delete\\\">\\n                <button class=\\\"item__delete--btn\\\"><i class=\\\"ion-ios-close-outline\\\"></i></button>\\n            </div>\\n        </div>\\n    </div>\\n    \");\n}; //----------\n\n/**\r\n * @docs addExpenses - recording and withdrawing costs\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\n\nvar addExpenses = function addExpenses(description, value) {\n  var minus = {\n    description: description,\n    value: value\n  };\n  expenses += +value;\n  expensesView.textContent = \"- \".concat(expenses);\n  expensesArr.push(minus);\n  addMarkupExpensesView(description, value);\n};\n/**\r\n * @dosc addMarkupExpensesView - add to page\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\n\nvar addMarkupExpensesView = function addMarkupExpensesView(description, value) {\n  var markup = markupExpenses(description, value);\n  expensesList.insertAdjacentHTML('beforeend', markup);\n};\n/**\r\n * @docs markupExpenses - creating markup with the necessary parameters\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\n\nvar markupExpenses = function markupExpenses(description, value) {\n  return \"\\n    <div class=\\\"item clearfix\\\">\\n        <div class=\\\"item__description\\\">\".concat(description, \"</div>\\n        <div class=\\\"right clearfix\\\">\\n            <div class=\\\"item__value\\\">\").concat(value, \"</div>\\n            <div class=\\\"item__percentage\\\">\").concat((100 / (income / value)).toFixed(1), \"%</div>\\n            <div class=\\\"item__delete\\\">\\n                <button class=\\\"item__delete--btn\\\"><i class=\\\"ion-ios-close-outline\\\"></i></button>\\n            </div>\\n        </div>\\n    </div>\\n    \");\n}; //-----------\n\n\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  if (select.value === \"income\") {\n    addIncome(inputDescription.value, inputValue.value);\n    form.reset();\n  }\n\n  if (select.value === 'expense') {\n    addExpenses(inputDescription.value, inputValue.value);\n    form.reset();\n  }\n\n  document.querySelector('.budget__value').textContent = income - expenses;\n});\n/**\r\n * @docs changeOption - class change when select is changed\r\n */\n\nvar changeOption = function changeOption(e) {\n  select.classList.toggle('red-focus');\n  inputDescription.classList.toggle('red-focus');\n  inputValue.classList.toggle('red-focus');\n  button.classList.toggle('red');\n};\n\nselect.addEventListener(\"change\", changeOption); //-----------\n\n/**\r\n * @docs deleteItemIncome - remove from array and variable\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\nvar deleteItemIncome = function deleteItemIncome(description, value) {\n  income -= +value;\n  incomeView.textContent = \"+ \".concat(income);\n  var index;\n\n  for (var i = 0; i < incomeArr.length; i++) {\n    if (incomeArr[i].description === description && incomeArr[i].value === value) {\n      index = i;\n    }\n  }\n\n  incomeArr.splice(index, 1);\n};\n\nincomeList.addEventListener('click', function (e) {\n  e.preventDefault();\n  if (e.target.parentElement.className !== \"item__delete--btn\") return;\n  deleteItemIncome(e.target.closest('.item').firstElementChild.innerHTML, e.target.closest('.item').lastElementChild.firstElementChild.innerHTML);\n  e.target.closest('.item').parentElement.removeChild(e.target.closest('.item'));\n  document.querySelector('.budget__value').textContent = income - expenses;\n}); //--------------\n\n/**\r\n * @docs deleteItemExpenses - remove from array and variable\r\n * @param {string} description \r\n * @param {string} value \r\n */\n\nvar deleteItemExpenses = function deleteItemExpenses(description, value) {\n  expenses -= +value;\n  expensesView.textContent = \"- \".concat(expenses);\n  var index;\n\n  for (var i = 0; i < expensesArr.length; i++) {\n    if (expensesArr[i].description === description && expensesArr[i].value === value) {\n      index = i;\n    }\n  }\n\n  expensesArr.splice(index, 1);\n};\n\nexpensesList.addEventListener('click', function (e) {\n  e.preventDefault();\n  if (e.target.parentElement.className !== \"item__delete--btn\") return;\n  deleteItemExpenses(e.target.closest('.item').firstElementChild.innerHTML, e.target.closest('.item').lastElementChild.firstElementChild.innerHTML);\n  e.target.closest('.item').parentElement.removeChild(e.target.closest('.item'));\n  document.querySelector('.budget__value').textContent = income - expenses;\n}); //--------------\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });