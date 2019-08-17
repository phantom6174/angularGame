(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <randomizer-container></randomizer-container>\n  <grid-container-component></grid-container-component>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fifthteenPuzzle/components/grid-base/grid-base.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fifthteenPuzzle/components/grid-base/grid-base.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gridBase\" [ngClass]=\"randomizerEffect.animationClass || ''\"\n                   [ngStyle]=\"transformedStyle\" >\n \n    <div class=\"tileContainer\" *ngFor=\"let tile of tiles\">\n        <grid-tile [tile]=\"tile\" \n                   [tileWidth]=\"tileWidth\" \n                   [tileHeight]=\"tileHeight\" \n                   (registerSelectedTile)=\"performMove($event)\"></grid-tile>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fifthteenPuzzle/components/grid-container/grid-container.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fifthteenPuzzle/components/grid-container/grid-container.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gridContainer\">\n    <grid-base></grid-base>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"tile.empty ? 'hiddenGridTile' : 'gridTile'\"  [ngStyle]=\"{'height': height, 'width': width}\" (click)=\"tileSelected(tile)\">\n    <p>{{tile.displayValue}}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/randomizer/components/randomizer-base/randomizer-base.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/randomizer/components/randomizer-base/randomizer-base.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>\n        {{selection?.displayValue}}\n    </h3>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/randomizer/components/randomizer-container/randomizer-container.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/randomizer/components/randomizer-container/randomizer-container.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <randomizer-base></randomizer-base>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/randomizer/components/randomizer-option/randomizer-option.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/randomizer/components/randomizer-option/randomizer-option.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"tile.empty ? 'hiddenGridTile' : 'gridTile'\"  [ngStyle]=\"{'height': height, 'width': width}\" (click)=\"tileSelected(tile)\">\n    {{tile.displayValue}}\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-game';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _fifthteenPuzzle_fifthteenPuzzle_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fifthteenPuzzle/fifthteenPuzzle.module */ "./src/fifthteenPuzzle/fifthteenPuzzle.module.ts");
/* harmony import */ var _randomizer_randomizer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../randomizer/randomizer.module */ "./src/randomizer/randomizer.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"], {
                    metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_6__["metaReducers"],
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true
                    }
                }),
                _fifthteenPuzzle_fifthteenPuzzle_module__WEBPACK_IMPORTED_MODULE_7__["FifthteenPuzzleModule"],
                _randomizer_randomizer_module__WEBPACK_IMPORTED_MODULE_8__["RandomizerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var reducers = {};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/fifthteenPuzzle/components/grid-base/grid-base.component.sass":
/*!***************************************************************************!*\
  !*** ./src/fifthteenPuzzle/components/grid-base/grid-base.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gridBase {\n  width: 460px;\n  height: 460px;\n  background-color: rgba(255, 255, 255, 0.7);\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n}\n\n.fifthteenPuzzle-vertical-tremble {\n  -webkit-animation-name: fifthteenPuzzle-vertical-tremble;\n          animation-name: fifthteenPuzzle-vertical-tremble;\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s;\n}\n\n.fifthteenPuzzle-horizontal-tremble {\n  -webkit-animation-name: fifthteenPuzzle-horizontal-tremble;\n          animation-name: fifthteenPuzzle-horizontal-tremble;\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s;\n}\n\n@-webkit-keyframes fifthteenPuzzle-vertical-tremble {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  25% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n  }\n  75% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes fifthteenPuzzle-vertical-tremble {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  25% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n  }\n  75% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes fifthteenPuzzle-horizontal-tremble {\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  25% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  75% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n\n@keyframes fifthteenPuzzle-horizontal-tremble {\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  25% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  75% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoYW50b20vRGVza3RvcC9Qcm9qZWN0cy9wb3J0Zm9saW8vYW5ndWxhci1nYW1lL3NyYy9maWZ0aHRlZW5QdXp6bGUvY29tcG9uZW50cy9ncmlkLWJhc2UvZ3JpZC1iYXNlLmNvbXBvbmVudC5zYXNzIiwic3JjL2ZpZnRodGVlblB1enpsZS9jb21wb25lbnRzL2dyaWQtYmFzZS9ncmlkLWJhc2UuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUFBLDhCQUFBO0VBQUEsaURBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBREVBO0VBQ0Usd0RBQUE7VUFBQSxnREFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNDRjs7QURDQTtFQUNFLDBEQUFBO1VBQUEsa0RBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDRUY7O0FEQUE7RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNHRjtFREZBO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtFQ0lGO0VESEE7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDS0Y7RURKQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNNRjtBQUNGOztBRGZBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDR0Y7RURGQTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNJRjtFREhBO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0tGO0VESkE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDTUY7QUFDRjs7QURMQTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ09GO0VETkE7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDUUY7RURQQTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNTRjtFRFJBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1VGO0FBQ0Y7O0FEbkJBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDT0Y7RUROQTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNRRjtFRFBBO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ1NGO0VEUkE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDVUY7QUFDRiIsImZpbGUiOiJzcmMvZmlmdGh0ZWVuUHV6emxlL2NvbXBvbmVudHMvZ3JpZC1iYXNlL2dyaWQtYmFzZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4jZ3JpZEJhc2VcbiAgd2lkdGg6NDYwcHhcbiAgaGVpZ2h0OiA0NjBweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNylcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LXdyYXA6IHdyYXBcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybVxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzXG5cbi5maWZ0aHRlZW5QdXp6bGUtdmVydGljYWwtdHJlbWJsZVxuICBhbmltYXRpb24tbmFtZTogZmlmdGh0ZWVuUHV6emxlLXZlcnRpY2FsLXRyZW1ibGVcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzXG5cbi5maWZ0aHRlZW5QdXp6bGUtaG9yaXpvbnRhbC10cmVtYmxlXG4gIGFuaW1hdGlvbi1uYW1lOiBmaWZ0aHRlZW5QdXp6bGUtaG9yaXpvbnRhbC10cmVtYmxlXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xc1xuXG5Aa2V5ZnJhbWVzIGZpZnRodGVlblB1enpsZS12ZXJ0aWNhbC10cmVtYmxlXG4gIDAlXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweClcbiAgMjUlIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSBcbiAgNzUlIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgIFxuICAxMDAlXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweClcblxuQGtleWZyYW1lcyBmaWZ0aHRlZW5QdXp6bGUtaG9yaXpvbnRhbC10cmVtYmxlXG4gIDAlXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweClcbiAgMjUlIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KSBcbiAgNzUlIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCkgIFxuICAxMDAlXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweClcbiIsIiNncmlkQmFzZSB7XG4gIHdpZHRoOiA0NjBweDtcbiAgaGVpZ2h0OiA0NjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5maWZ0aHRlZW5QdXp6bGUtdmVydGljYWwtdHJlbWJsZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmaWZ0aHRlZW5QdXp6bGUtdmVydGljYWwtdHJlbWJsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzO1xufVxuXG4uZmlmdGh0ZWVuUHV6emxlLWhvcml6b250YWwtdHJlbWJsZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmaWZ0aHRlZW5QdXp6bGUtaG9yaXpvbnRhbC10cmVtYmxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuMXM7XG59XG5cbkBrZXlmcmFtZXMgZmlmdGh0ZWVuUHV6emxlLXZlcnRpY2FsLXRyZW1ibGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZpZnRodGVlblB1enpsZS1ob3Jpem9udGFsLXRyZW1ibGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/fifthteenPuzzle/components/grid-base/grid-base.component.ts":
/*!*************************************************************************!*\
  !*** ./src/fifthteenPuzzle/components/grid-base/grid-base.component.ts ***!
  \*************************************************************************/
/*! exports provided: GridBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBaseComponent", function() { return GridBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _randomizer_store_selectors_randomizer_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../randomizer/store/selectors/randomizer.selector */ "./src/randomizer/store/selectors/randomizer.selector.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/fifthteenPuzzle/store/actions/index.ts");





