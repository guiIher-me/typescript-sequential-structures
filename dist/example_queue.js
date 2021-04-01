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

/***/ "./src/lib/collection/Queue.ts":
/*!*************************************!*\
  !*** ./src/lib/collection/Queue.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Queue": () => (/* binding */ Queue)
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

var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        var _this = _super.call(this) || this;
        _this.STRUCTURE = 'Queue';
        return _this;
    }
    Queue.prototype.add = function (data) {
        return this.addLast(data);
    };
    Queue.prototype.peek = function () {
        return _super.prototype.peekFirst.call(this);
    };
    Queue.prototype.remove = function () {
        return this.removeFirst();
    };
    return Queue;
}(_SequentialList__WEBPACK_IMPORTED_MODULE_0__.SequentialList));



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
/*!******************************!*\
  !*** ./src/example_queue.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_collection_Queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/collection/Queue */ "./src/lib/collection/Queue.ts");
/* this is an example of using Queue */

var queue = new _lib_collection_Queue__WEBPACK_IMPORTED_MODULE_0__.Queue();
queue.add(10);
queue.add(20);
queue.add(30);
queue.print();
console.log("last/tail: " + queue.peek());
console.log("exists 20? " + queue.contains(20));
var it = queue.iterator();
while (it.hasNext())
    console.log(it.next());
