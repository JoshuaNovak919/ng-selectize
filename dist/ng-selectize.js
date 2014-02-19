(function() {
  "use strict";

  angular.module("ngSelectize", ['ng']).directive("selectize", function($timeout) {
    return {
      restrict: "AE",
      link: function(scope, element, attrs) {
        return $timeout(function() {
          var elements = element.find("option");
          var $select = $(element).selectize(scope.$eval(attrs.selectize));
          
          scope.$watch(attrs.ngModel, function (val) {
            if (val !== undefined) {
              var selected = elements.filter(function () { return $(this).html() == val; }).val();
              $select[0].selectize.setValue(selected);
            }
          });
          
          return $select;
        });
      }
    };
  });
}).call(this);