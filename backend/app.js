System.register("backend/app", ["angular2/core", "angular2/router", "angular2/platform/common", "angular2/http", "angular2/platform/browser", "common/components/services/app", "common/components/services/http", "backend/controllers/about", "backend/controllers/home", "backend/controllers/login", "backend/controllers/waiter_admin", "angular2/common"], function($__export) {
  "use strict";
  var Component,
      provide,
      RouteConfig,
      Router,
      ROUTER_PROVIDERS,
      ROUTER_DIRECTIVES,
      Location,
      LocationStrategy,
      HashLocationStrategy,
      HTTP_PROVIDERS,
      enableProdMode,
      bootstrap,
      Title,
      AppService,
      HttpService,
      About,
      Home,
      Login,
      WaiterAdmin,
      COMMON_DIRECTIVES,
      App;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      provide = $__m.provide;
      enableProdMode = $__m.enableProdMode;
    }, function($__m) {
      RouteConfig = $__m.RouteConfig;
      Router = $__m.Router;
      ROUTER_PROVIDERS = $__m.ROUTER_PROVIDERS;
      ROUTER_DIRECTIVES = $__m.ROUTER_DIRECTIVES;
    }, function($__m) {
      Location = $__m.Location;
      LocationStrategy = $__m.LocationStrategy;
      HashLocationStrategy = $__m.HashLocationStrategy;
    }, function($__m) {
      HTTP_PROVIDERS = $__m.HTTP_PROVIDERS;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
      Title = $__m.Title;
    }, function($__m) {
      AppService = $__m.AppService;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }, function($__m) {
      About = $__m.About;
    }, function($__m) {
      Home = $__m.Home;
    }, function($__m) {
      Login = $__m.Login;
    }, function($__m) {
      WaiterAdmin = $__m.WaiterAdmin;
    }, function($__m) {
      COMMON_DIRECTIVES = $__m.COMMON_DIRECTIVES;
    }],
    execute: function() {
      App = function() {
        function App(app, http, router, title) {
          var $this = this;
          this.app = app;
          this.http = http;
          this.app.name = 'backend';
          this.app.layout = 'default';
          this.app.onAfterInitConfig = function() {
            var pos = location.host.indexOf('.');
            var slug = location.host.substr(0, pos);
            if ($this.app.env.isDev && location.hostname == 'localhost') {
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
            title.setTitle(url);
          });
        }
        return ($traceurRuntime.createClass)(App, {}, {});
      }();
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({
            selector: 'main',
            directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
            providers: [Title, AppService, HttpService],
            templateUrl: 'backend/layouts.html'
          }), new RouteConfig([{
            path: '/',
            component: WaiterAdmin,
            name: 'WaiterAdmin',
            useAsDefault: true
          }, {
            path: '/login',
            component: Login,
            name: 'Login'
          }, {
            path: '/about',
            component: About,
            name: 'About'
          }])];
        }});
      Object.defineProperty(App, "parameters", {get: function() {
          return [[AppService], [HttpService], [Router], [Title]];
        }});
      bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
    }
  };
});
