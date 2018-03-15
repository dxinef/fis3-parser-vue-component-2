define(['module', 'exports'], function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        beforeCreate: function beforeCreate() {
            console.log('component2 beforeCreate !');
        },
        created: function created() {
            console.log('component2 created !');
        },
        data: function data() {
            return {
                message: "component2 is created!"
            };
        }
    };


    var _exports_ = exports && exports.__esModule && exports.default ? exports.default : module.exports;
    _exports_.render = function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.$style.component1 }, [_vm._v("\n  " + _vm._s(_vm.message) + "\n")]);
    };
    _exports_.staticRenderFns = [];
    (function (thisArg, moduleSet) {
        if (typeof thisArg.beforeCreate == "function") {
            thisArg.beforeCreate = [thisArg.beforeCreate];
        }
        thisArg.beforeCreate = thisArg.beforeCreate.concat([function () {
            this["$style"] = moduleSet;
        }]);
    })(_exports_, { "component1": "component1-14dn0C8S" });(function (css) {
        var tag = document.createElement("style");tag.setAttribute("type", "text/css");tag.innerHTML = css;document.head.appendChild(tag);
    })(".component1-14dn0C8S{color:#00f}");
});