var GridBaseComponent = /** @class */ (function () {
    function GridBaseComponent(store) {
        this.store = store;
        // private tiles: fifthteenPuzzleTile[] = [
        //   {displayValue: "1", value: 0, position: 0},
        //   {displayValue: "2", value: 1, position: 1},
        //   {displayValue: "3", value: 2, position: 2},
        //   {displayValue: "4", value: 3, position: 3},
        //   {displayValue: "5", value: 4, position: 4},
        //   {displayValue: "6", value: 5, position: 5},
        //   {displayValue: "7", value: 6, position: 6},
        //   {displayValue: "8", value: 7, position: 7},
        //   {displayValue: "9", value: 8, position: 8},
        //   {displayValue: "10", value: 9, position: 9},
        //   {displayValue: "11", value: 10, position: 10},
        //   {displayValue: "12", value: 11, position: 11},
        //   {displayValue: "13", value: 12, position: 12},
        //   {displayValue: "14", value: 13, position: 13},    
        //   {displayValue: "", value: 15, position: 14, empty: true},
        //   {displayValue: "15", value: 14, position: 15}    
        // ]
        this.tiles = [];
        this.animationInProgress = false;
        this.options = {
            containerWidth: 460,
            containerHeight: 460,
            rows: 4,
            columns: 4
        };
        this.tileWidth = 0;
        this.tileHeight = 0;
    } // Store<{ count: number }>
    GridBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tiles = this.initiateNumericTiles();
        this.tileWidth = this.options.containerWidth / this.options.rows;
        this.tileHeight = this.options.containerHeight / this.options.columns;
        this.store
            .select(_randomizer_store_selectors_randomizer_selector__WEBPACK_IMPORTED_MODULE_3__["selectRandomizerSelection"])
            .subscribe(function (value) {
            _this.randomizerEffect = value;
            _this.applyAnimation(_this.randomizerEffect);
        });
    };
    GridBaseComponent.prototype.applyAnimation = function (effect) {
        var _this = this;
        var duration = 0;
        var increment = effect.increment;
        if (!effect.animationClass && !this.animationInProgress) {
            var interval_1 = setInterval(function () {
                _this.animationInProgress = true;
                duration++;
                _this.transformedStyle = { transform: "\n                                " + effect.transformedProp + "(" + (increment + effect.unit) + ")" };
                increment += effect.increment;
                if (duration == effect.duration) {
                    clearInterval(interval_1);
                    setTimeout(function () {
                        _this.transformedStyle = {
                            'transition-property': 'none',
                            transform: effect.transformedProp + "(" + (0 + effect.unit) + ")"
                        };
                        _this.animationInProgress = false;
                    }, 1000);
                }
            }, 1000);
        }
    };
    GridBaseComponent.prototype.performMove = function (tile) {
        var _a;
        if (!this.selectedTile && !tile.empty) {
            this.selectedTile = tile;
        }
        else if (this.selectedTile && tile.empty && this.isValidMove(tile.position, this.selectedTile.position)) {
            var tileInitialPosition = tile.position;
            var selectedTileInitialPosition = this.selectedTile.position;
            _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([this.tiles[selectedTileInitialPosition], this.tiles[tileInitialPosition]], 2), this.tiles[tileInitialPosition] = _a[0], this.tiles[selectedTileInitialPosition] = _a[1];
            this.selectedTile.position = tileInitialPosition;
            tile.position = selectedTileInitialPosition;
            this.selectedTile = null;
            if (tileInitialPosition == this.tiles.length - 2 ||
                tileInitialPosition == this.tiles.length - (this.options.columns + 1)) { // TODO: test well
                this.isSorted();
            }
        }
    };
    GridBaseComponent.prototype.isValidMove = function (currentTileIndex, emptyTileIndex) {
        return currentTileIndex + 1 == emptyTileIndex ||
            currentTileIndex - 1 == emptyTileIndex ||
            currentTileIndex + this.options.columns == emptyTileIndex ||
            currentTileIndex - this.options.columns == emptyTileIndex;
    };
    GridBaseComponent.prototype.isSorted = function () {
        var e_1, _a;
        var isSorted = false;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tiles), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tile = _c.value;
                if (tile.value == tile.position) {
                    isSorted = true;
                }
                else {
                    isSorted = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (isSorted) {
            this.store.dispatch({ type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["GRID_SORTED"], payload: { gridSorted: true } });
            alert('Success animation in progress :)');
        }
    };
    GridBaseComponent.prototype.initiateNumericTiles = function () {
        var amount = this.options.rows * this.options.columns;
        var initialTiles = [];
        var randomizedTiles = [];
        for (var tile = 0; tile < amount; tile++) {
            var empty = tile == amount - 1;
            var displayValue = empty ? "" : "" + (tile + 1);
            initialTiles.push({ displayValue: displayValue, value: 0, position: 0, empty: empty });
        }
        for (var tile = 0; tile < amount; tile++) {
            var randomTileIndex = Math.floor(Math.random() * (initialTiles.length));
            initialTiles[randomTileIndex].position = tile;
            randomizedTiles.push(initialTiles[randomTileIndex]);
            initialTiles.splice(randomTileIndex, 1);
        }
        return randomizedTiles;
    };
    GridBaseComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    GridBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'grid-base',
            template: __webpack_require__(/*! raw-loader!./grid-base.component.html */ "./node_modules/raw-loader/index.js!./src/fifthteenPuzzle/components/grid-base/grid-base.component.html"),
            styles: [__webpack_require__(/*! ./grid-base.component.sass */ "./src/fifthteenPuzzle/components/grid-base/grid-base.component.sass")]
        })
    ], GridBaseComponent);
    return GridBaseComponent;
}());



