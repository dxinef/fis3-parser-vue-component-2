define(['module', 'exports'], function (module, exports) {
    'use strict';

    module.exports = {
        created: function created() {
            console.log('component3 created !');
        },

        data: function data() {
            return {
                message: "component3 is created!"
            };
        }
    };

    var _exports_ = exports && exports.__esModule && exports.default ? exports.default : module.exports;
    _exports_.render = function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "component1" }, [_c('span', [_vm._v(_vm._s(_vm.message))])]);
    };
    _exports_.staticRenderFns = [];
    ;(function (css) {
        var tag = document.createElement("style");tag.setAttribute("type", "text/css");tag.innerHTML = css;document.head.appendChild(tag);
    })(".component1{color:orange;-webkit-transform:scale(1.1);transform:scale(1.1)}.component1 span{font-style:italic}");
});