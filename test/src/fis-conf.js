
var fis3_parser_vue_compontent = require("../../index");

fis.match("*.js", {
    parser: [
        fis.plugin('babel-6.x', {
            plugins: ["transform-es2015-modules-amd"]
        })
    ]
});

fis.match("*.vue", {
    rExt: 'js',
    parser: [
        fis3_parser_vue_compontent,
        fis.plugin('babel-6.x', {
            plugins: ["transform-es2015-modules-amd"]
        })
    ]
});

fis.match("*.vue:less", {
    parser: [
        fis.plugin('less-2.x')
    ]
});

fis.match("{*.vue:less, *.vue:css}", {
    preprocessor : [
        fis.plugin("autoprefixer",{
            "browsers": ["last 2 versions", "> 1%"]
        })
    ],
    optimizer: [
        fis.plugin('clean-css')
    ]
});

fis.match("package*.json", {
    release: false
});