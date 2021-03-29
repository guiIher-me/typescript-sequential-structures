/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/collection/LinkedList.ts":
/*!*****************************************!*\
  !*** ./src/ts/collection/LinkedList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _SequentialList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SequentialList */ "./src/ts/collection/SequentialList.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/ts/collection/Node.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        return _super.call(this) || this;
    }
    LinkedList.prototype.add = function (data) {
        return this.addFirst(data);
    };
    LinkedList.prototype.addFirst = function (data) {
        return _super.prototype.addFirst.call(this, data);
    };
    LinkedList.prototype.addLast = function (data) {
        return _super.prototype.addLast.call(this, data);
    };
    LinkedList.prototype.peek = function () {
        return this.peekFirst();
    };
    LinkedList.prototype.peekFirst = function () {
        return _super.prototype.peekFirst.call(this);
    };
    LinkedList.prototype.peekLast = function () {
        return _super.prototype.peekLast.call(this);
    };
    LinkedList.prototype.remove = function () {
        return this.removeFirst();
    };
    LinkedList.prototype.removeFirst = function () {
        return _super.prototype.removeFirst.call(this);
    };
    LinkedList.prototype.removeLast = function () {
        return _super.prototype.removeLast.call(this);
    };
    LinkedList.prototype.clone = function () {
        var cloned = new LinkedList();
        if (this.empty())
            return cloned;
        cloned.head = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(this.head.data);
        cloned.tail = _super.prototype.clone_impl.call(this, cloned.head, this.head);
        cloned.length = this.length;
        return cloned;
    };
    return LinkedList;
}(_SequentialList__WEBPACK_IMPORTED_MODULE_0__.SequentialList));



/***/ }),

/***/ "./src/ts/collection/ListIterator.ts":
/*!*******************************************!*\
  !*** ./src/ts/collection/ListIterator.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListIterator": () => (/* binding */ ListIterator)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/ts/collection/Node.ts");

var ListIterator = /** @class */ (function () {
    function ListIterator(node) {
        this.current = node;
    }
    ListIterator.prototype.next = function () {
        _Node__WEBPACK_IMPORTED_MODULE_0__.Node.assertNotEmpty(this.current, "Iterator Out of Bounds");
        var element = this.current.data;
        this.current = this.current.next;
        return element;
    };
    ListIterator.prototype.hasNext = function () {
        return !_Node__WEBPACK_IMPORTED_MODULE_0__.Node.empty(this.current);
    };
    return ListIterator;
}());



/***/ }),

/***/ "./src/ts/collection/Node.ts":
/*!***********************************!*\
  !*** ./src/ts/collection/Node.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Util */ "./src/ts/util/Util.ts");

var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    Node.empty = function (node) {
        return node === null || node === undefined;
    };
    Node.assertNotEmpty = function (node, message) {
        _util_Util__WEBPACK_IMPORTED_MODULE_0__.Util.assertFalse(Node.empty(node), message);
    };
    return Node;
}());



/***/ }),

/***/ "./src/ts/collection/SequentialList.ts":
/*!*********************************************!*\
  !*** ./src/ts/collection/SequentialList.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SequentialList": () => (/* binding */ SequentialList)
/* harmony export */ });
/* harmony import */ var _ListIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListIterator */ "./src/ts/collection/ListIterator.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/ts/collection/Node.ts");


