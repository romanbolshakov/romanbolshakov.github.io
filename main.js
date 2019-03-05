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
/* harmony import */ var _brief_brief_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brief/brief.component */ "./src/app/brief/brief.component.ts");




var routes = [
    { path: '', component: _brief_brief_component__WEBPACK_IMPORTED_MODULE_3__["BriefComponent"] },
    { path: 'brief', component: _brief_brief_component__WEBPACK_IMPORTED_MODULE_3__["BriefComponent"] }
];
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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'frontend';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _brief_brief_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brief/brief.component */ "./src/app/brief/brief.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _brief_brief_component__WEBPACK_IMPORTED_MODULE_5__["BriefComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brief/brief.component.css":
/*!*******************************************!*\
  !*** ./src/app/brief/brief.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: rgba(0, 0, 0, .1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJpZWYvYnJpZWYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2JyaWVmL2JyaWVmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/brief/brief.component.html":
/*!********************************************!*\
  !*** ./src/app/brief/brief.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor-desktop m-grid--desktop\" style=\"background: #282828;\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-container m-container--responsive m-container--full-height\">\n    <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\n      <!-- BEGIN: Subheader -->\n      <div class=\"m-subheader \">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-5\"><br />\n              <br /><br />\n              <br /></div>\n            <div class=\"col-1 text-center\">\n              <div class=\"text-center\">\n                <div class=\"m-portlet m-portlet--skin-dark m-portlet--bordered-semi m--font-dark\" data-toggle=\"modal\"\n                  data-target=\"#m_modal_add\" style=\"cursor: pointer;\">\n                  <span class=\"m-widget6__text m--font-boldest m--font-dark\">\n                    <i class=\"la la-puzzle-piece\" style=\"padding: 4px; font-size: 40px;\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-1 text-center\">\n              <div class=\"text-center\">\n                <div class=\"m-portlet m-portlet--skin-dark m-portlet--bordered-semi m--font-dark\" data-toggle=\"modal\"\n                  data-target=\"#m_modal_add\" style=\"cursor: pointer;\">\n                  <span class=\"m-widget6__text m--font-boldest m--font-dark\">\n                    <i class=\"la la-puzzle-piece\" style=\"padding: 4px; font-size: 40px;\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngFor=\"let favoriteTicker of favoriteTickers\" class=\"col-sm-6 col-md-4 col-lg-2 col-xl-2\" style=\"cursor: pointer; //max-width: 190px;\">\n              <div class=\"m-portlet m-portlet--skin-dark m-portlet--bordered-semi m--font-light\">\n                <div class=\"m-widget6__item text-center\">\n                  <div class=\"row\">\n                    <div class=\"col-8\">\n                      <span class=\"m-widget6__text m--font-boldest m--font-light\">\n                        {{ favoriteTicker.exchange | uppercase }}: {{ favoriteTicker.symbol }}\n                      </span>\n                      <br />\n                      <span class=\"m-widget6__text m-widget6__text--align-left\">\n                        {{ favoriteTicker.price }}\n                      </span>\n                      <span class=\"m-widget6__text m-widget6__text--align-right m--font-boldest m--font-success\" [ngClass]=\"{'m--font-success': favoriteTicker.change >=0,  'm--font-danger': favoriteTicker.change < 0}\">\n                        {{ favoriteTicker.change }}%\n                      </span>\n                    </div>\n                    <div class=\"col-4\">\n                      <div class=\"m--space-10\"></div>\n                      <span class=\"text-center\" data-toggle=\"m-popover\" data-placement=\"top\" data-content=\"Price trend: Bullish\">\n                        <!-- <i class=\"fa fa-arrow-up m--font-success\"></i> -->\n                        <!--\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-down m--font-danger\" data-toggle=\"m-popover\" data-placement=\"top\" data-content=\"Price trend: Bearish\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right m--font-metal\" data-toggle=\"m-popover\" data-placement=\"top\" data-content=\"Price trend: Neutral\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n                        <!-- <b>\n                          <span class=\"m m--font-danger\">SELL</span><span class=\"m m--font-success\">BUY</span>\n                        </b> -->\n                      </span>\n                    </div>\n                  </div>\n\n                  <div class=\"progress m-progress--sm\">\n                    <div class=\"progress-bar m--bg-success\" [ngClass]=\"{'m--bg-success': favoriteTicker.change >=0,  'm--bg-danger': favoriteTicker.change < 0}\" role=\"progressbar\" style=\"width: {{ favoriteTicker.change }}%;\" aria-valuenow=\"50\"\n                      aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <!-- END: Subheader -->\n      <div class=\"m-content\">\n        <!--Begin::Section-->\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"m-portlet m-portlet--unair m-portlet--skin-dark m-portlet--bordered-semi\">\n\n              <div class=\"m-portlet__head\">\n                <div class=\"m-portlet__head-caption\">\n                  <div class=\"m-portlet__head-title\">\n                    <h3 class=\"m-portlet__head-text\">\n                      Add / Remove pairs\n                    </h3>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"m-portlet__body\">\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <table class=\"table table-striped m-table table-sm text-truncate\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>Exchange</th>\n                          <th>Pair</th>\n                          <th>Change</th>\n                          <th>Price</th>\n                          <th>Bid</th>\n                          <th>Ask</th>\n                          <th>Spread</th>\n                          <th>Trend</th>\n                          <th>Volume</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let ticker of tickers\" (click)=\"tickerClick(ticker)\">\n                          <td class=\"text-center\">\n                            <div *ngIf=\"!ticker.isFavorite\" title=\"Add\" class=\"m-link m-link--success\" style=\"cursor: pointer\">\n                              <i class=\"la la-plus\"></i>\n                            </div>\n                            <div *ngIf=\"ticker.isFavorite\" title=\"Delete\" class=\"m-link m-link--danger\" style=\"cursor: pointer\">\n                              <i class=\"la la-minus\"></i>\n                            </div>\n\n                          </td>\n                          <th scope=\"row\">{{ exchange.name }}</th>\n                          <th>{{ ticker.symbol }}</th>\n                          <td class=\"m m--font-success\" [ngClass]=\"{'m--font-success': ticker.change >= 0, 'm--font-danger': ticker.change < 0}\">\n                            <i class=\"fa fa-caret-up\" [ngClass]=\"{'fa-caret-up': ticker.change >= 0, 'fa-caret-down': ticker.change < 0}\" ></i>\n                            {{ ticker.change }}%\n                          </td>\n                          <td>{{ ticker.price }}</td>\n                          <td>{{ ticker.bid }}</td>\n                          <td>{{ ticker.ask }}</td>\n                          <td class=\"m m--font-success\">{{ ticker.spread }}%</td>\n                          <td><span class=\"m-badge m-badge--danger m-badge--wide m-badge--rounded\">Bullish</span></td>\n                          <td>{{ ticker.volume }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/brief/brief.component.ts":
/*!******************************************!*\
  !*** ./src/app/brief/brief.component.ts ***!
  \******************************************/
