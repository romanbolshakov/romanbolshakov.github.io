System.register("frontend/controllers/about", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      About;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }],
    execute: function() {
      About = function() {
        function About() {}
        return ($traceurRuntime.createClass)(About, {}, {});
      }();
      $__export("About", About);
      Object.defineProperty(About, "annotations", {get: function() {
          return [new Component({templateUrl: 'frontend/views/about.html'})];
        }});
    }
  };
});
