System.register("frontend/app_spec", ["angular2/testing", "common/components/services/app"], function($__export) {
  "use strict";
  var it,
      describe,
      expect,
      beforeEach,
      AppService;
  return {
    setters: [function($__m) {
      it = $__m.it;
      describe = $__m.describe;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
    }, function($__m) {
      AppService = $__m.AppService;
    }],
    execute: function() {
      describe('AppService tests', function() {
        var app;
        var list;
        beforeEach(function() {
          app = new AppService();
        });
        it('Should get 5 dogs', function() {
          expect(app.name).toBe('common');
          list = ['golden retriever', 'french bulldog'];
          expect(list.length).toBe(2);
          expect(list).toEqual(['golden retriever', 'french bulldog']);
        });
      });
    }
  };
});
