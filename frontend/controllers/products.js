System.register("frontend/controllers/products", ["angular2/core", "angular2/router", "common/components/services/app", "common/components/services/http", "frontend/components/services/order", "frontend/components/widgets/order-btn", "angular2/common"], function($__export) {
  "use strict";
  var Component,
      RouterLink,
      RouteParams,
      AppService,
      HttpService,
      OrderService,
      OrderBtnWidget,
      NgFor,
      NgIf,
      NgClass,
      Products;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      RouterLink = $__m.RouterLink;
      RouteParams = $__m.RouteParams;
    }, function($__m) {
      AppService = $__m.AppService;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }, function($__m) {
      OrderService = $__m.OrderService;
    }, function($__m) {
      OrderBtnWidget = $__m.OrderBtnWidget;
    }, function($__m) {
      NgFor = $__m.NgFor;
      NgIf = $__m.NgIf;
      NgClass = $__m.NgClass;
    }],
    execute: function() {
      Products = function() {
        function Products(app, http, order, params) {
          this.menu = [{
            "id": 0,
            "title": "All",
            "products": []
          }], this.curCategory = 0;
          var $this = this;
          this.app = app;
          this.http = http;
          this.order = order;
          this.http.get({
            url: '/product/menu/',
            event: this.app.eventAppLoadData
          }, function(res) {
            $this.menu = $this.menu.concat(res.data);
            $this.order.eventInitPressPrice.emit();
          });
        }
        return ($traceurRuntime.createClass)(Products, {setCurCategory: function(index) {
            this.curCategory = index;
            this.order.eventInitPressPrice.emit();
          }}, {});
      }();
      $__export("Products", Products);
      Object.defineProperty(Products, "annotations", {get: function() {
          return [new Component({
            providers: [HttpService],
            directives: [RouterLink, NgFor, NgIf, NgClass, OrderBtnWidget],
            templateUrl: 'frontend/views/products.html'
          })];
        }});
      Object.defineProperty(Products, "parameters", {get: function() {
          return [[AppService], [HttpService], [OrderService], [RouteParams]];
        }});
    }
  };
});
