System.register("frontend/controllers/product", ["angular2/core", "angular2/router", "common/components/services/app"], function($__export) {
  "use strict";
  var Component,
      RouteParams,
      AppService,
      Product;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      RouteParams = $__m.RouteParams;
    }, function($__m) {
      AppService = $__m.AppService;
    }],
    execute: function() {
      Product = function() {
        function Product(app, params) {
          setTimeout(function() {
            MAJESTY.widget.carouselImage();
          });
          this.id = params.get('id');
        }
        return ($traceurRuntime.createClass)(Product, {}, {});
      }();
      $__export("Product", Product);
      Object.defineProperty(Product, "annotations", {get: function() {
          return [new Component({templateUrl: 'frontend/views/product.html'})];
        }});
      Object.defineProperty(Product, "parameters", {get: function() {
          return [[AppService], [RouteParams]];
        }});
    }
  };
});