queue.clear();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL0xpc3RJdGVyYXRvci50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL05vZGUudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9saWIvY29sbGVjdGlvbi9RdWV1ZS50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL2xpYi9jb2xsZWN0aW9uL1NlcXVlbnRpYWxMaXN0LnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvbGliL3V0aWwvVXRpbC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9leGFtcGxlX3F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUV4QztJQUdDLHNCQUFZLElBQXVCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0Msc0RBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRTVELElBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFakMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUVN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R0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFaEQsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLE9BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJleGFtcGxlX3F1ZXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlcmF0b3IgfSBmcm9tICcuLi91dGlsL2l0ZXJhdG9yL0l0ZXJhdG9yJztcclxuaW1wb3J0IHsgTnVsbGFibGUsIE5vZGUgfSBmcm9tICcuL05vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RJdGVyYXRvcjxFPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPEU+IHtcclxuXHRwcm90ZWN0ZWQgY3VycmVudDogTnVsbGFibGU8Tm9kZTxFPj47XHJcblx0XHJcblx0Y29uc3RydWN0b3Iobm9kZTogTnVsbGFibGU8Tm9kZTxFPj4pIHtcclxuXHRcdHRoaXMuY3VycmVudCA9IG5vZGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dCgpOiBFIHtcclxuXHRcdE5vZGUuYXNzZXJ0Tm90RW1wdHkodGhpcy5jdXJyZW50LCBcIkl0ZXJhdG9yIE91dCBvZiBCb3VuZHNcIik7XHJcblxyXG5cdFx0bGV0IGVsZW1lbnQgID0gdGhpcy5jdXJyZW50LmRhdGE7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQubmV4dDtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoYXNOZXh0KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICFOb2RlLmVtcHR5PEU+KHRoaXMuY3VycmVudCk7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL1V0aWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnVsbGFibGU8VD4gPSBUIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBOb2RlPEU+IHtcclxuICAgIHB1YmxpYyBkYXRhOiBFO1xyXG4gICAgcHVibGljIG5leHQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IEUpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbXB0eTxFPihub2RlOiBOdWxsYWJsZTxOb2RlPEU+Pikge1xyXG4gICAgXHRyZXR1cm4gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3NlcnROb3RFbXB0eTxFPihub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVXRpbC5hc3NlcnRGYWxzZShOb2RlLmVtcHR5KG5vZGUpLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTZXF1ZW50aWFsTGlzdCB9IGZyb20gJy4vU2VxdWVudGlhbExpc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXVlPEU+IGV4dGVuZHMgU2VxdWVudGlhbExpc3Q8RT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5TVFJVQ1RVUkUgPSAnUXVldWUnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZExhc3QoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogRSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBlZWtGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKTogRSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXRlcmF0b3IvSXRlcmFibGUnO1xyXG5pbXBvcnQgeyBJdGVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXRlcmF0b3IvSXRlcmF0b3InO1xyXG5pbXBvcnQgeyBMaXN0SXRlcmF0b3IgfSBmcm9tICcuL0xpc3RJdGVyYXRvcic7XHJcbmltcG9ydCB7IE51bGxhYmxlLCBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL3V0aWwvVXRpbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VxdWVudGlhbExpc3Q8RT4gaW1wbGVtZW50cyBJdGVyYWJsZTxFPiB7XHJcbiAgICBwcm90ZWN0ZWQgaGVhZDogTnVsbGFibGU8Tm9kZTxFPj47XHJcbiAgICBwcm90ZWN0ZWQgdGFpbDogTnVsbGFibGU8Tm9kZTxFPj47XHJcbiAgICBwcm90ZWN0ZWQgbGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIFNUUlVDVFVSRSA9ICdMaXN0JzsgLy9kZWZhdWx0XHJcbiAgICBwcm90ZWN0ZWQgRVJST1JfRU1QVFlfTElTVCA9IGAke3RoaXMuU1RSVUNUVVJFfSBpcyBlbXB0eSFgO1xyXG4gICAgcHJvdGVjdGVkIEVSUk9SX0lMTEVHQUxfQVJHID0gJ0luYXBwcm9wcmlhdGUgYXJndW1lbnQhJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGl0ZXJhdG9yKCk6IEl0ZXJhdG9yPEU+IHtcclxuICAgICAgICBjb25zdCBzZXF1ZW50aWFsX2xpc3RfaXRlcmF0b3I6IEl0ZXJhdG9yPEU+ID0gbmV3IExpc3RJdGVyYXRvcih0aGlzLmhlYWQpO1xyXG4gICAgICAgIHJldHVybiBzZXF1ZW50aWFsX2xpc3RfaXRlcmF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+ID0gdGhpcy5oZWFkKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5lbXB0eShub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHQgPSBub2RlLm5leHQ7XHJcbiAgICAgICAgbm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyKG5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhc3NlcnROb3RFbXB0eShub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCwgbWVzc2FnZTogc3RyaW5nID0gdGhpcy5FUlJPUl9FTVBUWV9MSVNUKTogdm9pZCB7XHJcbiAgICAgICAgTm9kZS5hc3NlcnROb3RFbXB0eTxFPih0aGlzLmhlYWQsIHRoaXMuRVJST1JfRU1QVFlfTElTVCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVtcHR5KG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+ID0gdGhpcy5oZWFkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE5vZGUuZW1wdHk8RT4obm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKGRhdGE6IEUsIG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+ID0gdGhpcy5oZWFkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5lbXB0eShub2RlKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZihub2RlLmRhdGEgPT0gZGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKGRhdGEsIG5vZGUubmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuU1RSVUNUVVJFKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLml0ZXJhdG9yKCk7XHJcbiAgICAgICAgd2hpbGUoaXQuaGFzTmV4dCgpKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7aXQubmV4dCgpfV1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW251bGxdYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZEZpcnN0KGRhdGE6IEUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoZGF0YSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkoKSlcclxuICAgICAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcclxuXHJcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkTGFzdChkYXRhOiBFKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcGVla0ZpcnN0KCk6IEUge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHkoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBlZWtMYXN0KCk6IEUge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHkoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWlsLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldChuOiBudW1iZXIpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZShuLCB0aGlzLmhlYWQpLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE5vZGUobjogbnVtYmVyLCBub2RlOiBOdWxsYWJsZTxOb2RlPEU+Pik6IE5vZGU8RT4ge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHkobm9kZSwgdGhpcy5FUlJPUl9JTExFR0FMX0FSRyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobiA9PSAxKVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZShuLTEsIG5vZGUubmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZpcnN0KCk6IEUge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBlZWtGaXJzdCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlTGFzdCgpOiBFIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wZWVrTGFzdCgpO1xyXG4gICAgICAgIGlmKHRoaXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBlbnVsdCA9IHRoaXMuZ2V0Tm9kZSh0aGlzLmxlbmd0aC0xLCB0aGlzLmhlYWQpO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IHBlbnVsdDtcclxuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNsb25lX2ltcGwobm9kZV9kZXN0OiBOdWxsYWJsZTxOb2RlPEU+Piwgbm9kZV9zcmM6IE51bGxhYmxlPE5vZGU8RT4+KTogTnVsbGFibGU8Tm9kZTxFPj4ge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZV9zcmMubmV4dCkpXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlX2Rlc3Q7IFxyXG5cclxuICAgICAgICBub2RlX2Rlc3QubmV4dCA9IG5ldyBOb2RlKG5vZGVfc3JjLm5leHQuZGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lX2ltcGwobm9kZV9kZXN0Lm5leHQsIG5vZGVfc3JjLm5leHQpO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgVXRpbCB7XHJcblx0c3RhdGljIGFzc2VydEVxdWFsKGNvbmRpdGlvbjogYm9vbGVhbiwgZXhwZWN0ZWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcclxuXHQgICAgaWYoY29uZGl0aW9uICE9IGV4cGVjdGVkKVxyXG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2U/IG1lc3NhZ2UgOiBcIlVuZXhwZWN0ZWQgZXJyb3IhXCIpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzc2VydFRydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHQgICAgVXRpbC5hc3NlcnRFcXVhbChjb25kaXRpb24sIHRydWUsIG1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzc2VydEZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcblx0ICAgIFV0aWwuYXNzZXJ0RXF1YWwoY29uZGl0aW9uLCBmYWxzZSwgbWVzc2FnZSk7XHJcblx0fVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiB0aGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgUXVldWUgKi9cclxuXHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vbGliL2NvbGxlY3Rpb24vUXVldWVcIjtcclxuXHJcbmNvbnN0IHF1ZXVlID0gbmV3IFF1ZXVlPG51bWJlcj4oKTtcclxuXHJcbnF1ZXVlLmFkZCgxMCk7XHJcbnF1ZXVlLmFkZCgyMCk7XHJcbnF1ZXVlLmFkZCgzMCk7XHJcblxyXG5xdWV1ZS5wcmludCgpO1xyXG5cclxuY29uc29sZS5sb2coXCJsYXN0L3RhaWw6IFwiICsgcXVldWUucGVlaygpKTtcclxuY29uc29sZS5sb2coXCJleGlzdHMgMjA/IFwiICsgcXVldWUuY29udGFpbnMoMjApKTtcclxuXHJcbmNvbnN0IGl0ID0gcXVldWUuaXRlcmF0b3IoKTtcclxud2hpbGUoaXQuaGFzTmV4dCgpKVxyXG5cdGNvbnNvbGUubG9nKGl0Lm5leHQoKSk7XHJcblxyXG5xdWV1ZS5jbGVhcigpOyJdLCJzb3VyY2VSb290IjoiIn0=