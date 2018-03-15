const compiler = require('vue-template-compiler');
const transpile = require('vue-template-es2015-compiler');

module.exports = function(template, isRuntimeOnly) {
    var output = "";
    if(isRuntimeOnly) {
        var compiled = compiler.compile(template);
        var staticRenderFns = compiled.staticRenderFns.map(function(fn) {
              return toFunction(fn)
            }
        );
        output = transpile(
                "_exports_.render = " + toFunction(compiled.render) + ";\n" + 
                "_exports_.staticRenderFns = [" + staticRenderFns.join(',') + "];\n"
            );
    }
    else {
        output += "_exports_.template = " + JSON.stringify(template) + ";\n";
    }
    return output;
}

function toFunction (code) {
  return (
    'function () {' + code + '}'
  )
}