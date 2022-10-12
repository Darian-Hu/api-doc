(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: apis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apis", function() { return apis; });
// 本地访问路径
var localPath = "/gsn-interface";
if (window.document.location.href.indexOf("locallhost") != -1) {
    localPath = "";
}
// api接口
var apis = {
    isOpenApiDoc: "/apidoc/isOpenApiDoc",
    info: "/apidoc/info",
    modules: "/apidoc/modules",
    actions: "/apidoc/actions",
    detail: "/apidoc/detail",
    updateInfo: "/apidoc/updateInfo",
    updateAction: "/apidoc/updateAction",
    updateActionDescription: "/apidoc/updateActionDescription",
    updateDetail: "/apidoc/updateDetail",
    updateModulesSort: "/apidoc/updateModulesSort",
    updateActionsSort: "/apidoc/updateActionsSort",
    addParam: "/apidoc/addParam",
    updateParam: "/apidoc/updateParam",
    deleteParam: "/apidoc/deleteParam",
};


/***/ }),

/***/ "./src/app/apidoc/api-param/api-param.component.html":
/*!***********************************************************!*\
  !*** ./src/app/apidoc/api-param/api-param.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-table\">\n  <!--递归-->\n  <div *ngFor=\"let requestParam of params\">\n    <!--第1层-->\n    <table>\n      <tr *ngIf=\"!requestParam.edit\">\n        <td [ngStyle]=\"{'padding-left':(10+20*index)+'px','color':'red'}\"><b>{{requestParam.name}}</b></td>\n        <td>{{requestParam.dataType}}</td>\n        <td>{{requestParam.defaultValue}}</td>\n        <td>{{requestParam.required ? '是' : '否'}}</td>\n        <td>{{requestParam.description}}</td>\n        <td class=\"opr\">\n          <i class=\"anticon anticon-plus\" nz-tooltip nzTitle=\"添加子参数\" (click)=\"addSubRequestParam(requestParam.id)\"></i>\n          <i class=\"anticon anticon-minus\" nz-tooltip nzTitle=\"删除\" (click)=\"deleteParam(requestParam.id)\"></i>\n          <i class=\"anticon anticon-edit\" nz-tooltip nzTitle=\"编辑\" (click)=\"requestParam.edit=!requestParam.edit\"></i>\n        </td>\n      </tr>\n      <tr *ngIf=\"requestParam.edit\">\n        <td [ngStyle]=\"{'padding-left':(10+20*index)+'px','color':'red'}\">\n          <input nz-input placeholder=\"填写参数名称\" [(ngModel)]=\"requestParam.name\" required>\n        </td>\n        <td>\n          <input nz-input placeholder=\"填写参数类型\" [(ngModel)]=\"requestParam.dataType\" required>\n        </td>\n        <td>\n          <input nz-input placeholder=\"填写默认值\" [(ngModel)]=\"requestParam.defaultValue\">\n        </td>\n        <td>\n          <nz-radio-group [(ngModel)]=\"requestParam.required\">\n            <label nz-radio nzValue=\"true\">是</label>\n            <label nz-radio nzValue=\"false\">否</label>\n          </nz-radio-group>\n        </td>\n        <td>\n          <textarea placeholder=\"填写描述\" nz-input [(ngModel)]=\"requestParam.description\" required></textarea>\n        </td>\n        <td class=\"opr\">\n          <i class=\"anticon anticon-minus\" nz-tooltip nzTitle=\"删除\" (click)=\"deleteParam(requestParam.id)\"></i>\n          <i class=\"anticon anticon-file\" nz-tooltip nzTitle=\"保存\" (click)=\"saveParam(requestParam)\"></i>\n        </td>\n      </tr>\n    </table>\n    <!--第n层-->\n    <div *ngIf=\"requestParam.list\">\n      <app-api-param [params]=\"requestParam.list\" [index]=\"index+1\"></app-api-param>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/apidoc/api-param/api-param.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/apidoc/api-param/api-param.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-table table {\n  width: 100%; }\n  .div-table table th {\n    text-align: left;\n    padding: 6px;\n    border: 1px solid rgba(92, 102, 94, 0.06);\n    width: 10%; }\n  .div-table table th:first-child {\n      width: 20%; }\n  .div-table table th:nth-child(5) {\n      width: 30%; }\n  .div-table table td {\n    text-align: left;\n    padding: 6px;\n    border: 1px solid rgba(92, 102, 94, 0.06);\n    width: 10%; }\n  .div-table table td:first-child {\n      width: 20%; }\n  .div-table table td:nth-child(5) {\n      width: 30%; }\n  .opr i {\n  color: #1aa9ff;\n  margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpZG9jL2FwaS1wYXJhbS9FOlxcV29ya3NwYWNlc1xcSW50ZWxsaWpJREVBXFxqYXZhLWFwaS1kb2MtbWFzdGVyXFxhcGlkb2NcXGZyb250L3NyY1xcYXBwXFxhcGlkb2NcXGFwaS1wYXJhbVxcYXBpLXBhcmFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVyxFQUFBO0VBRmY7SUFJTSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxVQUFVLEVBQUE7RUFQaEI7TUFTUSxVQUFVLEVBQUE7RUFUbEI7TUFZUSxVQUFVLEVBQUE7RUFabEI7SUFnQk0sZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsVUFBVSxFQUFBO0VBbkJoQjtNQXFCUSxVQUFVLEVBQUE7RUFyQmxCO01Bd0JRLFVBQVUsRUFBQTtFQUtsQjtFQUVJLGNBQWM7RUFDZCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcGlkb2MvYXBpLXBhcmFtL2FwaS1wYXJhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtdGFibGUge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGgge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTIsIDEwMiwgOTQsIDAuMDYpO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgIH1cbiAgICB0ZCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5MiwgMTAyLCA5NCwgMC4wNik7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ub3Bye1xuICBpe1xuICAgIGNvbG9yOiAjMWFhOWZmO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/apidoc/api-param/api-param.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/apidoc/api-param/api-param.component.ts ***!
  \*********************************************************/
