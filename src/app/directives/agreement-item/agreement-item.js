(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('agreementItem', AgreementItem);

  function AgreementItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/agreement-item/agreement-item.html',
      scope: {
        item: '='
      },
      controller: AgreementItemCtrl,
      controllerAs: 'Agreement',
      // bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function AgreementItemCtrl(Utils, $element) {
    this.Element = $element;

    this.item = {
      config: {
        maxSelections: 1,
        required: true
      },
      options: [{
        value: '',
        selected: false
      }]
    };
  }

})(angular);
