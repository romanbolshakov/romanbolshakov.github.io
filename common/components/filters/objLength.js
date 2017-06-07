System.register("common/components/filters/objLength", ["angular2/core"], function($__export) {
  "use strict";
  var Pipe,
      ObjLengthFilter;
  return {
    setters: [function($__m) {
      Pipe = $__m.Pipe;
    }],
    execute: function() {
      ObjLengthFilter = function() {
        function ObjLengthFilter() {}
        return ($traceurRuntime.createClass)(ObjLengthFilter, {transform: function(items, args) {
            return Object.keys(items).length;
          }}, {});
      }();
      $__export("ObjLengthFilter", ObjLengthFilter);
      Object.defineProperty(ObjLengthFilter, "annotations", {get: function() {
          return [new Pipe({
            name: 'objLength',
            pure: false
          })];
        }});
    }
  };
});
