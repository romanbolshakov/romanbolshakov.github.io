System.register("common/components/filters/objArray", ["angular2/core"], function($__export) {
  "use strict";
  var Pipe,
      ObjArrayFilter;
  return {
    setters: [function($__m) {
      Pipe = $__m.Pipe;
    }],
    execute: function() {
      ObjArrayFilter = function() {
        function ObjArrayFilter() {}
        return ($traceurRuntime.createClass)(ObjArrayFilter, {transform: function(value, args) {
            var keys = [];
            for (var key in value) {
              keys.push(value[key]);
            }
            return keys;
          }}, {});
      }();
      $__export("ObjArrayFilter", ObjArrayFilter);
      Object.defineProperty(ObjArrayFilter, "annotations", {get: function() {
          return [new Pipe({
            name: 'objArray',
            pure: false
          })];
        }});
    }
  };
});