/*! exports provided: BriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefComponent", function() { return BriefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_exchange_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exchange.service */ "./src/app/services/exchange.service.ts");



var BriefComponent = /** @class */ (function () {
    function BriefComponent(exchangeService) {
        this.exchangeService = exchangeService;
        this.favoritePairs = [];
        this.favoriteTickers = [];
    }
    BriefComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadExchangeInfo();
                        _a = this;
                        return [4 /*yield*/, this.loadTickers()];
                    case 1:
                        _a.tickers = _b.sent();
                        this.restoreFavoritePairs();
                        return [2 /*return*/];
                }
            });
        });
    };
    BriefComponent.prototype.loadTickers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.exchangeService.getTickers()];
            });
        });
    };
    BriefComponent.prototype.loadExchangeInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.exchangeService.getExchange()];
                    case 1:
                        _a.exchange = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BriefComponent.prototype.restoreFavoritePairs = function () {
        var _this = this;
        this.favoriteTickers = [];
        var pairs = localStorage.getItem('pairs');
        if (pairs) {
            this.favoritePairs = JSON.parse(pairs);
            this.favoritePairs.forEach(function (pair) {
                var appTicker = _this.tickers.find(function (ticker) { return ticker.exchange == pair.exchange && ticker.symbol == pair.symbol; });
                appTicker.isFavorite = true;
                if (appTicker)
                    _this.favoriteTickers.push(appTicker);
            });
        }
        console.log(this.favoriteTickers);
    };
    BriefComponent.prototype.tickerClick = function (ticker) {
        this.saveOrRemoveFavoritePair(ticker);
    };
    BriefComponent.prototype.saveOrRemoveFavoritePair = function (ticker) {
        if (ticker.isFavorite) {
            var existPairIndex = this.favoritePairs.findIndex(function (item) { return item.exchange === ticker.exchange && item.symbol === ticker.symbol; });
            if (existPairIndex > -1) {
                this.favoritePairs.splice(existPairIndex, 1);
            }
            this.favoriteTickers = this.favoriteTickers.filter(function (item) { return item !== ticker; });
        }
        else {
            var pair = { exchange: 'exmo', 'symbol': ticker.symbol };
            this.favoritePairs.push(pair);
            this.favoriteTickers.push(ticker);
        }
        ticker.isFavorite = !ticker.isFavorite;
        localStorage.setItem('pairs', JSON.stringify(this.favoritePairs));
    };
    BriefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brief',
            template: __webpack_require__(/*! ./brief.component.html */ "./src/app/brief/brief.component.html"),
            styles: [__webpack_require__(/*! ./brief.component.css */ "./src/app/brief/brief.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_exchange_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeService"]])
    ], BriefComponent);
    return BriefComponent;
}());