/*! exports provided: ApiParamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiParamComponent", function() { return ApiParamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/app/api.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index/index.component */ "./src/app/apidoc/index/index.component.ts");





var ApiParamComponent = /** @class */ (function () {
    function ApiParamComponent(http, indexComponent) {
        this.http = http;
        this.indexComponent = indexComponent;
        this.index = 0;
    }
    /** 保存参数 */
    ApiParamComponent.prototype.saveParam = function (param) {
        if (!param.id) { // 添加
            delete param.edit;
            this.http.post(_api__WEBPACK_IMPORTED_MODULE_3__["apis"].addParam, param).subscribe(function (data) {
                if (data) {
                    param.id = data;
                    console.log(data);
                }
            }, function (error) {
                param.edit = true;
                console.error(error);
            });
        }
        else {
            delete param.edit;
            this.http.post(_api__WEBPACK_IMPORTED_MODULE_3__["apis"].updateParam, param).subscribe(function (data) {
                if (data) {
                    console.log(data);
                }
            }, function (error) {
                param.edit = true;
                console.error(error);
            });
        }
    };
    /** 删除参数 */
    ApiParamComponent.prototype.deleteParam = function (id) {
        var _this = this;
        if (id) {
            this.http.delete(_api__WEBPACK_IMPORTED_MODULE_3__["apis"].deleteParam + "/" + id).subscribe(function (data) {
                console.log(data);
                // 删除成功后删除页面元素
                if (data) {
                    for (var i = 0; i < _this.params.length; i++) {
                        if (_this.params[i].id == id) {
                            _this.params.splice(i, 1);
                        }
                    }
                }
            }, function (error) {
                console.error(error);
            });
        }
        else {
            for (var i = 0; i < this.params.length; i++) {
                if (!this.params[i].id) {
                    this.params.splice(i, 1);
                }
            }
        }
    };
    /** 添加请求参数中的子级参数 */
    ApiParamComponent.prototype.addSubRequestParam = function (id) {
        this.addParam(false, id);
    };
    /** 添加参数 */
    ApiParamComponent.prototype.addParam = function (isReturn, pid) {
        var param = {
            returnd: isReturn,
            actionId: this.indexComponent.action.id,
            pid: pid,
            edit: true
        };
        for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == pid) {
                p.list ? true : p.list = [];
                p.list.push(param);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApiParamComponent.prototype, "params", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApiParamComponent.prototype, "index", void 0);
    ApiParamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-param',
            template: __webpack_require__(/*! ./api-param.component.html */ "./src/app/apidoc/api-param/api-param.component.html"),
            styles: [__webpack_require__(/*! ./api-param.component.scss */ "./src/app/apidoc/api-param/api-param.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]])
    ], ApiParamComponent);
    return ApiParamComponent;
}());



/***/ }),

/***/ "./src/app/apidoc/apidoc.module.ts":
/*!*****************************************!*\
  !*** ./src/app/apidoc/apidoc.module.ts ***!
  \*****************************************/
/*! exports provided: InterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceModule", function() { return InterfaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/apidoc/index/index.component.ts");
/* harmony import */ var _api_param_api_param_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-param/api-param.component */ "./src/app/apidoc/api-param/api-param.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");










var InterfaceModule = /** @class */ (function () {
    function InterfaceModule() {
    }
    InterfaceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"].forRoot(),
                ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaModule"].forRoot()
            ],
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"], _api_param_api_param_component__WEBPACK_IMPORTED_MODULE_8__["ApiParamComponent"]],
            exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"]]
        })
    ], InterfaceModule);
    return InterfaceModule;
}());



/***/ }),

