const postcss = require("postcss");
const selectorParser = require('postcss-selector-parser');

// 自定义postcss plugin
const plugin = postcss.plugin('addScopeId', function(scopeid) {
    return function(root) {
        root.each(function selectorRewrite(node){
            // 类型为@rule时，遍历子集
            if(!node.selector) {
                if(node.type == "atrule" && (node.name == "media" || node.name == "support")) {
                    node.each(selectorRewrite);
                }
                return;
            }
            // 类型为rule时
            node.selector = selectorParser(function(selectors){
                selectors.each(function(selector){
                    // 查找最末一个非pseudo类型节点并插入 scopeid
                    var lastNode = null;
                    selector.each(function(n){
                        if(n.type != "pseudo") {
                            lastNode = n;
                        }
                    });
                    
                    selector.insertAfter(lastNode, selectorParser.attribute({
                      attribute: scopeid
                    }));
                })
            }).processSync(node.selector);
            
        });
    };
});

// 使用postcss处理
module.exports = function(css, scopeid) {
    return scopeid ? postcss([plugin(scopeid)]).process(css).css : css;
}