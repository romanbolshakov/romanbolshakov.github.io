System.register("frontend/app", ["angular2/core", "angular2/platform/browser", "angular2/router", "angular2/platform/common", "angular2/http", "angular2/common", "common/components/services/app", "common/components/services/http", "common/components/services/helper", "frontend/components/services/order", "frontend/components/widgets/order", "frontend/controllers/products", "frontend/controllers/order"], function($__export) {
  "use strict";
  var Component,
      provide,
      enableProdMode,
      bootstrap,
      RouteConfig,
      Router,
      AsyncRoute,
      ROUTER_PROVIDERS,
      ROUTER_DIRECTIVES,
      Location,
      LocationStrategy,
      HashLocationStrategy,
      HTTP_PROVIDERS,
      Title,
      COMMON_DIRECTIVES,
      AppService,
      HttpService,
      HelperService,
      OrderService,
      OrderWidget,
      Products,
      Order,
      App;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      provide = $__m.provide;
      enableProdMode = $__m.enableProdMode;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
      Title = $__m.Title;
    }, function($__m) {
      RouteConfig = $__m.RouteConfig;
      Router = $__m.Router;
      AsyncRoute = $__m.AsyncRoute;
      ROUTER_PROVIDERS = $__m.ROUTER_PROVIDERS;
      ROUTER_DIRECTIVES = $__m.ROUTER_DIRECTIVES;
    }, function($__m) {
      Location = $__m.Location;
      LocationStrategy = $__m.LocationStrategy;
      HashLocationStrategy = $__m.HashLocationStrategy;
    }, function($__m) {
      HTTP_PROVIDERS = $__m.HTTP_PROVIDERS;
    }, function($__m) {
      COMMON_DIRECTIVES = $__m.COMMON_DIRECTIVES;
    }, function($__m) {
      AppService = $__m.AppService;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }, function($__m) {
      HelperService = $__m.HelperService;
    }, function($__m) {
      OrderService = $__m.OrderService;
    }, function($__m) {
      OrderWidget = $__m.OrderWidget;
    }, function($__m) {
      Products = $__m.Products;
    }, function($__m) {
      Order = $__m.Order;
    }],
    execute: function() {
      App = function() {
        function App(router, title, app, http) {
          var $__3 = this;
          var $this = this;
          this.app = app;
          this.http = http;
          this.app.name = 'frontend';
          this.app.onAfterInitConfig = function() {
            var pos = location.host.indexOf('.');
            var slug = location.host.substr(0, pos);
            if ($this.app.env.isDev && location.hostname === 'localhost') {
              slug = $this.app.env.data.institutionSlug;
            }
            $this.http.get('/institution/' + slug + '/init', function(res) {
              if (res.success) {
                $this.app.data.institution = res.data;
                $this.app.headers['Institution'] = $this.app.data.institution.id;
                $this.app.eventAppLoadData.emit(res.data);
                $this.app.eventAppLoadData = null;
              }
            });
          };
          this.http.initConfig();
          router.subscribe(function(url) {
            $__3.app.scope = {};
            for (var titleItem in $__3.app.page.titles) {
              var regTitle = new RegExp(titleItem);
              if (regTitle.test(url)) {
                title.setTitle($__3.app.page.titles[titleItem]);
                continue;
              }
            }
          });
          this.initTheme();
        }
        return ($traceurRuntime.createClass)(App, {initTheme: function() {
            setTimeout(function() {
              $(document).ready(MAJESTY.documentOnReady.init);
              $(window).load(MAJESTY.documentOnLoad.init);
              $(window).on('resize', MAJESTY.documentOnResize.init);
              MAJESTY.documentOnResize.init();
            });
          }}, {});
      }();
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({
            selector: 'main',
            directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES, OrderWidget],
            providers: [Title, AppService, HttpService, OrderService, HelperService],
            templateUrl: 'frontend/layouts.html'
          }), new RouteConfig([{
            path: '/',
            redirectTo: ['Products']
          }, {
            path: '/menu',
            component: Products,
            name: 'Products',
            useAsDefault: true
          }, new AsyncRoute({
            path: '/menu/:id',
            name: 'Product',
            loader: function() {
              return HelperService.loadAsync('Product', 'frontend/controllers/product');
            }
          }), {
            path: '/order',
            component: Order,
            name: 'Order'
          }])];
        }});
      Object.defineProperty(App, "parameters", {get: function() {
          return [[Router], [Title], [AppService], [HttpService]];
        }});
      bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), OrderService]);
    }
  };
});