/***/ "./src/app/apidoc/index/index.component.html":
/*!***************************************************!*\
  !*** ./src/app/apidoc/index/index.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout *ngIf=\"isopenapidoc\">\n  <!--左侧导航-->\n  <nz-sider [nzWidth]=\"300\" *ngIf=\"info\">\n    <!--版本信息-->\n    <div class=\"logo\" (click)=\"showInfo()\">\n      {{info.title}}<span> ({{info.version}})</span>\n    </div>\n    <!--菜单列表-->\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'inline'\" dragula=\"MODULES\" [(dragulaModel)]=\"modules\">\n      <li nz-submenu *ngFor=\"let module of modules; let i = index;\">\n        <div class=\"modules-handel\" title (click)=\"getActions(module)\" nz-tooltip nzTitle=\"{{module.name}}\"\n             nzPlacement=\"topLeft\">\n          <i class=\"anticon anticon-right-circle-o\"></i>\n          <i class=\"anticon anticon-spin anticon-loading\" *ngIf=\"module.isLoadingActions\"></i>\n          {{i + 1}}. {{module.name}}\n        </div>\n        <ul *ngIf=\"module.list\" dragula=\"ACTIONS\" [(dragulaModel)]=\"module.list\">\n          <li nz-menu-item *ngFor=\"let action of module.list;let j = index\" (click)=\"getDetail(action)\"\n              (dblclick)=\"actionEdit(action)\">\n            <span nz-tooltip nzTitle=\" {{action.name}} \" nzPlacement=\"topRight\" *ngIf=\"!action.edit\">\n              <i class=\"anticon anticon-minus-circle-o\"></i>\n              <i class=\"anticon anticon-spin anticon-loading\" *ngIf=\"action.isLoadingDetail\"></i>\n              {{i + 1}}.{{j + 1}}.{{action.name}}\n            </span>\n            <input id=\"actionInput\" [autofocus]=\"true\" nz-input *ngIf=\"action.edit\" [(ngModel)]=\"action.name\"\n                   (blur)=\"saveAction(action)\"/>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nz-sider>\n\n  <!--右侧文档详情布局-->\n  <!--文档信息-->\n  <nz-content *ngIf=\"info&&!detail\" style=\"background-color: #ffffff;width: 100%;height: 100%;\">\n    <!--查看-->\n    <div *ngIf=\"!edit.info\">\n      <div class=\"centerLogo\">\n        {{info.title}}<span>（文档版本：{{info.version}}）</span>\n        <i class=\"anticon anticon-edit\" (click)=\"edit.info=!edit.info\" nz-tooltip nzTitle=\"编辑\"></i>\n      </div>\n      <div class=\"description\">\n        <pre>{{info.description}}</pre>\n      </div>\n    </div>\n    <!--编辑-->\n    <div *ngIf=\"edit.info\">\n      <div class=\"centerLogo\">\n        <input style=\"width: 220px\" nz-input [(ngModel)]=\"info.title\"/>\n        <span>（文档版本： <input style=\"width: 60px;\" nz-input [(ngModel)]=\"info.version\"/>）</span>\n        <i class=\"anticon anticon-save\" (click)=\"edit.info=!edit.info;saveInfo(info)\" nz-tooltip nzTitle=\"保存\"></i>\n      </div>\n      <div class=\"description\">\n        <textarea nz-input [nzAutosize]=\"{minRows: 3, minRows: 6 }\" [(ngModel)]=\"info.description\"></textarea>\n      </div>\n    </div>\n  </nz-content>\n  <!--content 详细内容-->\n  <nz-content *ngIf=\"detail\" style=\"background-color: #ffffff;\">\n    <div class=\"api-details\">\n\n      <!--演示-->\n      <div class=\"panel\">\n        <div class=\"api-panel-title\">\n          <p class=\"api-details-title\">演示</p>\n        </div>\n        <div class=\"panel-footer\">\n          <h5 style=\"margin: 10px\">请求地址：</h5>\n          <input nz-input [(ngModel)]=\"mockUrl\" (keyup.enter)=\"sendTest()\"/>\n\n          <!--请求参数为json-->\n          <div *ngIf=\"!mockShowFrom\">\n            <div *ngIf=\"mockReqParamsStr\">\n              <h5 style=\"margin: 10px\">请求参数：</h5>\n              <textarea nz-input [(ngModel)]=\"mockReqParamsStr\" [nzAutosize]=\"true\"></textarea>\n            </div>\n            <!--发送或退出按钮-->\n            <button *ngIf=\"!isLogout()\" nz-button nzType=\"primary\" style=\"margin-top:10px \" (click)=\"sendTest()\">发送\n            </button>\n            <button *ngIf=\"isLogout()\" nz-button nzType=\"danger\"\n                    style=\"margin-top:10px;background: red;color: #ffffff; \" (click)=\"logout()\">退出登陆\n            </button>\n          </div>\n          <!--请求参数为from 且为上传文件-->\n          <div *ngIf=\"mockShowFrom\">\n            <h5 style=\"margin: 10px\">请求参数：</h5>\n            <table>\n              <tr *ngFor=\"let from of mockReqParamsFrom\">\n                <td>{{from.name}}</td>\n                <td>\n                  <input nz-input style=\"font-size: 0.8em; display: inline;\" multiple\n                         (change)=\"sendFile($event,from.name)\"\n                         type=\"file\"/>\n                </td>\n              </tr>\n            </table>\n          </div>\n\n          <!--响应数据-->\n          <div *ngIf=\"mockShowResponse\">\n            <h5 style=\"margin: 10px\">响应数据：</h5>\n            <textarea *ngIf=\"!mockShowBlob\" style=\"height: 600px;background-color: #ffedf4; \" nz-input\n                      [(ngModel)]=\"mockResponse\"\n                      [nzAutosize]=\"true\"></textarea>\n            <img style=\"width: 180px;height: 30px;\" *ngIf=\"mockShowBlob\" src=\"{{mockBlobUrl}}\">\n          </div>\n        </div>\n      </div>\n\n      <!--基本信息-->\n      <div class=\"panel\">\n        <div class=\"api-panel-title\">\n          <p class=\"api-details-title\">基本信息</p>\n        </div>\n        <div class=\"panel-footer\">\n          <p>请求类型:<span class=\"jg\"></span>WSDL</p>\n          <p>接口地址: <span class=\"jg\"></span>{{detail.mapping}}</p>\n          <p>请求方式: <span class=\"jg\"></span>{{detail.requestMethod}}</p>\n          <div>: <span class=\"jg\"></span>\n            <i style=\"color: #1aa9ff;margin-right: 10px\" class=\"anticon anticon-edit\" *ngIf=\"!edit.actionDescription\"\n               (click)=\"edit.actionDescription=!edit.actionDescription\" nz-tooltip nzTitle=\"编辑\"></i>\n            <i style=\"color: #1aa9ff;margin-right: 10px\" class=\"anticon anticon-save\" *ngIf=\"edit.actionDescription\"\n               (click)=\"edit.actionDescription=!edit.actionDescription;saveDescription(detail.description)\" nz-tooltip\n               nzTitle=\"保存\"></i>\n            <pre *ngIf=\"!edit.actionDescription\">{{detail.description ? detail.description : '无'}}</pre>\n            <textarea *ngIf=\"edit.actionDescription\" nz-input [nzAutosize]=\"{minRows: 3, minRows: 4 }\"\n                      [(ngModel)]=\"detail.description\"></textarea>\n          </div>\n        </div>\n      </div>\n\n      <!--请求参数-->\n      <div class=\"panel\">\n        <div class=\"api-panel-title\">\n          <p class=\"api-details-title\">请求参数\n            <span class=\"type\">(类型：{{detail.requestParam.type}})</span>\n            <button style=\"margin-left: 20px;\" nz-button nzType=\"primary\" [nzSize]=\"'small'\"\n                    (click)=\"addFirstRequestParam()\">添加一级参数\n            </button>\n          </p>\n        </div>\n        <div class=\"panel-footer\">\n          <div *ngIf=\"detail.requestParam.params&&detail.requestParam.params.length>0\" class=\"detail-params\">\n            <div class=\"div-table\">\n              <!--表头-->\n              <table>\n                <tr>\n                  <th>参数名称</th>\n                  <th>类型</th>\n                  <th>默认值</th>\n                  <th>是否必须</th>\n                  <th>描述</th>\n                  <th></th>\n                </tr>\n              </table>\n              <!--表内容：递归展示出 对象中嵌套对象-->\n              <app-api-param [params]=\"detail.requestParam.params\" [index]=\"0\"></app-api-param>\n            </div>\n          </div>\n          <div *ngIf=\"!detail.requestParam||!detail.requestParam.params\" style=\"padding: 8px\">\n            无\n          </div>\n        </div>\n      </div>\n\n      <!--响应数据-->\n      <div class=\"panel\">\n        <div class=\"api-panel-title\">\n          <p class=\"api-details-title\">响应数据\n            <span class=\"type\">(类型：{{detail.responseParam.type}})</span>\n          </p>\n        </div>\n        <div class=\"panel-footer\">\n          <div *ngIf=\"detail.responseParam.params\">\n            <div class=\"div-table\">\n              <!--表头-->\n              <table>\n                <tr>\n                  <th>参数名称</th>\n                  <th>类型</th>\n                  <th>默认值</th>\n                  <th>是否必须</th>\n                  <th>描述</th>\n                  <th>操作</th>\n                </tr>\n              </table>\n              <!--表内容：递归展示出 对象中嵌套对象-->\n              <app-api-param [params]=\"detail.responseParam.params\" [index]=\"0\"></app-api-param>\n            </div>\n          </div>\n          <div *ngIf=\"!detail.responseParam\">\n            无\n          </div>\n        </div>\n      </div>\n\n      <!--示例 from类型 表单的不需要示例-->\n      <div *ngIf=\"detail&&!mockShowFrom\" class=\"panel\">\n        <div class=\"api-panel-title\">\n          <p class=\"api-details-title\">示例\n            <span style=\"color: red\">(*注意：请在headers中携带cookie或者token令牌，以保证访问安全或权限校验)</span>\n          </p>\n        </div>\n        <div class=\"api-panel-footer\">\n          <h5 style=\"margin: 10px\">请求地址：</h5>\n          <pre>{{demoUrl}}</pre>\n          <div *ngIf=\"demoReqParams\">\n            <h5 style=\"margin: 10px\">请求参数：</h5>\n            <pre>{{demoReqParams}}</pre>\n          </div>\n          <div *ngIf=\"demoResponse\">\n            <h5 style=\"margin: 10px\">响应数据：</h5>\n            <pre>{{demoResponse}}</pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nz-content>\n</nz-layout>\n<h1 *ngIf=\"!isopenapidoc&&isopenapidocShow\">文档未开启，请联系管理员！</h1>\n"

/***/ }),