/***/ }),

/***/ "./src/fifthteenPuzzle/components/grid-container/grid-container.component.sass":
/*!*************************************************************************************!*\
  !*** ./src/fifthteenPuzzle/components/grid-container/grid-container.component.sass ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gridContainer {\n  width: 650px;\n  height: 650px;\n  background-color: rgba(0, 0, 0, 0.9);\n  margin: auto;\n  border-radius: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoYW50b20vRGVza3RvcC9Qcm9qZWN0cy9wb3J0Zm9saW8vYW5ndWxhci1nYW1lL3NyYy9maWZ0aHRlZW5QdXp6bGUvY29tcG9uZW50cy9ncmlkLWNvbnRhaW5lci9ncmlkLWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNyYy9maWZ0aHRlZW5QdXp6bGUvY29tcG9uZW50cy9ncmlkLWNvbnRhaW5lci9ncmlkLWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9maWZ0aHRlZW5QdXp6bGUvY29tcG9uZW50cy9ncmlkLWNvbnRhaW5lci9ncmlkLWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNncmlkQ29udGFpbmVyXG4gICAgd2lkdGg6IDY1MHB4XG4gICAgaGVpZ2h0OiA2NTBweFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KVxuICAgIG1hcmdpbjogYXV0b1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4iLCIjZ3JpZENvbnRhaW5lciB7XG4gIHdpZHRoOiA2NTBweDtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/fifthteenPuzzle/components/grid-container/grid-container.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/fifthteenPuzzle/components/grid-container/grid-container.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GridContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridContainerComponent", function() { return GridContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridContainerComponent = /** @class */ (function () {
    function GridContainerComponent() {
    }
    GridContainerComponent.prototype.ngOnInit = function () {
    };
    GridContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'grid-container-component',
            template: __webpack_require__(/*! raw-loader!./grid-container.component.html */ "./node_modules/raw-loader/index.js!./src/fifthteenPuzzle/components/grid-container/grid-container.component.html"),
            styles: [__webpack_require__(/*! ./grid-container.component.sass */ "./src/fifthteenPuzzle/components/grid-container/grid-container.component.sass")]
        })
    ], GridContainerComponent);
    return GridContainerComponent;
}());



