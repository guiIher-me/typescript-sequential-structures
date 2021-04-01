/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/collection/LinkedList.ts":
/*!******************************************!*\
  !*** ./src/lib/collection/LinkedList.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _SequentialList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SequentialList */ "./src/lib/collection/SequentialList.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/lib/collection/Node.ts");
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
/*!*****************************!*\
  !*** ./src/example_list.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_collection_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/collection/LinkedList */ "./src/lib/collection/LinkedList.ts");
/* this is an example of using Linked List */

var list = new _lib_collection_LinkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL0xpbmtlZExpc3QudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9saWIvY29sbGVjdGlvbi9MaXN0SXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9saWIvY29sbGVjdGlvbi9Ob2RlLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvbGliL2NvbGxlY3Rpb24vU2VxdWVudGlhbExpc3QudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9saWIvdXRpbC9VdGlsLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2V4YW1wbGVfbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFFeEM7SUFBbUMsOEJBQWlCO0lBRWhEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLElBQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsSUFBTztRQUNuQixPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQU87UUFDbEIsT0FBTyxpQkFBTSxPQUFPLFlB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Q0FBQztBQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QixPQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJleGFtcGxlX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZW50aWFsTGlzdCB9IGZyb20gJy4vU2VxdWVudGlhbExpc3QnO1xyXG5pbXBvcnQgeyBOdWxsYWJsZSwgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlua2VkTGlzdDxFPiBleHRlbmRzIFNlcXVlbnRpYWxMaXN0PEU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEZpcnN0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRGaXJzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFkZEZpcnN0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRMYXN0KGRhdGE6IEUpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuYWRkTGFzdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpOiBFIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVla0ZpcnN0KCk6IEUge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5wZWVrRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVla0xhc3QoKTogRSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBlZWtMYXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiBFIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGaXJzdCgpOiBFIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucmVtb3ZlRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlTGFzdCgpOiBFIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucmVtb3ZlTGFzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBMaW5rZWRMaXN0PEU+IHtcclxuICAgICAgICBjb25zdCBjbG9uZWQgPSBuZXcgTGlua2VkTGlzdDxFPigpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XHJcblxyXG4gICAgICAgIGNsb25lZC5oZWFkICAgPSBuZXcgTm9kZSh0aGlzLmhlYWQuZGF0YSk7XHJcbiAgICAgICAgY2xvbmVkLnRhaWwgICA9IHN1cGVyLmNsb25lX2ltcGwoY2xvbmVkLmhlYWQsIHRoaXMuaGVhZCk7XHJcbiAgICAgICAgY2xvbmVkLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmVkO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pdGVyYXRvci9JdGVyYXRvcic7XHJcbmltcG9ydCB7IE51bGxhYmxlLCBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlcmF0b3I8RT4gaW1wbGVtZW50cyBJdGVyYXRvcjxFPiB7XHJcblx0cHJvdGVjdGVkIGN1cnJlbnQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+KSB7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSBub2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHQoKTogRSB7XHJcblx0XHROb2RlLmFzc2VydE5vdEVtcHR5KHRoaXMuY3VycmVudCwgXCJJdGVyYXRvciBPdXQgb2YgQm91bmRzXCIpO1xyXG5cclxuXHRcdGxldCBlbGVtZW50ICA9IHRoaXMuY3VycmVudC5kYXRhO1xyXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50Lm5leHQ7XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAhTm9kZS5lbXB0eTxFPih0aGlzLmN1cnJlbnQpO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vdXRpbC9VdGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIE51bGxhYmxlPFQ+ID0gVCB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9kZTxFPiB7XHJcbiAgICBwdWJsaWMgZGF0YTogRTtcclxuICAgIHB1YmxpYyBuZXh0OiBOdWxsYWJsZTxOb2RlPEU+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBFKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pIHtcclxuICAgIFx0cmV0dXJuIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXNzZXJ0Tm90RW1wdHk8RT4obm9kZTogTnVsbGFibGU8Tm9kZTxFPj4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFV0aWwuYXNzZXJ0RmFsc2UoTm9kZS5lbXB0eShub2RlKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhYmxlJztcclxuaW1wb3J0IHsgSXRlcmF0b3IgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhdG9yJztcclxuaW1wb3J0IHsgTGlzdEl0ZXJhdG9yIH0gZnJvbSAnLi9MaXN0SXRlcmF0b3InO1xyXG5pbXBvcnQgeyBOdWxsYWJsZSwgTm9kZSB9IGZyb20gJy4vTm9kZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL1V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlcXVlbnRpYWxMaXN0PEU+IGltcGxlbWVudHMgSXRlcmFibGU8RT4ge1xyXG4gICAgcHJvdGVjdGVkIGhlYWQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG4gICAgcHJvdGVjdGVkIHRhaWw6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG4gICAgcHJvdGVjdGVkIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBTVFJVQ1RVUkUgPSAnTGlzdCc7IC8vZGVmYXVsdFxyXG4gICAgcHJvdGVjdGVkIEVSUk9SX0VNUFRZX0xJU1QgPSBgJHt0aGlzLlNUUlVDVFVSRX0gaXMgZW1wdHkhYDtcclxuICAgIHByb3RlY3RlZCBFUlJPUl9JTExFR0FMX0FSRyA9ICdJbmFwcHJvcHJpYXRlIGFyZ3VtZW50ISc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxFPiB7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yOiBJdGVyYXRvcjxFPiA9IG5ldyBMaXN0SXRlcmF0b3IodGhpcy5oZWFkKTtcclxuICAgICAgICByZXR1cm4gc2VxdWVudGlhbF9saXN0X2l0ZXJhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcihub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0ID0gbm9kZS5uZXh0O1xyXG4gICAgICAgIG5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcihuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXNzZXJ0Tm90RW1wdHkobm9kZTogTnVsbGFibGU8Tm9kZTxFPj4gPSB0aGlzLmhlYWQsIG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuRVJST1JfRU1QVFlfTElTVCk6IHZvaWQge1xyXG4gICAgICAgIE5vZGUuYXNzZXJ0Tm90RW1wdHk8RT4odGhpcy5oZWFkLCB0aGlzLkVSUk9SX0VNUFRZX0xJU1QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbXB0eShub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBOb2RlLmVtcHR5PEU+KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyhkYXRhOiBFLCBub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYobm9kZS5kYXRhID09IGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhkYXRhLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlNUUlVDVFVSRSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5pdGVyYXRvcigpO1xyXG4gICAgICAgIHdoaWxlKGl0Lmhhc05leHQoKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFske2l0Lm5leHQoKX1dYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtudWxsXWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhZGRGaXJzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcblxyXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcclxuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZExhc3QoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBlZWtGaXJzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwZWVrTGFzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFpbC5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQobjogbnVtYmVyKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobiwgdGhpcy5oZWFkKS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXROb2RlKG46IG51bWJlciwgbm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pOiBOb2RlPEU+IHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KG5vZGUsIHRoaXMuRVJST1JfSUxMRUdBTF9BUkcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG4gPT0gMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5vZGUobi0xLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmVGaXJzdCgpOiBFIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wZWVrRmlyc3QoKTtcclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUxhc3QoKTogRSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGVla0xhc3QoKTtcclxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwZW51bHQgPSB0aGlzLmdldE5vZGUodGhpcy5sZW5ndGgtMSwgdGhpcy5oZWFkKTtcclxuICAgICAgICB0aGlzLnRhaWwgPSBwZW51bHQ7XHJcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjbG9uZV9pbXBsKG5vZGVfZGVzdDogTnVsbGFibGU8Tm9kZTxFPj4sIG5vZGVfc3JjOiBOdWxsYWJsZTxOb2RlPEU+Pik6IE51bGxhYmxlPE5vZGU8RT4+IHtcclxuICAgICAgICBpZih0aGlzLmVtcHR5KG5vZGVfc3JjLm5leHQpKVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZV9kZXN0OyBcclxuXHJcbiAgICAgICAgbm9kZV9kZXN0Lm5leHQgPSBuZXcgTm9kZShub2RlX3NyYy5uZXh0LmRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZV9pbXBsKG5vZGVfZGVzdC5uZXh0LCBub2RlX3NyYy5uZXh0KTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cdHN0YXRpYyBhc3NlcnRFcXVhbChjb25kaXRpb246IGJvb2xlYW4sIGV4cGVjdGVkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XHJcblx0ICAgIGlmKGNvbmRpdGlvbiAhPSBleHBlY3RlZClcclxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlPyBtZXNzYWdlIDogXCJVbmV4cGVjdGVkIGVycm9yIVwiKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3NlcnRUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0ICAgIFV0aWwuYXNzZXJ0RXF1YWwoY29uZGl0aW9uLCB0cnVlLCBtZXNzYWdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3NlcnRGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG5cdCAgICBVdGlsLmFzc2VydEVxdWFsKGNvbmRpdGlvbiwgZmFsc2UsIG1lc3NhZ2UpO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogdGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIExpbmtlZCBMaXN0ICovXHJcblxyXG5pbXBvcnQgeyBMaW5rZWRMaXN0IH0gZnJvbSBcIi4vbGliL2NvbGxlY3Rpb24vTGlua2VkTGlzdFwiO1xyXG5cclxubGV0IGxpc3QgPSBuZXcgTGlua2VkTGlzdDxudW1iZXI+KCk7XHJcblxyXG5saXN0LmFkZEZpcnN0KDEwKTtcclxubGlzdC5hZGRMYXN0KDUwKTtcclxubGlzdC5hZGQoMjApOyAvL2luIGZpcnN0XHJcbmxpc3QuYWRkRmlyc3QoMzApO1xyXG5saXN0LmFkZExhc3QoODApO1xyXG5saXN0LmFkZEZpcnN0KDUpO1xyXG5saXN0LnJlbW92ZUxhc3QoKTsgLy9yZW1vdmUgODBcclxuXHJcbmNvbnNvbGUubG9nKFwiRXhpc3RzIDIwPyBcIiArIGxpc3QuY29udGFpbnMoMjApKTtcclxuY29uc29sZS5sb2coXCJ3aGF0cyB0aGUgbGFzdD8gXCIgKyBsaXN0LnBlZWtMYXN0KCkpO1xyXG5saXN0LnByaW50KCk7XHJcblxyXG5jb25zb2xlLmxvZyhcIml0ZXJhdG9yOlwiKTtcclxubGV0IGl0ID0gbGlzdC5pdGVyYXRvcigpO1xyXG53aGlsZShpdC5oYXNOZXh0KCkpXHJcblx0Y29uc29sZS5sb2coaXQubmV4dCgpKTtcclxuXHJcbmxpc3QuY2xlYXIoKTtcclxuY29uc29sZS5sb2coXCJFbXB0eT8gXCIgKyBsaXN0LmVtcHR5KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=