/***/ "./src/app/apidoc/index/index.component.scss":
/*!***************************************************!*\
  !*** ./src/app/apidoc/index/index.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".api-details {\n  color: #333333;\n  min-height: 800px;\n  padding: 6px; }\n  .api-details p {\n    margin: 6px 0px; }\n  .api-details .api-details-title {\n    font-size: 16px;\n    color: #333;\n    font-weight: bold; }\n  .api-details .api-details-title .type {\n      font-size: 12px; }\n  .api-details .api-panel-title {\n    margin: 6px 0; }\n  .api-details .detail-params {\n    margin: 6px 0; }\n  .api-details .api-panel-footer {\n    background: #ffffff;\n    color: #333333; }\n  .api-details .api-panel-footer pre {\n      border-radius: 8px;\n      border: 1px solid #ffe3df;\n      background: rgba(255, 245, 238, 0.18);\n      padding: 8px;\n      font-size: 0.8em; }\n  .api-details .gekai {\n    height: 10px;\n    width: 30px; }\n  .api-details .panel {\n    padding: 12px;\n    border: 1px rgba(0, 0, 0, 0.22) solid;\n    margin: 10px auto;\n    border-radius: 15px; }\n  .centerLogo {\n  margin-top: 240px;\n  color: deepskyblue;\n  font-weight: 600;\n  font-size: 30px;\n  text-align: center;\n  width: 60%;\n  margin-left: 20%; }\n  .centerLogo span {\n    font-size: 13px; }\n  .description {\n  background-color: rgba(255, 236, 219, 0.21);\n  border: 1px solid rgba(199, 90, 98, 0.09);\n  border-radius: 20px;\n  color: #000000;\n  padding: 10px;\n  width: 60%;\n  margin-top: 20px;\n  margin-left: 20%; }\n  :host ::ng-deep nz-layout {\n  height: 100%;\n  overflow: auto; }\n  :host ::ng-deep nz-sider {\n  height: 100%;\n  overflow: auto; }\n  :host ::ng-deep .logo {\n  background: #333;\n  border-radius: 6px;\n  color: white;\n  font-weight: 600;\n  height: 64px;\n  line-height: 64px;\n  font-size: 22px;\n  text-align: center; }\n  :host ::ng-deep .logo span {\n    font-size: 12px; }\n  :host ::ng-deep .ant-layout-sider-collapsed .nav-text {\n  display: none; }\n  :host ::ng-deep .ant-layout-sider-collapsed .ant-menu-submenu-title:after {\n  display: none; }\n  :host ::ng-deep .ant-layout-sider-collapsed .anticon {\n  font-size: 16px;\n  margin-left: 8px; }\n  :host ::ng-deep .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: color .3s; }\n  :host ::ng-deep .trigger:hover {\n  color: #108ee9; }\n  :host ::ng-deep .ant-card-body {\n  padding: 0; }\n  :host ::ng-deep .ant-card-head {\n  height: 32px;\n  line-height: 32px;\n  background: #eee; }\n  :host ::ng-deep nz-layout {\n  overflow: hidden; }\n  :host ::ng-deep nz-sider {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  .oinp {\n  border: none;\n  outline-style: none; }\n  textarea {\n  font-weight: 700;\n  font-size: 0.9em;\n  color: #108ee9; }\n  .div-table table {\n  width: 100%; }\n  .div-table table th {\n    text-align: left;\n    padding: 6px;\n    border: 1px solid rgba(92, 102, 94, 0.06);\n    width: 10%; }\n  .div-table table th:first-child {\n      width: 20%; }\n  .div-table table th:nth-child(5) {\n      width: 30%; }\n  .div-table table td {\n    text-align: left;\n    padding: 6px;\n    border: 1px solid rgba(92, 102, 94, 0.06);\n    width: 10%; }\n  .div-table table td:first-child {\n      width: 20%; }\n  .div-table table td:nth-child(5) {\n      width: 30%; }\n  pre {\n  border-radius: 8px;\n  border: 1px solid #ffe3df;\n  background: rgba(255, 245, 238, 0.18);\n  padding: 8px;\n  font-size: 0.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpZG9jL2luZGV4L0U6XFxXb3Jrc3BhY2VzXFxJbnRlbGxpaklERUFcXGphdmEtYXBpLWRvYy1tYXN0ZXJcXGFwaWRvY1xcZnJvbnQvc3JjXFxhcHBcXGFwaWRvY1xcaW5kZXhcXGluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7RUFIZDtJQUtJLGVBQWUsRUFBQTtFQUxuQjtJQVFJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFWckI7TUFZTSxlQUFlLEVBQUE7RUFackI7SUFnQkksYUFBYSxFQUFBO0VBaEJqQjtJQW1CSSxhQUFhLEVBQUE7RUFuQmpCO0lBdUJJLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUF4QmxCO01BMEJNLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIscUNBQXFDO01BQ3JDLFlBQVk7TUFDWixnQkFBZ0IsRUFBQTtFQTlCdEI7SUFrQ0ksWUFBWTtJQUNaLFdBQVcsRUFBQTtFQW5DZjtJQXNDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQUl2QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0VBUGxCO0lBU0ksZUFBZSxFQUFBO0VBSW5CO0VBQ0UsMkNBQTJDO0VBQzNDLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUdoQjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFScEI7SUFVSSxlQUFlLEVBQUE7RUFJbkI7RUFDRSxhQUFhLEVBQUE7RUFHZjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQixFQUFBO0VBR3ZCO0VBQ0UsY0FBYyxFQUFBO0VBR2hCO0VBQ0UsVUFBVSxFQUFBO0VBR1o7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUdoQjtFQUVJLFdBQVcsRUFBQTtFQUZmO0lBSU0sZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsVUFBVSxFQUFBO0VBUGhCO01BU1EsVUFBVSxFQUFBO0VBVGxCO01BWVEsVUFBVSxFQUFBO0VBWmxCO0lBZ0JNLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLFVBQVUsRUFBQTtFQW5CaEI7TUFxQlEsVUFBVSxFQUFBO0VBckJsQjtNQXdCUSxVQUFVLEVBQUE7RUFNbEI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcGlkb2MvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBpLWRldGFpbHMge1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgcCB7XG4gICAgbWFyZ2luOiA2cHggMHB4O1xuICB9XG4gIC5hcGktZGV0YWlscy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC50eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbiAgLmFwaS1wYW5lbC10aXRsZSB7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgfVxuICAuZGV0YWlsLXBhcmFtcyB7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgfVxuXG4gIC5hcGktcGFuZWwtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHByZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZlM2RmO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0NSwgMjM4LCAwLjE4KTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICB9XG4gIC5nZWthaSB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIC5wYW5lbCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDAsIDAuMjIpIHNvbGlkO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbn1cblxuLmNlbnRlckxvZ28ge1xuICBtYXJnaW4tdG9wOiAyNDBweDtcbiAgY29sb3I6IGRlZXBza3libHVlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzYsIDIxOSwgMC4yMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk5LCA5MCwgOTgsIDAuMDkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG56LWxheW91dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCBuei1zaWRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAubG9nbyB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQgLm5hdi10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCAuYW50LW1lbnUtc3VibWVudS10aXRsZTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQgLmFudGljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudHJpZ2dlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjMTA4ZWU5O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkLWhlYWQge1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbnotbGF5b3V0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG56LXNpZGVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5vaW5wIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjMTA4ZWU5O1xufVxuXG4uZGl2LXRhYmxlIHtcbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRoIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDkyLCAxMDIsIDk0LCAwLjA2KTtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTIsIDEwMiwgOTQsIDAuMDYpO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5wcmUge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmUzZGY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDUsIDIzOCwgMC4xOCk7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/apidoc/index/index.component.ts":
/*!*************************************************!*\
  !*** ./src/app/apidoc/index/index.component.ts ***!
  \*************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/app/api.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, messageService, dragulaService) {
        var _this = this;
        this.http = http;
        this.messageService = messageService;
        this.dragulaService = dragulaService;
        this.isopenapidoc = false; // 是否开启文档
        this.isGetActions = false;
        this.mockShowFrom = false; // 请求参数 页面展示
        this.mockShowBlob = false; // 是否显示数据流类型的（比如验证码）
        this.mockShowResponse = false; // 是否显示响应数据
        // 编辑还是显示
        this.edit = {
            info: false,
            module: false,
            actionDescription: false,
        };
        // 左侧菜单的拖拽排序功能
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.TimeFn = null;
        // 设置移动规则
        this.dragulaService.createGroup("MODULES", {
            direction: 'horizontal',
            moves: function (el, source, handle) { return handle.className.indexOf("modules-handel") != -1; }
        });
        //模块排序
        this.subs.add(this.dragulaService.dropModel("MODULES")
            .subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            var i = 1;
            for (var _i = 0, sourceModel_1 = sourceModel; _i < sourceModel_1.length; _i++) {
                var m = sourceModel_1[_i];
                m.order = i;
                i++;
            }
            _this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateModulesSort, sourceModel).subscribe(function (data) {
                if (data) {
                    console.log(data);
                }
            }, function (error) {
                _this.error(error);
            });
        }));
        // 接口排序
        this.subs.add(this.dragulaService.dropModel("ACTIONS")
            .subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            console.log(JSON.stringify(sourceModel));
            var i = 1;
            for (var _i = 0, sourceModel_2 = sourceModel; _i < sourceModel_2.length; _i++) {
                var m = sourceModel_2[_i];
                m.order = i;
                i++;
            }
            _this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateActionsSort, sourceModel).subscribe(function (data) {
                if (data) {
                    console.log(data);
                }
            }, function (error) {
                _this.error(error);
            });
        }));
    }
    /** 清空缓存 */
    IndexComponent.prototype.clearCache = function () {
        this.paramType = null; // 请求参数类型
        // 演示功能
        this.mockUrl = null; // 请求url
        this.mockReqParams = null; // 请求参数
        this.mockReqParamsStr = null; // 请求参数 页面展示
        this.mockReqParamsFrom = null; // 请求参数 页面展示
        this.mockShowFrom = false; // 请求参数 页面展示
        this.mockMethod = null; // 请求方法
        this.mockShowBlob = false; // 是否显示数据流类型的（比如验证码）
        this.mockBlobUrl = null; // 数据流url
        this.mockResponse = null; // 请求后得到的数据
        this.mockShowResponse = false; // 是否显示响应数据
        // 示例功能
        this.demoUrl = null; // 请求地址
        this.demoReqParams = null; // 请求参数
        this.demoResponse = null; // 响应数据
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    IndexComponent.prototype.ngOnInit = function () {
        scroll(0, 0);
        this.isOpenApiDoc();
    };
    IndexComponent.prototype.isOpenApiDoc = function () {
        var _this = this;
        this.http.get(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].isOpenApiDoc).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.isopenapidoc = true;
                _this.init();
            }
            else {
                _this.isopenapidocShow = true;
            }
        });
    };
    /** 初始化数据 */
    IndexComponent.prototype.init = function () {
        var _this = this;
        // 获取文档基本信息
        this.http.get(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].info + _config__WEBPACK_IMPORTED_MODULE_2__["URL_PARAM"]).subscribe(function (data) {
            console.log("文档基本信息： ", JSON.stringify(data));
            _this.info = data;
        }, function (error) {
            _this.error(error);
        });
        // 获取一级目录 模块列表
        this.http.get(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].modules + _config__WEBPACK_IMPORTED_MODULE_2__["URL_PARAM"]).subscribe(function (data) {
            _this.modules = data;
            console.log("一级目录： ", JSON.stringify(data));
        }, function (error) {
            _this.error(error);
        });
    };
    /** 获取左侧目录二级菜单，接口概要信息列表 */
    IndexComponent.prototype.getActions = function (module) {
        var _this = this;
        this.isGetActions = !this.isGetActions;
        // 只有在菜单展开时才加载数据
        if (this.isGetActions) {
            module.isLoadingActions = true;
            this.moduleName = module.name;
            this.http.get(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].actions + "/" + module.id).subscribe(function (data) {
                delete module.isLoadingActions;
                console.log("二级目录 ", JSON.stringify(data));
                if (data) {
                    module.list = data;
                }
            }, function (error) {
                delete module.isLoadingActions;
                _this.error(error);
            });
        }
    };
    /** 保存接口信息 */
    IndexComponent.prototype.saveAction = function (action) {
        var _this = this;
        delete action.edit;
        console.log(JSON.stringify(action));
        this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateAction, action).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            _this.error(error);
        });
    };
    /** 获取接口详情 */
    IndexComponent.prototype.getDetail = function (action) {
        var _this = this;
        // 取消上次延时未执行的方法
        clearTimeout(this.TimeFn);
        // 执行延时
        this.TimeFn = setTimeout(function () {
            // 单击事件执行
            _this.getDetailClick(action);
        }, 500);
    };
    IndexComponent.prototype.actionEdit = function (action) {
        // 取消上次延时未执行的方法
        clearTimeout(this.TimeFn);
        // 执行双击事件
        action.edit = !action.edit;
    };
    IndexComponent.prototype.getDetailClick = function (action) {
        var _this = this;
        action.isLoadingDetail = true;
        // 清空缓存
        this.clearCache();
        this.action = action;
        this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].detail, this.action).subscribe(function (data) {
            delete action.isLoadingDetail;
            console.log("功能详情： ", JSON.stringify(data));
            if (data) {
                _this.detail = data;
                // 构建请求参数
                _this.buildRequestParams(data);
            }
        }, function (error) {
            delete action.isLoadingDetail;
            _this.error(error);
        });
    };
    /** 构建请求参数 */
    IndexComponent.prototype.buildRequestParams = function (action) {
        if (action) {
            this.mockUrl = _config__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + action.mapping; // 演示的url默认为后台返回的mapping
            this.mockMethod = action.requestMethod; // 演示的请求方式
            this.demoUrl = _config__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + action.mapping; // 示例的url
            var requestType = action.requestParam.type; // 请求参数类型
            var responseType = action.responseParam.type; // 响应数据类型
            var request = action.requestParam.params; // 请求参数
            // url方式
            if (this.contain(requestType, "URL")) {
                if (action.requestParam && action.requestParam.params && action.requestParam.params.length > 0) { // 存在参数
                    // 拼接参数 以?隔开
                    var i = 0;
                    for (var _i = 0, _a = action.requestParam.params; _i < _a.length; _i++) {
                        var param = _a[_i];
                        i++;
                        if (i === 1) {
                            this.mockUrl = _config__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + action.mapping + "?" + param.name + "=" + this.getDefaultValue(param);
                            this.demoUrl = _config__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + action.mapping + "?" + param.name + "=" + (param.description ? param.description : "参数");
                        }
                        else {
                            this.mockUrl = this.mockUrl + "&" + param.name + "=" + this.getDefaultValue(param);
                            this.demoUrl = this.demoUrl + "&" + param.name + "=" + (param.description ? param.description : "参数");
                        }
                    }
                }
                else {
                    this.mockUrl = _config__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + action.mapping;
                    this.demoUrl = _config__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + action.mapping;
                }
            }
            // json方式
            if (this.contain(requestType, "JSON")) {
                if (action.requestParam && action.requestParam.params && action.requestParam.params.length > 0) {
                    this.mockReqParams = this.getParams(action.requestParam.params, {});
                    this.mockReqParamsStr = this.fromtJSON(this.mockReqParams);
                    this.demoReqParams = this.fromtJSON(this.getParams(action.requestParam.params, {}));
                }
            }
            // from 方式
            if (this.contain(requestType, "FROM")) {
                this.mockShowFrom = true;
                if (action.requestParam && action.requestParam.params && action.requestParam.params.length > 0) {
                    this.mockReqParamsFrom = action.requestParam.params;
                }
            }
            // blob 数据流格式
            if (this.contain(responseType, "BLOB")) {
                this.mockShowBlob = true;
            }
            // 构建响应参数
            if (action.responseParam && action.responseParam.params && action.responseParam.params.length > 0) {
                this.demoResponse = this.fromtJSON(this.getParams(action.responseParam.params, {}));
            }
        }
    };
    IndexComponent.prototype.getParams = function (params, result) {
        console.log("构建前的的参数", JSON.stringify(params));
        var ret = this.buildParams(params, result);
        console.log("初步构建完的参数", JSON.stringify(ret));
        // 如果是数组 返回对象的第一个key
        if (params.length == 1 && this.contain(params[0].dataType, "array")) {
            var objArray = Object.keys(result);
            console.log("数组的时候 取对象的第一个key  ", JSON.stringify(objArray));
            var key = objArray[0];
            ret = result[key];
        }
        console.log("完全构建完的参数", JSON.stringify(ret));
        return ret;
    };
    /** 构建参数 */
    IndexComponent.prototype.buildParams = function (params, result) {
        if (params && params.length > 0) {
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var value = params_1[_i];
                if (value.list && value.list.length > 0) {
                    // 把list递归
                    if (this.contain(value.dataType, "object")) { // 对象
                        if (Array.isArray(result)) {
                            result[0] = {};
                            this.buildParams(value.list, result[0]);
                        }
                        else {
                            result[value.name] = {};
                            this.buildParams(value.list, result[value.name]);
                        }
                    }
                    else if (this.contain(value.dataType, "array")) { // 数组
                        if (Array.isArray(result)) {
                            result[0] = [];
                            this.buildParams(value.list, result[0]);
                        }
                        else {
                            result[value.name] = [];
                            this.buildParams(value.list, result[value.name]);
                        }
                    }
                }
                else {
                    result[value.name] = this.getDefaultValue(value);
                }
            }
        }
        return result;
    };
    /** 根据数据类型设置默认值 */
    IndexComponent.prototype.getDefaultValue = function (param) {
        if (!param || !param.dataType) {
            return null;
        }
        // 存在默认值时 返回默认值
        if (param.defaultValue) {
            return param.defaultValue;
        }
        // 不存在默认值时 返回类型的默认值
        var value = param.defaultValue;
        if (this.contain(param.dataType, "string")) {
            value = '';
        }
        else if (this.contain(param.dataType, "number")) {
            value = 0;
        }
        else if (this.contain(param.dataType, "boolean")) {
            value = false;
        }
        else if (this.contain(param.dataType, "array")) {
            value = [];
        }
        else if (this.contain(param.dataType, "object")) {
            value = {};
        }
        return value;
    };
    /** 字符串是否包含某子字符串 */
    IndexComponent.prototype.contain = function (str, subStr) {
        return str && str.indexOf(subStr) > -1;
    };
    /** 格式化json数据 */
    IndexComponent.prototype.fromtJSON = function (json) {
        return JSON.stringify(json, null, 2);
    };
    /** 发送测试方法 */
    IndexComponent.prototype.sendTest = function () {
        var _this = this;
        // 刷新图片验证码
        if (this.mockShowBlob) {
            this.mockShowResponse = true;
            this.mockBlobUrl = this.mockUrl;
            this.mockBlobUrl = this.mockBlobUrl + "?" + new Date();
            console.log('请求地址： ', this.mockBlobUrl);
        }
        else { // 发送测试
            console.log('请求方式: ', this.mockMethod);
            console.log('请求地址: ', this.mockUrl);
            if (this.contain(this.mockMethod, 'GET')) {
                this.http.get(this.mockUrl).subscribe(function (data) { return _this.success(data); }, function (error) { return _this.error4sendTest(error); });
            }
            else if (this.contain(this.mockMethod, 'POST')) {
                this.http.post(this.mockUrl, this.mockReqParams).subscribe(function (data) { return _this.success(data); }, function (error) { return _this.error4sendTest(error); });
            }
            else if (this.contain(this.mockMethod, 'PUT')) {
                this.http.put(this.mockUrl, this.mockReqParams).subscribe(function (data) { return _this.success(data); }, function (error) { return _this.error4sendTest(error); });
            }
            else if (this.contain(this.mockMethod, 'DELETE')) {
                this.http.delete(this.mockUrl).subscribe(function (data) { return _this.success(data); }, function (error) { return _this.error4sendTest(error); });
            }
        }
    };
    /** 请求成功调用方法 */
    IndexComponent.prototype.success = function (data) {
        // 登陆后保存token
        if (data && data.data && data.data.token) {
            console.log("设置token", data.data.token);
            localStorage.setItem("token", data.data.token);
        }
        this.mockShowResponse = true;
        console.log(data);
        this.mockResponse = this.fromtJSON(data);
        this.isLogout();
    };
    /** 请求失败调用方法 */
    IndexComponent.prototype.error4sendTest = function (error) {
        this.error(error);
        this.mockShowResponse = true;
        var msg = "";
        if (error.status) {
            msg = "状态码：" + error.status + "\n";
        }
        if (error.url) {
            msg = msg + "请求路径：" + error.url + "\n";
        }
        if (error.message) {
            msg = msg + "提示信息：" + error.message + "\n";
        }
        this.mockResponse = +"出现错误或异常，具体如下：\n\n" + msg + "\n" + this.fromtJSON(error);
    };
    /** 请求失败调用方法 */
    IndexComponent.prototype.error = function (error) {
        this.messageService.error("数据请求失败，错误如下:" + JSON.stringify(error));
        console.error("数据请求失败，错误如下:" + JSON.stringify(error));
        this.isLogout();
    };
    /** 是否退出登陆 */
    IndexComponent.prototype.isLogout = function () {
        if (this.contain(this.mockUrl, "/logout")) {
            localStorage.clear();
        }
    };
    /** 退出登陆 */
    IndexComponent.prototype.logout = function () {
        this.sendTest();
    };
    /** 上传文件 */
    IndexComponent.prototype.sendFile = function ($event, fileKey) {
        var _this = this;
        this.http.upload(this.mockUrl, $event, fileKey).subscribe(function (data) { return _this.success(data); }, function (error) { return _this.error(error); });
    };
    /** 右侧显示文档信息 */
    IndexComponent.prototype.showInfo = function () {
        this.detail = null;
    };
    /** 保存基本信息 */
    IndexComponent.prototype.saveInfo = function (info) {
        var _this = this;
        this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateInfo, info).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            _this.error(error);
        });
    };
    /** 编辑接口的 描述信息 */
    IndexComponent.prototype.saveDescription = function (description) {
        var _this = this;
        var param = {
            id: this.action.id,
            description: description
        };
        this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateActionDescription, param).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            _this.error(error);
        });
    };
    /** 编辑详情的 请求参数 */
    IndexComponent.prototype.saveDetailReq = function (params) {
        var _this = this;
        if (params && params.length > 0) {
            console.log(JSON.stringify(params));
            // 循环请求参数 组装后台保存信息的数据结构
            var update = this.packageParams(params, {});
            var param = {
                methodUUID: this.detail.requestParam.methodUUID,
                update: update
            };
            this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateDetail, param).subscribe(function (data) {
                console.log(data);
                _this.getDetail(_this.action);
            }, function (error) {
                _this.error(error);
            });
        }
    };
    /** 修改响应参赛 */
    IndexComponent.prototype.saveDetailResp = function (params) {
        var _this = this;
        if (params && params.length > 0) {
            console.log(JSON.stringify(params));
            // 循环请求参数 组装后台保存信息的数据结构
            var update = this.packageParams(params, {});
            var param = {
                methodUUID: this.detail.responseParam.methodUUID,
                update: update
            };
            console.log(JSON.stringify(param));
            this.http.post(_api__WEBPACK_IMPORTED_MODULE_5__["apis"].updateDetail, param).subscribe(function (data) {
                console.log(data);
                _this.getDetail(_this.action);
            }, function (error) {
                _this.error(error);
            });
        }
    };
    /** 组装数据 */
    IndexComponent.prototype.packageParams = function (params, result) {
        for (var _i = 0, params_2 = params; _i < params_2.length; _i++) {
            var p = params_2[_i];
            if (p.list && p.list.length > 0) {
                this.packageParams(p.list, result);
            }
            var key = void 0, value = void 0;
            if (p.pid == "0") {
                key = p.name + "-null";
            }
            else {
                key = p.name + "-" + p.pid;
            }
            value = {
                "defaultVale": p.defaultValue,
                "description": p.description,
                "required": p.required,
                "show": p.show
            };
            result[key] = value;
        }
        return result;
    };
    /** 添加一级请求参数 */
    IndexComponent.prototype.addFirstRequestParam = function () {
        this.addParam(false, 0);
    };
    /** 添加参数 */
    IndexComponent.prototype.addParam = function (isReturn, pid) {
        var param = {
            returnd: isReturn,
            actionId: this.action.id,
            pid: pid,
            edit: true
        };
        this.detail.requestParam.params ? true : this.detail.requestParam.params = [];
        this.detail.requestParam.params.push(param);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/apidoc/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/apidoc/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-index></app-index>\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _apidoc_apidoc_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apidoc/apidoc.module */ "./src/app/apidoc/apidoc.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auto_intercepter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-intercepter */ "./src/app/auto-intercepter.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









/** 配置 angular i18n */




Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                /** 导入 ng-zorro-antd 模块 */
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _apidoc_apidoc_module__WEBPACK_IMPORTED_MODULE_5__["InterfaceModule"],
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
                /** 配置 ng-zorro-antd 国际化 */
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["zh_CN"] },
                /** 配置拦截器 */
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _auto_intercepter__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto-intercepter.ts":
/*!*************************************!*\
  !*** ./src/app/auto-intercepter.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/** 拦截器，拦截所有http请求 */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('token');
        if (token) {
            var authReq = request.clone({
                headers: request.headers.set('token', token),
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(request);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: ROOT_URL, URL_PARAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_URL", function() { return ROOT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PARAM", function() { return URL_PARAM; });
/** 定义网站url根路由 */
var ROOT_URL = getUrl();
/** 获取查询参数，用以区别不同的文档 */
var URL_PARAM = getUrlParam();
/** 获取网站url根路径 */
function getUrl() {
    return window.location.protocol + "//" + window.location.host;
}
/** 获取查询参数 */
function getUrlParam() {
    // 获取查询参数
    var search = window.location.search;
    return search;
}


/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



/** 定义全局接口，封装http服务,封装angular原生HttpClient类 */
var HttpService = /** @class */ (function () {
    /** 注入httpClient */
    function HttpService(httpClient) {
        this.httpClient = httpClient;
    }
    /** get请求 */
    HttpService.prototype.get = function (url) {
        return this.httpClient.get(url);
    };
    /** post请求 */
    HttpService.prototype.post = function (url, body) {
        return this.httpClient.post(url, body);
    };
    /** put请求 */
    HttpService.prototype.put = function (url, body) {
        return this.httpClient.put(url, body);
    };
    /** delete请求 */
    HttpService.prototype.delete = function (url) {
        return this.httpClient.delete(url);
    };
    /** 文件上传 */
    HttpService.prototype.upload = function (url, $event, fileKey) {
        var obj = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            obj[_i - 3] = arguments[_i];
        }
        var files = $event.target.files || $event.srcElement.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append(fileKey, files[i]);
        }
        if (obj) {
            for (var i = 0; i < obj.length; i++) {
                console.log(JSON.stringify(obj[i]));
            }
        }
        return this.httpClient.post(url, formData);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspaces\IntellijIDEA\java-api-doc-master\apidoc\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map