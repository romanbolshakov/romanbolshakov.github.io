System.register("backend/controllers/login", ["angular2/core", "common/components/services/app", "common/components/services/http"], function($__export) {
  "use strict";
  var Component,
      AppService,
      HttpService,
      Login;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      AppService = $__m.AppService;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }],
    execute: function() {
      Login = function() {
        function Login(app, http) {
          this.loginClick = function() {};
          console.log('HIT Login');
          var $this = this;
          this.app = app;
          this.http = http;
        }
        return ($traceurRuntime.createClass)(Login, {}, {});
      }();
      $__export("Login", Login);
      Object.defineProperty(Login, "annotations", {get: function() {
          return [new Component({
            providers: [AppService, HttpService],
            templateUrl: 'backend/views/login.html'
          })];
        }});
      Object.defineProperty(Login, "parameters", {get: function() {
          return [[AppService], [HttpService]];
        }});
    }
  };
});