/***/ }),

/***/ "./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.sass":
/*!***************************************************************************!*\
  !*** ./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridTile {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid black;\n  margin: 1px;\n}\n\n.hiddenGridTile {\n  border: 1px solid rgba(0, 0, 0, 0);\n  margin: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoYW50b20vRGVza3RvcC9Qcm9qZWN0cy9wb3J0Zm9saW8vYW5ndWxhci1nYW1lL3NyYy9maWZ0aHRlZW5QdXp6bGUvY29tcG9uZW50cy9ncmlkLXRpbGUvZ3JpZC10aWxlLmNvbXBvbmVudC5zYXNzIiwic3JjL2ZpZnRodGVlblB1enpsZS9jb21wb25lbnRzL2dyaWQtdGlsZS9ncmlkLXRpbGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2ZpZnRodGVlblB1enpsZS9jb21wb25lbnRzL2dyaWQtdGlsZS9ncmlkLXRpbGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZFRpbGVcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXG4gIG1hcmdpbjogMXB4XG5cbi5oaWRkZW5HcmlkVGlsZVxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApIFxuICBtYXJnaW46IDFweFxuIiwiLmdyaWRUaWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5oaWRkZW5HcmlkVGlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIG1hcmdpbjogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.ts ***!
  \*************************************************************************/
/*! exports provided: GridTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTileComponent", function() { return GridTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridTileComponent = /** @class */ (function () {
    function GridTileComponent() {
        this.registerSelectedTile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.width = "";
        this.height = "";
    }
    GridTileComponent.prototype.ngOnInit = function () {
        this.width = this.tileWidth - 4 + "px";
        this.height = this.tileHeight - 4 + "px";
    };
    GridTileComponent.prototype.tileSelected = function (tile) {
        this.registerSelectedTile.emit(tile);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GridTileComponent.prototype, "tile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GridTileComponent.prototype, "tileWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], GridTileComponent.prototype, "tileHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GridTileComponent.prototype, "registerSelectedTile", void 0);
    GridTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'grid-tile',
            template: __webpack_require__(/*! raw-loader!./grid-tile.component.html */ "./node_modules/raw-loader/index.js!./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.html"),
            styles: [__webpack_require__(/*! ./grid-tile.component.sass */ "./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.sass")]
        })
    ], GridTileComponent);
    return GridTileComponent;
}());



/***/ }),

/***/ "./src/fifthteenPuzzle/components/index.js":
/*!*************************************************!*\
  !*** ./src/fifthteenPuzzle/components/index.js ***!
  \*************************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _grid_container_grid_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-container/grid-container.component */ "./src/fifthteenPuzzle/components/grid-container/grid-container.component.ts");