var SequentialList = /** @class */ (function () {
    function SequentialList() {
        this.STRUCTURE = 'List';
        this.ERROR_EMPTY_LIST = this.STRUCTURE + " is empty!";
        this.ERROR_ILLEGAL_ARG = 'Inappropriate argument!';
        this.clear();
    }
    SequentialList.prototype.iterator = function () {
        var sequential_list_iterator = new _ListIterator__WEBPACK_IMPORTED_MODULE_0__.ListIterator(this.head);
        return sequential_list_iterator;
    };
    SequentialList.prototype.clear = function (node) {
        if (node === void 0) { node = this.head; }
        if (this.empty(node)) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
        var next = node.next;
        node = null;
        return this.clear(next);
    };
    SequentialList.prototype.assertNotEmpty = function (node, message) {
        if (node === void 0) { node = this.head; }
        if (message === void 0) { message = this.ERROR_EMPTY_LIST; }
        _Node__WEBPACK_IMPORTED_MODULE_1__.Node.assertNotEmpty(this.head, this.ERROR_EMPTY_LIST);
    };
    SequentialList.prototype.empty = function (node) {
        if (node === void 0) { node = this.head; }
        return _Node__WEBPACK_IMPORTED_MODULE_1__.Node.empty(node);
    };
    SequentialList.prototype.size = function () {
        return this.length;
    };
    SequentialList.prototype.contains = function (data, node) {
        if (node === void 0) { node = this.head; }
        if (this.empty(node))
            return false;
        if (node.data == data)
            return true;
        return this.contains(data, node.next);
    };
    SequentialList.prototype.print = function () {
        console.log(this.STRUCTURE);
        var it = this.iterator();
        while (it.hasNext())
            console.log("[" + it.next() + "]");
        console.log("[null]");
    };
    SequentialList.prototype.addFirst = function (data) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(data);
        if (this.empty())
            this.tail = node;
        node.next = this.head;
        this.head = node;
        this.length++;
    };
    SequentialList.prototype.addLast = function (data) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(data);
        if (this.empty())
            this.head = node;
        else
            this.tail.next = node;
        this.tail = node;
        this.length++;
    };
    SequentialList.prototype.peekFirst = function () {
        this.assertNotEmpty();
        return this.head.data;
    };
    SequentialList.prototype.peekLast = function () {
        this.assertNotEmpty();
        return this.tail.data;
    };
    SequentialList.prototype.get = function (n) {
        this.assertNotEmpty();
        return this.getNode(n, this.head).data;
    };
    SequentialList.prototype.getNode = function (n, node) {
        this.assertNotEmpty(node, this.ERROR_ILLEGAL_ARG);
        if (n == 1)
            return node;
        return this.getNode(n - 1, node.next);
    };
    SequentialList.prototype.removeFirst = function () {
        this.assertNotEmpty();
        var element = this.head.data;
        this.head = this.head.next;
        if (this.empty())
            this.tail = null;
        this.length--;
        return element;
    };
    SequentialList.prototype.removeLast = function () {
        this.assertNotEmpty();
        var element = this.tail.data;
        if (this.length == 1) {
            this.clear();
            return element;
        }
        var penult = this.getNode(this.length - 1, this.head);
        this.tail = penult;
        this.tail.next = null;
        this.length--;
        return element;
    };
    SequentialList.prototype.clone_impl = function (node_dest, node_src) {
        if (this.empty(node_src.next))
            return node_dest;
        node_dest.next = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(node_src.next.data);
        return this.clone_impl(node_dest.next, node_src.next);
    };
    return SequentialList;
}());



/***/ }),

/***/ "./src/ts/util/Util.ts":
/*!*****************************!*\
  !*** ./src/ts/util/Util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.assertEqual = function (condition, expected, message) {
        if (condition != expected)
            throw new Error(message ? message : "Unexpected error!");
    };
    Util.assertTrue = function (condition, message) {
        Util.assertEqual(condition, true, message);
    };
    Util.assertFalse = function (condition, message) {
        Util.assertEqual(condition, false, message);
    };
    return Util;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/example_list.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_collection_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/collection/LinkedList */ "./src/ts/collection/LinkedList.ts");
/* this is an example of using Linked List */

var list = new _ts_collection_LinkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
list.addFirst(10);
list.addLast(50);
list.add(20); //in first
list.addFirst(30);
list.addLast(80);
list.addFirst(5);
list.removeLast(); //remove 80
console.log("Exists 20? " + list.contains(20));
console.log("whats the last? " + list.peekLast());
list.print();
console.log("iterator:");
var it = list.iterator();
while (it.hasNext())
    console.log(it.next());
