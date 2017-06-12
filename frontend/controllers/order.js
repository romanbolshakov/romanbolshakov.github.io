System.register("frontend/controllers/order", ["angular2/core", "angular2/router", "common/components/services/app", "common/components/services/http", "frontend/components/services/order", "frontend/components/widgets/order-btn", "common/components/filters/objArray", "common/components/filters/objLength", "angular2/common"], function($__export) {
  "use strict";
  var Component,
      RouterLink,
      AppService,
      HttpService,
      OrderService,
      OrderBtnWidget,
      ObjArrayFilter,
      ObjLengthFilter,
      NgFor,
      NgIf,
      NgClass,
      NgModel,
      NgForm,
      NgFormModel,
      NgControl,
      Order;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      RouterLink = $__m.RouterLink;
    }, function($__m) {
      AppService = $__m.AppService;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }, function($__m) {
      OrderService = $__m.OrderService;
    }, function($__m) {
      OrderBtnWidget = $__m.OrderBtnWidget;
    }, function($__m) {
      ObjArrayFilter = $__m.ObjArrayFilter;
    }, function($__m) {
      ObjLengthFilter = $__m.ObjLengthFilter;
    }, function($__m) {
      NgFor = $__m.NgFor;
      NgIf = $__m.NgIf;
      NgClass = $__m.NgClass;
      NgModel = $__m.NgModel;
      NgForm = $__m.NgForm;
      NgFormModel = $__m.NgFormModel;
      NgControl = $__m.NgControl;
    }],
    execute: function() {
      Order = function() {
        function Order(app, http, order) {
          var $this = this;
          this.app = app;
          this.http = http;
          this.order = order;
          this.order.eventInitPressPrice.emit();
        }
        return ($traceurRuntime.createClass)(Order, {}, {});
      }();
      $__export("Order", Order);
      Object.defineProperty(Order, "annotations", {get: function() {
          return [new Component({
            providers: [HttpService],
            directives: [RouterLink, NgFor, NgIf, NgClass, NgModel, NgForm, NgFormModel, OrderBtnWidget],
            pipes: [ObjArrayFilter, ObjLengthFilter],
            templateUrl: 'frontend/views/order.html'
          })];
        }});
      Object.defineProperty(Order, "parameters", {get: function() {
          return [[AppService], [HttpService], [OrderService]];
        }});
    }
  };
});