/* harmony import */ var _grid_base_grid_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-base/grid-base.component */ "./src/fifthteenPuzzle/components/grid-base/grid-base.component.ts");
/* harmony import */ var _grid_tile_grid_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-tile/grid-tile.component */ "./src/fifthteenPuzzle/components/grid-tile/grid-tile.component.ts");




const Components = [
  _grid_container_grid_container_component__WEBPACK_IMPORTED_MODULE_0__["GridContainerComponent"],
  _grid_base_grid_base_component__WEBPACK_IMPORTED_MODULE_1__["GridBaseComponent"],
  _grid_tile_grid_tile_component__WEBPACK_IMPORTED_MODULE_2__["GridTileComponent"]
];


/***/ }),

/***/ "./src/fifthteenPuzzle/fifthteenPuzzle.module.ts":
/*!*******************************************************!*\
  !*** ./src/fifthteenPuzzle/fifthteenPuzzle.module.ts ***!
  \*******************************************************/
/*! exports provided: FifthteenPuzzleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FifthteenPuzzleModule", function() { return FifthteenPuzzleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/fifthteenPuzzle/components/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers */ "./src/fifthteenPuzzle/store/reducers/index.ts");



//import { AppRoutingModule } from './app-routing.module';



var FifthteenPuzzleModule = /** @class */ (function () {
    function FifthteenPuzzleModule() {
    }
    FifthteenPuzzleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_3__["Components"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('fifthteenPuzzle', _store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"])
            ],
            exports: [_components__WEBPACK_IMPORTED_MODULE_3__["Components"]],
            providers: []
        })
    ], FifthteenPuzzleModule);
    return FifthteenPuzzleModule;
}());



/***/ }),

/***/ "./src/fifthteenPuzzle/store/actions/gridBase.actions.ts":
/*!***************************************************************!*\
  !*** ./src/fifthteenPuzzle/store/actions/gridBase.actions.ts ***!
  \***************************************************************/
/*! exports provided: GRID_SORTED, GridSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SORTED", function() { return GRID_SORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSorted", function() { return GridSorted; });
var GRID_SORTED = '[fifthteenPuzzle] GRID_SORTED';
var GridSorted = /** @class */ (function () {
    function GridSorted(payload) {
        this.payload = payload;
        this.type = GRID_SORTED;
    }
    GridSorted.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return GridSorted;
}());



/***/ }),

/***/ "./src/fifthteenPuzzle/store/actions/index.ts":
/*!****************************************************!*\
  !*** ./src/fifthteenPuzzle/store/actions/index.ts ***!
  \****************************************************/
/*! exports provided: GRID_SORTED, GridSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gridBase_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridBase.actions */ "./src/fifthteenPuzzle/store/actions/gridBase.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GRID_SORTED", function() { return _gridBase_actions__WEBPACK_IMPORTED_MODULE_0__["GRID_SORTED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridSorted", function() { return _gridBase_actions__WEBPACK_IMPORTED_MODULE_0__["GridSorted"]; });




/***/ }),

/***/ "./src/fifthteenPuzzle/store/reducers/grid-base.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/fifthteenPuzzle/store/reducers/grid-base.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_gridBase_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/gridBase.actions */ "./src/fifthteenPuzzle/store/actions/gridBase.actions.ts");


var initialState = {
    gridSorted: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_gridBase_actions__WEBPACK_IMPORTED_MODULE_1__["GRID_SORTED"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { gridSorted: action.payload.gridSorted });
    }
    return state;
}


/***/ }),

/***/ "./src/fifthteenPuzzle/store/reducers/index.ts":
/*!*****************************************************!*\
  !*** ./src/fifthteenPuzzle/store/reducers/index.ts ***!
  \*****************************************************/
/*! exports provided: reducers, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _grid_base_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-base.reducer */ "./src/fifthteenPuzzle/store/reducers/grid-base.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _grid_base_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _grid_base_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });


var reducers = {
    gridBase: _grid_base_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/randomizer/components/index.js":
/*!********************************************!*\
  !*** ./src/randomizer/components/index.js ***!
  \********************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _randomizer_base_randomizer_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer-base/randomizer-base.component */ "./src/randomizer/components/randomizer-base/randomizer-base.component.ts");
/* harmony import */ var _randomizer_container_randomizer_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomizer-container/randomizer-container.component */ "./src/randomizer/components/randomizer-container/randomizer-container.component.ts");
/* harmony import */ var _randomizer_option_randomizer_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomizer-option/randomizer-option.component */ "./src/randomizer/components/randomizer-option/randomizer-option.component.ts");




const Components = [
    _randomizer_base_randomizer_base_component__WEBPACK_IMPORTED_MODULE_0__["RandomizerBaseComponent"],
    _randomizer_container_randomizer_container_component__WEBPACK_IMPORTED_MODULE_1__["RandomizerContainerComponent"],
    _randomizer_option_randomizer_option_component__WEBPACK_IMPORTED_MODULE_2__["RandomizerOptionComponent"]
];

