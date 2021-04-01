/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/collection/ListIterator.ts":
/*!********************************************!*\
  !*** ./src/lib/collection/ListIterator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListIterator": () => (/* binding */ ListIterator)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/lib/collection/Node.ts");

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

/***/ "./src/lib/collection/Node.ts":
/*!************************************!*\
  !*** ./src/lib/collection/Node.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Util */ "./src/lib/util/Util.ts");

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

/***/ "./src/lib/collection/SequentialList.ts":
/*!**********************************************!*\
  !*** ./src/lib/collection/SequentialList.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SequentialList": () => (/* binding */ SequentialList)
/* harmony export */ });
/* harmony import */ var _ListIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListIterator */ "./src/lib/collection/ListIterator.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/lib/collection/Node.ts");


var SequentialList = /** @class */ (function () {
    function SequentialList() {
        this.STRUCTURE = 'List'; //default
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
        var element = this.peekFirst();
        this.head = this.head.next;
        if (this.empty())
            this.tail = null;
        this.length--;
        return element;
    };
    SequentialList.prototype.removeLast = function () {
        var element = this.peekLast();
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

/***/ "./src/lib/collection/Stack.ts":
/*!*************************************!*\
  !*** ./src/lib/collection/Stack.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _SequentialList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SequentialList */ "./src/lib/collection/SequentialList.ts");
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

/***/ "./src/lib/util/Util.ts":
/*!******************************!*\
  !*** ./src/lib/util/Util.ts ***!
  \******************************/
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
/* harmony import */ var _lib_collection_Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/collection/Stack */ "./src/lib/collection/Stack.ts");
/* this is an example of using Stack */

var stack = new _lib_collection_Stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
stack.push('k');
stack.push('c');
stack.push('a');
stack.push('t');
stack.push('s');
stack.print();
console.log("contains 'x'? ", stack.contains('x'));
console.log("size: " + stack.size());
console.log("Top: " + stack.peek());
//we could also use an iterator
while (!stack.empty())
    console.log(stack.pop());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL0xpc3RJdGVyYXRvci50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL05vZGUudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9saWIvY29sbGVjdGlvbi9TZXF1ZW50aWFsTGlzdC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL1N0YWNrLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvbGliL3V0aWwvVXRpbC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9leGFtcGxlX3N0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUV4QztJQUdDLHNCQUFZLElBQXVCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0Msc0RBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRTVELElBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFakMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUVN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QUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFcEMsK0JBQStCO0FBQy9CLE9BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiZXhhbXBsZV9zdGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pdGVyYXRvci9JdGVyYXRvcic7XHJcbmltcG9ydCB7IE51bGxhYmxlLCBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlcmF0b3I8RT4gaW1wbGVtZW50cyBJdGVyYXRvcjxFPiB7XHJcblx0cHJvdGVjdGVkIGN1cnJlbnQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+KSB7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSBub2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHQoKTogRSB7XHJcblx0XHROb2RlLmFzc2VydE5vdEVtcHR5KHRoaXMuY3VycmVudCwgXCJJdGVyYXRvciBPdXQgb2YgQm91bmRzXCIpO1xyXG5cclxuXHRcdGxldCBlbGVtZW50ICA9IHRoaXMuY3VycmVudC5kYXRhO1xyXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50Lm5leHQ7XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAhTm9kZS5lbXB0eTxFPih0aGlzLmN1cnJlbnQpO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vdXRpbC9VdGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIE51bGxhYmxlPFQ+ID0gVCB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9kZTxFPiB7XHJcbiAgICBwdWJsaWMgZGF0YTogRTtcclxuICAgIHB1YmxpYyBuZXh0OiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBFKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pIHtcclxuICAgIFx0cmV0dXJuIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXNzZXJ0Tm90RW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFV0aWwuYXNzZXJ0RmFsc2UoTm9kZS5lbXB0eShub2RlKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhYmxlJztcclxuaW1wb3J0IHsgSXRlcmF0b3IgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhdG9yJztcclxuaW1wb3J0IHsgTGlzdEl0ZXJhdG9yIH0gZnJvbSAnLi9MaXN0SXRlcmF0b3InO1xyXG5pbXBvcnQgeyBOdWxsYWJsZSwgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL1V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlcXVlbnRpYWxMaXN0PEU+IGltcGxlbWVudHMgSXRlcmFibGU8RT4ge1xyXG4gICAgcHJvdGVjdGVkIGhlYWQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG4gICAgcHJvdGVjdGVkIHRhaWw6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG4gICAgcHJvdGVjdGVkIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBTVFJVQ1RVUkUgPSAnTGlzdCc7IC8vZGVmYXVsdFxyXG4gICAgcHJvdGVjdGVkIEVSUk9SX0VNUFRZX0xJU1QgPSBgJHt0aGlzLlNUUlVDVFVSRX0gaXMgZW1wdHkhYDtcclxuICAgIHByb3RlY3RlZCBFUlJPUl9JTExFR0FMX0FSRyA9ICdJbmFwcHJvcHJpYXRlIGFyZ3VtZW50ISc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxFPiB7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yOiBJdGVyYXRvcjxFPiA9IG5ldyBMaXN0SXRlcmF0b3IodGhpcy5oZWFkKTtcclxuICAgICAgICByZXR1cm4gc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcihub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0ID0gbm9kZS5uZXh0O1xyXG4gICAgICAgIG5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcihuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXNzZXJ0Tm90RW1wdHkobm9kZTogTnVsbGFibGU8Tm9kZTxFPj4gPSB0aGlzLmhlYWQsIG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuRVJST1JfRU1QVFlfTElTVCk6IHZvaWQge1xyXG4gICAgICAgIE5vZGUuYXNzZXJ0Tm90RW1wdHk8RT4odGhpcy5oZWFkLCB0aGlzLkVSUk9SX0VNUFRZX0xJU1QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbXB0eShub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBOb2RlLmVtcHR5PEU+KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyhkYXRhOiBFLCBub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYobm9kZS5kYXRhID09IGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhkYXRhLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlNUUlVDVFVSRSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5pdGVyYXRvcigpO1xyXG4gICAgICAgIHdoaWxlKGl0Lmhhc05leHQoKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFske2l0Lm5leHQoKX1dYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtudWxsXWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhZGRGaXJzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcblxyXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcclxuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZExhc3QoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBlZWtGaXJzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwZWVrTGFzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFpbC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQobjogbnVtYmVyKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobiwgdGhpcy5oZWFkKS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXROb2RlKG46IG51bWJlciwgbm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pOiBOb2RlPEU+IHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KG5vZGUsIHRoaXMuRVJST1JfSUxMRUdBTF9BUkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG4gPT0gMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobi0xLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmVGaXJzdCgpOiBFIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wZWVrRmlyc3QoKTtcclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUxhc3QoKTogRSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGVla0xhc3QoKTtcclxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwZW51bHQgPSB0aGlzLmdldE5vZGUodGhpcy5sZW5ndGgtMSwgdGhpcy5oZWFkKTtcclxuICAgICAgICB0aGlzLnRhaWwgPSBwZW51bHQ7XHJcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjbG9uZV9pbXBsKG5vZGVfZGVzdDogTnVsbGFibGU8Tm9kZTxFPj4sIG5vZGVfc3JjOiBOdWxsYWJsZTxOb2RlPEU+Pik6IE51bGxhYmxlPE5vZGU8RT4+IHtcclxuICAgICAgICBpZih0aGlzLmVtcHR5KG5vZGVfc3JjLm5leHQpKVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZV9kZXN0OyBcclxuXHJcbiAgICAgICAgbm9kZV9kZXN0Lm5leHQgPSBuZXcgTm9kZShub2RlX3NyYy5uZXh0LmRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZV9pbXBsKG5vZGVfZGVzdC5uZXh0LCBub2RlX3NyYy5uZXh0KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTZXF1ZW50aWFsTGlzdCB9IGZyb20gJy4vU2VxdWVudGlhbExpc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YWNrPEU+IGV4dGVuZHMgU2VxdWVudGlhbExpc3Q8RT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5TVFJVQ1RVUkUgPSAnU3RhY2snO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoKGRhdGE6IEUpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRGaXJzdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpOiBFIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucGVla0ZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvcCgpOiBFIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgVXRpbCB7XHJcblx0c3RhdGljIGFzc2VydEVxdWFsKGNvbmRpdGlvbjogYm9vbGVhbiwgZXhwZWN0ZWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcclxuXHQgICAgaWYoY29uZGl0aW9uICE9IGV4cGVjdGVkKVxyXG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2U/IG1lc3NhZ2UgOiBcIlVuZXhwZWN0ZWQgZXJyb3IhXCIpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzc2VydFRydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHQgICAgVXRpbC5hc3NlcnRFcXVhbChjb25kaXRpb24sIHRydWUsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzc2VydEZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0ICAgIFV0aWwuYXNzZXJ0RXF1YWwoY29uZGl0aW9uLCBmYWxzZSwgbWVzc2FnZSk7XHJcblx0fVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiB0aGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU3RhY2sgKi9cclxuXHJcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vbGliL2NvbGxlY3Rpb24vU3RhY2tcIjtcclxuXHJcbmNvbnN0IHN0YWNrID0gbmV3IFN0YWNrPHN0cmluZz4oKTtcclxuXHJcbnN0YWNrLnB1c2goJ2snKTtcclxuc3RhY2sucHVzaCgnYycpO1xyXG5zdGFjay5wdXNoKCdhJyk7XHJcbnN0YWNrLnB1c2goJ3QnKTtcclxuc3RhY2sucHVzaCgncycpO1xyXG5cclxuc3RhY2sucHJpbnQoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiY29udGFpbnMgJ3gnPyBcIiwgc3RhY2suY29udGFpbnMoJ3gnKSk7XHJcbmNvbnNvbGUubG9nKFwic2l6ZTogXCIgKyBzdGFjay5zaXplKCkpO1xyXG5jb25zb2xlLmxvZyhcIlRvcDogXCIgKyBzdGFjay5wZWVrKCkpO1xyXG5cclxuLy93ZSBjb3VsZCBhbHNvIHVzZSBhbiBpdGVyYXRvclxyXG53aGlsZSghc3RhY2suZW1wdHkoKSlcclxuXHRjb25zb2xlLmxvZyhzdGFjay5wb3AoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==