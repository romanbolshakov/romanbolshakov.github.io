System.register("common/components/services/http", ["rxjs/add/operator/map", "angular2/core", "angular2/http", "common/components/services/app"], function($__export) {
  "use strict";
  var Component,
      Http,
      Headers,
      RequestOptions,
      AppService,
      HttpService;
  return {
    setters: [function($__m) {}, function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      Http = $__m.Http;
      Headers = $__m.Headers;
      RequestOptions = $__m.RequestOptions;
    }, function($__m) {
      AppService = $__m.AppService;
    }],
    execute: function() {
      HttpService = function() {
        function HttpService(app, http) {
          this.headers = {
            'Content-Type': 'Accepts,X-Requested-With',
            'Accept': 'application/json'
          }, this.header = null, this.option = null;
          this.app = app;
          this.http = http;
        }
        return ($traceurRuntime.createClass)(HttpService, {
          initConfig: function() {
            var $this = this;
            this.get({
              url: '/' + this.app.name + '/config.json',
              notUseApi: true
            }, function(data) {
              for (var item in data) {
                $this.app[item] = data[item];
              }
              $this.app.onAfterInitConfig();
            });
          },
          initHeaders: function() {
            $.extend(this.headers, this.app.headers);
            this.header = new Headers(this.headers);
            this.option = new RequestOptions({headers: this.header});
          },
          getUrl: function(url) {
            if ((typeof url === 'undefined' ? 'undefined' : $traceurRuntime.typeof(url)) === 'object' && url) {
              if (url.notUseApi) {
                return url.url;
              }
              url = url.url;
            }
            if (!url) {
              return '';
            } else {
              return (this.app.debug.level.request ? '/api' : this.app.api) + url + (this.app.debug.level.request ? '.json' : '');
            }
          },
          getInit: function(url, callback) {
            this.initHeaders();
            var http = this.http.get(this.getUrl(url), this.option).map(function(res) {
              return res.json();
            });
            if (callback) {
              http.subscribe(function(data) {
                callback(data);
              }, function(err) {
                return console.warn(err);
              });
            }
            return http;
          },
          postInit: function(url, body, callback) {
            this.initHeaders();
            var http = this.http.post(this.getUrl(url), JSON.stringify(body), this.option).map(function(res) {
              return res.json();
            });
            if (callback) {
              http.subscribe(function(data) {
                callback(data);
              }, function(err) {
                return console.warn(err);
              });
            }
            return http;
          },
          putInit: function(url, body, callback) {
            this.initHeaders();
            var http = this.http.put(this.getUrl(url), JSON.stringify(body), this.option).map(function(res) {
              return res.json();
            });
            if (callback) {
              http.subscribe(function(data) {
                callback(data);
              }, function(err) {
                return console.warn(err);
              });
            }
          },
          get: function(url, callback) {
            var $__3 = this;
            if ((typeof url === 'undefined' ? 'undefined' : $traceurRuntime.typeof(url)) === 'object' && url.event) {
              url.event.subscribe(function(data) {
                $__3.getInit(url, callback);
              });
            } else {
              return this.getInit(url, callback);
            }
          },
          post: function(url, body, callback) {
            var $__3 = this;
            if ((typeof url === 'undefined' ? 'undefined' : $traceurRuntime.typeof(url)) === 'object' && url.event) {
              url.event.subscribe(function(data) {
                $__3.postInit(url, body, callback);
              });
            } else {
              return this.postInit(url, body, callback);
            }
          },
          put: function(url, body, callback) {
            var $__3 = this;
            if ((typeof url === 'undefined' ? 'undefined' : $traceurRuntime.typeof(url)) === 'object' && url.event) {
              url.event.subscribe(function(data) {
                $__3.putInit(url, body, callback);
              });
            } else {
              return this.putInit(url, body, callback);
            }
          },
          delete: function(url, body, callback) {}
        }, {});
      }();
      $__export("HttpService", HttpService);
      Object.defineProperty(HttpService, "annotations", {get: function() {
          return [new Component({providers: [AppService]})];
        }});
      Object.defineProperty(HttpService, "parameters", {get: function() {
          return [[AppService], [Http]];
        }});
    }
  };
});