/***/ }),

/***/ "./src/randomizer/components/randomizer-base/randomizer-base.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/randomizer/components/randomizer-base/randomizer-base.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridTile {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid black;\n  margin: 1px;\n}\n\n.hiddenGridTile {\n  border: 1px solid rgba(0, 0, 0, 0);\n  margin: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoYW50b20vRGVza3RvcC9Qcm9qZWN0cy9wb3J0Zm9saW8vYW5ndWxhci1nYW1lL3NyYy9yYW5kb21pemVyL2NvbXBvbmVudHMvcmFuZG9taXplci1iYXNlL3JhbmRvbWl6ZXItYmFzZS5jb21wb25lbnQuc2FzcyIsInNyYy9yYW5kb21pemVyL2NvbXBvbmVudHMvcmFuZG9taXplci1iYXNlL3JhbmRvbWl6ZXItYmFzZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvcmFuZG9taXplci9jb21wb25lbnRzL3JhbmRvbWl6ZXItYmFzZS9yYW5kb21pemVyLWJhc2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZFRpbGVcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXG4gIG1hcmdpbjogMXB4XG5cbi5oaWRkZW5HcmlkVGlsZVxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApIFxuICBtYXJnaW46IDFweFxuIiwiLmdyaWRUaWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5oaWRkZW5HcmlkVGlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIG1hcmdpbjogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/randomizer/components/randomizer-base/randomizer-base.component.ts":
/*!********************************************************************************!*\
  !*** ./src/randomizer/components/randomizer-base/randomizer-base.component.ts ***!
  \********************************************************************************/
/*! exports provided: RandomizerBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizerBaseComponent", function() { return RandomizerBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/randomizer/store/actions/index.ts");




var RandomizerBaseComponent = /** @class */ (function () {
    function RandomizerBaseComponent(store) {
        this.store = store;
        this.default = {
            displayValue: 'No selection',
            animationClass: 'fifthteenPuzzle-default',
            duration: 5
        };
        this.selection = this.default;
        this.modes = [
            {
                displayValue: 'Too Slow?',
                transformedProp: 'rotate',
                increment: 180,
                unit: 'deg',
                duration: 6
            },
            {
                displayValue: 'Too Fast?',
                transformedProp: 'rotate',
                increment: 36,
                unit: 'deg',
                duration: 10
            },
            {
                displayValue: 'Lets go back',
                transformedProp: 'rotate',
                increment: -72,
                unit: 'deg',
                duration: 10
            },
            {
                displayValue: 'BACK!',
                transformedProp: 'rotate',
                increment: -180,
                unit: 'deg',
                duration: 6
            },
            {
                displayValue: 'What?',
                transformedProp: 'rotate',
                increment: 360,
                unit: 'deg',
                duration: 5
            },
            {
                displayValue: 'Lower the temperature!',
                animationClass: 'fifthteenPuzzle-vertical-tremble',
                duration: 5
            },
            {
                displayValue: 'Yes?',
                animationClass: 'fifthteenPuzzle-horizontal-tremble',
                duration: 5
            }
        ];
        this.selectionPerformed = false;
        this.stabilize = false;
    }
    RandomizerBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomizerInterval = setInterval(function () {
            _this.performSelection();
            setTimeout(function () {
                _this.performSelection();
            }, _this.selection.duration * 1000);
        }, 10000); // TODO: implement random or configurable interval
    };
    RandomizerBaseComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.randomizerInterval);
    };
    RandomizerBaseComponent.prototype.performSelection = function () {
        if (!this.stabilize) {
            this.selection = this.modes[Math.floor(Math.random() * this.modes.length)];
            this.store.dispatch({ type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["SELECTION_PERFORMED"], payload: this.selection });
            this.stabilize = true;
        }
        else {
            this.selection = this.default;
            this.store.dispatch({ type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["SELECTION_PERFORMED"], payload: this.selection });
            this.stabilize = false;
        }
    };
    RandomizerBaseComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    RandomizerBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'randomizer-base',
            template: __webpack_require__(/*! raw-loader!./randomizer-base.component.html */ "./node_modules/raw-loader/index.js!./src/randomizer/components/randomizer-base/randomizer-base.component.html"),
            styles: [__webpack_require__(/*! ./randomizer-base.component.sass */ "./src/randomizer/components/randomizer-base/randomizer-base.component.sass")]
        })
    ], RandomizerBaseComponent);
    return RandomizerBaseComponent;
}());



/***/ }),

