(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('formItem', FormItem);

  /** @ngInject */
  function FormItem() {
    var directive = {
      restrict: 'E',
      //link: linker,
      scope: {
        item: '=',
        onDelete: '&',
        onUp: '&',
        onDown: '&',
        index: '&'
      },
      controller: FormItemCtrl,
      controllerAs: 'FormItem',
      bindToController: true,
      templateUrl: 'app/directives/form-item/form-item.html'
    };

    function linker(scope, elem, attrs, ctrl) {
      ctrl.init();
    }

    return directive;
  }

  /*@ngInject*/
  function FormItemCtrl($attrs, Utils) {
    this.Attrs = $attrs;
    this.Utils = Utils;
  }

  FormItemCtrl.prototype.init = function () {
    this.Utils.extend(this.item, {
      type: this.Attrs.type,
      props: {
        title: '',
        helpText: ''
      },
      config: {
        required: false
      }
    });
  };

  FormItemCtrl.prototype.deleteClicked = function() {
    this.onDelete({item: this.item, index: this.index()});
  };

})(angular);
