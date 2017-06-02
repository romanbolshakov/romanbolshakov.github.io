System.register("frontend/components/widgets/order", ["angular2/core", "angular2/router", "common/components/services/http", "frontend/components/services/order", "common/components/filters/objLength", "angular2/common"], function($__export) {
  "use strict";
  var Component,
      Router,
      RouterLink,
      HttpService,
      OrderService,
      ObjLengthFilter,
      NgIf,
      NgSwitch,
      NgSwitchWhen,
      OrderWidget;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      Router = $__m.Router;
      RouterLink = $__m.RouterLink;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }, function($__m) {
      OrderService = $__m.OrderService;
    }, function($__m) {
      ObjLengthFilter = $__m.ObjLengthFilter;
    }, function($__m) {
      NgIf = $__m.NgIf;
      NgSwitch = $__m.NgSwitch;
      NgSwitchWhen = $__m.NgSwitchWhen;
    }],
    execute: function() {
      OrderWidget = function() {
        function OrderWidget(http, order, router) {
          this.totalPrice = 0;
          this.http = http;
          this.order = order;
          this.router = router;
        }
        return ($traceurRuntime.createClass)(OrderWidget, {onOrder: function() {
            var $this = this;
            this.router.navigate(['Order']);
            if (this.router.currentInstruction.component.routeName == 'Order') {
              switch (this.order.state) {
                case 'add':
                  if (this.order.list) {
                    this.order.state = 'form';
                  }
                  break;
                case 'form':
                  if (this.order.list && this.order.form.valid) {
                    this.http.post('/order/add', {
                      name: this.order.name,
                      table: this.order.table,
                      payment: this.order.payment,
                      list: this.order.list
                    }, function(res) {
                      if (res.success) {
                        $this.order.listSend = Object.assign({}, $this.order.list);
                        $this.order.totalSend = Object.assign({}, $this.order.total);
                        $this.order.isOrderSend = true;
                        $this.order.list = {};
                        $this.order.eventChangeList.emit();
                      }
                    });
                    this.order.state = 'send';
                  }
                  break;
                case 'send':
                  this.order.state = 'add';
                  this.router.navigate(['Products']);
                  break;
              }
            }
          }}, {});
      }();
      $__export("OrderWidget", OrderWidget);
      Object.defineProperty(OrderWidget, "annotations", {get: function() {
          return [new Component({
            selector: 'widget-order',
            directives: [RouterLink, NgIf, NgSwitch, NgSwitchWhen],
            pipes: [ObjLengthFilter],
            templateUrl: 'frontend/components/views/widget-order.html'
          })];
        }});
      Object.defineProperty(OrderWidget, "parameters", {get: function() {
          return [[HttpService], [OrderService], [Router]];
        }});
    }
  };
});