/***/ "./src/randomizer/components/randomizer-container/randomizer-container.component.sass":
/*!********************************************************************************************!*\
  !*** ./src/randomizer/components/randomizer-container/randomizer-container.component.sass ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridTile {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid black;\n  margin: 1px;\n}\n\n.hiddenGridTile {\n  border: 1px solid rgba(0, 0, 0, 0);\n  margin: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoYW50b20vRGVza3RvcC9Qcm9qZWN0cy9wb3J0Zm9saW8vYW5ndWxhci1nYW1lL3NyYy9yYW5kb21pemVyL2NvbXBvbmVudHMvcmFuZG9taXplci1jb250YWluZXIvcmFuZG9taXplci1jb250YWluZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvcmFuZG9taXplci9jb21wb25lbnRzL3JhbmRvbWl6ZXItY29udGFpbmVyL3JhbmRvbWl6ZXItY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9yYW5kb21pemVyL2NvbXBvbmVudHMvcmFuZG9taXplci1jb250YWluZXIvcmFuZG9taXplci1jb250YWluZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZFRpbGVcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXG4gIG1hcmdpbjogMXB4XG5cbi5oaWRkZW5HcmlkVGlsZVxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApIFxuICBtYXJnaW46IDFweFxuIiwiLmdyaWRUaWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5oaWRkZW5HcmlkVGlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIG1hcmdpbjogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/randomizer/components/randomizer-container/randomizer-container.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/randomizer/components/randomizer-container/randomizer-container.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RandomizerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizerContainerComponent", function() { return RandomizerContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RandomizerContainerComponent = /** @class */ (function () {
    function RandomizerContainerComponent() {
        this.registerSelectedTile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.width = "";
        this.height = "";
    }
    RandomizerContainerComponent.prototype.ngOnInit = function () {
        this.width = this.tileWidth - 4 + "px";
        this.height = this.tileHeight - 4 + "px";
    };
    RandomizerContainerComponent.prototype.tileSelected = function (tile) {
        this.registerSelectedTile.emit(tile);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RandomizerContainerComponent.prototype, "tile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RandomizerContainerComponent.prototype, "tileWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RandomizerContainerComponent.prototype, "tileHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], RandomizerContainerComponent.prototype, "registerSelectedTile", void 0);
    RandomizerContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'randomizer-container',
            template: __webpack_require__(/*! raw-loader!./randomizer-container.component.html */ "./node_modules/raw-loader/index.js!./src/randomizer/components/randomizer-container/randomizer-container.component.html"),
            styles: [__webpack_require__(/*! ./randomizer-container.component.sass */ "./src/randomizer/components/randomizer-container/randomizer-container.component.sass")]
        })
    ], RandomizerContainerComponent);
    return RandomizerContainerComponent;
}());



/***/ }),

/***/ "./src/randomizer/components/randomizer-option/randomizer-option.component.sass":
/*!**************************************************************************************!*\
  !*** ./src/randomizer/components/randomizer-option/randomizer-option.component.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridTile {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid black;\n  margin: 1px;\n}\n\n.hiddenGridTile {\n  border: 1px solid rgba(0, 0, 0, 0);\n  margin: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoYW50b20vRGVza3RvcC9Qcm9qZWN0cy9wb3J0Zm9saW8vYW5ndWxhci1nYW1lL3NyYy9yYW5kb21pemVyL2NvbXBvbmVudHMvcmFuZG9taXplci1vcHRpb24vcmFuZG9taXplci1vcHRpb24uY29tcG9uZW50LnNhc3MiLCJzcmMvcmFuZG9taXplci9jb21wb25lbnRzL3JhbmRvbWl6ZXItb3B0aW9uL3JhbmRvbWl6ZXItb3B0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9yYW5kb21pemVyL2NvbXBvbmVudHMvcmFuZG9taXplci1vcHRpb24vcmFuZG9taXplci1vcHRpb24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZFRpbGVcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXG4gIG1hcmdpbjogMXB4XG5cbi5oaWRkZW5HcmlkVGlsZVxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApIFxuICBtYXJnaW46IDFweFxuIiwiLmdyaWRUaWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5oaWRkZW5HcmlkVGlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIG1hcmdpbjogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/randomizer/components/randomizer-option/randomizer-option.component.ts":
/*!************************************************************************************!*\
  !*** ./src/randomizer/components/randomizer-option/randomizer-option.component.ts ***!
  \************************************************************************************/
