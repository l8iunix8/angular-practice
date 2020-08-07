function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'practice';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./route/app-routing.module */
    "./src/app/route/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");
    /* harmony import */


    var _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./article-tag/article-tag.component */
    "./src/app/article-tag/article-tag.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./introduce/introduce.component */
    "./src/app/introduce/introduce.component.ts");
    /* harmony import */


    var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./article-page/article-page.component */
    "./src/app/article-page/article-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./comment/comment.component */
    "./src/app/comment/comment.component.ts");
    /* harmony import */


    var _service_log_status_log_status_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/log-status/log-status.service */
    "./src/app/service/log-status/log-status.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _service_log_status_log_status_service__WEBPACK_IMPORTED_MODULE_16__["LogStatusService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"], _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_9__["ArticleTagComponent"], _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceComponent"], _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_13__["ArticlePageComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"], _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_9__["ArticleTagComponent"], _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceComponent"], _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_13__["ArticlePageComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _route_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _service_log_status_log_status_service__WEBPACK_IMPORTED_MODULE_16__["LogStatusService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/article-page/article-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/article-page/article-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ArticlePageComponent */

  /***/
  function srcAppArticlePageArticlePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageComponent", function () {
      return ArticlePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../comment/comment.component */
    "./src/app/comment/comment.component.ts");

    function ArticlePageComponent_div_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comment", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var commentData_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentData", commentData_r5);
      }
    }

    function ArticlePageComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8A55\u8AD6\u5340 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticlePageComponent_div_7_ng_container_2_Template, 2, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.commentArray);
      }
    }

    function ArticlePageComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage["nameError"]);
      }
    }

    function ArticlePageComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage["emailError"]);
      }
    }

    function ArticlePageComponent_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMessage["commentError"]);
      }
    }

    var ArticlePageComponent = /*#__PURE__*/function () {
      function ArticlePageComponent(route, service, fb) {
        _classCallCheck(this, ArticlePageComponent);

        this.route = route;
        this.service = service;
        this.fb = fb;
        this.errorMessage = {
          nameError: '',
          emailError: '',
          commentError: ''
        };
        this.commentArray = [];
        this.getArticleDataByIdSubscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.messageForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(ArticlePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.id = this.route.snapshot.paramMap.get('id');
          console.log(this.id);
          this.getArticleDataByIdSubscription$ = this.service.getArticleDataById(this.id - 1).subscribe(function (data) {
            _this.data = data;
          });
          this.service.getCommentByArticleId(this.id).subscribe(function (commentArray) {
            _this.commentArray = commentArray;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getArticleDataByIdSubscription$.unsubscribe();
        }
        /*
         * 送出表單
         */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          Object.keys(this.errorMessage).forEach(function (element) {
            _this2.errorMessage[element] = '';
          });

          if (this.messageForm.valid) {
            this.sendComment(this.messageForm.value).subscribe(function (result) {
              var data = JSON.parse(result);

              _this2.commentArray.push(data);

              _this2.messageForm.reset();

              window.scrollTo(0, 0);
            });
          } else {
            var obj = Object.keys(this.messageForm.controls);
            var array = [];
            obj.forEach(function (element) {
              if (_this2.messageForm.controls[element].value === '') {
                array.push(element);
              }
            });
            this.checkErrorMessage(array);
          }
        }
        /*
         * 送出留言訊息
         */

      }, {
        key: "sendComment",
        value: function sendComment(comment) {
          var sendComment = Object.assign({
            articleId: Number(this.id)
          }, comment);
          return this.service.postCommentByArticleId(sendComment);
        }
      }, {
        key: "checkErrorMessage",
        value: function checkErrorMessage(array) {
          var _this3 = this;

          if (array.length > 0) {
            array.forEach(function (element) {
              switch (element) {
                case 'name':
                  _this3.setErrorMessage('nameError', '每個欄位皆為必填');

                  break;

                case 'email':
                  _this3.setErrorMessage('emailError', '每個欄位皆為必填');

                  break;

                case 'comment':
                  _this3.setErrorMessage('commentError', '每個欄位皆為必填');

                  break;
              }
            });
          }

          if (!this.messageForm.controls.name.valid && !this.errorMessage.nameError) {
            this.setErrorMessage('nameError', '姓名格式錯誤');
          }

          if (!this.messageForm.controls.email.valid && !this.errorMessage.emailError) {
            this.setErrorMessage('emailError', 'MAIL格式錯誤');
          }

          if (!this.messageForm.controls.comment.valid && !this.errorMessage.commentError) {
            this.setErrorMessage('commentError', '留言格式錯誤');
          }
        }
      }, {
        key: "setErrorMessage",
        value: function setErrorMessage(id, msg) {
          this.errorMessage[id] = msg;
        }
      }]);

      return ArticlePageComponent;
    }();

    ArticlePageComponent.ɵfac = function ArticlePageComponent_Factory(t) {
      return new (t || ArticlePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ArticlePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticlePageComponent,
      selectors: [["app-article-page"]],
      decls: 29,
      vars: 7,
      consts: [[1, "articlePage"], [1, "border"], ["id", "articlePageTitle"], ["id", "articlePageContent"], ["id", "articlePageComment", 4, "ngIf"], ["id", "leavaMessage"], ["id", "messageForm", 3, "formGroup", "ngSubmit"], [1, "messageContent"], [1, "formTitle"], ["type", "text", "formControlName", "name", 1, "message", "messageName"], ["class", "errorMessage", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "message"], ["cols", "30", "rows", "10", "formControlName", "comment", 1, "message"], ["type", "submit"], ["id", "articlePageComment"], [4, "ngFor", "ngForOf"], [3, "commentData"], [1, "errorMessage"]],
      template: function ArticlePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArticlePageComponent_div_7_Template, 3, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u7559\u8A00\u5340 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticlePageComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u540D\u7A31 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ArticlePageComponent_span_16_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-mail :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ArticlePageComponent_span_21_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u5167\u5BB9 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ArticlePageComponent_span_26_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u9001\u51FA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["title"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data["content"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentArray.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageForm.get("name").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageForm.get("email").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageForm.get("comment").invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"]],
      styles: [".articlePage[_ngcontent-%COMP%] {\r\n  margin-left: 400px;\r\n  margin-right: 300px;\r\n  min-width: 500px;\r\n  padding-top: 150px;\r\n  background-color: rgba(173, 188, 202, 0.247);\r\n}\r\n\r\n.border[_ngcontent-%COMP%]{\r\n  width:90%;\r\n  margin: auto;\r\n  border-top: 1px dotted rgba(114, 12, 12, 0.582);\r\n}\r\n\r\n#articlePageTitle[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 26px;\r\n  font-weight: bold;\r\n  min-height: 1em;\r\n  padding: 20px 40px;\r\n}\r\n\r\n#articlePageContent[_ngcontent-%COMP%] {\r\n  border-bottom: gray 2px dashed;\r\n  min-height: 650px;\r\n  padding-left: 40px;\r\n  padding-top: 20px;\r\n}\r\n\r\n#articlePageComment[_ngcontent-%COMP%] {\r\n  min-height: 200px;\r\n  padding:0px  40px;\r\n  padding-top: 20px;\r\n}\r\n\r\n#commentArea[_ngcontent-%COMP%]{\r\n  border: 1px solid rgba(0, 0, 0, 0.863);\r\n}\r\n\r\n#leavaMessage[_ngcontent-%COMP%] {\r\n  min-height: 200px;\r\n  padding: 20px 40px 40px 40px;\r\n  font-size: 25px;\r\n  background-color: rgba(92, 31, 3, 0.479);\r\n  margin:5px 40px 0px 40px;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  font-size: 20px;\r\n  padding: 5px;\r\n  border: 1px solid #333;\r\n}\r\n\r\n#messageForm[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#messageForm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n#messageForm[_ngcontent-%COMP%]   .formTitle[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  margin-left: 10px;\r\n  color:#e33;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  font-size: 18px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.messageContent[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n.messageContent[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%]{\r\n  align-self: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osK0NBQStDO0FBQ2pEOztBQUVBOztFQUVFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtcGFnZS9hcnRpY2xlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufSAqL1xyXG5cclxuLmFydGljbGVQYWdlIHtcclxuICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcclxuICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTg4LCAyMDIsIDAuMjQ3KTtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICB3aWR0aDo5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgxMTQsIDEyLCAxMiwgMC41ODIpO1xyXG59XHJcblxyXG4jYXJ0aWNsZVBhZ2VUaXRsZSB7XHJcbiAgXHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1pbi1oZWlnaHQ6IDFlbTtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbn1cclxuXHJcbiNhcnRpY2xlUGFnZUNvbnRlbnQge1xyXG4gIGJvcmRlci1ib3R0b206IGdyYXkgMnB4IGRhc2hlZDtcclxuICBtaW4taGVpZ2h0OiA2NTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNhcnRpY2xlUGFnZUNvbW1lbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6MHB4ICA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbWVudEFyZWF7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg2Myk7XHJcbn1cclxuXHJcbiNsZWF2YU1lc3NhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDMxLCAzLCAwLjQ3OSk7XHJcbiAgbWFyZ2luOjVweCA0MHB4IDBweCA0MHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxufVxyXG5cclxuI21lc3NhZ2VGb3JtIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jbWVzc2FnZUZvcm0gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jbWVzc2FnZUZvcm0gLmZvcm1UaXRsZSB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjojZTMzO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZUNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubWVzc2FnZUNvbnRlbnQgLmVycm9yTWVzc2FnZXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article-page',
          templateUrl: './article-page.component.html',
          styleUrls: ['./article-page.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article-tag/article-tag.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/article-tag/article-tag.component.ts ***!
    \******************************************************/

  /*! exports provided: ArticleTagComponent */

  /***/
  function srcAppArticleTagArticleTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleTagComponent", function () {
      return ArticleTagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArticleTagComponent = /*#__PURE__*/function () {
      function ArticleTagComponent() {
        _classCallCheck(this, ArticleTagComponent);
      }

      _createClass(ArticleTagComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ArticleTagComponent;
    }();

    ArticleTagComponent.ɵfac = function ArticleTagComponent_Factory(t) {
      return new (t || ArticleTagComponent)();
    };

    ArticleTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleTagComponent,
      selectors: [["app-article-tag"]],
      decls: 2,
      vars: 0,
      consts: [[1, "Tag"]],
      template: function ArticleTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".Tag[_ngcontent-%COMP%]{\r\n  padding:3px;\r\n  margin:5px;\r\n  background-color: rgb(106, 112, 108);\r\n  color: rgb(192, 160, 207);\r\n  border-radius: 5px;\r\n  display: block;\r\n  float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS10YWcvYXJ0aWNsZS10YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtdGFnL2FydGljbGUtdGFnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGFne1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIG1hcmdpbjo1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgMTEyLCAxMDgpO1xyXG4gIGNvbG9yOiByZ2IoMTkyLCAxNjAsIDIwNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article-tag',
          templateUrl: './article-tag.component.html',
          styleUrls: ['./article-tag.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/article.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/article/article.component.ts ***!
    \**********************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../article-tag/article-tag.component */
    "./src/app/article-tag/article-tag.component.ts");

    var _c0 = function _c0(a1) {
      return ["/articlePage", a1];
    };

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(service) {
        _classCallCheck(this, ArticleComponent);

        this.service = service;
        this.getArticleDataByIdSubscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.data = {};
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.getArticleDataByIdSubscription$ = this.service.getArticleDataById(this.articleDataID).subscribe(function (data) {
            _this4.data = data;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getArticleDataByIdSubscription$.unsubscribe();
        }
      }, {
        key: "pageToTop",
        value: function pageToTop() {
          window.scrollTo(0, 0);
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["app-article"]],
      inputs: {
        articleDataID: "articleDataID"
      },
      decls: 30,
      vars: 12,
      consts: [[1, "article"], [1, "articleTitle"], [3, "routerLink", "click"], [1, "spaceLine"], [1, "articleContent"], [1, "articleDate"], [1, "articleText"], [1, "keepReading"], [1, "articleTag"]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_a_click_2_listener() {
            return ctx.pageToTop();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_a_click_9_listener() {
            return ctx.pageToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_a_click_12_listener() {
            return ctx.pageToTop();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _article_tag_article_tag_component__WEBPACK_IMPORTED_MODULE_4__["ArticleTagComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.article[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n}\r\n\r\n.articleTitle[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  margin: 5px 20px;\r\n  padding: 0px;\r\n  height: 5rem;\r\n  width:40rem;\r\n}\r\n\r\n.articleContent[_ngcontent-%COMP%] {\r\n  height:70%;\r\n\r\n}\r\n\r\n.articleText[_ngcontent-%COMP%] {\r\n  padding:30px 30px 0px 30px;\r\n  height: 3.5rem;\r\n  word-wrap:break-word;\r\n  overflow-y: hidden;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 3;\r\n}\r\n\r\n.keepReading[_ngcontent-%COMP%]{\r\n\r\n  width:5rem;\r\n  margin:10px 100px 10px 600px;\r\n\r\n}\r\n\r\n.articleDate[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem;\r\n  margin-left: 80%;\r\n  width:100px;\r\n  height:10%;\r\n  line-height: 28px;\r\n}\r\n\r\n.articleTag[_ngcontent-%COMP%]{\r\n  height: 25%;\r\n  margin: 10px 50px;\r\n  width: 90%;\r\n}\r\n\r\n.spaceLine[_ngcontent-%COMP%] {\r\n  width: 85%;\r\n  height: 2px;\r\n  margin: 0px auto;\r\n  background: -webkit-radial-gradient(\r\n    ellipse,\r\n    rgb(200, 196, 196),\r\n    rgba(65, 63, 63, 0.815),\r\n    rgba(255, 255, 255, 0.404)\r\n  );\r\n  border-radius: 2px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  color:black;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFVBQVU7RUFDViw0QkFBNEI7O0FBRTlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEI7Ozs7O0dBS0M7RUFDRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbi5hcnRpY2xlIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZVRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiA1cHggMjBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOjQwcmVtO1xyXG59XHJcblxyXG4uYXJ0aWNsZUNvbnRlbnQge1xyXG4gIGhlaWdodDo3MCU7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZVRleHQge1xyXG4gIHBhZGRpbmc6MzBweCAzMHB4IDBweCAzMHB4O1xyXG4gIGhlaWdodDogMy41cmVtO1xyXG4gIHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG59XHJcblxyXG4ua2VlcFJlYWRpbmd7XHJcblxyXG4gIHdpZHRoOjVyZW07XHJcbiAgbWFyZ2luOjEwcHggMTAwcHggMTBweCA2MDBweDtcclxuXHJcbn1cclxuXHJcbi5hcnRpY2xlRGF0ZXtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDoxMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlVGFne1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIG1hcmdpbjogMTBweCA1MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5zcGFjZUxpbmUge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChcclxuICAgIGVsbGlwc2UsXHJcbiAgICByZ2IoMjAwLCAxOTYsIDE5NiksXHJcbiAgICByZ2JhKDY1LCA2MywgNjMsIDAuODE1KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MDQpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.css']
        }]
      }], function () {
        return [{
          type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, {
        articleDataID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comment/comment.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/comment/comment.component.ts ***!
    \**********************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommentComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u56DE\u8986:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.commentResponse["response"]);
      }
    }

    var CommentComponent = /*#__PURE__*/function () {
      function CommentComponent(service) {
        _classCallCheck(this, CommentComponent);

        this.service = service;
        this.commentData = {};
        this.commentResponse = {};
        this.getCommentResponseByCommentIdSubscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.getCommentResponseByCommentIdSubscription$ = this.service.getCommentResponseByCommentId(this.commentData['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (commentResponse) {
            _this5.commentResponse = commentResponse;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getCommentResponseByCommentIdSubscription$.unsubscribe();
        }
      }]);

      return CommentComponent;
    }();

    CommentComponent.ɵfac = function CommentComponent_Factory(t) {
      return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentComponent,
      selectors: [["app-comment"]],
      inputs: {
        commentData: "commentData"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "comment"], [1, "commentContent"], [1, "name"], [1, "userComment"], ["class", "commentResponse", 4, "ngIf"], [1, "commentResponse"]],
      template: function CommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CommentComponent_div_6_Template, 5, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commentData["name"], ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.commentData["comment"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentResponse["response"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".comment[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-top: 10px;\r\n  border: 1px solid #888;\r\n  min-height: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  color: rgb(42, 42, 206);\r\n  font-size: 18px;\r\n  padding: 5px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .commentContent[_ngcontent-%COMP%] {\r\n  min-height: 50px;\r\n  width: 60%;\r\n  background-color: #ccc;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.commentResponse[_ngcontent-%COMP%] {\r\n  align-self:flex-end;\r\n  min-height: 50px;\r\n  width: 60%;\r\n  background-color: #888;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.userComment[_ngcontent-%COMP%]{\r\n  padding:5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29tbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29tbWVudCAubmFtZSB7XHJcbiAgY29sb3I6IHJnYig0MiwgNDIsIDIwNik7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbW1lbnQgLmNvbW1lbnRDb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudFJlc3BvbnNlIHtcclxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyQ29tbWVudHtcclxuICBwYWRkaW5nOjVweCAxMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment',
          templateUrl: './comment.component.html',
          styleUrls: ['./comment.component.css']
        }]
      }], function () {
        return [{
          type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, {
        commentData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../article/article.component */
    "./src/app/article/article.component.ts");

    function ContentComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-article", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var id_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articleDataID", id_r1);
      }
    }

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(service) {
        _classCallCheck(this, ContentComponent);

        this.service = service;
        this.getTotalDataCountSubscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"](); // 第幾頁

        this.page = 1; // 一頁幾筆資料

        this.articleCount = 4; // 存放要第幾筆到第幾筆

        this.articleArray = [];
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.getTotalDataCountSubscription$ = this.service.getTotalDataCount().subscribe(function (data) {
            _this6.totalDataCount = Number(data);
            _this6.totalPage = Math.ceil(data / _this6.articleCount);

            for (var i = 0; i < _this6.articleCount; i++) {
              _this6.articleArray.push(i);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getTotalDataCountSubscription$.unsubscribe();
        }
      }, {
        key: "changePage",
        value: function changePage(status) {
          // 換頁
          window.scrollTo(0, 0);
          this.articleArray = [];

          switch (status) {
            case '+':
              for (var i = 0; i < this.articleCount; i++) {
                if (this.page * this.articleCount + i < this.totalDataCount) {
                  this.articleArray.push(this.page * this.articleCount + i);
                }
              }

              this.page = this.page === this.totalPage ? this.page : this.page + 1;
              break;

            case '-':
              this.page = this.page === 1 ? this.page : this.page - 1;

              for (var _i = 0; _i < this.articleCount; _i++) {
                this.articleArray.push((this.page - 1) * this.articleCount + _i);
              }

              break;
          }
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 3,
      vars: 3,
      consts: [["id", "content"], [4, "ngFor", "ngForOf"], [3, "page", "totalPage", "changePage"], [3, "articleDataID"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function ContentComponent_Template_app_footer_changePage_2_listener($event) {
            return ctx.changePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articleArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("totalPage", ctx.totalPage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n  border:solid 1px red;\r\n}\r\n\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  margin-left:400px;\r\n  margin-right: 300px;\r\n  min-width: 500px;\r\n  height: 100%;\r\n  padding-top: 50px;\r\n  margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgYm9yZGVyOnNvbGlkIDFweCByZWQ7XHJcbn1cclxuXHJcblxyXG4jY29udGVudHtcclxuICBtYXJnaW4tbGVmdDo0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [{
          type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.switchPage("-");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.switchPage("+");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ">>");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "<<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(service) {
        _classCallCheck(this, FooterComponent);

        this.service = service; // 第幾頁

        this.page = 1;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchPage",
        value: function switchPage(status) {
          this.changePage.emit(status);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      inputs: {
        page: "page",
        totalPage: "totalPage"
      },
      outputs: {
        changePage: "changePage"
      },
      decls: 8,
      vars: 5,
      consts: [["id", "footer"], ["id", "square"], ["class", "changePage", 3, "click", 4, "ngIf"], ["class", "block", 4, "ngIf"], ["id", "page"], [1, "changePage", 3, "click"], [1, "block"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n  border:1px solid red;\r\n}\r\n#footer[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  margin-left:400px;\r\n  margin-right: 300px;\r\n}\r\n#page[_ngcontent-%COMP%]{\r\n  margin:10px auto;\r\n  width:20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.changePage[_ngcontent-%COMP%]{\r\n  width:20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n.block[_ngcontent-%COMP%]{\r\n  width:20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  visibility: hidden;\r\n}\r\n#square[_ngcontent-%COMP%]{\r\n  margin:1px auto;\r\n  width:70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxufVxyXG4jZm9vdGVye1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDo0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4jcGFnZXtcclxuICBtYXJnaW46MTBweCBhdXRvO1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNoYW5nZVBhZ2V7XHJcbiAgd2lkdGg6MjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvY2t7XHJcbiAgd2lkdGg6MjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI3NxdWFyZXtcclxuICBtYXJnaW46MXB4IGF1dG87XHJcbiAgd2lkdGg6NzBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, {
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _string_header_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./string/header_string */
    "./src/app/header/string/header_string.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.headerString = _string_header_string__WEBPACK_IMPORTED_MODULE_1__["HeaderString"];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 7,
      vars: 1,
      consts: [["id", "header"], ["id", "title"], ["id", "aboutMe"], ["id", "allArticle"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerString.title);
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n  border:solid 1px red;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  padding: 5px;\r\n}\r\n\r\n#head-shot[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBib3JkZXI6c29saWQgMXB4IHJlZDtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuI2hlYWQtc2hvdHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/string/header_string.ts":
  /*!************************************************!*\
    !*** ./src/app/header/string/header_string.ts ***!
    \************************************************/

  /*! exports provided: HeaderString */

  /***/
  function srcAppHeaderStringHeader_stringTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderString", function () {
      return HeaderString;
    });

    var HeaderString = {
      title: 'Code浪人',
      aboutMe: '關於我',
      allArticle: '所有文章'
    };
    /***/
  },

  /***/
  "./src/app/introduce/introduce.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/introduce/introduce.component.ts ***!
    \**************************************************/

  /*! exports provided: IntroduceComponent */

  /***/
  function srcAppIntroduceIntroduceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroduceComponent", function () {
      return IntroduceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IntroduceComponent = /*#__PURE__*/function () {
      function IntroduceComponent() {
        _classCallCheck(this, IntroduceComponent);
      }

      _createClass(IntroduceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroduceComponent;
    }();

    IntroduceComponent.ɵfac = function IntroduceComponent_Factory(t) {
      return new (t || IntroduceComponent)();
    };

    IntroduceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroduceComponent,
      selectors: [["app-introduce"]],
      decls: 10,
      vars: 0,
      consts: [["id", "introduce"], ["id", "webIntroduce"]],
      template: function IntroduceComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n#introduce[_ngcontent-%COMP%] {\r\n  margin-left: 400px;\r\n  margin-right: 300px;\r\n  min-width: 500px;\r\n  height: 100%;\r\n  padding-top: 200px;\r\n  margin-top: 100px;\r\n}\r\n\r\n#webIntroduce[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWNlL2ludHJvZHVjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaW50cm9kdWNlL2ludHJvZHVjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbiNpbnRyb2R1Y2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuI3dlYkludHJvZHVjZXtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroduceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-introduce',
          templateUrl: './introduce.component.html',
          styleUrls: ['./introduce.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/route/app-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/route/app-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppRouteAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../introduce/introduce.component */
    "./src/app/introduce/introduce.component.ts");
    /* harmony import */


    var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../article-page/article-page.component */
    "./src/app/article-page/article-page.component.ts");

    var routes = [{
      path: 'allArticle',
      component: _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]
    }, {
      path: 'introduce',
      component: _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_3__["IntroduceComponent"]
    }, {
      path: 'articlePage/:id',
      component: _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__["ArticlePageComponent"]
    }, {
      path: '',
      redirectTo: '/allArticle',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/api/api.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/api/api.service.ts ***!
    \********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServiceApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.url = 'http://127.0.0.1:4999/';
      }

      _createClass(ApiService, [{
        key: "getArticleDataById",
        value: function getArticleDataById(articleId) {
          return this.http.get(this.url + 'api/' + articleId, {
            responseType: 'json'
          });
        }
      }, {
        key: "getTotalDataCount",
        value: function getTotalDataCount() {
          return this.http.get(this.url + 'api/totalDataCount', {
            responseType: 'text'
          });
        }
      }, {
        key: "getCommentByArticleId",
        value: function getCommentByArticleId(articleId) {
          return this.http.get(this.url + 'api/comment/' + articleId, {
            responseType: 'json'
          });
        }
      }, {
        key: "postCommentByArticleId",
        value: function postCommentByArticleId(comment) {
          console.log('postCommentByArticleId', comment);
          return this.http.post(this.url + 'api/comment', comment, {
            headers: {
              'Content-Type': 'application/json'
            },
            responseType: 'text'
          });
        }
      }, {
        key: "getCommentResponseByCommentId",
        value: function getCommentResponseByCommentId(commentId) {
          return this.http.get(this.url + 'api/commentResponse/' + commentId, {
            responseType: 'json'
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile(token) {
          return this.http.post(this.url + 'api/getProfile/', token, {
            responseType: 'json'
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/log-status/log-status.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service/log-status/log-status.service.ts ***!
    \**********************************************************/

  /*! exports provided: LogStatusService */

  /***/
  function srcAppServiceLogStatusLogStatusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogStatusService", function () {
      return LogStatusService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LogStatusService = /*#__PURE__*/function () {
      function LogStatusService() {
        _classCallCheck(this, LogStatusService);

        this._LOGINSTATUS = '';
        this.TOKEN = 'accessToken';
        var token = localStorage.getItem(this.TOKEN);
      }

      _createClass(LogStatusService, [{
        key: "loadLocalStorage",
        // 判斷localStorage裡面是否存在token
        value: function loadLocalStorage() {
          var token = localStorage.getItem(this.TOKEN);

          if (token) {
            return false;
          }

          return true;
        }
      }, {
        key: "googleInit",
        value: function googleInit() {
          var _this7 = this;

          gapi.load('auth2', function () {
            _this7.auth2 = gapi.auth2.init({
              client_id: '548588976225-9vn6rb0sv6u2p1d7fk19rr57r9mh4lmu.apps.googleusercontent.com',
              cookie_policy: 'single_host_origin',
              scope: 'profile email'
            });
          });
        }
      }, {
        key: "onSignIn",
        value: function onSignIn(element) {
          var _this8 = this;

          var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth2.signIn());
          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            obs.subscribe(function (googleUser) {
              var token = googleUser.getAuthResponse().id_token;
              localStorage.setItem(_this8.TOKEN, token);
              console.log('Token || ' + googleUser.getAuthResponse().id_token);
              var profile = googleUser.getBasicProfile();
              console.log('ID: ' + profile.getId());
              console.log('Name: ' + profile.getName());
              console.log('Image URL: ' + profile.getImageUrl());
              console.log('Email: ' + profile.getEmail());
              subscriber.next();
              subscriber.complete();
            });
          }); //另一種寫法
          // this.auth2.attachClickHandler(element /*傳進來的HTML元素*/ */, {},
          //   (googleUser) => {
          //     const profile = googleUser.getBasicProfile();
          //     console.log('Token || ' + googleUser.getAuthResponse().id_token);
          //     console.log('ID: ' + profile.getId());
          //     console.log('Name: ' + profile.getName());
          //     console.log('Image URL: ' + profile.getImageUrl());
          //     console.log('Email: ' + profile.getEmail());
          //     // YOUR CODE HERE
          //     this.logStatus = this.login;
          //     console.log('this.logStatus',this.logStatus)
          //     console.log('this.LOGIN',this._LOGINSTATUS)
          //   }, (error) => {
          //     alert(JSON.stringify(error, undefined, 2));
          //   });
          // });
        }
      }, {
        key: "logStatus",
        get: function get() {
          return this._LOGINSTATUS;
        },
        set: function set(status) {
          this._LOGINSTATUS = status;
        }
      }]);

      return LogStatusService;
    }();

    LogStatusService.ɵfac = function LogStatusService_Factory(t) {
      return new (t || LogStatusService)();
    };

    LogStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogStatusService,
      factory: LogStatusService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _string_sidebar_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./string/sidebar.string */
    "./src/app/sidebar/string/sidebar.string.ts");
    /* harmony import */


    var _service_log_status_log_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/log-status/log-status.service */
    "./src/app/service/log-status/log-status.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["login"];

    function SidebarComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_a_20_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.openMask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sidebarString.login);
      }
    }

    function SidebarComponent_a_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_a_22_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.clickLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.sidebarString.logout);
      }
    }

    function SidebarComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_23_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.closeMask();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_23_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.googleLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sign Up with Google ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(logStatus) {
        _classCallCheck(this, SidebarComponent);

        this.logStatus = logStatus;
        this.sidebarString = _string_sidebar_string__WEBPACK_IMPORTED_MODULE_1__["SidebarString"];
        this.showMask = false;
        this.showLoginButton = true;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logStatus.googleInit();
          this.showLoginButton = this.logStatus.loadLocalStorage();
        } // 遮罩顯示

      }, {
        key: "openMask",
        value: function openMask() {
          this.showMask = true;
          this.showMask = this.logStatus.loadLocalStorage();
        } // 遮罩關閉

      }, {
        key: "closeMask",
        value: function closeMask() {
          this.showMask = false;
        } // 按下GOOGLE登入鈕

      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this9 = this;

          this.logStatus.onSignIn(this.login.nativeElement).subscribe(function () {
            _this9.showMask = false;
            _this9.showLoginButton = false;
            console.log('SUBSCRIBE');
          });
        } // 登出

      }, {
        key: "clickLogout",
        value: function clickLogout() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_log_status_log_status_service__WEBPACK_IMPORTED_MODULE_2__["LogStatusService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      viewQuery: function SidebarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
        }
      },
      decls: 24,
      vars: 7,
      consts: [["id", "sidebar"], ["id", "sidebarbackground"], ["id", "sidebarContent"], ["id", "sidebarTitle"], ["id", "colorboard"], ["id", "routeUrl"], ["routerLink", "/"], ["routerLink", "/introduce"], [3, "click", 4, "ngIf"], ["id", "mask", 4, "ngIf"], [3, "click"], ["id", "mask"], ["id", "loginBlock"], [1, "closeIcon", 3, "click"], ["src", "../assets/close.png"], [1, "btn", "btn-google", "btn-block", 3, "click"], ["login", ""], ["data-icon", "zmdi-google-plus", "data-inline", "false", 1, "iconify"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_a_20_Template, 2, 1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SidebarComponent_a_22_Template, 2, 1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidebarComponent_div_23_Template, 8, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.sidebarTitleH1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.sidebarTitleH3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.allArticle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarString.introduce);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoginButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showLoginButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMask);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n}\r\n\r\n#sidebar[_ngcontent-%COMP%] {\r\n  top: 0px;\r\n  position: fixed;\r\n  width: 350px;\r\n  height: 100%;\r\n  min-width: 150px;\r\n}\r\n\r\n#sidebarbackground[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 1;\r\n  width: 0px;\r\n  height: 100%;\r\n  border-top: solid 850px gray;\r\n  border-right: solid 350px transparent;\r\n}\r\n\r\n#sidebarTitle[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 200px;\r\n}\r\n\r\n#sidebarTitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-left: 100px;\r\n}\r\n\r\n#colorboard[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n  border-top: solid 110px rgba(30, 143, 30, 0.548);\r\n  border-left: solid 350px transparent;\r\n}\r\n\r\n#sidebarContent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 160px;\r\n  z-index: 5;\r\n}\r\n\r\n#routeUrl[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#routeUrl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n\r\n#routeUrl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: rgb(53, 47, 36);\r\n  text-decoration: none;\r\n}\r\n\r\n#mask[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0px;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.664);\r\n}\r\n\r\n#loginBlock[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 400px;\r\n  height: 300px;\r\n  background-color: blanchedalmond;\r\n  border-radius: 8px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.closeIcon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -10px;\r\n  top: -10px;\r\n}\r\n\r\n.closeIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  line-height: 1.42857143;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background-image: none;\r\n  border: none;\r\n  border-radius: 3px;\r\n  position: relative;\r\n  padding: 12px 30px;\r\n  margin: 10px 1px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0;\r\n  outline: 0;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  will-change: box-shadow, transform;\r\n}\r\n\r\n.btn.btn-google[_ngcontent-%COMP%]:active, .btn.btn-google[_ngcontent-%COMP%]:focus, .btn.btn-google[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42),\r\n    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2);\r\n}\r\n\r\n.btn.btn-google[_ngcontent-%COMP%] {\r\n  background-color: #dd4b39;\r\n  color: #fff;\r\n}\r\n\r\n.zmdi-google-plus[_ngcontent-%COMP%] {\r\n  content: url(\"https://api.iconify.design/zmdi-google-plus.svg?height=16&inline=true\");\r\n  background: url(\"https://api.iconify.design/zmdi-google-plus.svg\") no-repeat\r\n    center center / contain;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0RBQWdEO0VBQ2hELG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBOzs7RUFHRTs0RUFDMEU7QUFDNUU7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUZBQXFGO0VBQ3JGOzJCQUN5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuI3NpZGViYXJiYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItdG9wOiBzb2xpZCA4NTBweCBncmF5O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMzUwcHggdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNzaWRlYmFyVGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyVGl0bGUgaDMge1xyXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbiNjb2xvcmJvYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxMTBweCByZ2JhKDMwLCAxNDMsIDMwLCAwLjU0OCk7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDM1MHB4IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc2lkZWJhckNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE2MHB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbiNyb3V0ZVVybCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3JvdXRlVXJsIGgzIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbiNyb3V0ZVVybCBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiByZ2IoNTMsIDQ3LCAzNik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiNtYXNrIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2NCk7XHJcbn1cclxuXHJcbiNsb2dpbkJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNsb3NlSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcbi5jbG9zZUljb24gaW1nIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICBtYXJnaW46IDEwcHggMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1nb29nbGU6YWN0aXZlLFxyXG4uYnRuLmJ0bi1nb29nbGU6Zm9jdXMsXHJcbi5idG4uYnRuLWdvb2dsZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI2cHggLTEycHggcmdiYSgyMjEsIDc1LCA1NywgMC40MiksXHJcbiAgICAwIDRweCAyM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjIxLCA3NSwgNTcsIDAuMik7XHJcbn1cclxuLmJ0bi5idG4tZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uem1kaS1nb29nbGUtcGx1cyB7XHJcbiAgY29udGVudDogdXJsKFwiaHR0cHM6Ly9hcGkuaWNvbmlmeS5kZXNpZ24vem1kaS1nb29nbGUtcGx1cy5zdmc/aGVpZ2h0PTE2JmlubGluZT10cnVlXCIpO1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vYXBpLmljb25pZnkuZGVzaWduL3ptZGktZ29vZ2xlLXBsdXMuc3ZnXCIpIG5vLXJlcGVhdFxyXG4gICAgY2VudGVyIGNlbnRlciAvIGNvbnRhaW47XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _service_log_status_log_status_service__WEBPACK_IMPORTED_MODULE_2__["LogStatusService"]
        }];
      }, {
        login: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['login']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/string/sidebar.string.ts":
  /*!**************************************************!*\
    !*** ./src/app/sidebar/string/sidebar.string.ts ***!
    \**************************************************/

  /*! exports provided: SidebarString */

  /***/
  function srcAppSidebarStringSidebarStringTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarString", function () {
      return SidebarString;
    });

    var SidebarString = {
      sidebarTitleH1: 'Code浪人',
      sidebarTitleH3: '在code浪潮中摸黑前進',
      allArticle: '所有文章',
      introduce: '網站介紹',
      login: '登入',
      logout: '登出'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\user\Desktop\test\angular-practice\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map