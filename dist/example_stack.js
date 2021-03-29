/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/ts/collection/Stack.ts":
/*!************************************!*\
  !*** ./src/ts/collection/Stack.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _SequentialList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SequentialList */ "./src/ts/collection/SequentialList.ts");
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

var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        var _this = _super.call(this) || this;
        _this.STRUCTURE = 'Stack';
        return _this;
    }
    Stack.prototype.push = function (data) {
        return this.addFirst(data);
    };
    Stack.prototype.peek = function () {
        return _super.prototype.peekFirst.call(this);
    };
    Stack.prototype.pop = function () {
        return this.removeFirst();
    };
    return Stack;
}(_SequentialList__WEBPACK_IMPORTED_MODULE_0__.SequentialList));



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
/*!******************************!*\
  !*** ./src/example_stack.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_collection_Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/collection/Stack */ "./src/ts/collection/Stack.ts");
/* this is an example of using Stack */

var stack = new _ts_collection_Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
stack.push('k');
stack.push('c');
stack.push('a');
stack.push('t');
stack.push('s');
stack.print();
console.log("contains 'x'? ", stack.contains('x'));
console.log("letters: " + stack.size());
console.log("Top: " + stack.peek());
//we could also use an iterator instead stack.pop()
while (!stack.empty())
    console.log(stack.pop());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL3RzL2NvbGxlY3Rpb24vTGlzdEl0ZXJhdG9yLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvdHMvY29sbGVjdGlvbi9Ob2RlLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvdHMvY29sbGVjdGlvbi9TZXF1ZW50aWFsTGlzdC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL3RzL2NvbGxlY3Rpb24vU3RhY2sudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy90cy91dGlsL1V0aWwudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvZXhhbXBsZV9zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFFeEM7SUFHQyxzQkFBWSxJQUF1QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNDLHNEQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUU1RCxJQUFJLE9BQU8sR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRWpDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFFTSw4QkFB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R0FBRyxDQUFDLENBQUM7QUFFaEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFcEMsbURBQW1EO0FBQ25ELE9BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiZXhhbXBsZV9zdGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pdGVyYXRvci9JdGVyYXRvcic7XHJcbmltcG9ydCB7IE51bGxhYmxlLCBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlcmF0b3I8RT4gaW1wbGVtZW50cyBJdGVyYXRvcjxFPiB7XHJcblx0cHJvdGVjdGVkIGN1cnJlbnQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+KSB7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSBub2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHQoKTogRSB7XHJcblx0XHROb2RlLmFzc2VydE5vdEVtcHR5KHRoaXMuY3VycmVudCwgXCJJdGVyYXRvciBPdXQgb2YgQm91bmRzXCIpO1xyXG5cclxuXHRcdGxldCBlbGVtZW50ICA9IHRoaXMuY3VycmVudC5kYXRhO1xyXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50Lm5leHQ7XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAhTm9kZS5lbXB0eTxFPih0aGlzLmN1cnJlbnQpO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vdXRpbC9VdGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIE51bGxhYmxlPFQ+ID0gVCB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9kZTxFPiB7XHJcbiAgICBwdWJsaWMgZGF0YTogRTtcclxuICAgIHB1YmxpYyBuZXh0OiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBFKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pIHtcclxuICAgIFx0cmV0dXJuIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXNzZXJ0Tm90RW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFV0aWwuYXNzZXJ0RmFsc2UoTm9kZS5lbXB0eShub2RlKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhYmxlJztcclxuaW1wb3J0IHsgSXRlcmF0b3IgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhdG9yJztcclxuaW1wb3J0IHsgTGlzdEl0ZXJhdG9yIH0gZnJvbSAnLi9MaXN0SXRlcmF0b3InO1xyXG5pbXBvcnQgeyBOdWxsYWJsZSwgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL1V0aWwnOyBcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZXF1ZW50aWFsTGlzdDxFPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPEU+IHtcclxuICAgIHByb3RlY3RlZCBoZWFkOiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuICAgIHByb3RlY3RlZCB0YWlsOiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuICAgIHByb3RlY3RlZCBsZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgU1RSVUNUVVJFID0gJ0xpc3QnO1xyXG4gICAgcHJvdGVjdGVkIEVSUk9SX0VNUFRZX0xJU1QgPSBgJHt0aGlzLlNUUlVDVFVSRX0gaXMgZW1wdHkhYDtcclxuICAgIHByb3RlY3RlZCBFUlJPUl9JTExFR0FMX0FSRyA9ICdJbmFwcHJvcHJpYXRlIGFyZ3VtZW50ISc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxFPiB7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yOiBJdGVyYXRvcjxFPiA9IG5ldyBMaXN0SXRlcmF0b3IodGhpcy5oZWFkKTtcclxuICAgICAgICByZXR1cm4gc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcihub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0ID0gbm9kZS5uZXh0O1xyXG4gICAgICAgIG5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcihuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXNzZXJ0Tm90RW1wdHkobm9kZTogTnVsbGFibGU8Tm9kZTxFPj4gPSB0aGlzLmhlYWQsIG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuRVJST1JfRU1QVFlfTElTVCk6IHZvaWQge1xyXG4gICAgICAgIE5vZGUuYXNzZXJ0Tm90RW1wdHk8RT4odGhpcy5oZWFkLCB0aGlzLkVSUk9SX0VNUFRZX0xJU1QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbXB0eShub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBOb2RlLmVtcHR5PEU+KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyhkYXRhOiBFLCBub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYobm9kZS5kYXRhID09IGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhkYXRhLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlNUUlVDVFVSRSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5pdGVyYXRvcigpO1xyXG4gICAgICAgIHdoaWxlKGl0Lmhhc05leHQoKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFske2l0Lm5leHQoKX1dYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtudWxsXWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhZGRGaXJzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcblxyXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcclxuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZExhc3QoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBlZWtGaXJzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwZWVrTGFzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFpbC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQobjogbnVtYmVyKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobiwgdGhpcy5oZWFkKS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXROb2RlKG46IG51bWJlciwgbm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pOiBOb2RlPEU+IHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KG5vZGUsIHRoaXMuRVJST1JfSUxMRUdBTF9BUkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG4gPT0gMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobi0xLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmVGaXJzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmhlYWQuZGF0YTtcclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUxhc3QoKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50YWlsLmRhdGE7XHJcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGVudWx0ID0gdGhpcy5nZXROb2RlKHRoaXMubGVuZ3RoLTEsIHRoaXMuaGVhZCk7XHJcbiAgICAgICAgdGhpcy50YWlsID0gcGVudWx0O1xyXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xvbmVfaW1wbChub2RlX2Rlc3Q6IE51bGxhYmxlPE5vZGU8RT4+LCBub2RlX3NyYzogTnVsbGFibGU8Tm9kZTxFPj4pOiBOdWxsYWJsZTxOb2RlPEU+PiB7XHJcbiAgICAgICAgaWYodGhpcy5lbXB0eShub2RlX3NyYy5uZXh0KSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVfZGVzdDsgXHJcblxyXG4gICAgICAgIG5vZGVfZGVzdC5uZXh0ID0gbmV3IE5vZGUobm9kZV9zcmMubmV4dC5kYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVfaW1wbChub2RlX2Rlc3QubmV4dCwgbm9kZV9zcmMubmV4dCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgU2VxdWVudGlhbExpc3QgfSBmcm9tICcuL1NlcXVlbnRpYWxMaXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFjazxFPiBleHRlbmRzIFNlcXVlbnRpYWxMaXN0PEU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuU1RSVUNUVVJFID0gJ1N0YWNrJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHVzaChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmlyc3QoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogRSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBlZWtGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3AoKTogRSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cdHN0YXRpYyBhc3NlcnRFcXVhbChjb25kaXRpb246IGJvb2xlYW4sIGV4cGVjdGVkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XHJcblx0ICAgIGlmKGNvbmRpdGlvbiAhPSBleHBlY3RlZClcclxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlPyBtZXNzYWdlIDogXCJVbmV4cGVjdGVkIGVycm9yIVwiKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3NlcnRUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0ICAgIFV0aWwuYXNzZXJ0RXF1YWwoY29uZGl0aW9uLCB0cnVlLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3NlcnRGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG5cdCAgICBVdGlsLmFzc2VydEVxdWFsKGNvbmRpdGlvbiwgZmFsc2UsIG1lc3NhZ2UpO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogdGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFN0YWNrICovXHJcblxyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3RzL2NvbGxlY3Rpb24vU3RhY2tcIjtcclxuXHJcbmNvbnN0IHN0YWNrID0gbmV3IFN0YWNrPHN0cmluZz4oKTtcclxuXHJcbnN0YWNrLnB1c2goJ2snKTtcclxuc3RhY2sucHVzaCgnYycpO1xyXG5zdGFjay5wdXNoKCdhJyk7XHJcbnN0YWNrLnB1c2goJ3QnKTtcclxuc3RhY2sucHVzaCgncycpO1xyXG5cclxuc3RhY2sucHJpbnQoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiY29udGFpbnMgJ3gnPyBcIiwgc3RhY2suY29udGFpbnMoJ3gnKSk7XHJcbmNvbnNvbGUubG9nKFwibGV0dGVyczogXCIgKyBzdGFjay5zaXplKCkpO1xyXG5jb25zb2xlLmxvZyhcIlRvcDogXCIgKyBzdGFjay5wZWVrKCkpO1xyXG5cclxuLy93ZSBjb3VsZCBhbHNvIHVzZSBhbiBpdGVyYXRvciBpbnN0ZWFkIHN0YWNrLnBvcCgpXHJcbndoaWxlKCFzdGFjay5lbXB0eSgpKVxyXG5cdGNvbnNvbGUubG9nKHN0YWNrLnBvcCgpKTsiXSwic291cmNlUm9vdCI6IiJ9