list.clear();
console.log("Empty? " + list.empty());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL3RzL2NvbGxlY3Rpb24vTGlua2VkTGlzdC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL3RzL2NvbGxlY3Rpb24vTGlzdEl0ZXJhdG9yLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvdHMvY29sbGVjdGlvbi9Ob2RlLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvdHMvY29sbGVjdGlvbi9TZXF1ZW50aWFsTGlzdC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL3RzL3V0aWwvVXRpbC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9leGFtcGxlX2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNWO0FBRXhDO0lBQW1DLDhCQUFpQjtJQUVoRDtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxJQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSw2QkFBUSxHQUFmLFVBQWdCLElBQU87UUFDbkIsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxJQUFPO1FBQ2xCLE9BQU8saUJBQU0sT0FBTyxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQ0ksT0FBTyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sNkJBQVEsR0FBZjtRQUNJLE9BQU8saUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLDJCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7UUFDSSxPQUFPLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNJLE9BQU8saUJBQU0sVUFBVSxXQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLDBCQUFLLEdBQVo7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBSyxDQUFDO1FBRW5DLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sTUFBTSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxJQUFJLEdBQUssSUFBSSx1Q0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksR0FBSyxpQkFBTSxVQUFVLFlBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQ0F2RGtDLDJEQUFjLEdBdURoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHVDO0FBRXhDO0lBR0Msc0JBQVksSUFBdUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLDJCQUFJLEdBQVg7UUFDQyxzREFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFFNUQsSUFBSSxPQUFPLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUVqQyxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRU0sOEJBQU8sR0FBZDtRQUNDLE9BQU8sQ0FBQyw2Q0FBVSxDQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUM7QUFJcEM7SUFJSSxjQUFZLElBQU87UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRWEsVUFBSyxHQUFuQixVQUF1QixJQUF1QjtRQUM3QyxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBRWEsbUJBQWMsR0FBNUIsVUFBZ0MsSUFBdUIsRUFBRSxPQUFlO1FBQ3BFLHdEQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjZDO0FBQ047QUFHeEM7SUFTSTtRQUpVLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIscUJBQWdCLEdBQU0sSUFBSSxDQUFDLFNBQVMsZUFBWSxDQUFDO1FBQ2pELHNCQUFpQixHQUFHLHlCQUF5QixDQUFDO1FBR3BELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUNJLElBQU0sd0JBQXdCLEdBQWdCLElBQUksdURBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRU0sOEJBQUssR0FBWixVQUFhLElBQW1DO1FBQW5DLDhCQUEwQixJQUFJLENBQUMsSUFBSTtRQUM1QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTztTQUNWO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyx1Q0FBYyxHQUF4QixVQUF5QixJQUFtQyxFQUFFLE9BQXVDO1FBQTVFLDhCQUEwQixJQUFJLENBQUMsSUFBSTtRQUFFLG9DQUFrQixJQUFJLENBQUMsZ0JBQWdCO1FBQ2pHLHNEQUFtQixDQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxJQUFtQztRQUFuQyw4QkFBMEIsSUFBSSxDQUFDLElBQUk7UUFDNUMsT0FBTyw2Q0FBVSxDQUFJLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSw2QkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLElBQU8sRUFBRSxJQUFtQztRQUFuQyw4QkFBMEIsSUFBSSxDQUFDLElBQUk7UUFDeEQsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLE9BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQUcsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVTLGlDQUFRLEdBQWxCLFVBQW1CLElBQU87UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVTLGdDQUFPLEdBQWpCLFVBQWtCLElBQU87UUFDckIsSUFBTSxJQUFJLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxrQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFUyxpQ0FBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFUyw0QkFBRyxHQUFiLFVBQWMsQ0FBUztRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFUyxnQ0FBTyxHQUFqQixVQUFrQixDQUFTLEVBQUUsSUFBdUI7UUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEQsSUFBRyxDQUFDLElBQUksQ0FBQztZQUNMLE9BQU8sSUFBSSxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRVMsb0NBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzQixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRVMsbUNBQVUsR0FBcEI7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRVMsbUNBQVUsR0FBcEIsVUFBcUIsU0FBNEIsRUFBRSxRQUEyQjtRQUMxRSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPLFNBQVMsQ0FBQztRQUVyQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksdUNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUpEO0lBQUE7SUFhQSxDQUFDO0lBWk8sZ0JBQVcsR0FBbEIsVUFBbUIsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE9BQWdCO1FBQ3RFLElBQUcsU0FBUyxJQUFJLFFBQVE7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLGVBQVUsR0FBakIsVUFBa0IsU0FBa0IsRUFBRSxPQUFlO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sZ0JBQVcsR0FBbEIsVUFBbUIsU0FBa0IsRUFBRSxPQUFlO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0YsV0FBQztBQUFELENBQUM7Ozs7Ozs7O1VDZEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQSw2Q0FBNkM7QUFFVztBQUV4RCxJQUFJLElBQUksR0FBRyxJQUFJLGlFQUFVLEVBQVUsQ0FBQztBQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVU7QUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsV0FBVztBQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QixPQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJleGFtcGxlX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZW50aWFsTGlzdCB9IGZyb20gJy4vU2VxdWVudGlhbExpc3QnO1xyXG5pbXBvcnQgeyBOdWxsYWJsZSwgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlua2VkTGlzdDxFPiBleHRlbmRzIFNlcXVlbnRpYWxMaXN0PEU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEZpcnN0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRGaXJzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFkZEZpcnN0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRMYXN0KGRhdGE6IEUpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuYWRkTGFzdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpOiBFIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVla0ZpcnN0KCk6IEUge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5wZWVrRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVla0xhc3QoKTogRSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBlZWtMYXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiBFIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGaXJzdCgpOiBFIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucmVtb3ZlRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlTGFzdCgpOiBFIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucmVtb3ZlTGFzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBMaW5rZWRMaXN0PEU+IHtcclxuICAgICAgICBjb25zdCBjbG9uZWQgPSBuZXcgTGlua2VkTGlzdDxFPigpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XHJcblxyXG4gICAgICAgIGNsb25lZC5oZWFkICAgPSBuZXcgTm9kZSh0aGlzLmhlYWQuZGF0YSk7XHJcbiAgICAgICAgY2xvbmVkLnRhaWwgICA9IHN1cGVyLmNsb25lX2ltcGwoY2xvbmVkLmhlYWQsIHRoaXMuaGVhZCk7XHJcbiAgICAgICAgY2xvbmVkLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmVkO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pdGVyYXRvci9JdGVyYXRvcic7XHJcbmltcG9ydCB7IE51bGxhYmxlLCBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlcmF0b3I8RT4gaW1wbGVtZW50cyBJdGVyYXRvcjxFPiB7XHJcblx0cHJvdGVjdGVkIGN1cnJlbnQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+KSB7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSBub2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHQoKTogRSB7XHJcblx0XHROb2RlLmFzc2VydE5vdEVtcHR5KHRoaXMuY3VycmVudCwgXCJJdGVyYXRvciBPdXQgb2YgQm91bmRzXCIpO1xyXG5cclxuXHRcdGxldCBlbGVtZW50ICA9IHRoaXMuY3VycmVudC5kYXRhO1xyXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50Lm5leHQ7XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAhTm9kZS5lbXB0eTxFPih0aGlzLmN1cnJlbnQpO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vdXRpbC9VdGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIE51bGxhYmxlPFQ+ID0gVCB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9kZTxFPiB7XHJcbiAgICBwdWJsaWMgZGF0YTogRTtcclxuICAgIHB1YmxpYyBuZXh0OiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBFKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pIHtcclxuICAgIFx0cmV0dXJuIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXNzZXJ0Tm90RW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFV0aWwuYXNzZXJ0RmFsc2UoTm9kZS5lbXB0eShub2RlKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhYmxlJztcclxuaW1wb3J0IHsgSXRlcmF0b3IgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhdG9yJztcclxuaW1wb3J0IHsgTGlzdEl0ZXJhdG9yIH0gZnJvbSAnLi9MaXN0SXRlcmF0b3InO1xyXG5pbXBvcnQgeyBOdWxsYWJsZSwgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL1V0aWwnOyBcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZXF1ZW50aWFsTGlzdDxFPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPEU+IHtcclxuICAgIHByb3RlY3RlZCBoZWFkOiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuICAgIHByb3RlY3RlZCB0YWlsOiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuICAgIHByb3RlY3RlZCBsZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgU1RSVUNUVVJFID0gJ0xpc3QnO1xyXG4gICAgcHJvdGVjdGVkIEVSUk9SX0VNUFRZX0xJU1QgPSBgJHt0aGlzLlNUUlVDVFVSRX0gaXMgZW1wdHkhYDtcclxuICAgIHByb3RlY3RlZCBFUlJPUl9JTExFR0FMX0FSRyA9ICdJbmFwcHJvcHJpYXRlIGFyZ3VtZW50ISc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxFPiB7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yOiBJdGVyYXRvcjxFPiA9IG5ldyBMaXN0SXRlcmF0b3IodGhpcy5oZWFkKTtcclxuICAgICAgICByZXR1cm4gc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcihub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0ID0gbm9kZS5uZXh0O1xyXG4gICAgICAgIG5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcihuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXNzZXJ0Tm90RW1wdHkobm9kZTogTnVsbGFibGU8Tm9kZTxFPj4gPSB0aGlzLmhlYWQsIG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuRVJST1JfRU1QVFlfTElTVCk6IHZvaWQge1xyXG4gICAgICAgIE5vZGUuYXNzZXJ0Tm90RW1wdHk8RT4odGhpcy5oZWFkLCB0aGlzLkVSUk9SX0VNUFRZX0xJU1QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbXB0eShub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBOb2RlLmVtcHR5PEU+KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyhkYXRhOiBFLCBub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYobm9kZS5kYXRhID09IGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhkYXRhLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlNUUlVDVFVSRSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5pdGVyYXRvcigpO1xyXG4gICAgICAgIHdoaWxlKGl0Lmhhc05leHQoKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFske2l0Lm5leHQoKX1dYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtudWxsXWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhZGRGaXJzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcblxyXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcclxuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZExhc3QoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBlZWtGaXJzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwZWVrTGFzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFpbC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQobjogbnVtYmVyKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobiwgdGhpcy5oZWFkKS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXROb2RlKG46IG51bWJlciwgbm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pOiBOb2RlPEU+IHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KG5vZGUsIHRoaXMuRVJST1JfSUxMRUdBTF9BUkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG4gPT0gMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobi0xLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmVGaXJzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmhlYWQuZGF0YTtcclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUxhc3QoKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50YWlsLmRhdGE7XHJcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGVudWx0ID0gdGhpcy5nZXROb2RlKHRoaXMubGVuZ3RoLTEsIHRoaXMuaGVhZCk7XHJcbiAgICAgICAgdGhpcy50YWlsID0gcGVudWx0O1xyXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xvbmVfaW1wbChub2RlX2Rlc3Q6IE51bGxhYmxlPE5vZGU8RT4+LCBub2RlX3NyYzogTnVsbGFibGU8Tm9kZTxFPj4pOiBOdWxsYWJsZTxOb2RlPEU+PiB7XHJcbiAgICAgICAgaWYodGhpcy5lbXB0eShub2RlX3NyYy5uZXh0KSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVfZGVzdDsgXHJcblxyXG4gICAgICAgIG5vZGVfZGVzdC5uZXh0ID0gbmV3IE5vZGUobm9kZV9zcmMubmV4dC5kYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVfaW1wbChub2RlX2Rlc3QubmV4dCwgbm9kZV9zcmMubmV4dCk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBVdGlsIHtcclxuXHRzdGF0aWMgYXNzZXJ0RXF1YWwoY29uZGl0aW9uOiBib29sZWFuLCBleHBlY3RlZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xyXG5cdCAgICBpZihjb25kaXRpb24gIT0gZXhwZWN0ZWQpXHJcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZT8gbWVzc2FnZSA6IFwiVW5leHBlY3RlZCBlcnJvciFcIik7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXNzZXJ0VHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG5cdCAgICBVdGlsLmFzc2VydEVxdWFsKGNvbmRpdGlvbiwgdHJ1ZSwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXNzZXJ0RmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHQgICAgVXRpbC5hc3NlcnRFcXVhbChjb25kaXRpb24sIGZhbHNlLCBtZXNzYWdlKTtcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIHRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBMaW5rZWQgTGlzdCAqL1xyXG5cclxuaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gXCIuL3RzL2NvbGxlY3Rpb24vTGlua2VkTGlzdFwiO1xyXG5cclxubGV0IGxpc3QgPSBuZXcgTGlua2VkTGlzdDxudW1iZXI+KCk7XHJcblxyXG5saXN0LmFkZEZpcnN0KDEwKTtcclxubGlzdC5hZGRMYXN0KDUwKTtcclxubGlzdC5hZGQoMjApOyAvL2luIGZpcnN0XHJcbmxpc3QuYWRkRmlyc3QoMzApO1xyXG5saXN0LmFkZExhc3QoODApO1xyXG5saXN0LmFkZEZpcnN0KDUpO1xyXG5saXN0LnJlbW92ZUxhc3QoKTsgLy9yZW1vdmUgODBcclxuXHJcbmNvbnNvbGUubG9nKFwiRXhpc3RzIDIwPyBcIiArIGxpc3QuY29udGFpbnMoMjApKTtcclxuY29uc29sZS5sb2coXCJ3aGF0cyB0aGUgbGFzdD8gXCIgKyBsaXN0LnBlZWtMYXN0KCkpO1xyXG5saXN0LnByaW50KCk7XHJcblxyXG5jb25zb2xlLmxvZyhcIml0ZXJhdG9yOlwiKTtcclxubGV0IGl0ID0gbGlzdC5pdGVyYXRvcigpO1xyXG53aGlsZShpdC5oYXNOZXh0KCkpXHJcblx0Y29uc29sZS5sb2coaXQubmV4dCgpKTtcclxuXHJcbmxpc3QuY2xlYXIoKTtcclxuY29uc29sZS5sb2coXCJFbXB0eT8gXCIgKyBsaXN0LmVtcHR5KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=