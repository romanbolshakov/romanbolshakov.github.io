System.register("frontend/components/services/order", ["angular2/core", "angular2/common", "common/components/services/app"], function($__export) {
  "use strict";
  var Component,
      EventEmitter,
      FormBuilder,
      Validators,
      AppService,
      OrderService;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      EventEmitter = $__m.EventEmitter;
    }, function($__m) {
      FormBuilder = $__m.FormBuilder;
      Validators = $__m.Validators;
    }, function($__m) {
      AppService = $__m.AppService;
    }],
    execute: function() {
      OrderService = function() {
        function OrderService(app, fb) {
          var $__3 = this;
          this.name = '', this.table = '', this.payment = 'cash', this.list = {}, this.listSend = {}, this.total = {
            price: 0,
            count: 0
          }, this.totalSend = {
            price: 0,
            count: 0
          }, this.isOrderSend = false, this.durationBtnBack = 2000, this.state = 'add', this.eventChangeList = new EventEmitter(), this.eventInitPressPrice = new EventEmitter();
          this.form = fb.group({
            table: ["", Validators.pattern(app.params.patterns.int)],
            name: [""],
            payment: [""]
          });
          this.eventChangeList.subscribe(function() {
            $__3.getTotal();
          });
          this.eventInitPressPrice.subscribe(function() {
            $__3.initPressPrice();
          });
          this.eventChangeList.emit();
        }
        return ($traceurRuntime.createClass)(OrderService, {
          addPosition: function(product, option) {
            var $this = this;
            var $option = $.extend({
              isDuration: false,
              isAddFirst: false
            }, option);
            var funAddDuration = function() {
              var funAdd = function() {
                $this.list[product.id].count += 1;
                $this.eventChangeList.emit();
              };
              if (!$option.isAddFirst || ($option.isAddFirst && $this.list[product.id] && $this.list[product.id].count == 0)) {
                if ($option.isDuration) {
                  setTimeout(funAdd, 400);
                } else {
                  funAdd();
                }
              }
            };
            if (this.list[product.id] === undefined) {
              this.list[product.id] = $.extend({count: 0}, product);
              funAddDuration();
            } else {
              if (this.list[product.id].count < 20) {
                funAddDuration();
              } else {
                this.list[product.id].error = true;
              }
            }
          },
          delPosition: function(product) {
            if (this.list[product.id] !== undefined) {
              if (this.list[product.id].count === 1) {
                delete this.list[product.id];
              } else {
                this.list[product.id].count -= 1;
                this.list[product.id].error = false;
              }
              this.eventChangeList.emit();
            }
          },
          removePosition: function(product) {
            if (this.list[product.id] !== undefined) {
              delete this.list[product.id];
              this.eventChangeList.emit();
            }
          },
          getTotal: function() {
            var totalPrice = 0;
            var totalCount = 0;
            for (var id in this.list) {
              totalPrice += this.list[id].price * this.list[id].count;
              totalCount += this.list[id].count;
            }
            this.total.price = totalPrice;
            this.total.count = totalCount;
          },
          initPressPrice: function() {
            var $this = this;
            setTimeout(function() {
              $('.j-price').on('click', function() {
                var $price = $(this);
                var $order = $price.siblings('.j-order');
                setTimer($order, $price);
              });
              $('.j-order-btn').on('click', function() {
                var $order = $(this).parent();
                var $price = $order.siblings('.j-price');
                setTimer($order, $price);
              });
              function setTimer($order, $price) {
                var timer = $order.data('timer');
                if (timer) {
                  clearTimeout(timer);
                }
                $price.hide();
                $order.show();
                $order.data('timer', setTimeout(function() {
                  $price.show();
                  $order.hide();
                }, $this.durationBtnBack));
              }
            });
          }
        }, {});
      }();
      $__export("OrderService", OrderService);
      Object.defineProperty(OrderService, "parameters", {get: function() {
          return [[AppService], [FormBuilder]];
        }});
    }
  };
});
