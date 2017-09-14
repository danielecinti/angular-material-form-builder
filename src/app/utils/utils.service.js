(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .service('Utils', Utils);

  function Utils() {}

  Utils.prototype.extend = function(dest, src) {
    Object.keys(src).forEach(function(key) {
      if(!dest.hasOwnProperty(key)) {
        dest[key] = src[key];
      } else if(src[key] && typeof src[key] === 'object') {
        this.extend(dest[key], src[key]);
      }
    }.bind(this));

    return dest;
  };

})(angular);
