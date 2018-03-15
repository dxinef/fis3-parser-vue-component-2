const postcss = require("postcss");
const cssModulesPlugin = require('postcss-icss-selectors');
const genericNames = require("generic-names");

// 导出 postcss-icss-selectors 生成的:export部分并删除
var exportToken = {};
var exportTokenPlugin = postcss.plugin("test", function(){
    return function(root) {
        root.each(function(node){
            if(node.type == "rule" && node.selector == ":export") {
                exportToken = getExportToken(node);
                node.remove()
            }
        })
    }
});

function getExportToken(node) {
    var tk = {}
    node.each(function(decl){
        if(decl.type=="decl") {
            tk[decl.prop] = decl.value
        }
    });
    return tk;
}

function injectModuleStyle() {
    return "(" + (function (thisArg, moduleSet) {
        if(typeof thisArg.beforeCreate == "function") {
            thisArg.beforeCreate = [thisArg.beforeCreate];
        }
        thisArg.beforeCreate = thisArg.beforeCreate.concat([function(){
            this["$style"] = moduleSet;
        }])
    }).toString() + ")(_exports_, " + JSON.stringify(exportToken) + ")";
}

// 使用postcss处理
module.exports = function(css, conf) {
    conf = Object.assign({
        mode: "global"
    }, conf);
    conf.generateScopedName = genericNames(conf.scopedName || "[name]__[local]---[hash:base64:5]");
    var output = postcss([
            cssModulesPlugin(conf),
            exportTokenPlugin()
        ]).process(css);

    return {
        css: output.css,
        export: exportToken,
        injectModuleStyle: injectModuleStyle()
    };
}