/***/ }),

/***/ "./src/app/services/exchange.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/exchange.service.ts ***!
  \**********************************************/
/*! exports provided: ExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return ExchangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ccxt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ccxt */ "./node_modules/ccxt/ccxt.js");
/* harmony import */ var ccxt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ccxt__WEBPACK_IMPORTED_MODULE_2__);



var ExchangeService = /** @class */ (function () {
    function ExchangeService() {
        this._exchangeId = 'exmo';
    }
    ExchangeService.prototype.getExchange = function () {
        this._exchange = new ccxt__WEBPACK_IMPORTED_MODULE_2__[this._exchangeId]();
        this.appExchange = { name: this._exchange.name };
        return this.appExchange;
    };
    ExchangeService.prototype.getTickers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tickers, pair;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._exchange)
                            this.getExchange();
                        return [4 /*yield*/, this._exchange.fetchTickers()];
                    case 1:
                        tickers = _a.sent();
                        console.log(tickers);
                        this.appTickers = [];
                        for (pair in tickers) {
                            this.appTickers.push({
                                exchange: this._exchangeId,
                                symbol: tickers[pair].symbol,
                                price: tickers[pair].last,
                                bid: tickers[pair].bid,
                                ask: tickers[pair].ask,
                                spread: this.calcSpread(tickers[pair].bid, tickers[pair].ask),
                                change: this.calcChangePercent(tickers[pair].average, tickers[pair].last),
                                volume: tickers[pair].baseVolume,
                                trend: 'bullish',
                                isFavorite: false
                            });
                        }
                        return [2 /*return*/, this.appTickers];
                }
            });
        });
    };
    ExchangeService.prototype.calcChangePercent = function (averagePrice, lastPrice) {
        var value = ((lastPrice / averagePrice) - 1) * 100;
        var result = value > 0 ? '+' + value.toFixed(2) : value.toFixed(2);
        return result;
    };
    ExchangeService.prototype.calcSpread = function (bid, ask) {
        var result = ((ask - bid) / ask);
        return result.toFixed(4);
    };
    ExchangeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExchangeService);
    return ExchangeService;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\hierarchy\0_projects\4_freelance\14_BeeWallet\sources\mx\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map