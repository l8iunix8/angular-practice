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

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiService {
    constructor(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:4999/';
    }
    getArticleDataById(id) {
        return this.http.get(this.url + 'api/' + id, { responseType: 'json' });
    }
    getTotalDataCount() {
        return this.http.get(this.url + 'api/totalDataCount', { responseType: 'text' });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'practice';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route/app-routing.module */ "./src/app/route/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-tag/article-tag.component */ "./src/app/article-tag/article-tag.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./introduce/introduce.component */ "./src/app/introduce/introduce.component.ts");
/* harmony import */ var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article-page/article-page.component */ "./src/app/article-page/article-page.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"],
        _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_9__["ArticleTagComponent"],
        _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceComponent"],
        _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_13__["ArticlePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"],
                    _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_9__["ArticleTagComponent"],
                    _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceComponent"],
                    _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_13__["ArticlePageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/article-page/article-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-page/article-page.component.ts ***!
  \********************************************************/
/*! exports provided: ArticlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageComponent", function() { return ArticlePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");




class ArticlePageComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.service.getArticleDataById(this.id - 1).subscribe((data) => {
            this.data = data;
        });
    }
}
ArticlePageComponent.ɵfac = function ArticlePageComponent_Factory(t) { return new (t || ArticlePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ArticlePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlePageComponent, selectors: [["app-article-page"]], decls: 6, vars: 2, consts: [[1, "articlePage"], ["id", "articlePageTitle"], ["id", "articlePageContent"], ["id", "articlePageComment"]], template: function ArticlePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["content"]);
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    border:1px solid red;\r\n    \r\n}\r\n\r\n.articlePage[_ngcontent-%COMP%]{\r\n    margin-left:400px;\r\n    margin-right: 300px;\r\n    min-width: 500px;\r\n    height: 100%;\r\n    padding-top: 50px;\r\n    margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hcnRpY2xlUGFnZXtcclxuICAgIG1hcmdpbi1sZWZ0OjQwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-page',
                templateUrl: './article-page.component.html',
                styleUrls: ['./article-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/article-tag/article-tag.component.ts":
/*!******************************************************!*\
  !*** ./src/app/article-tag/article-tag.component.ts ***!
  \******************************************************/
/*! exports provided: ArticleTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTagComponent", function() { return ArticleTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ArticleTagComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleTagComponent.ɵfac = function ArticleTagComponent_Factory(t) { return new (t || ArticleTagComponent)(); };
ArticleTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleTagComponent, selectors: [["app-article-tag"]], decls: 2, vars: 0, consts: [[1, "Tag"]], template: function ArticleTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Tag[_ngcontent-%COMP%]{\r\n  padding:3px;\r\n  margin:5px;\r\n  background-color: rgb(106, 112, 108);\r\n  color: rgb(192, 160, 207);\r\n  border-radius: 5px;\r\n  display: block;\r\n  float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS10YWcvYXJ0aWNsZS10YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtdGFnL2FydGljbGUtdGFnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGFne1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIG1hcmdpbjo1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgMTEyLCAxMDgpO1xyXG4gIGNvbG9yOiByZ2IoMTkyLCAxNjAsIDIwNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-tag',
                templateUrl: './article-tag.component.html',
                styleUrls: ['./article-tag.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article-tag/article-tag.component */ "./src/app/article-tag/article-tag.component.ts");