/*! exports provided: RandomizerOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizerOptionComponent", function() { return RandomizerOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RandomizerOptionComponent = /** @class */ (function () {
    function RandomizerOptionComponent() {
        this.registerSelectedTile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.width = "";
        this.height = "";
    }
    RandomizerOptionComponent.prototype.ngOnInit = function () {
        this.width = this.tileWidth - 4 + "px";
        this.height = this.tileHeight - 4 + "px";
    };
    RandomizerOptionComponent.prototype.tileSelected = function (tile) {
        this.registerSelectedTile.emit(tile);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RandomizerOptionComponent.prototype, "tile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RandomizerOptionComponent.prototype, "tileWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RandomizerOptionComponent.prototype, "tileHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], RandomizerOptionComponent.prototype, "registerSelectedTile", void 0);
    RandomizerOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'randomizer-option',
            template: __webpack_require__(/*! raw-loader!./randomizer-option.component.html */ "./node_modules/raw-loader/index.js!./src/randomizer/components/randomizer-option/randomizer-option.component.html"),
            styles: [__webpack_require__(/*! ./randomizer-option.component.sass */ "./src/randomizer/components/randomizer-option/randomizer-option.component.sass")]
        })
    ], RandomizerOptionComponent);
    return RandomizerOptionComponent;
}());



/***/ }),

/***/ "./src/randomizer/randomizer.module.ts":
/*!*********************************************!*\
  !*** ./src/randomizer/randomizer.module.ts ***!
  \*********************************************/
/*! exports provided: RandomizerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizerModule", function() { return RandomizerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/randomizer/components/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers */ "./src/randomizer/store/reducers/index.ts");



//import { AppRoutingModule } from './app-routing.module';



var RandomizerModule = /** @class */ (function () {
    function RandomizerModule() {
    }
    RandomizerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_3__["Components"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('randomizerState', _store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"])
            ],
            exports: [_components__WEBPACK_IMPORTED_MODULE_3__["Components"]],
            providers: []
        })
    ], RandomizerModule);
    return RandomizerModule;
}());



/***/ }),

/***/ "./src/randomizer/store/actions/index.ts":
/*!***********************************************!*\
  !*** ./src/randomizer/store/actions/index.ts ***!
  \***********************************************/
/*! exports provided: SELECTION_PERFORMED, SelectionPerformed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _randomizer_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer.actions */ "./src/randomizer/store/actions/randomizer.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_PERFORMED", function() { return _randomizer_actions__WEBPACK_IMPORTED_MODULE_0__["SELECTION_PERFORMED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionPerformed", function() { return _randomizer_actions__WEBPACK_IMPORTED_MODULE_0__["SelectionPerformed"]; });




/***/ }),

/***/ "./src/randomizer/store/actions/randomizer.actions.ts":
/*!************************************************************!*\
  !*** ./src/randomizer/store/actions/randomizer.actions.ts ***!
  \************************************************************/
/*! exports provided: SELECTION_PERFORMED, SelectionPerformed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_PERFORMED", function() { return SELECTION_PERFORMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionPerformed", function() { return SelectionPerformed; });
var SELECTION_PERFORMED = '[randomizer] SELECTION_PERFORMED';
var SelectionPerformed = /** @class */ (function () {
    function SelectionPerformed(payload) {
        this.payload = payload;
        this.type = SELECTION_PERFORMED;
    }
    SelectionPerformed.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SelectionPerformed;
}());



/***/ }),

/***/ "./src/randomizer/store/reducers/index.ts":
/*!************************************************!*\
  !*** ./src/randomizer/store/reducers/index.ts ***!
  \************************************************/
/*! exports provided: reducers, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _randomizer_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer.reducer */ "./src/randomizer/store/reducers/randomizer.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _randomizer_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _randomizer_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });


var reducers = {
    randomizerState: _randomizer_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};



/***/ }),

/***/ "./src/randomizer/store/reducers/randomizer.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/randomizer/store/reducers/randomizer.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_randomizer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/randomizer.actions */ "./src/randomizer/store/actions/randomizer.actions.ts");


var initialState = {
    randomSelection: {
        displayValue: false,
        duration: 0
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_randomizer_actions__WEBPACK_IMPORTED_MODULE_1__["SELECTION_PERFORMED"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { randomSelection: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/randomizer/store/selectors/randomizer.selector.ts":
/*!***************************************************************!*\
  !*** ./src/randomizer/store/selectors/randomizer.selector.ts ***!
  \***************************************************************/
/*! exports provided: selectRandomizerState, getRandomizerState, selectRandomizerSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRandomizerState", function() { return selectRandomizerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomizerState", function() { return getRandomizerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRandomizerSelection", function() { return selectRandomizerSelection; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectRandomizerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('randomizerState');
var getRandomizerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRandomizerState, function (state) { return state.randomizerState; });
var selectRandomizerSelection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRandomizerState, function (selection) { return selection.randomSelection; });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/phantom/Desktop/Projects/portfolio/angular-game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map