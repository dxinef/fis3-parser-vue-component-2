/*! 
fis3-parser-vue-component-2
@author: dxinef
*/

const vueCompiler = require('vue-template-compiler');
const templateCompiler = require('./lib/templateCompiler.js');
const addScopeId = require('./lib/addScopeId.js');
const addCssModules = require('./lib/addCssModules.js');
const insertCSS = require('./lib/insertCSS.js');

module.exports = function(content, file, conf) {
    // 默认config
    conf = Object.assign({
        runtimeOnly: true,
        extractCSS: false,
        cssScopedIdPrefix: "data-v-",
        cssModulesMode: "global",
        cssModulesScopedName: "[local]-[hash:base64:8]"
    }, conf);
    // 调用 vue-template-compiler
    var vuec = vueCompiler.parseComponent(content.toString());
    // output
    var output = "module.exports = {};";

    // script
    if(vuec.script) {
        output = fis.compile.partial(vuec.script.content, file, {
            ext: vuec.script.lang || 'js',
            isJsLike: true
        });
    }
    output += "\nvar _exports_ = (exports && exports.__esModule && exports.default) ? exports.default : module.exports;\n";

    // template 处理
    if(vuec.template) {
        var tpl_str = fis.compile.partial(vuec.template.content, file, {
            ext: vuec.template.lang,
            isHtmlLike: true
        });
        output += templateCompiler(tpl_str, conf.runtimeOnly);
    }

    // style
    // 如果有scoped，则生成scopedId
    var css_scopedId = conf.cssScopedIdPrefix + fis.util.md5(file.subpath, 8),
        css_isScoped = false;
    
    var css_str = JSON.stringify( vuec.styles.map(function(style){
        if(!style.content) return "";
        var css = fis.compile.partial(style.content, file, {
              ext: style.lang || 'css',
              isCssLike: true
            });
        // css scoped 优先选用 css modules
        if(style.module) {
            var cssm = addCssModules(css, {
                mode: conf.cssModulesMode,
                scopedName: conf.cssModulesScopedName
            });
            css = cssm.css;
            output += cssm.injectModuleStyle + "\n";
        }
        else if(style.scoped) {
            css = addScopeId(css, css_scopedId);
            css_isScoped = true;
        }
        return css;
      }).join("") );

    output += insertCSS(css_str) + "\n";
    output += css_isScoped ? "_exports_._scopeId = " + JSON.stringify(css_scopedId) + ";\n" : "";

    // return
    return output;
}
