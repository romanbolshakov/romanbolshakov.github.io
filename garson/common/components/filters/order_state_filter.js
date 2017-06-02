System.register("common/components/filters/order_state_filter", ["angular2/core"], function($__export) {
  "use strict";
  var Pipe,
      PipeTransform,
      OrderStateFilter;
  return {
    setters: [function($__m) {
      Pipe = $__m.Pipe;
      PipeTransform = $__m.PipeTransform;
    }],
    execute: function() {
      OrderStateFilter = function() {
        function OrderStateFilter() {}
        return ($traceurRuntime.createClass)(OrderStateFilter, {transform: function(orders, args) {
            if (args.stateId == -1)
              return orders;
            return orders.filter(function(order) {
              return order.state.id == args.stateId;
            });
          }}, {});
      }();
      $__export("OrderStateFilter", OrderStateFilter);
      Object.defineProperty(OrderStateFilter, "annotations", {get: function() {
          return [new Pipe({
            name: 'orderStateFilter',
            pure: false
          })];
        }});
    }
  };
});
