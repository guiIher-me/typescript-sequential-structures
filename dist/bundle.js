/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/LinkedList.ts":
/*!******************************!*\
  !*** ./src/ts/LinkedList.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/ts/util.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/ts/Node.ts");


var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.ERROR_EMPTY_LIST = 'List is empty!';
        this.ERROR_ILLEGAL_ARG = 'Inappropriate argument!';
        this.clean();
    }
    LinkedList.prototype.clean = function () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    LinkedList.prototype.empty = function (node) {
        if (node === void 0) { node = this.head; }
        return node == null;
    };
    LinkedList.prototype.assertNotEmpty = function (node, message) {
        if (node === void 0) { node = this.head; }
        if (message === void 0) { message = this.ERROR_EMPTY_LIST; }
        _util__WEBPACK_IMPORTED_MODULE_0__.Util.assertFalse(this.empty(node), message);
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.contains = function (data, node) {
        if (node === void 0) { node = this.head; }
        if (this.empty(node))
            return false;
        if (node.data == data)
            return true;
        return this.contains(data, node.next);
    };
    LinkedList.prototype.clone = function () {
        var cloned = new LinkedList();
        if (this.empty())
            return cloned;
        cloned.head = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(this.head.data);
        cloned.tail = this.clone_impl(cloned.head, this.head);
        return cloned;
    };
    LinkedList.prototype.clone_impl = function (node_dest, node_src) {
        if (this.empty(node_src.next))
            return node_dest;
        node_dest.next = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(node_src.next.data);
        return this.clone_impl(node_dest.next, node_src.next);
    };
    LinkedList.prototype.print = function () {
        console.log("List:");
        return this.print_impl();
    };
    LinkedList.prototype.print_impl = function (node) {
        if (node === void 0) { node = this.head; }
        if (this.empty(node)) {
            console.log("[null]");
            return;
        }
        console.log("[" + node.data + "]");
        return this.print_impl(node.next);
    };
    LinkedList.prototype.add = function (data) {
        return this.addFirst(data);
    };
    LinkedList.prototype.addFirst = function (data) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(data);
        if (this.empty())
            this.tail = node;
        node.next = this.head;
        this.head = node;
        this.length++;
    };
    LinkedList.prototype.addLast = function (data) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(data);
        if (this.empty())
            this.head = node;
        else
            this.tail.next = node;
        this.tail = node;
        this.length++;
    };
    LinkedList.prototype.peek = function () {
        return this.peekFirst();
    };
    LinkedList.prototype.peekFirst = function () {
        this.assertNotEmpty();
        return this.head.data;
    };
    LinkedList.prototype.peekLast = function () {
        this.assertNotEmpty();
        return this.tail.data;
    };
    LinkedList.prototype.get = function (n) {
        this.assertNotEmpty();
        return this.getNode(n, this.head).data;
    };
    LinkedList.prototype.getNode = function (n, node) {
        this.assertNotEmpty(node, this.ERROR_ILLEGAL_ARG);
        if (n == 1)
            return node;
        return this.getNode(n - 1, node.next);
    };
    LinkedList.prototype.remove = function () {
        return this.removeFirst();
    };
    LinkedList.prototype.removeFirst = function () {
        this.assertNotEmpty();
        var element = this.head.data;
        this.head = this.head.next;
        if (this.empty())
            this.tail = null;
        this.length--;
        return element;
    };
    LinkedList.prototype.removeLast = function () {
        this.assertNotEmpty();
        var element = this.tail.data;
        if (this.length == 1) {
            this.clean();
            return element;
        }
        var penult = this.getNode(this.length - 1, this.head);
        this.tail = penult;
        this.tail.next = null;
        this.length--;
        return element;
    };
    return LinkedList;
}());



/***/ }),

/***/ "./src/ts/Node.ts":
/*!************************!*\
  !*** ./src/ts/Node.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());



/***/ }),

/***/ "./src/ts/util.ts":
/*!************************!*\
  !*** ./src/ts/util.ts ***!
  \************************/
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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/LinkedList */ "./src/ts/LinkedList.ts");

