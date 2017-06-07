System.register("backend/controllers/waiter_admin", ["angular2/core", "common/components/filters/order_state_filter", "common/components/services/app", "common/components/services/http"], function($__export) {
  "use strict";
  var Component,
      NgZone,
      OrderStateFilter,
      AppService,
      HttpService,
      WaiterAdmin;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      NgZone = $__m.NgZone;
    }, function($__m) {
      OrderStateFilter = $__m.OrderStateFilter;
    }, function($__m) {
      AppService = $__m.AppService;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }],
    execute: function() {
      WaiterAdmin = function() {
        function WaiterAdmin(app, http, zone) {
          this.orders = [], this.stateCatalog = [{
            id: 0,
            title: 'Отменен',
            color: 'default'
          }, {
            id: 1,
            title: 'Новый',
            color: 'info'
          }, {
            id: 2,
            title: 'Готовится',
            color: 'warning'
          }, {
            id: 3,
            title: 'Доставлен',
            color: 'primary'
          }, {
            id: 4,
            title: 'Оплачен',
            color: 'success'
          }], this.orderStateFilterArgs = {stateId: -1}, this.institution = {}, this.cancelOrder = function(event, order) {
            $this.updateOrderState(order, 0);
          }, this.getStateById = function(stateId) {
            return $this.stateCatalog.find(function(item) {
              return item.id == stateId;
            });
          }, this.setNextStateOrder = function(event, order) {
            order.state_id = order.nextState.id;
            $this.updateOrderState(order, order.nextState.id);
          }, this.updateOrderState = function(order, newStateId) {
            $this.http.put('/order/' + order.id + '/state', {new_state_id: newStateId}, function(res) {
              order.state_id = newStateId;
              $this.updateOrderVisualState(order);
            });
          }, this.updateOrderVisualState = function(order) {
            order.state = $this.getStateById(order.state.id);
            if (order.state.id == 0) {
              var newState = $this.getStateById(1);
              order.nextState = {
                id: newState.id,
                title: "Восстановить",
                color: newState.color
              };
            } else if (order.state.id != 4) {
              order.nextState = $this.getStateById(order.state.id + 1);
            } else {
              order.nextState = false;
            }
          };
          var $this = this;
          this.app = app;
          this.http = http;
          this.app.eventAppLoadData.subscribe(function() {
            $this.institution = app.data.institution;
          });
          this.http.get({
            url: '/order/',
            event: this.app.eventAppLoadData
          }, function(res) {
            var orders = res.data.map(function(item) {
              item.details = [];
              item.dateCreate = new Date(item.dateCreate);
              var h = item.dateCreate.getHours();
              var m = item.dateCreate.getMinutes();
              m = m < 10 ? '0' + m : m;
              item.complexId = item.id.toString() + '/' + h.toString() + m.toString();
              $this.updateOrderVisualState(item);
              return item;
            });
            orders.forEach(function(order) {
              $this.http.get('/order/' + order.id + '/details', function(res) {
                order.details = res.data;
                var totalPrice = 0;
                order.details.forEach(function(item) {
                  totalPrice += item.product_id.price * item.count;
                });
                order.totalPrice = totalPrice;
              });
            });
            $this.orders = orders;
          });
        }
        return ($traceurRuntime.createClass)(WaiterAdmin, {}, {});
      }();
      $__export("WaiterAdmin", WaiterAdmin);
      Object.defineProperty(WaiterAdmin, "annotations", {get: function() {
          return [new Component({
            provides: [AppService, HttpService],
            pipes: [OrderStateFilter],
            templateUrl: 'backend/views/waiter_admin.html'
          })];
        }});
      Object.defineProperty(WaiterAdmin, "parameters", {get: function() {
          return [[AppService], [HttpService], [NgZone]];
        }});
    }
  };
});
