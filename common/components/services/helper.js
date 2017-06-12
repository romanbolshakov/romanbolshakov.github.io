System.register("common/components/services/helper", [], function($__export) {
  "use strict";
  var HelperService;
  return {
    setters: [],
    execute: function() {
      HelperService = function() {
        function HelperService() {}
        return ($traceurRuntime.createClass)(HelperService, {URLToArray: function(url) {
            var request = {};
            var pairs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < pairs.length; i++) {
              if (!pairs[i])
                continue;
              var pair = pairs[i].split('=');
              request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return request;
          }}, {loadAsync: function(name, path) {
            return System.import(path).then(function(c) {
              return c[name];
            });
          }});
      }();
      $__export("HelperService", HelperService);
    }
  };
});
