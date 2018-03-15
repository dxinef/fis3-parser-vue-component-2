define(['module', 'exports'], function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    beforeCreate: [function () {
      console.log(1);
    }, function () {
      console.log(2);
    }],
    created: function created() {
      console.log('component1 created !');
    },
    data: function data() {
      return {
        message: "component1 is created!"
      };
    }
  };


  var _exports_ = exports && exports.__esModule && exports.default ? exports.default : module.exports;
  _exports_.render = function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "component1" }, [_vm._v("\n  " + _vm._s(_vm.message) + "\n")]);
  };
  _exports_.staticRenderFns = [];
  ;(function (css) {
    var tag = document.createElement("style");tag.setAttribute("type", "text/css");tag.innerHTML = css;document.head.appendChild(tag);
  })(".component1[data-v-32831559]{color:red;background:linear-gradient(to left,#000,#ccc)}.component1[data-v-32831559]:before{content:\"\";display:block;width:288px;height:163px;background:url(/img/1.png)}");

  _exports_._scopeId = "data-v-32831559";
});