var list = new _ts_LinkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
list.add(10);
list.addLast(50);
list.add(20);
list.add(30);
list.addLast(80);
list.add(5);
list.print();
var list2 = list.clone();
list2.removeFirst();
list2.add(1);
list2.print();
list.print();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzLy4vc3JjL3RzL0xpbmtlZExpc3QudHMiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy90cy9Ob2RlLnRzIiwid2VicGFjazovL3N0cnVjdHVyZXMvLi9zcmMvdHMvdXRpbC50cyIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0cnVjdHVyZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJ1Y3R1cmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RydWN0dXJlcy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1U7QUFFeEM7SUFRSTtRQUhtQixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxzQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQztRQUc3RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDBCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLElBQW1DO1FBQW5DLDhCQUEwQixJQUFJLENBQUMsSUFBSTtRQUM1QyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVTLG1DQUFjLEdBQXhCLFVBQXlCLElBQW1DLEVBQUUsT0FBdUM7UUFBNUUsOEJBQTBCLElBQUksQ0FBQyxJQUFJO1FBQUUsb0NBQWtCLElBQUksQ0FB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QUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNaLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUViLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNiLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHsgTnVsbGFibGUsIE5vZGUgfSBmcm9tICcuL05vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtlZExpc3Q8RT4ge1xyXG4gICAgcHJvdGVjdGVkIGhlYWQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG4gICAgcHJvdGVjdGVkIHRhaWw6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG4gICAgcHJvdGVjdGVkIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBFUlJPUl9FTVBUWV9MSVNUID0gJ0xpc3QgaXMgZW1wdHkhJztcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBFUlJPUl9JTExFR0FMX0FSRyA9ICdJbmFwcHJvcHJpYXRlIGFyZ3VtZW50ISc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbXB0eShub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBub2RlID09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzc2VydE5vdEVtcHR5KG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+ID0gdGhpcy5oZWFkLCBtZXNzYWdlOiBzdHJpbmcgPSB0aGlzLkVSUk9SX0VNUFRZX0xJU1QpOiB2b2lkIHtcclxuICAgICAgICBVdGlsLmFzc2VydEZhbHNlKHRoaXMuZW1wdHkobm9kZSksIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyhkYXRhOiBFLCBub2RlOiBOdWxsYWJsZTxOb2RlPEU+PiA9IHRoaXMuaGVhZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkobm9kZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYobm9kZS5kYXRhID09IGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhkYXRhLCBub2RlLm5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBMaW5rZWRMaXN0PEU+IHtcclxuICAgICAgICBjb25zdCBjbG9uZWQgPSBuZXcgTGlua2VkTGlzdDxFPigpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XHJcblxyXG4gICAgICAgIGNsb25lZC5oZWFkID0gbmV3IE5vZGUodGhpcy5oZWFkLmRhdGEpO1xyXG4gICAgICAgIGNsb25lZC50YWlsID0gdGhpcy5jbG9uZV9pbXBsKGNsb25lZC5oZWFkLCB0aGlzLmhlYWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvbmVfaW1wbChub2RlX2Rlc3Q6IE51bGxhYmxlPE5vZGU8RT4+LCBub2RlX3NyYzogTnVsbGFibGU8Tm9kZTxFPj4pOiBOdWxsYWJsZTxOb2RlPEU+PiB7XHJcbiAgICAgICAgaWYodGhpcy5lbXB0eShub2RlX3NyYy5uZXh0KSlcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVfZGVzdDsgXHJcblxyXG4gICAgICAgIG5vZGVfZGVzdC5uZXh0ID0gbmV3IE5vZGUobm9kZV9zcmMubmV4dC5kYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVfaW1wbChub2RlX2Rlc3QubmV4dCwgbm9kZV9zcmMubmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdDpcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRfaW1wbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwcmludF9pbXBsKG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+ID0gdGhpcy5oZWFkKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5lbXB0eShub2RlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW251bGxdYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbJHtub2RlLmRhdGF9XWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW50X2ltcGwobm9kZS5uZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGRhdGE6IEUpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRGaXJzdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkRmlyc3QoZGF0YTogRSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbXB0eSgpKVxyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG5cclxuICAgICAgICBub2RlLm5leHQgPSB0aGlzLmhlYWQ7XHJcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcclxuICAgICAgICB0aGlzLmxlbmd0aCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRMYXN0KGRhdGE6IEUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoZGF0YSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW1wdHkoKSlcclxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcclxuICAgICAgICB0aGlzLmxlbmd0aCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZWVrKCk6IEUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZWVrRmlyc3QoKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVla0xhc3QoKTogRSB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhaWwuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KG46IG51bWJlcik6IEUge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHkoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXROb2RlKG4sIHRoaXMuaGVhZCkuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0Tm9kZShuOiBudW1iZXIsIG5vZGU6IE51bGxhYmxlPE5vZGU8RT4+KTogTm9kZTxFPiB7XHJcbiAgICAgICAgdGhpcy5hc3NlcnROb3RFbXB0eShub2RlLCB0aGlzLkVSUk9SX0lMTEVHQUxfQVJHKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihuID09IDEpXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXROb2RlKG4tMSwgbm9kZS5uZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKCk6IEUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZpcnN0KCk6IEUge1xyXG4gICAgICAgIHRoaXMuYXNzZXJ0Tm90RW1wdHkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuaGVhZC5kYXRhO1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xyXG5cclxuICAgICAgICBpZih0aGlzLmVtcHR5KCkpXHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlTGFzdCgpOiBFIHtcclxuICAgICAgICB0aGlzLmFzc2VydE5vdEVtcHR5KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRhaWwuZGF0YTtcclxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwZW51bHQgPSB0aGlzLmdldE5vZGUodGhpcy5sZW5ndGgtMSwgdGhpcy5oZWFkKTtcclxuICAgICAgICB0aGlzLnRhaWwgPSBwZW51bHQ7XHJcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgdHlwZSBOdWxsYWJsZTxUPiA9IFQgfCBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vZGU8RT4ge1xyXG4gICAgcHVibGljIGRhdGE6IE51bGxhYmxlPEU+O1xyXG4gICAgcHVibGljIG5leHQ6IE51bGxhYmxlPE5vZGU8RT4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IE51bGxhYmxlPEU+KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBVdGlsIHtcclxuXHRzdGF0aWMgYXNzZXJ0RXF1YWwoY29uZGl0aW9uOiBib29sZWFuLCBleHBlY3RlZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xyXG5cdCAgICBpZihjb25kaXRpb24gIT0gZXhwZWN0ZWQpXHJcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZT8gbWVzc2FnZSA6IFwiVW5leHBlY3RlZCBlcnJvciFcIik7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXNzZXJ0VHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG5cdCAgICBVdGlsLmFzc2VydEVxdWFsKGNvbmRpdGlvbiwgdHJ1ZSwgbWVzc2FnZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXNzZXJ0RmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHQgICAgVXRpbC5hc3NlcnRFcXVhbChjb25kaXRpb24sIGZhbHNlLCBtZXNzYWdlKTtcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tIFwiLi90cy9MaW5rZWRMaXN0XCI7XHJcbmxldCBsaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcclxuXHJcbmxpc3QuYWRkKDEwKTtcclxubGlzdC5hZGRMYXN0KDUwKTtcclxubGlzdC5hZGQoMjApO1xyXG5saXN0LmFkZCgzMCk7XHJcbmxpc3QuYWRkTGFzdCg4MCk7XHJcbmxpc3QuYWRkKDUpO1xyXG5saXN0LnByaW50KCk7XHJcblxyXG5sZXQgbGlzdDIgPSBsaXN0LmNsb25lKCk7XHJcbmxpc3QyLnJlbW92ZUZpcnN0KCk7XHJcbmxpc3QyLmFkZCgxKTtcclxubGlzdDIucHJpbnQoKTtcclxubGlzdC5wcmludCgpOyJdLCJzb3VyY2VSb290IjoiIn0=