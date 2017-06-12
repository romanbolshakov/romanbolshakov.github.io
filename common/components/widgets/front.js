System.register("common/components/widgets/front", ["angular2/core", "angular2/common", "common/components/services/http"], function($__export) {
  "use strict";
  var Component,
      NgFor,
      HttpService,
      Front;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      NgFor = $__m.NgFor;
    }, function($__m) {
      HttpService = $__m.HttpService;
    }],
    execute: function() {
      Front = function() {
        function Front(http) {
          this.list = ['first', 'second', 'tree'], this.valueFront = '123', this.dataInit = {name: ''};
          this.http = http;
          this.valueFront = '456';
          setTimeout(function() {
            console.log($('#inputFront').val());
          });
        }
        return ($traceurRuntime.createClass)(Front, {
          addName: function(newname) {
            this.list.push(newname);
            this.valueFront = '';
          },
          sendName: function(newname) {
            this.http.get('/api/core/init.json', function(data) {
              console.log(data);
            });
            this.http.post('/api/core/init.json', {param: 'ok'}, function(data) {
              console.log(data);
            });
          },
          onChange: function(event) {
            console.log(event.target.value);
          }
        }, {});
      }();
      $__export("Front", Front);
      Object.defineProperty(Front, "annotations", {get: function() {
          return [new Component({
            selector: 'front',
            providers: [HttpService],
            directives: [NgFor],
            templateUrl: 'common/components/views/widget-front.html'
          })];
        }});
      Object.defineProperty(Front, "parameters", {get: function() {
          return [[HttpService]];
        }});
    }
  };
});