const _c0 = function (a1) { return ["/articlePage", a1]; };
class ArticleComponent {
    constructor(service) {
        this.service = service;
        this.data = {};
    }
    ngOnInit() {
        this.service.getArticleDataById(this.articleDataID).subscribe((data) => {
            this.data = data;
            console.log('this.data', this.data);
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], inputs: { articleDataID: "articleDataID" }, decls: 30, vars: 12, consts: [[1, "article"], [1, "articleTitle"], [3, "routerLink"], [1, "spaceLine"], [1, "articleContent"], [1, "articleDate"], [1, "articleText"], [1, "keepReading"], [1, "articleTag"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(\u7E7C\u7E8C\u95B1\u8B80)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-article-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.data["id"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data["date"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.data["id"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["content"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.data["id"]));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_3__["ArticleTagComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.article[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n}\r\n\r\n.articleTitle[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  margin: 5px 20px;\r\n  padding: 0px;\r\n  height: 5rem;\r\n  width:40rem;\r\n}\r\n\r\n.articleContent[_ngcontent-%COMP%] {\r\n  height:70%;\r\n\r\n}\r\n\r\n.articleText[_ngcontent-%COMP%] {\r\n  padding:30px 30px 0px 30px;\r\n  height: 3.5rem;\r\n  word-wrap:break-word;\r\n  overflow-y: hidden;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 3;\r\n}\r\n\r\n.keepReading[_ngcontent-%COMP%]{\r\n\r\n  width:5rem;\r\n  margin:10px 100px 10px 600px;\r\n\r\n}\r\n\r\n.articleDate[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem;\r\n  margin-left: 80%;\r\n  width:100px;\r\n  height:10%;\r\n  line-height: 28px;\r\n}\r\n\r\n.articleTag[_ngcontent-%COMP%]{\r\n  height: 25%;\r\n  margin: 10px 50px;\r\n  width: 90%;\r\n}\r\n\r\n.spaceLine[_ngcontent-%COMP%] {\r\n  width: 85%;\r\n  height: 2px;\r\n  margin: 0px auto;\r\n  background: -webkit-radial-gradient(\r\n    ellipse,\r\n    rgb(200, 196, 196),\r\n    rgba(65, 63, 63, 0.815),\r\n    rgba(255, 255, 255, 0.404)\r\n  );\r\n  border-radius: 2px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  color:black;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFVBQVU7RUFDViw0QkFBNEI7O0FBRTlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEI7Ozs7O0dBS0M7RUFDRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbi5hcnRpY2xlIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZVRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiA1cHggMjBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOjQwcmVtO1xyXG59XHJcblxyXG4uYXJ0aWNsZUNvbnRlbnQge1xyXG4gIGhlaWdodDo3MCU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZVRleHQge1xyXG4gIHBhZGRpbmc6MzBweCAzMHB4IDBweCAzMHB4O1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG59XHJcblxyXG4ua2VlcFJlYWRpbmd7XHJcblxyXG4gIHdpZHRoOjVyZW07XHJcbiAgbWFyZ2luOjEwcHggMTAwcHggMTBweCA2MDBweDtcclxuXHJcbn1cclxuXHJcbi5hcnRpY2xlRGF0ZXtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDoxMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlVGFne1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIG1hcmdpbjogMTBweCA1MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5zcGFjZUxpbmUge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChcclxuICAgIGVsbGlwc2UsXHJcbiAgICByZ2IoMjAwLCAxOTYsIDE5NiksXHJcbiAgICByZ2JhKDY1LCA2MywgNjMsIDAuODE1KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MDQpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css'],
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, { articleDataID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article/article.component */ "./src/app/article/article.component.ts");






function ContentComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const id_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articleDataID", id_r1);
} }
class ContentComponent {
    constructor(service) {
        this.service = service;
        // 第幾頁
        this.page = 1;
        // 一頁幾筆資料
        this.articleCount = 4;
        // 存放要第幾筆到第幾筆
        this.articleArray = [];
    }
    ngOnInit() {
        this.service.getTotalDataCount().subscribe((data) => {
            this.totalDataCount = Number(data);
            this.totalPage = Math.ceil(data / this.articleCount);
            for (let i = 0; i < this.articleCount; i++) {
                this.articleArray.push(i);
            }
        });
    }
    changePage(status) {
        // 換頁
        window.scrollTo(0, 0);
        this.articleArray = [];
        switch (status) {
            case '+':
                for (let i = 0; i < this.articleCount; i++) {
                    if (this.page * this.articleCount + i < this.totalDataCount) {
                        this.articleArray.push(this.page * this.articleCount + i);
                    }
                }
                this.page = this.page === this.totalPage ? this.page : (this.page + 1);
                break;
            case '-':
                this.page = this.page === 1 ? this.page : (this.page - 1);
                console.log(this.page);
                for (let i = 0; i < this.articleCount; i++) {
                    this.articleArray.push((this.page - 1) * this.articleCount + i);
                }
                break;
        }
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 3, vars: 3, consts: [["id", "content"], [4, "ngFor", "ngForOf"], [3, "page", "totalPage", "changePage"], [3, "articleDataID"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function ContentComponent_Template_app_footer_changePage_2_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articleArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("totalPage", ctx.totalPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_4__["ArticleComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n  border:solid 1px red;\r\n}\r\n\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  margin-left:400px;\r\n  margin-right: 300px;\r\n  min-width: 500px;\r\n  height: 100%;\r\n  padding-top: 50px;\r\n  margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgYm9yZGVyOnNvbGlkIDFweCByZWQ7XHJcbn1cclxuXHJcblxyXG4jY29udGVudHtcclxuICBtYXJnaW4tbGVmdDo0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css'],
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.switchPage("-"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.switchPage("+"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(service) {
        this.service = service;
        // 第幾頁
        this.page = 1;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    switchPage(status) {
        this.changePage.emit(status);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { page: "page", totalPage: "totalPage" }, outputs: { changePage: "changePage" }, decls: 8, vars: 5, consts: [["id", "footer"], ["id", "square"], ["class", "changePage", 3, "click", 4, "ngIf"], ["class", "block", 4, "ngIf"], ["id", "page"], [1, "changePage", 3, "click"], [1, "block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_div_6_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FooterComponent_div_7_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page !== ctx.totalPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page === ctx.totalPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%]{\r\n  border:1px solid red;\r\n}\r\n#footer[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  margin-left:400px;\r\n  margin-right: 300px;\r\n}\r\n#page[_ngcontent-%COMP%]{\r\n  margin:10px auto;\r\n  width:20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.changePage[_ngcontent-%COMP%]{\r\n  width:20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.block[_ngcontent-%COMP%]{\r\n  width:20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  visibility: hidden;\r\n}\r\n#square[_ngcontent-%COMP%]{\r\n  margin:1px auto;\r\n  width:70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxufVxyXG4jZm9vdGVye1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDo0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4jcGFnZXtcclxuICBtYXJnaW46MTBweCBhdXRvO1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNoYW5nZVBhZ2V7XHJcbiAgd2lkdGg6MjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvY2t7XHJcbiAgd2lkdGg6MjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI3NxdWFyZXtcclxuICBtYXJnaW46MXB4IGF1dG87XHJcbiAgd2lkdGg6NzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, { page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _string_header_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/header_string */ "./src/app/header/string/header_string.ts");



class HeaderComponent {
    constructor() {
        this.headerString = _string_header_string__WEBPACK_IMPORTED_MODULE_1__["HeaderString"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 1, consts: [["id", "header"], ["id", "title"], ["id", "aboutMe"], ["id", "allArticle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u95DC\u65BC\u6211");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6240\u6709\u6587\u7AE0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerString.title);
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n  border:solid 1px red;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  padding: 5px;\r\n}\r\n\r\n#head-shot[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBib3JkZXI6c29saWQgMXB4IHJlZDtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuI2hlYWQtc2hvdHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/string/header_string.ts":
/*!************************************************!*\
  !*** ./src/app/header/string/header_string.ts ***!
  \************************************************/
/*! exports provided: HeaderString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderString", function() { return HeaderString; });
const HeaderString = {
    title: 'Code浪人',
    aboutMe: '關於我',
    allArticle: '所有文章'
};


/***/ }),

/***/ "./src/app/introduce/introduce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/introduce/introduce.component.ts ***!
  \**************************************************/
/*! exports provided: IntroduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceComponent", function() { return IntroduceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroduceComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroduceComponent.ɵfac = function IntroduceComponent_Factory(t) { return new (t || IntroduceComponent)(); };
IntroduceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroduceComponent, selectors: [["app-introduce"]], decls: 10, vars: 0, consts: [["id", "introduce"], ["id", "webIntroduce"]], template: function IntroduceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u525B\u9032\u5165\u8CC7\u8A0A\u696D\u624D\u4E00\u5E74");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u4E0D\u81EA\u91CF\u529B\u7684\u60F3\u5BEB\u500B\u5C0F\u90E8\u843D\u683C\u4F86\u8A18\u9304\u4E00\u8DEF\u8D70\u4F86\u7684\u9EDE\u9EDE\u6EF4\u6EF4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u6771\u897F\u90FD\u9084\u4E0D\u5B8C\u5168 \u6703\u6162\u6162\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u9084\u8ACB\u591A\u591A\u6307\u6559");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n#introduce[_ngcontent-%COMP%] {\r\n  margin-left: 400px;\r\n  margin-right: 300px;\r\n  min-width: 500px;\r\n  height: 100%;\r\n  padding-top: 200px;\r\n  margin-top: 100px;\r\n}\r\n\r\n#webIntroduce[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWNlL2ludHJvZHVjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaW50cm9kdWNlL2ludHJvZHVjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbiNpbnRyb2R1Y2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuI3dlYkludHJvZHVjZXtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroduceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduce',
                templateUrl: './introduce.component.html',
                styleUrls: ['./introduce.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/route/app-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/route/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../introduce/introduce.component */ "./src/app/introduce/introduce.component.ts");
/* harmony import */ var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article-page/article-page.component */ "./src/app/article-page/article-page.component.ts");







const routes = [
    { path: 'allArticle', component: _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"] },
    { path: 'introduce', component: _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_3__["IntroduceComponent"] },
    { path: 'articlePage/:id', component: _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__["ArticlePageComponent"] },
    { path: '', redirectTo: '/allArticle', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _string_sidebar_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/sidebar.string */ "./src/app/sidebar/string/sidebar.string.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SidebarComponent {
    constructor() {
        this.sidebarString = _string_sidebar_string__WEBPACK_IMPORTED_MODULE_1__["SidebarString"];
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 17, vars: 4, consts: [["id", "sidebar"], ["id", "sidebarbackground"], ["id", "sidebarTitle"], ["id", "colorboard"], ["id", "routeUrl"], ["routerLink", "/"], ["routerLink", "/introduce"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.sidebarTitleH1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.sidebarTitleH3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.allArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.introduce);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n    border:1px solid red;\r\n}\r\n\r\n#sidebar[_ngcontent-%COMP%]{\r\n    top:0px;\r\n    position: fixed;\r\n    width: 350px;\r\n    height: 100%;\r\n    min-width: 150px;\r\n}\r\n\r\n#sidebarbackground[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    z-index: 1;\r\n    width:0px;\r\n    height: 100%;\r\n    border-top: solid 850px gray;\r\n    border-right: solid 350px transparent;\r\n}\r\n\r\n#sidebarTitle[_ngcontent-%COMP%]{\r\n    z-index: 5;\r\n    position: relative;\r\n    top:200px;\r\n    height:300px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n   text-align: center;\r\n    color:rgb(209, 194, 164);\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    padding-left: 130px;\r\n    color:rgb(53, 47, 36);\r\n    z-index: 10;\r\n }\r\n\r\n#colorboard[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n    position: absolute;\r\n    top:120px;\r\n    \r\n    border-top: solid 110px rgba(30, 143, 30, 0.548);\r\n    border-left: solid 350px transparent;\r\n    \r\n}\r\n\r\n#routeUrl[_ngcontent-%COMP%]{\r\n    top:100px;\r\n    z-index: 10;\r\n    position: relative;    \r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: rgb(53, 47, 36);\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0dBQ0csa0JBQWtCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztDQUNkOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Q7bUJBQ2U7SUFDZixnREFBZ0Q7SUFDaEQsb0NBQW9DO0lBQ3BDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4jc2lkZWJhcntcclxuICAgIHRvcDowcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4jc2lkZWJhcmJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgODUwcHggZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMzUwcHggdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNzaWRlYmFyVGl0bGV7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYigyMDksIDE5NCwgMTY0KTtcclxufVxyXG5cclxuaDN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xyXG4gICAgY29sb3I6cmdiKDUzLCA0NywgMzYpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiB9XHJcblxyXG4jY29sb3Jib2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjEyMHB4O1xyXG4gICAgLyogd2lkdGg6MzUwcHg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7ICovXHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxMTBweCByZ2JhKDMwLCAxNDMsIDMwLCAwLjU0OCk7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMzUwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAxNDMsIDMwLCAwLjU0OCk7ICovXHJcbn1cclxuXHJcbiNyb3V0ZVVybHtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiByZ2IoNTMsIDQ3LCAzNik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/string/sidebar.string.ts":
/*!**************************************************!*\
  !*** ./src/app/sidebar/string/sidebar.string.ts ***!
  \**************************************************/
/*! exports provided: SidebarString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarString", function() { return SidebarString; });
const SidebarString = {
    sidebarTitleH1: 'Code浪人',
    sidebarTitleH3: '在code浪潮中摸黑前進',
    allArticle: '所有文章',
    introduce: '網站介紹'
};


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
const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\test\angular-practice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map