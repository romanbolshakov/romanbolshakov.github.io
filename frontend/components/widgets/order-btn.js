System.register("frontend/components/widgets/order-btn", ["angular2/core", "frontend/components/services/order", "angular2/common"], function($__export) {
  "use strict";
  var Component,
      OrderService,
      NgIf,
      NgClass,
      OrderBtnWidget;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      OrderService = $__m.OrderService;
    }, function($__m) {
      NgIf = $__m.NgIf;
      NgClass = $__m.NgClass;
    }],
    execute: function() {
      OrderBtnWidget = function() {
        function OrderBtnWidget(order) {
          this.product = null;
          this.order = order;
        }
        return ($traceurRuntime.createClass)(OrderBtnWidget, {}, {});
      }();
      $__export("OrderBtnWidget", OrderBtnWidget);
      Object.defineProperty(OrderBtnWidget, "annotations", {get: function() {
          return [new Component({
            selector: 'widget-order-btn',
            inputs: ['product'],
            directives: [NgIf, NgClass],
            templateUrl: 'frontend/components/views/widget-order-btn.html'
          })];
        }});
      Object.defineProperty(OrderBtnWidget, "parameters", {get: function() {
          return [[OrderService]];
        }});
    }
  };
});
