define(["Vue", "../component/test1", "../component/test2", "../component/test3"], function (_Vue, _test, _test3, _test5) {
    "use strict";

    var _Vue2 = _interopRequireDefault(_Vue);

    var _test2 = _interopRequireDefault(_test);

    var _test4 = _interopRequireDefault(_test3);

    var _test6 = _interopRequireDefault(_test5);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    console.log(_test4.default);

    new _Vue2.default({
        el: "#app",
        components: {
            "component1": _test2.default,
            "component2": _test4.default,
            "component3": _test6.default
        }
    });
});