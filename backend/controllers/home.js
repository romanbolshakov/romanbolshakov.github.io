System.register("backend/controllers/home", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      Home;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }],
    execute: function() {
      Home = function() {
        function Home() {}
        return ($traceurRuntime.createClass)(Home, {}, {});
      }();
      $__export("Home", Home);
      Object.defineProperty(Home, "annotations", {get: function() {
          return [new Component({templateUrl: 'frontend/views/home.html'})];
        }});
    }
  };
});
