System.register("common/components/services/app", ["angular2/core"], function($__export) {
  "use strict";
  var EventEmitter,
      AppService;
  return {
    setters: [function($__m) {
      EventEmitter = $__m.EventEmitter;
    }],
    execute: function() {
      AppService = function() {
        function AppService() {
          this.name = 'common', this.api = 'http://localhost:8000', this.debug = false, this.layout = 'default', this.auth = {
            token: '',
            isAuth: true,
            info: {}
          }, this.page = {titles: {}}, this.headers = {}, this.scope = {}, this.data = {}, this.eventAppLoadData = new EventEmitter(), this.params = {patterns: {int: '[0-9]+'}};
        }
        return ($traceurRuntime.createClass)(AppService, {onAfterInitConfig: function() {}}, {});
      }();
      $__export("AppService", AppService);
    }
  };
});
